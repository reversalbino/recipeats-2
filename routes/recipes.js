const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models'); //db.Model
const { loginUser, logoutUser, requireAuth } = require('../auth');
const { application } = require('express');
//test
//test

const router = express.Router();
let errors = [];


router.get('/', async (req, res, next) => {
    const recipes = await db.Recipe.findAll();
    res.render('recipes', { recipes })
})

router.get('/:id', csrfProtection, async (req, res, next) => {
    const userId = req.session.auth.userId
    const recipe = await db.Recipe.findByPk(req.params.id, {
        include: [db.Ingredient, db.Instruction]
    });
 let recipeBoards;
    const reviews = await db.Review.findAll({
        where: {recipeId: req.params.id}
    });
    if(req.session.auth) {
        recipeBoards = await db.Board.findAll({
            where: {userId: req.session.auth.userId}
        })
    }
    //    const instructionList = instructions.forEach(instruction => {
        //            console.log(instruction.dataValues.specification.split(','))
        //        })
        //        console.log(instructionList)
        res.render('recipe-detail', { recipe, recipeBoards, reviews, userId, csrfToken: req.csrfToken()})
});

// router.use((req, res, next) => {
//     // console.log('--------ADD RECIPE TO BOARD 1');
//     next();
// });

router.post('/:rId/boards', async (req, res, next) => {
    // console.log('--------ADD RECIPE TO BOARD 2');
    const recipeId = req.params.rId
    const boardId = req.body.addToBoard
    //NOTE query all recipes on a specific board that belong to a user


    const recipesOnSpecificBoard = await db.RecipesOnBoard.findAll({
        where: {
            boardId
        }
    });
   const recipeIdList = recipesOnSpecificBoard.map(recipe => {
        return recipe.recipeId
    })

    if(!recipeIdList.includes(parseInt(recipeId, 10))) {
        let addedRecipe = await db.RecipesOnBoard.create({
        recipeId,
            boardId
        });
        errors = []
    } else {
        errors.push('Recipe is already on this board');

    }

    // console.log('BOOLEAN TEST', recipeIdList.includes(recipeId), recipeId) //TRUE
    // console.log("---------------------------------", `recipeIdList: ${recipeIdList}`)
    res.redirect(`/recipes/${recipeId}`)
})


// router.post('/:id/review/add', requireAuth, csrfProtection, asyncHandler(async(req, res, next) => {
//     console.log('------------------review 2-----', req.body)
//     const { _csrf, reviewbody } = req.body
//     // console.log(reviewbody);
//     const userId = req.session.auth.userId
//     db.Review.create({reviewText: reviewbody, recipeId: req.params.id, userId})
//     res.redirect(`/recipes/${req.params.id}`)
// }));

router.post('/:id/review/add', requireAuth, asyncHandler(async(req, res, next) => {
    console.log('------------------TESTING FOR CREATE REVIEW-----', req.body)
    const { reviewbody } = req.body
    const userId = req.session.auth.userId

    db.Review.create({
        reviewText: reviewbody,
        recipeId: req.params.id,
        userId
    })
    res.json({message: 'Success', userId: userId})
}));

router.use((req, res, next) => {
    console.log('------------------edit 1-----');
    next();
})

router.post('/reviews/:id/edit', requireAuth, asyncHandler(async(req, res, next) => {
    const {theReviewText} = req.body;
    console.log('==================================', theReviewText, '====================================');
    const reviewToUpdate = await db.Review.findByPk(req.params.id);
    if (reviewToUpdate) {
        await reviewToUpdate.update({
            reviewText: theReviewText
        });
        res.json({message: 'Success'})
    } else {
        res.json({message: 'Failure'})
    }
}));

router.delete('/reviews/:id/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const userId = req.session.auth.userId
    reviewId = req.params.id
    const reviewToDelete = await db.Review.findByPk(req.params.id);
    if (reviewToDelete) {
        await reviewToDelete.destroy();
        res.json({message: 'Success'})
        // res.redirect(`/recipes/${reviewToDelete.recipeId}`)
    } else {
        res.json({message: 'Failed'})
    }
    // res.send({userId, reviewId})
    // res.send(`SUCCESFULLY DELETED`)
    //  console.log(reviewToDelete)
    //  .destroy();

}));




module.exports = router;
