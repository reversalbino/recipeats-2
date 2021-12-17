`use strict`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Instructions`, [{ 
      specification: [ 
`Place a scoop of gelato into each chilled bowl.`,
`Spoon a dollop of Nutella over each and top with another scoop or two of gelato. Top as desired.`  ],
       recipeId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      specification: [ 
`Toss plums, cocktail onions, lemon juice, and 2 Tbsp. oil in a large bowl.`,
`Add arugula, season with salt and pepper, and toss again. Transfer to a platter; top with Parmesan and drizzle with more oil.`  ],
       recipeId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      specification: [ 
`Step 1
Heat oil in large heavy pot over medium. Cook garlic, stirring often, until golden, about 2 minutes. Add parsley, mussels, wine, and red pepper flakes; stir to coat. Cover and cook, stirring halfway through, until mussels open, about 4 minutes. Uncover and transfer opened mussels to a large bowl with a slotted spoon. If any mussels are still closed, cover pot again and cook until opened, about 1 minute more. Transfer open mussels to bowl; discard any that remain closed. Chill mussels until ready to assemble. Strain cooking liquid; discard solids. Measure out 3 cups mussel stock; add water if short. Reserve pot.`, 
`Heat oil in reserved pot over medium-low. Cook pepperoni, stirring often, until some fat has cooked out and oil is bright red, about 4 minutes. Add anchovy, tomato paste, and oregano. Cook, stirring often, until tomato paste darkens slightly, about 3 minutes. Add onion and garlic and cook, still stirring often, until onion is soft, about 4 minutes.

