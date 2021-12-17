'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingredients', [{ 
      name: `pints fior di latte gelato`,
       measurementUnit: `pint`,
       amount: `2`,
       recipeId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
       name: `nutella`,
       measurementUnit: `cup`,
       amount: `1`,
       recipeId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
},



{ 
      name: `Italian Plums, halved, or 8 small plums`,
       measurementUnit: ``,
       amount: `16`,
       recipeId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
},



{ 
      name: `cup cocktail onions, halved,layers separated`,
       measurementUnit: `cup`,
       amount: `⅓`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},


{ 
      name: `fresh lemon juice`,
       measurementUnit: `Tbsp.`,
       amount: `2`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},


{ 
      name: `extra-virgin olive oil, plus more for drizzling`,
       measurementUnit: `Tbsp.`,
       amount: `2`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `arugula`,
       measurementUnit: `oz.`,
       amount: `3`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `Kosher salt, freshly ground pepper`,
       measurementUnit: `pinch`,
       amount: `1`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},


{ 
      name: `Parmesan, thinly sliced`,
       measurementUnit: `oz.`,
       amount: `3`,
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `extra-virgin olive oil`,
       measurementUnit: `cup`,
       amount: `1`,
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `garlic cloves crushed`,
       measurementUnit: ``,
       amount: `6`,
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `mussels, scrubbed, debearded`,
       measurementUnit: `lb.`,
       amount: `5`,
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `dry white wine`,
       measurementUnit: `cup`,
       amount: `1`,
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `crushed red pepper flakes`,
       measurementUnit: `tsp.`,
       amount: `1/8`,
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `water`,
       measurementUnit: `cup`,
       amount: `1`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `cloves of garlic`,
       measurementUnit: ``,
       amount: `2`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: ` green asparagus - washed and dried`,
       measurementUnit: `spears`,
       amount: `10-12`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},


{ 
      name: `fresh lemon zest`,
       measurementUnit: `teaspoon`,
       amount: `1/4`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: ` fresh lemon juice`,
       measurementUnit: `tsp.`,
       amount: `1`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `fingerling potatoes, halved lengthwise`,
       measurementUnit: `lbs.`,
       amount: `1`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      name: `extra-virgin olive oil, divided`,
       measurementUnit: `tbsp.`,
       amount: `6`,
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
      name: `sweet Italian sausage`,
       measurementUnit: `links`,
       amount: `3`,
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
       name: `skin-on, bone-in chicken thighs`,
       measurementUnit:``,
       amount: `6`,
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
      name: `large onions, chopped`,
       measurementUnit: ``,
       amount: `6`,
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
      name: `large red bell pepper, chopped`,
       measurementUnit: ``,
       amount: `1/2`,
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
      name: `chopped hot, sweet pickled Peppadew peppers in brine`,
       measurementUnit: `cup`,
       amount: `1/2`,
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
  name: `crushed cinnamon sticks (preferably Ceylon)`,
   measurementUnit: `Tbsp.`,
   amount: `3`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `whole milk`,
   measurementUnit: `cups`,
   amount: `3`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `semisweet chocolate (preferably Scharffen Berger), finely chopped`,
   measurementUnit: `ounces`,
   amount: `6`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `demerara or granulated sugar`,
   measurementUnit: `Tbsp.`,
   amount: `3`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `vanilla extract`,
   measurementUnit: `tsp.`,
   amount: `3/4`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `Pinch of kosher salt`,
   measurementUnit: ``,
   amount: ``,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `ground chile de árbol or cayenne pepper, plus more for serving`,
   measurementUnit: ``,
   amount: `tsp.`,
   recipeId: 6,
   createdAt: new Date(),
   updatedAt: new Date()
},


{ 
  name: `mixed mushrooms `,
   measurementUnit: `lb `,
   amount: `1`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `avocado oil`,
   measurementUnit: `tbsp`,
   amount: `2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `fresh lime juice`,
   measurementUnit: `tbsp`,
   amount: `2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `dried oregano`,
   measurementUnit: `tbsp`,
   amount: `1`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `onion powder`,
   measurementUnit: `tbsp`,
   amount: `1`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `garlic powder`,
   measurementUnit: `tsp`,
   amount: `2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `ground cumin`,
   measurementUnit: `tsp`,
   amount: `2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `coconut sugar`,
   measurementUnit: `tsp`,
   amount: `2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `cayenne pepper`,
   measurementUnit: `tsp`,
   amount: `1/2`,
   recipeId: 7,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `chopped cilantro`,
   measurementUnit: ` cup`,
   amount: `1/4`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `kosher salt`,
   measurementUnit: ` tbsp`,
   amount: `1`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `fresh lime juice`,
   measurementUnit: `tbsp `,
   amount: `2`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `finely grated garlic`,
   measurementUnit: ` clove`,
   amount: `1`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `finely chopped serrano chile`,
   measurementUnit: ` `,
   amount: `1`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `finely chopped white onion`,
   measurementUnit: ` `,
   amount: `1/4`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `large avocados`,
   measurementUnit: ` `,
   amount: `3`,
   recipeId: 8,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `green bell pepper`,
   measurementUnit: ` `,
   amount: `1/2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `green jackfruit`,
   measurementUnit: `20oz cans `,
   amount: `2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `finely chopped celery stalks`,
   measurementUnit: ` `,
   amount: `2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},



{ 
  name: `cut`,
   measurementUnit: `onion`,
   amount: `1/2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `finely chopped garlic`,
   measurementUnit: `clove`,
   amount: `1`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `baking powder`,
   measurementUnit: `tsp`,
   amount: `1/2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `vegetable oil`,
   measurementUnit: `tbsp`,
   amount: `2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `cayenne pepper`,
   measurementUnit: `tsp`,
   amount: `1/8`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `smoked paprika`,
   measurementUnit: `tsp`,
   amount: `1/2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `chili powder`,
   measurementUnit: `tsp`,
   amount: `1/2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `diamond crystal`,
   measurementUnit: `tsp`,
   amount: `1`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `vegetable broth`,
   measurementUnit: `cups`,
   amount: `5`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `yellow grits`,
   measurementUnit: `cups`,
   amount: `2`,
   recipeId: 9,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `dark brown sugar`,
   measurementUnit: `tablespoons`,
   amount: `5`,
   recipeId: 10,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `heavy cream`,
   measurementUnit: `cup`,
   amount: `1`,
   recipeId: 10,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `vanilla bean`,
   measurementUnit: `bean`,
   amount: `1/2`,
   recipeId: 10,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `garlic cloves`,
  measurementUnit: ``,
  amount: `8`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `large or 1 medium Asian pear, peeled, cored, cut into large chunks`,
  measurementUnit: ``,
  amount: `1/2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `1\` ginger, peeled, coarsely chopped`,
  measurementUnit: `piece`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `mirin (sweet Japanese rice wine)`,
  measurementUnit: `cup`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `mirin (sweet Japanese rice wine)`,
  measurementUnit: `cup`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `soy sauce (not low-sodium)`,
  measurementUnit: `cup`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `sugar`,
  measurementUnit: `cup`,
  amount: `1/2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name:`toasted sesame oil`,
  measurementUnit: `cup`,
  amount: `1/4`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name:`freshly ground black pepper`,
  measurementUnit: `tsp.`,
  amount: `1/2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name:`¼\`–½\`-thick crosscut bone-in beef short ribs`,
  measurementUnit: `2 1/2`,
  amount: `2 1/2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `scallions, cut into 3\` pieces`,
  measurementUnit: `bunches`,
  amount: `2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `apple cider vinegar`,
  measurementUnit: `Tbsp.`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `mirin (sweet Japanese rice wine)`,
  measurementUnit: `Tbsp.`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `gochugaru (coarse Korean red pepper powder)`,
  measurementUnit: `tsp.`,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `sugar`,
  measurementUnit: `tsp.`,
  amount: `1/2`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Kosher salt`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Vegetable oil (for grill)`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Toasted sesame seeds and thinly sliced scallions (for serving)`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `large head of green leaf, red leaf, or Bibb lettuce, leaves separated, torn if large`,
  measurementUnit: ``,
  amount: `1`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `perilla leaves (optional)`,
  measurementUnit: ``,
  amount: `30`,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Cooked short-grain rice (for serving)`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 11,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `snow peas or sugar snap peas`,
  measurementUnit: `oz.`,
  amount: `8`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Persian cucumbers (optional)`,
  measurementUnit: ``,
  amount: `2`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `kosher salt, plus more`,
  measurementUnit: `tsp.`,
  amount: `1 1/2`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `unseasoned rice vinegar; plus more for cucumbers (optional)`,
  measurementUnit: `tsp.`,
  amount: `2`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `scallions`,
  measurementUnit: ``,
  amount: `4`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `vegetable oil, divided`,
  measurementUnit: `Tbsp.`,
  amount: `4`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `toasted sesame oil, divided`,
  measurementUnit: `tsp.`,
  amount: `6`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `cooked short-grain white or brown rice, chilled overnight`,
  measurementUnit: `cups`,
  amount: `4`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `gochujang (Korean hot pepper paste) or Sriracha`,
  measurementUnit: `Tbsp.`,
  amount: `2`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `soy sauce`,
  measurementUnit: `Tbsp.`,
  amount: `2 1/3`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `honey`,
  measurementUnit: `tsp.`,
  amount: `2`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `fresh (or frozen) peas`,
  measurementUnit: `cup`,
  amount: `1`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `large eggs`,
  measurementUnit: ``,
  amount: `4`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `pea shoots (tendrils), bean sprouts, watercress, or baby arugula (optional)`,
  measurementUnit: `cup`,
  amount: `1`,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Radish and/or carrot pickles (optional)`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `Radish and/or carrot pickles (optional)`,
  measurementUnit: ``,
  amount: ``,
  recipeId: 12,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `short-grain white rice`,
  measurementUnit: `cups`,
  amount: `2`,
  recipeId: 13,
  createdAt: new Date(),
  updatedAt: new Date()
},

{ 
 name: `all-purpose flour, plus more for surface`,
  measurementUnit: `cups`,
  amount: `2`,
  recipeId: 14,
  createdAt: new Date(),
  updatedAt: new Date()
},
{ 
  name: `toasted sesame oil`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 14,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `chicken fat, warmed, or vegetable oil`,
   measurementUnit: `cup`,
   amount: `1`,
   recipeId: 14,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `bunches scallions, thinly sliced`,
   measurementUnit: `bunches`,
   amount: `2`,
   recipeId: 14,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `vegetable oil, divided, plus more for brushing`,
   measurementUnit: `Tbsp`,
   amount: `2`,
   recipeId: 14,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `scallions`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `vegetable oil`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `gochujang (Korean hot pepper paste)`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `chopped kimchi with liquid`,
   measurementUnit: `cup`,
   amount: `1`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `French green or brown lentils`,
   measurementUnit: `cup`,
   amount: `1`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `large eggs`,
   measurementUnit: ``,
   amount: `4`,
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `stone-ground white rice flour`,
   measurementUnit: `cup`,
   amount: `3/4`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `cornstarch`,
   measurementUnit: `Tbsp`,
   amount: `1/2`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `kosher salt`,
   measurementUnit: `tsp.`,
   amount: `1/2`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `ground turmeric`,
   measurementUnit: `tsp.`,
   amount: `1/4`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `unsweetened coconut milk`,
   measurementUnit: `cup.`,
   amount: `1/3`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `serrano chiles, thinly sliced`,
   measurementUnit: `pieces`,
   amount: `1-2`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `garlic, finely chopped`,
   measurementUnit: `clove`,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `fish sauce`,
   measurementUnit: `Tbsp.`,
   amount: `3`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `fresh lime juice`,
   measurementUnit: `Tbsp.`,
   amount: `3`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `pure maple syrup`,
   measurementUnit: `Tbsp.`,
   amount: `2`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `large or extra-large shrimp, peeled, deveined, halved crosswise`,
   measurementUnit: `lb.`,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `medium red cabbage, core removed, thinly sliced`,
   measurementUnit: `head`,
   amount: `1/2`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `small yellow or red onion, thinly sliced`,
   measurementUnit: `.`,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `sugar snap peas, strings removed, trimmed`,
   measurementUnit:`oz.`,
   amount: `8`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `vegetable oil, divided`,
   measurementUnit:`Tbsp.`,
   amount: `8-10`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `kosher salt`,
   measurementUnit:`tsp.`,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `large lettuce (such as butter or red or green leaf), leaves separated`,
   measurementUnit:``,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `large handful mint or basil leaves`,
   measurementUnit:``,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `large handful cilantro leaves with tender stems`,
   measurementUnit:``,
   amount: `1`,
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `sugar`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `fish sauce`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `fresh lime juice`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `small fennel bulb, thinly sliced`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `Persian or kirby cucumber, halved lengthwise, sliced into half-moons`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `Hungarian wax, Jimmy Nardello, or green bell pepper, seeds and ribs removed, sliced`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `small shallot, thinly sliced`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name: `coarsely chopped mixed tender herbs (such as dill, cilantro, and/or Thai basil)`,
   measurementUnit: `cups`,
   amount: `2`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name:`freshly ground pepper`,
   measurementUnit: `tsp.`,
   amount: `1/2`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  name:`crushed salted dry-roasted peanuts`,
   measurementUnit: `cup`,
   amount: `1/3`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  name: `store-bought fried shallots`,
   measurementUnit: `cup`,
   amount: `1/3`,
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `sugar`,
   measurementUnit: `Tbsp.`,
   amount: `2`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `red or green Thai chiles, thinly sliced`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `garlic`,
   measurementUnit: `clove`,
   amount: `1`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `juice of 1 lime`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},

{
  name: `fish sauce`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `13.5-oz. can unsweetened coconut milk`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `kosher salt, plus more`,
   measurementUnit: `tsp.`,
   amount: `1`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `large shrimp, peeled, deveined`,
   measurementUnit: `oz.`,
   amount: `8`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `head small green cabbage, shredded (about 5 cups)`,
   measurementUnit: ``,
   amount: `1/2`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `medium carrots, peeled, shaved`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `medium red onion, thinly sliced`,
   measurementUnit: ``,
   amount: `1/2`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `coarsely torn cilantro`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `coarsely torn mint`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `store-bought fried shallots`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `crushed dry-roasted peanuts`,
   measurementUnit: `cup`,
   amount: `1/4`,
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `juice of limes`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `fish sauce`,
   measurementUnit: `Tbsp.`,
   amount: `3`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `seasoned rice vinegar`,
   measurementUnit: `Tbsp.`,
   amount: `2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},

{
  name: `light or dark brown sugar`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `garlic cloves, finely chopped`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `semi-pearled farro`,
   measurementUnit: `cup`,
   amount: `1/2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `Diamond Crystal or ½ tsp. Morton kosher salt, plus more`,
   measurementUnit: `tsp.`,
   amount: `1`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `husked corn`,
   measurementUnit: `ears`,
   amount: `3`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `red plums (such as satsuma or Santa Rosa), cut into wedges`,
   measurementUnit: ``,
   amount: `4`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `red or green Thai chiles, thinly sliced`,
   measurementUnit: ``,
   amount: `2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `chopped mint`,
   measurementUnit: `cup`,
   amount: `1/3`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `chopped Thai basil or cilantro, plus leaves for serving`,
   measurementUnit: `cup`,
   amount: `1/2`,
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},

{
  name: `Persian cucumbers`,
   measurementUnit: ``,
   amount: `4`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `pineapple`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `2 piece ginger`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `garlic`,
   measurementUnit: `cloves`,
   amount: `4-6`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `ground turmeric`,
   measurementUnit: `tsp.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
   name: `fish sauce, divided`,
   measurementUnit: `Tbsp.`,
   amount: `4`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `crushed red pepper flakes, plus more`,
   measurementUnit: `tsp.`,
   amount: `1/2`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `kosher salt`,
   measurementUnit: `tsp.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `white fish fillets (such as red snapper, hake, halibut, or tilapia), preferably skin-on`,
   measurementUnit: `lb.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `sugar`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `lime`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `vegetable oil`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `rice paper rounds`,
   measurementUnit: `Tbsp.`,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  name: `Tender lettuce and tender herbs for serving`,
   measurementUnit: ``,
   amount: `1`,
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
},




], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ingredients', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
