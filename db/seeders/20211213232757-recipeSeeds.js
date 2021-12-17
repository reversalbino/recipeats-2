'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Recipes',
			[
				{
					title: `Italian Sundaes with Nutella`,
					image: `https://assets.bonappetit.com/photos/5ace6d61f97031666e19bc1d/1:1/w_960,c_limit/italian-sundaes-with-nutella.jpg`,
					author: `Ignacio Matos`,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Arugula with Italian Plums and Parmesan`,
					image: `https://assets.bonappetit.com/photos/5ace702dd63c0e2f9cf49175/1:1/w_960,c_limit/arugula-with-italian-plums-and-parmesan.jpg`,
					author: `Ignacio Matos`,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Stuffed Mussels With Pepperoni Rice`,
					image: `https://assets.bonappetit.com/photos/615e011d8c3439d5cc20a6e5/1:1/w_960,c_limit/Stuffed-Mussels-With-Pepperoni-Rice-Alt.jpg`,
					author: `ANGIE RITO AND SCOTT TACINELLI`,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Creamy Green Asparagus Polenta `,
					image: `https://assets.bonappetit.com/photos/6063a93883765ca9adbb4953/1:1/w_960,c_limit/210324_DA_CC_Dawn_Powerwash_Healthyish_0124_C.jpg`,
					author: `Priyanka Naik`,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Miso Pork Ribs With Chile-Honey Glaze`,
					image: `https://assets.bonappetit.com/photos/5d7fa293be004100080f501f/1:1/w_960,c_limit/1019-WOL-Miso-Pork-Ribs-2.jpg`,
					author: `RICK MARTINEZ`,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: `Mexican Hot Chocolate`,
					image: `https://assets.bonappetit.com/photos/57accd9af1c801a1038bc792/1:1/w_2240,c_limit/Hot-Chocolate-1-of-5.jpg`,
					author: `RICK MARTINEZ`,
					categoryId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Adobo Mushroom Tacos`,
					image: `https://assets.bonappetit.com/photos/615dc64a70c4c9f7cafe1803/1:1/w_1600,c_limit/Adobo-Mushroom-Tacos.jpg`,
					author: `Edgar Castrejon`,
					categoryId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Best Guacamole`,
					image: `https://assets.bonappetit.com/photos/57bf26834395c0582bb62eed/1:1/w_1600,c_limit/cwar-ricks-guacamole.jpg`,
					author: `Rick Martinez`,
					categoryId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Dirty South Hot Tamales With Jackfruit and Cilantro Sauce`,
					image: `https://assets.bonappetit.com/photos/610c58c582c5524939b998aa/1:1/w_1600,c_limit/0921-Dirty%20South%20Hot%20Tamales%20With%20Jackfruit%20and%20Cilantro%20Sauce.jpg`,
					author: `Bryant Terry`,
					categoryId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Churros With Bittersweet Chocolate Sauce`,
					image: `https://assets.bonappetit.com/photos/58ff5f162278cd3dbd2c069c/1:1/w_1600,c_limit/churros.jpg`,
					author: `Rick Martinez`,
					categoryId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: `L.A. Kalbi`,
					image: `https://assets.bonappetit.com/photos/611e8718ed2adac4b80e74df/1:1/w_2240,c_limit/0821-LA-Kalbi.jpg`,
					author: `IRENE YOO`,
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Crispy Rice Bowl With Spring Vegetables`,
					image: `https://assets.bonappetit.com/photos/5ec69d5f4201d30f101f2009/16:9/w_2240,c_limit/Basically-Bibimbap-Option2.jpg`,
					author: `SARAH JAMPEL`,
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Chopstick-Ready Rice`,
					image: `https://assets.bonappetit.com/photos/57ad407653e63daf11a4dd60/master/w_1280,c_limit/chopstick-ready-rice.jpg`,
					author: `BON APPÉTIT`,
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Scallion Pancakes`,
					image: `https://assets.bonappetit.com/photos/57b61dab3e1d654349a2fefc/1:1/w_2240,c_limit/scallion-pancakes.jpg`,
					author: `SUE LI`,
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Kimchi-Lentil Stew With Poached Eggs`,
					image: `https://assets.bonappetit.com/photos/61323613da300c741fd2d1ad/1:1/w_960,c_limit/Kimchi%20Lentil%20Stew%20With%20Poached%20Eggs.jpg`,
					author: `text`,
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: `Shrimp and Sugar Snap Pea Bánh Xèo (Vietnamese Sizzling Rice Crepes)`,
					image: `https://assets.bonappetit.com/photos/5ec2de0b5c440b5a0d6a5035/1:1/w_1920,c_limit/Spring-Banh-Xeo-GoLive-1.jpg`,
					author: `Andrea Nguyen`,
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Vietnamese Tomato Salad`,
					image: `https://assets.bonappetit.com/photos/60db4448512a33ad732a1ea2/1:1/w_1920,c_limit/New-Short-is-Sweet-Vietnamese-Tomato-Salad.jpg`,
					author: `Anthony Ha and Sadie Mae Burns`,
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Corn, Plum, and Farro Salad with Nuoc Cham Dressing`,
					image: `https://assets.bonappetit.com/photos/60da23c0d5b7346ea0217ba1/1:1/w_1920,c_limit/Veggies-Corn,%20Plum,%20and%20Farro%20Salad%20with%20Nuoc%20Cham%20Dressing.jpg`,
					author: `Rachel Gurja`,
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Gỏi Tôm Bắp Cải`,
					image: `https://assets.bonappetit.com/photos/601da27bbc23c5cd3769e5e5/1:1/w_1920,c_limit/HLY%20Goi%20Tom%20Bap%20Cai.jpg`,
					author: `Tyna Hoang`,
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				},

				{
					title: `Vietnamese Turmeric Fish Summer Rolls`,
					image: `https://assets.bonappetit.com/photos/5effc0664f8a56d88daec2c8/16:9/w_1920,c_limit/Basically-Summer-Rolls-01.jpg`,
					author: `Tyna Hoang`,
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
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
		return queryInterface.bulkDelete('Recipes', null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
