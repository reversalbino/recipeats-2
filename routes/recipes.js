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

router.get("/:id", csrfProtection, async (req, res, next) => {
    let userId = null;
    const recipeId = req.params.id;
    const recipe = await db.Recipe.findByPk(req.params.id, {
      include: [db.Ingredient, db.Instruction],
    });
    let recipeBoards;
    const reviews = await db.Review.findAll({
      where: { recipeId: req.params.id },
    });
    if (req.session.auth) {
        userId = req.session.auth.userId; //gives error when logged out --> fix this
      recipeBoards = await db.Board.findAll({
        where: { userId: req.session.auth.userId },
      });
    }
    const recipeRatings = await db.Rating.findAll({ where: { recipeId } });
    // console.log(recipeRatings);
    let sum = recipeRatings.reduce(function (sum, rating) {
      return sum + rating;
    }, 0);
    let avgratings = sum / recipeRatings.length;
    //    const instructionList = instructions.forEach(instruction => {
    //            console.log(instruction.dataValues.specification.split(','))
    //        })
    //        console.log(instructionList)
    res.render("recipe-detail", {
      recipe,
      recipeBoards,
      reviews,
      userId,
      errors,
      avgratings,
      csrfToken: req.csrfToken(),
    });
  });
  

// router.use((req, res, next) => {
//     // console.log('--------ADD RECIPE TO BOARD 1');
//     next();
// });

router.post('/:rId/boards', async (req, res, next) => {
    // console.log('--------ADD RECIPE TO BOARD 2');
    const recipeId = req.params.rId
    const boardId = req.body.addToBoard
    const recipe = await db.Recipe.findByPk(recipeId);
    const board= await db.Board.findByPk(boardId);
    console.log('--------------', recipe, recipeId);
    console.log('--------------', board, boardId);
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
        console.log('made it here');
        let addedRecipe = await db.RecipesOnBoard.create({
        recipeId,
            boardId
        });
        res.redirect(`/boards/${boardId}`)
    } else {
        errors.push(`${recipe.title} is already on ${board.name}`);
        res.redirect(`/recipes/${recipeId}`)
    }

    // console.log('BOOLEAN TEST', recipeIdList.includes(recipeId), recipeId) //TRUE
    // console.log("---------------------------------", `recipeIdList: ${recipeIdList}`)
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

router.post("/:id/:uId/:rating",requireAuth, asyncHandler(async (req, res, next) => {
    console.log("------------------edit 2-----");
    const recipeId = req.params.id;
    const userId = req.params.uId;
    const value = req.params.rating
    // const ratings = db.Rating.findAll({where: {recipeId}});
    
    if (req.session.auth) {
        let userRating = await db.Rating.findAll({where: {userId, recipeId}})
        if(userRating) {
            console.log('here  we are')
            for (let i = 0; i < userRating.length; i++) {
                await userRating[i].destroy()
            }
        }
        console.log('didnt make it')
        await db.Rating.create({value, recipeId, userId })
        const recipeRatings = await db.Rating.findAll({ where: { recipeId } });
        let sum;
        console.log(recipeRatings)
        if (recipeRatings.length === 0) {
            console.log('in IF STATEMENT')
            sum = -1
            res.json({message: 'success', avgrating: sum })
        } else {
            console.log('in ELSE STATEMENT')
            sum = recipeRatings.reduce(function (sum, rating) {
            return sum + rating.value;
        }, 0);
        console.log('SUM of ratings', sum)
        let avgratings = sum / recipeRatings.length;
        //round to nearest .5
        Math.round()
        res.json({message: 'success', avgrating: avgratings })
        }
    } else {
        res.json({message: 'failure'})
    }

  })
);





module.exports = router;
