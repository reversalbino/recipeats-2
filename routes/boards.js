const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models'); //db.Model
const { requireAuth } = require('../auth');
const res = require('express/lib/response');
//test
const router = express.Router();

router.get('/', requireAuth, asyncHandler(async(req, res) => {
    //display all user boards
    const {userId} = req.session.auth
    const boards = await db.Board.findAll({where: {userId}});
    res.render('boards', {title: 'Recipeats | Boards', boards})
}));

let errors = []

router.get('/new', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
    res.render('new-board', { title: 'Recipeats | New Board', csrfToken: req.csrfToken(), errors });
}));

const boardValidator = [
    check('boardName')
    .exists({checkFalsy: true})
    .withMessage('Please provide a board name')
];

router.post('/new', requireAuth, boardValidator, csrfProtection, asyncHandler(async(req, res) => {
    const name = req.body.boardName;
    const userId = req.session.auth.userId
    let board = db.Board.build({
        name,
        userId
    });

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()) {
        await board.save();
        res.redirect(`/boards`)
    }
    else {
        errors = validatorErrors.array().map((error) => error.msg);
        res.render('new-board', {
            title: 'Recipeats | New Board', csrfToken: req.csrfToken(), errors
        });
        errors = [];
    }
}));

router.get('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const boardId = req.params.id
    // console.log('----BID-----', boardId);
    let recipesOnSpecificBoard = await db.Board.findByPk(boardId,{
        include: [ db.Recipe, db.Board ]
    });
    console.log('================', recipesOnSpecificBoard.dataValues.Recipes[0]);
    // db.RecipesOnBoard.findAll();

    // console.log(recipes[0].Recipes);
    res.render('board', { title: 'Recipeats | Board', recipesOnSpecificBoard, boardId })
}));

router.use((req, res, next) => {
    console.log('------------DELETE BOARD 1---------------')
    next();
});

router.post('/delete/:id', requireAuth, asyncHandler(async(req, res) => {
    console.log('-----------DELETE BOARD 2----------')
    let boardId = req.params.id;
    let board = await db.Board.findByPk(boardId);

    await db.RecipesOnBoard.findAll({
        where: { boardId }
    })
    .then(recipeList => {
        recipeList.forEach(recipe => {
            recipe.destroy();
        });
    });


    await board.destroy();
    res.redirect('/boards');
}));

router.post('/:bId/:rId/delete', requireAuth, asyncHandler(async(req, res) => {
    let boardId = req.params.bId, recipeId = req.params.rId;

    let recipeToDelete = await db.RecipesOnBoard.findOne({
        where: {boardId, recipeId}
    });

    await recipeToDelete.destroy();
    res.redirect(`/boards/${boardId}`);
}));

// console.log('----recipes-----', recipes);
//     res.render('board', {title: 'Recipeats | Board', recipes})


module.exports = router;