`,
`Increase heat to medium-high and add wine. Cook, stirring, until wine is evaporated, about 3 minutes. Stir in rice and reserved mussel stock. Reduce heat to medium-low and cook, uncovered, stirring often, until stock is absorbed and rice is al dente, 20–25 minutes.`,
`Remove pot from heat and cover with lid; let stand 20 minutes. Uncover and stir in lemon juice and sugar. Chill pepperoni rice at least 30 minutes.`,
`Place racks in upper and lower thirds of oven; preheat to 400°. Line 2 large rimmed baking sheets with lightly crumpled foil (to help keep mussel shells upright). Remove top shells from mussels (pry apart and twist at the hinge). Using a paring knife, loosen meat from bottom shells. Spoon 1 Tbsp. pepperoni rice over each mussel and shape into a mound. Divide mussels, stuffed side up, between baking sheets. Bake until warmed through, 5–8 minutes. Remove from oven; heat broiler.`,
`One baking sheet at a time, broil mussels on upper rack until tops are golden brown, 5–7 minutes (watch closely; broilers vary dramatically in power).`,
`Transfer mussels to a platter and drizzle with aioli. Serve with lemon wedges for squeezing over.`  ],
       recipeId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      specification: [ 
`Make the chili oil: place all of the spices in a small bowl. Heat the oil in a small pan over medium-high heat. Once hot, carefully pour over the spices, mix and set aside. `,
`Char the asparagus: Cut the asparagus on the bias in 2 inch pieces. Heat a large pan over medium-high heat. Add in the oil, and once hot, add in the asparagus. Using tongs, sauté in the oil. After 1 minute, add in a big pinch of kosher salt and ground black pepper. After about 5-7 minutes, once the asparagus is just fork tender, add in fresh lemon juice, toss and remove from heat. Top with fresh lemon zest. `,
`Make polenta: In a large pot, add 1 cup water with the 2 cloves of garlic over medium-high heat, and bring to a boil. Once boiling, use tongs or a slotted spoon to quickly remove the garlic cloves and slowly pour in the polenta while whisking. Once all the polenta is in, keep whisking until the mixture is smooth with no large lumps. Reduce heat to low, so the mixture is just simmering. Whisk occasionally over the course of 5 minutes until the polenta is swollen and thickening. Then add in the oat milk, stir, cover and cook for about 20-25 minutes until the polenta is soft and cooked up. Remove from the heat and add in a big pinch of kosher salt, freshly ground pepper, the sour cream and 1 tbsp of the vegan butter. Whisk in until smooth and taste to adjust for salt. `,
`Plating: Pour the polenta into a large serving dish. Top with remaining 1 tbsp of vegan butter, asparagus and drizzle on chili oil. Garnish with toasted pine nuts and microgreens (if using). Serve immediately.`  ],
       recipeId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
},

{ 
      specification: [ 
`Arrange racks in upper and lower thirds of oven; preheat to 450°. Toss potatoes with 3 Tbsp. oil on a rimmed baking sheet; season with salt and pepper. Arrange cut side down and roast on lower rack until tender and cut sides are browned, 20–30 minutes; set aside.`,
`Meanwhile, heat remaining 3 Tbsp. oil in a large skillet over medium-high. Cook sausages, turning occasionally, until browned on all sides, 6–8 minutes (they will not be fully cooked). Transfer to a plate.`,
`Season chicken on both sides with salt and pepper. Cook in same skillet, turning occasionally, until golden brown on both sides, 8–10 minutes (they will also be undercooked). Transfer to plate with sausage.`,
`Cook onions, bell pepper, and garlic in same skillet over medium-high heat, stirring occasionally and scraping bottom of pan, until tender and beginning to brown, 10–12 minutes. Add wine and cook, stirring occasionally, until reduced and you can no longer smell the alcohol, about 8 minutes. Add broth, peppers, vinegar, and rosemary and bring to a boil; cook until slightly reduced, about 5 minutes. Nestle chicken into onion mixture, then transfer skillet to upper rack of oven and roast chicken 10 minutes. Add sausages to skillet, pushing them into onion mixture, and continue to roast until chicken is cooked through and an instant-read thermometer inserted into thickest part of thigh registers 165°, 5–10 minutes.`,
`Top with parsley and serve with roasted potatoes alongside.`  ],
       recipeId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
  specification: [ 
`Scrape vanilla seeds into a small saucepan; discard pod. Add cream, brown sugar, cocoa powder, espresso powder, and salt and cook over medium-high heat, whisking occasionally, until sugar is dissolved, no lumps of cocoa powder remain, and mixture is simmering, about 4 minutes. Remove from heat and add chocolate, stirring to melt. Keep warm over very low heat until ready to serve.`,
`Fit pastry bag with star tip. Whisk cinnamon and 1 cup organic sugar in a medium bowl; set aside.`,`Bring vanilla bean, milk, butter, salt, remaining 1 Tbsp. organic sugar, and ½ cup water to a simmer in a medium saucepan over medium-high heat. Using a wooden spoon, add flour in one go, and vigorously mix until dough comes together, about 30 seconds. Transfer to the bowl of a stand mixer or a large bowl; discard vanilla bean. Let cool slightly.`, `Using a stand mixer fitted with the paddle attachment on medium-low speed, add eggs to dough, one at a time, making sure to incorporate each egg before adding the next (alternatively, stir vigorously with a wooden spoon). Dough will look broken at first; continue to beat, scraping bowl occasionally, until dough is smooth, glossy, and somewhat stretchy (pull off a small piece of dough and stretch it—it should not break). Spoon dough into prepared pastry bag.`, `Pour oil into a large pot to come halfway up the sides. Fit pot with thermometer and heat over medium-high until thermometer registers 350 degrees. Holding bag at an angle so tip is a few inches above surface of oil, squeeze out dough, moving the bag as you squeeze so dough is piped in a six inch length into oil. Using a paring knife, cut off dough at the tip to release into oil. Repeat process to make 4 more dough lengths. Fry churros, turning once and adjusting heat as needed to maintain oil temperature, until golden brown on all sides, 2–3 minutes per side. Transfer to a paper towel-lined baking sheet. Repeat with remaining dough.​​`, `Toss warm churros in reserved cinnamon-sugar mixture. Serve with warm chocolate sauce and hot chocolate, if desired.`],
   recipeId: 10,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  specification: [`Drain jackfruit in a colander and rinse well. Transfer to a kitchen towel, gather ends, and squeeze tightly to remove as much liquid as possible. Sort through jackfruit for pieces with a fibrous core; cut away and discard cores. Pull jackfruit into small pieces with 2 forks. Return to kitchen towel; squeeze again to remove any remaining liquid. Set aside.`,`Drain jackfruit in a colander and rinse well. Transfer to a kitchen towel, gather ends, and squeeze tightly to remove as much liquid as possible. Sort through jackfruit for pieces with a fibrous core; cut away and discard cores. Pull jackfruit into small pieces with 2 forks. Return to kitchen towel; squeeze again to remove any remaining liquid. Set aside.`,`Place corn husks in a large bowl and pour in warm water to cover. Weigh down with a plate to keep husks submerged. Let soak while you cook the grits.`,`Drain grits in a fine-mesh sieve. Bring broth to a boil in a medium saucepan; reduce heat to low. Whisk grits, salt, chili powder, paprika, and cayenne into broth. Simmer, whisking every few minutes to avoid clumping and scraping bottom of pan to prevent sticking, until liquid is absorbed and grits are tender, 15–20 minutes.`, `Scrape grits into a medium bowl, stir in oil and baking powder, and chill until cool, about 30 minutes. (Cooled grits should have a spreadable consistency similar to fresh ricotta.)`, `Spread out a husk on a work surface with the wide end farthest from you. Spread ½ cup grits on center of husk, leaving 2in at sides, 3in at bottom, and 1in at top. Place ¼ cup filling in center of grits and form into a log down middle of tamale. Fold long sides of husk together, gently pressing grits to seal in filling, then fold over to one side. Fold narrow end under tamale and transfer tamale to a large plate. Repeat process with remaining filling and grits.`, `Fit a stockpot with a metal steamer insert and pour in water to reach bottom of steamer basket. Bring water to a boil, then reduce heat to low. Place tamales upright in basket with open end facing up. Cover pot and steam tamales, checking every 20 minutes and adding more water if needed, 50 minutes.`, `Fit a stockpot with a metal steamer insert and pour in water to reach bottom of steamer basket. Bring water to a boil, then reduce heat to low. Place tamales upright in basket with open end facing up. Cover pot and steam tamales, checking every 20 minutes and adding more water if needed, 50 minutes.`, `While the tamales are resting, cook garlic, oil, and coriander in a small skillet over medium heat until fragrant, about 1 minute. Let cool, then transfer to a blender and add jalapeño, lemon juice, 1 cup cilantro, and ¼ cup water. Blend until smooth; season with salt.`, `Transfer tamales to a platter; open up. Drizzle with sauce; top with cilantro sprigs. Serve with pickled cauliflower.`],
  recipeId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
  },
  {
    specification: [`​​Smash avocados with a potato masher or fork in a medium bowl or with a molcajete (a Mexican mortar and pestle) until very coarsely mashed. Mix in onion, chile, garlic, lime juice, salt, and ¼ cup cilantro. Taste and add more lime juice, if desired. Top with pepitas (if using) and more cilantro; serve with chips alongside.`],
    recipeId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    {
    specification: [`​​Place a rack in middle of oven; preheat to 400°. Toss mushrooms, oil, lime juice, oregano, onion powder, garlic powder, cumin, coconut sugar, salt, and cayenne in a medium bowl until mushrooms are well coated. Spread mushrooms out in a single layer on a parchment-lined baking sheet and roast until golden brown and crisp, 20–25 minutes.`, `Build tacos with tortillas, mushrooms, salsa, vegan sour cream (if using), radishes, tomatoes, and cilantro. Serve with lime wedges for squeezing over.`],
    recipeId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    { 
      specification: [`Bring milk and cinnamon to a simmer in a medium saucepan over medium-low heat, whisking occasionally and making sure milk does not boil, until cinnamon is floral and fragrant, about 10 minutes. Whisk in chocolate, sugar, vanilla, salt, and ¼ tsp. ground chile and cook, whisking frequently, until mixture is smooth and creamy and chocolate is melted, about 5 minutes.`, `Divide hot chocolate among mugs. Top with whipped cream and dust with cocoa powder.` ],
       recipeId: 6,
       createdAt: new Date(),
       updatedAt: new Date()
},
{ 
  specification: [ `Blitz garlic, Asian pear, and ginger to a smooth purée in a food processor or blender. (Or, finely grate garlic and ginger; grate Asian pear on large holes of a box grater.) Transfer purée to a medium bowl. Whisk in mirin, soy sauce, sugar, sesame oil, black pepper, and ½ cup water until sugar is dissolved.`, `Arrange short ribs in a resealable plastic bag or baking dish. Pour marinade over and turn ribs to coat. Seal or cover and chill at least 4 hours and up to 12 hours.`, `Slice scallion pieces lengthwise into thin strips. Soak in a mesh strainer set inside a large bowl of ice water 10 minutes to remove some sharp bite and allow time to curl slightly. Swish scallions around with your hands to remove any sliminess, then drain well and pat dry. Wipe out bowl; return scallions to bowl.`, `Whisk vinegar, mirin, gochugaru, and sugar in a small bowl until sugar is dissolved; season with salt. Add dressing to scallions and toss to coat.`, `Prepare a grill for medium-high heat; oil grate. Remove short ribs from marinade and grill until well browned and slightly charred around edges, about 3 minutes per side. Transfer to a platter and top with sesame seeds and sliced scallions. Let rest 5 minutes, then cut meat into bite-size pieces with kitchen shears.`, `Arrange lettuce and perilla leaves (if using) on a second platter. Scoop rice into individual bowls.`, `To eat, stack a palm-size lettuce leaf and a perilla leaf in your hand. Top with rice, meat, and scallion salad and wrap into a tight bundle. Eat in one bite and repeat!`],
   recipeId: 11,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [ `Prep your vegetables: Trim ends from 8 oz. snow peas, then cut in half on a diagonal (this is just for looks, you can also cut them in half straight across!). If using snap peas, trim ends, remove fibrous string, then slice into pea-sized pieces or thinly on the bias. Set aside. `,  `If using, thinly slice 2 Persian cucumbers and place in a small bowl. Season with a fat pinch of kosher salt, then massage cucumbers with your hands, gently at first, then more aggressively as you go, just to soften. Pour off any excess liquid, then add a splash of unseasoned rice vinegar. Taste and season with more salt and vinegar if needed. (You can also add a pinch of sugar or a bit of honey to taste.) Set aside.`, `Trim roots from 4 scallions; discard. Thinly slice scallions crosswise. Set aside a handful of the dark green tops for serving. `, `Now you are ready to crisp the rice. Heat 2 Tbsp. vegetable oil and 2 tsp. toasted sesame oil in a large nonstick skillet over medium-high. Add remaining scallions and cook, stirring often with a heatproof rubber spatula, until starting to soften, about 3 minutes. `, `Scrape scallions with oil into a large bowl; reserve skillet. Add 4 cups cooked short-grain white or brown rice, chilled overnight, and 1½ tsp. kosher salt to scallions and mix well with spatula, making sure there are no lumps of rice remaining. (It is tricky to do this step in the pan without rice flying everywhere!) `, `Heat 1 Tbsp. vegetable oil in reserved skillet. As soon as oil is hot, add rice mixture and press firmly into an even, compact layer. Cook until deeply browned underneath, 6–8 minutes. `,  `While the rice mixture is cooking, make the dressing. Whisk together 2 Tbsp. gochujang, 2 Tbp. soy sauce, 2 tsp. honey, remaining 4 tsp. toasted sesame oil, remaining 2 tsp. unseasoned rice vinegar, and 1–2 Tbsp. water (if using Sriracha, omit the water) in a small bowl. Taste for heat: You can add more gochujang if it is not spicy enough or more water if it is too fiery. Set dressing aside.`,  `When the rice is finished, divide among bowls and set aside (if you would like, cover them with a kitchen towel to keep warm). `,`Combine 1 cup fresh (or frozen) peas and reserved snow peas in the same skillet (no need to wipe out) and cook over medium-high, stirring, until just starting to sizzle, about 1 minute. Add ¼ cup water and cook, stirring often, until peas are bright green and crisp-tender, about 2 minutes. Transfer to a medium bowl and season with salt. `, `You are almost done! Time to fry the eggs and assemble the bowls. Heat 1½ tsp. vegetable oil in same skillet and heat over medium-high. Crack 2 large eggs into each side of skillet and cook until eggs are setting underneath but whites are still clear, about 1 minute. Sprinkle ¼ tsp. soy sauce over each egg, then continue to cook, basting whites with oil (tilt the pan so that it pools), until completely set and opaque, about 1 minute more. Transfer eggs to serving bowls and repeat process with remaining 1½ tsp. vegetable oil, 2 large eggs, and ½ tsp. soy sauce. `,  `Making individual piles, evenly distribute pea mixture, reserved cucumbers, 1 cup pea shoots (tendrils; if using), and some radish and/or carrot pickles (if using) among reserved bowls of rice, arranging on top of rice. Top with reserved sliced scallion tops and drizzle generously with reserved dressing. Serve remaining dressing alongside. Mix together before eating! `],
   recipeId:  12,
   createdAt: new Date(),
   updatedAt: new Date()
},

{ 
  specification: [`Rinse rice in a sieve set in a bowl, changing water as needed, until water is just slightly milky.`, `Bring rice and 2 cups water to a boil in a medium saucepan. Reduce heat, cover, and simmer until water is absorbed and rice is tender, 8–10 minutes. Remove from heat. let stand 10 minutes.`],
   recipeId: 13,
   createdAt: new Date(),
   updatedAt: new Date()
},

{
  specification: [`Rinse rice in a sieve set in a bowl, changing water as needed, until water is just slightly milky. `, `Bring rice and 2 cups water to a boil in a medium saucepan. Reduce heat, cover, and simmer until water is absorbed and rice is tender, 8–10 minutes. Remove from heat; let stand 10 minutes.Whisk 2½ cups flour and 1 tsp. salt in a large bowl. Mix in sesame oil and 1 cup boiling water with a wooden spoon until a shaggy dough forms.` ,
`Turn out dough onto a lightly floured surface and knead, adding flour as needed to prevent sticking, until dough is smooth, about 5 minutes. Cover. let rest at room temperature 1 hour.`,
`Divide dough into 8 pieces.Working with one at a time, roll out on a lightly floured work surface as thin as possible(each should be approximately 10 in diameter). Brush about 2 tsp. chicken fat on dough and top with about ¼ cup scallions; season with salt. Roll dough away from you (like a jelly roll) into a thin cylinder, then, starting at 1 end, wind roll onto itself to create a coil (like a cinnamon roll). Cover and repeat with remaining dough. Let rest at room temperature 15 minutes.`,
`Working with 1 coil at a time, roll out on a lightly floured surface to a 5 round (keep other coils covered). Repeat with remaining dough and stack as you go, separating with parchment or lightly greased foil brushed with vegetable oil.`
],
      recipeId: `14 `,
      createdAt: new Date(),
      updatedAt: new Date()

},


{ 
  specification: [
`Remove dark green tops from scallions and thinly slice; set aside for serving. Thinly slice remaining white and pale-green parts. Heat oil in a large saucepan over medium-high. Cook white and pale-green parts of scallions, onion, and garlic, stirring often, until softened and starting to brown, about 4 minutes. Add gochujang and cook, stirring often and reducing heat as needed to prevent burning, until very fragrant and slightly darkened in color, about 2 minutes. Add kimchi, gochugaru, and sugar and cook, stirring, until kimchi is slightly softened and translucent, about 2 minutes. Add lentils, broth, and 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt and stir to combine. Bring stew to a boil, then reduce heat and cover. Simmer, adding a splash of water if needed to loosen, until lentils are just barely tender, 20–25 minutes.`,
`Uncover pan. Crack an egg into a small bowl, then gently slide into stew. Repeat with remaining eggs, leaving some space around each. Cover pan and simmer until egg whites are set but yolks are still runny, about 3 minutes.`,
`Ladle stew into bowls, making sure to include an egg in each, and top with reserved scallion tops.`
],
   recipeId: 15,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [
`Whisk rice flour, cornstarch, salt, and turmeric in a medium bowl to combine. Whisk in 1½ cups of the hottest water from your tap (aim for about 120°) followed by coconut milk. Let batter sit, uncovered, until thickened to the consistency of half-and-half (it will be slightly gritty from the flour), 30–45 minutes. If batter is too thick, whisk in about 1 Tbsp. water to get it to the right consistency. `,
` Do ahead: Batter can be made 2 days ahead. Cover and chill. Bring to room temperature and whisk well before using.`,
`Whisk chiles (use 1 or 2 depending on how hot your chiles are and your own preference for heat), garlic, fish sauce, lime juice, sugar, and ½ cup warm water in a small bowl until sugar is dissolved. Taste and add more fish sauce, lime juice, and/or sugar as needed until sauce tastes balanced—not bitter or too tart.`,
`Do ahead: Sauce can be made 8 hours ahead. Store tightly covered at room temperature.`,
`Place shrimp, cabbage, onion, and sugar snap peas in individual bowls and set near stovetop along with oil, some salt, and batter.`,
`Arrange lettuce and herbs on 1–2 plates. Divide sauce among a few small bowls for dipping. Set aside for serving.`,
`Preheat oven to warm. Set a wire rack inside a rimmed baking sheet; set aside. Heat 1 Tbsp. oil in a medium nonstick or cast-iron skillet over medium-high until very hot and shimmering. Add a small handful of shrimp, onion, and sugar snap peas to skillet (you are going to make 6 crepes total, so eyeball it accordingly); season with salt. Cook, stirring once or twice, until shrimp are mostly opaque, about 30 seconds. Separate mixture to create 2 semicircles on each side of pan (this makes folding the finished crepe easier!).`,
`Stir batter vigorously with a ladle until there is no drag or sludge. Measure out ⅓ cup batter and pour into pan, distributing around filling. Carefully swirl skillet so batter coats the bottom without disturbing the filling; batter should set around filling and form a round. It will sizzle and sputter! If needed, quickly add more batter to fill in empty spots.`,
`Pile one sixth of cabbage on 1 side of pan, reduce heat slightly, and cover with a lid. Cook until softened slightly, about 1 minute. Uncover and drizzle 1–2 tsp. more oil around the crepes rim to encourage crisping. Reduce heat and cook until golden brown around the edges (they should lift off the pan a bit) and entire crepe is mostly crisp, about 3 minutes longer.`,
`Slide a spatula under one side and fold crepe over (no big deal if it breaks in the center). Slide finished crepe onto prepared rack and place in oven to keep warm while you make the remaining crepes. Pro tip: If the batter did not sizzle and bubble upon contact, the skillet is not hot enough. If it did bubble but was hard to swirl around, reduce the heat or thin out the batter with water, or do both. Making these crepes is akin to making pancakes: adjust as you go. Also be patient.`,
`Stir batter vigorously again and repeat process to make 5 more crepes. If at any time the batter feels too thick, add water by the teaspoonful to thin out. And if you have 2 medium skillets, use both to speed things up. Crepes are best eaten soon after frying.`,
`Serve crepes with lettuce and herbs and dipping sauce alongside. Use kitchen scissors to cut crepes into manageable pieces at the table. To eat, place a piece of crepe on a lettuce leaf (tear it to roughly the size of your palm if needed), then top with some herbs. Fold into a bundle, dip into sauce, and enjoy.`
],
   recipeId: 16,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [
`Place sugar, fish sauce, lime juice, and 1 Tbsp. water in a jar. Cover and shake dressing vigorously until combined and sugar is dissolved.`,
`Combine fennel, cucumber, sweet pepper, raw shallot, tomatoes, and herbs in a large bowl; season generously with black pepper. Drizzle ½ cup dressing over and toss salad to combine. Taste and add more dressing if desired.`,
`Transfer salad to a platter and top with peanuts and fried shallots.` ],
   recipeId: 17,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [ 
`Combine sugar and 7 Tbsp. warm water in a small bowl and whisk until sugar is dissolved. Stir in chiles, garlic, lime juice, and fish sauce. Set nuóc cham aside.`,
`Bring coconut milk, 1 tsp. salt, and ½ cup water to a simmer in a small saucepan over medium heat. Remove from heat and add shrimp. Cover and let sit until shrimp are opaque and pink, about 4 minutes. Drain and chill until ready to use.`,
`Toss cabbage, carrots, onion, cilantro, and mint in a large bowl. Pour half of reserved nuóc cham over and gently massage into vegetables until evenly distributed. Top with chilled shrimp, fried shallots, and peanuts. Serve with remaining nuóc cham alongside.`,
`Do ahead: Nuóc cham can be made 1 week ahead. Cover and chill.`
],
   recipeId: 18,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [ 
`Whisk lime juice, fish sauce, vinegar, brown sugar, and garlic in a small bowl until sugar is dissolved; set dressing aside. Do ahead: Dressing can be made 1 day ahead. Cover and chill.`,
`Bring farro, 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt, and 1 quart water to a boil in a medium pot. Reduce heat, cover, and simmer until farro is tender but still chewy, 20–25 minutes. Drain off any excess liquid and let cool.`,
`Prepare a grill for medium-high heat. Grill corn, turning occasionally, until kernels are charred, 10–15 minutes. Transfer to a cutting board and let sit until cool enough to handle. Cut kernels from cobs.`,
`Combine farro, corn, plums, chiles, mint, and ½ cup Thai basil in a large bowl and drizzle reserved dressing over; toss to coat. Taste and season salad with more salt if needed. Transfer to a platter and top with more Thai basil leaves. Do ahead: Farro can be cooked 1 day ahead. Transfer to an airtight container; cover and chill.`
],
   recipeId: 19,
   createdAt: new Date(),
   updatedAt: new Date()
},
{ 
  specification: [ 
`Slice 4 Persian cucumbers lengthwise into planks that are about 3in long and 1/4in thick. Cut off the crown and the rounded bottom of 1 pineapple, creating two flat surfaces. Stand the pineapple up, then use your knife to cut away the skin, following the contours of the pineapple from top to bottom. Cut your pineapple in four long pieces, then remove the core. Cut the pineapple plank crosswise into short 1/4in pieces. Set aside.`,
`Peel and finely chop one 2in piece ginger and 4–6 garlic cloves. (You should have about 2 Tbsp. each.) Mix 1 Tbsp. finely chopped ginger, 1 Tbsp. finely chopped garlic, 1 tsp. ground turmeric, 2 Tbsp. fish sauce, ½ tsp. crushed red pepper flakes, and a pinch of kosher salt in a small bowl. Cut 1 lb. white fish fillets, preferably skin-on, into 4 equal pieces, then massage marinade onto fish to coat evenly. Place in a shallow bowl or dish. Let marinate in the fridge at least 30 minutes and, preferably, up to 2 hours.`,
`Meanwhile, make the nước chấm dipping sauce. Stir 1 Tbsp. sugar and 5 Tbsp. warm water in a small bowl until sugar is dissolved. Halve 1 lime and squeeze in the juice (use your hand or a fine-mesh sieve to catch the seeds). Add a pinch of red pepper flakes if you would like it to be spicy, remaining 2 Tbsp. fish sauce, remaining 1 Tbsp. finely chopped ginger, and remaining 1 Tbsp. finely chopped garlic. Stir to combine. Set aside for serving.`,
`Remove fish from refrigerator. Heat 1 Tbsp. vegetable oil in a medium nonstick skillet over medium. Working in batches if needed, cook fish (start skin side down, if your fish has skin) until flesh is opaque all the way through, firm, and flakes easily with a fork, about 3 minutes per side. Transfer to a plate and flake into smaller pieces.`,
`To assemble rolls, working one at a time, dip 12 rice paper rounds in a clean shallow bowl or pan of hot water until pliable but not floppy, about 15 seconds. Lay flat on a large plate or cutting board and arrange a piece or so of torn tender lettuce, some tender herbs, a slice or two of the reserved cucumber and pineapple, and a few pieces of fish horizontally across the center of wrappers, leaving a 2in border on left and right sides. Fold left and right sides inward, then tightly roll wrapper starting at the side nearest you. If youd like to make rolls with exposed fillings, simply fold in the left side of wrapper before adding fillings. Arrange fillings so that they overhang slightly on the left side, then fold in the right side and roll up. Repeat until all of the fish has been used (you should get 10–12 rolls). Serve with reserved nước chấm for dipping alongside.`,
`Alternatively, you can plate all of the components separately with a bowl of warm water for soaking the wrappers and let guests assemble their own.`,
`Do ahead: Nước chấm can be made 2 weeks ahead. Cover and chill.`
],
   recipeId: 20,
   createdAt: new Date(),
   updatedAt: new Date()
}




], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert(`People`, [{
        name: `John Doe`,
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(`Instructions`, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete(`People`, null, {});
    */
  }
};
