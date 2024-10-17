'use strict';

const { describe } = require('mocha');
const { Review } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const review = require('../models/review');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 27,
        review: 'THE GILDED ROSE IS A DECENT PLACE! GOOD MEAT, STRONG DRINK! WILL COME BACK AFTER A RAID!',
        stars: 4
      },
      {
        spotId: 1,
        userId: 31,
        review: 'Ah, The Gilded Rose, a place of elegance and charm. A splendid retreat for those of discerning taste.',
        stars: 5
      },
      {
        spotId: 1,
        userId: 8,
        review: 'I stayed at The Gilded Rose for a night, and it was quite pleasant! Overall, a nice stay!',
        stars: 4
      },
      {
        spotId: 1,
        userId: 20,
        review: 'The Gilded Rose welcomes you with open arms! Perfect for sharing stories after a long trek!',
        stars: 5
      },
      {
        spotId: 2,
        userId: 4,
        review: 'The Pig and Whistle has a rustic charm that takes you back to simpler times.',
        stars: 4
      },
      {
        spotId: 2,
        userId: 28,
        review: 'PIG AND WHISTLE HAS GOOD MEAT! GREAT PLACE TO GATHER WITH FELLOW WARRIORS!',
        stars: 4
      },
      {
        spotId: 2,
        userId: 6,
        review: 'The Pig and Whistle—a delightful haven amidst the chaos! A place to find solace.',
        stars: 5
      },
      {
        spotId: 2,
        userId: 12,
        review: 'In the Pig and Whistle, I found a quaint respite. The mead flows like poetry.',
        stars: 4
      },
      {
        spotId: 2,
        userId: 31,
        review: 'The Pig and Whistle is a decent place! Good food, strong drink! Worth the trip to Stormwind!',
        stars: 3
      },
      {
        spotId: 3,
        userId: 5,
        review: 'The Blue Recluse is a cozy retreat with excellent brews. Perfect for a quiet evening!',
        stars: 4
      },
      {
        spotId: 3,
        userId: 2,
        review: 'THE BLUE RECLUSE HAS STRONG DRINKS! I ENJOYED MY TIME WITH FRIENDS! WILL RETURN SOON!',
        stars: 4
      },
      {
        spotId: 3,
        userId: 6,
        review: 'A delightful spot with a charming atmosphere. The staff is attentive, and the drinks refreshing!',
        stars: 5
      },
      {
        spotId: 4,
        userId: 8,
        review: 'The Golden Keg has a vibrant atmosphere! Great place for adventurers to gather and share tales!',
        stars: 5
      },
      {
        spotId: 4,
        userId: 27,
        review: 'THE GOLDEN KEG HAS GOOD MEAT AND STRONG DRINK! A GREAT PLACE FOR GATHERING AFTER BATTLE!',
        stars: 4
      },
      {
        spotId: 5,
        userId: 3,
        review: 'Darnassus Inn is a lovely haven amidst the trees. The tranquility here is simply enchanting!',
        stars: 5
      },
      {
        spotId: 5,
        userId: 6,
        review: 'A lovely inn with a serene atmosphere. Perfect for reflecting on the day\'s adventures!',
        stars: 4
      },
      {
        spotId: 6,
        userId: 2,
        review: 'The Caregiver Center provides warmth and comfort to those in need. A vital part of our community!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 28,
        review: 'GOOD FOOD, STRONG DRINKS! A NICE PLACE, BUT SOMETIMES IT GETS CROWDED!',
        stars: 3
      },
      {
        spotId: 7,
        userId: 4,
        review: 'Stonefire Tavern has hearty meals and a friendly atmosphere. Ideal for relaxing after a long day!',
        stars: 4
      },
      {
        spotId: 7,
        userId: 6,
        review: 'The best tavern in Ironforge! The fire crackles warmly, and the food is exceptional!',
        stars: 5
      },
      {
        spotId: 8,
        userId: 1,
        review: 'Lion\'s Pride Inn is a lovely place to unwind! The staff is welcoming, and the ale is refreshing!',
        stars: 4
      },
      {
        spotId: 8,
        userId: 28,
        review: 'GOOD FOOD AND STRONG DRINKS! WILL COME BACK FOR MORE!',
        stars: 4
      },
      {
        spotId: 9,
        userId: 5,
        review: 'Scarlet Raven Tavern is a hidden gem! The atmosphere is cozy, and the food is delightful.',
        stars: 5
      },
      {
        spotId: 9,
        userId: 27,
        review: 'SCARLET RAVEN IS A DECENT PLACE! GOOD FOOD AND STRONG DRINKS! NOT BAD AT ALL!',
        stars: 3
      },
      {
        spotId: 9,
        userId: 3,
        review: 'Not the best place for a night out. The service was slow, and the food could use improvement.',
        stars: 2
      },
      {
        spotId: 10,
        userId: 6,
        review: 'Thunderbrew Distillery is a must-visit! The brews are fantastic, and the vibe is cheerful!',
        stars: 5
      },
      {
        spotId: 10,
        userId: 27,
        review: 'THUNDERBREW DISTILLERY HAS GREAT DRINKS! CROWDED BUT WORTH IT!',
        stars: 4
      },
      {
        spotId: 10,
        userId: 12,
        review: 'A vibrant spot with a fantastic selection of ales. Perfect for a celebratory evening!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 2,
        review: 'Stoutlager Inn has a wonderful selection of ales! The atmosphere is vibrant and inviting!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 27,
        review: 'STOUTLAGER INN IS A GOOD PLACE! I ENJOYED MY TIME THERE!',
        stars: 4
      },
      {
        spotId: 12,
        userId: 3,
        review: 'Farstrider\'s Lodge offers a unique experience! The food is fresh, and the view is stunning!',
        stars: 5
      },
      {
        spotId: 12,
        userId: 28,
        review: 'GOOD FOOD, STRONG DRINKS! A GREAT PLACE AFTER A LONG DAY!',
        stars: 4
      },
      {
        spotId: 13,
        userId: 8,
        review: 'Lakeshire Inn is a delightful spot! The staff is friendly, and the ambiance is warm and inviting.',
        stars: 4
      },
      {
        spotId: 14,
        userId: 1,
        review: 'Deepwater Tavern has a breathtaking view! The seafood is fresh and delicious!',
        stars: 5
      },
      {
        spotId: 14,
        userId: 27,
        review: 'DEEPWATER TAVERN IS DECENT! STRONG DRINKS, BUT CROWDED!',
        stars: 3
      },
      {
        spotId: 15,
        userId: 2,
        review: 'Wildhammer Keep is a fine establishment! The atmosphere is lively, and the food is top-notch!',
        stars: 5
      },
      {
        spotId: 15,
        userId: 27,
        review: 'WILDHAMMER KEEP HAS GOOD MEAT AND STRONG DRINKS! A FUN PLACE TO VISIT!',
        stars: 4
      },
      {
        spotId: 16,
        userId: 5,
        review: 'Fallowmere Inn is cozy, but the food could use a bit more flavor! Still, a good stop!',
        stars: 3
      },
      {
        spotId: 16,
        userId: 2,
        review: 'FALLOWMERE INN HAS A DECENT VIBE! DRINKS ARE A LITTLE WEAK, BUT NOT TOO BAD!',
        stars: 3
      },
      {
        spotId: 17,
        userId: 4,
        review: 'Valiant Rest is a hidden gem! The seafood is fresh, but the ambiance is what makes it special!',
        stars: 4
      },
      {
        spotId: 18,
        userId: 5,
        review: 'Westguard Inn has hearty meals and a warm atmosphere! The drinks could use a bit of work.',
        stars: 4
      },
      {
        spotId: 19,
        userId: 6,
        review: 'Amberpine Lodge offers splendid views and a tranquil environment. The food is delightful!',
        stars: 5
      },
      {
        spotId: 20,
        userId: 8,
        review: 'The Golden Lantern is enchanting! A perfect blend of flavor and beauty. A must-visit!',
        stars: 5
      },
      {
        spotId: 21,
        userId: 2,
        review: 'Hero\'s Rest Inn is a fine establishment! The food is average, but the drinks flow freely!',
        stars: 4
      },
      {
        spotId: 22,
        userId: 6,
        review: 'Lunarfall Inn is a must-visit! The ambiance is fantastic, and the food is divine!',
        stars: 5
      },
      {
        spotId: 23,
        userId: 5,
        review: 'The Silken Pillow is a delightful retreat! The food is superb, truly a culinary wonder!',
        stars: 5
      },
      {
        spotId: 24,
        userId: 4,
        review: 'Lamplighter Inn is warm and inviting! The ale is strong, just what I needed after a long day!',
        stars: 4
      },
      {
        spotId: 25,
        userId: 6,
        review: 'The Crescent Hearth has a cozy feel and excellent service. The food was delightful!',
        stars: 5
      },
      {
        spotId: 26,
        userId: 27,
        review: 'A Hero\'s Welcome is just okay. The prices are steep for what you get!',
        stars: 2
      },
      {
        spotId: 27,
        userId: 28,
        review: 'The Broken Tusk has a lively atmosphere but could use better food options!',
        stars: 3
      },
      {
        spotId: 28,
        userId: 2,
        review: 'The Wyvern\'s Tail has great ambiance! But the food was a bit lacking for my taste.',
        stars: 3
      },
      {
        spotId: 29,
        userId: 5,
        review: 'Miwana\'s Longhouse serves delicious meals! The view is stunning, a perfect dining spot!',
        stars: 5
      },
      {
        spotId: 30,
        userId: 6,
        review: 'The Inn is quite average. Nothing special about the food or service.',
        stars: 2
      },
      {
        spotId: 31,
        userId: 8,
        review: 'Silvermoon City Inn is a place of elegance! The food is exquisite, fit for nobility!',
        stars: 5
      },
      {
        spotId: 32,
        userId: 8,
        review: 'Wayfarer\'s Rest is beautifully decorated, and the food is simply delightful!',
        stars: 5
      },
      {
        spotId: 33,
        userId: 2,
        review: 'Gallow\'s End Tavern is a good spot for a drink, but the food left much to be desired!',
        stars: 3
      },
      {
        spotId: 34,
        userId: 27,
        review: 'Vengeance Landing Inn is decent. Drinks are strong, but the service was a bit slow.',
        stars: 3
      },
      {
        spotId: 35,
        userId: 27,
        review: 'New Agamand Inn has good deals on drinks! But the food was just average.',
        stars: 3
      },
      {
        spotId: 36,
        userId: 6,
        review: 'Sunreaver Pavilion is a marvelous place! The food is heavenly and the drinks exquisite!',
        stars: 5
      },
      {
        spotId: 37,
        userId: 8,
        review: 'The Filthy Animal has an interesting name, but the ambiance is lively, and the food is good!',
        stars: 4
      },
      {
        spotId: 38,
        userId: 28,
        review: 'Salty Sailor Tavern is perfect for adventurers! The deals on food and drink are unbeatable!',
        stars: 5
      },
      {
        spotId: 39,
        userId: 5,
        review: 'Light\'s Hope Chapel is a serene spot! The food is simple but comforting!',
        stars: 4
      },
      {
        spotId: 40,
        userId: 5,
        review: 'Tavern of Time has a unique atmosphere! The drinks are strong, perfect for a long night!',
        stars: 4
      },
      {
        spotId: 41,
        userId: 28,
        review: 'BROKEN KEEL TAVERN HAS GOOD DEALS! I LIKE THE DRINKS, BUT THE FOOD COULD BE BETTER!',
        stars: 3
      },
      {
        spotId: 42,
        userId: 1,
        review: 'Speedbarge Bar is lively! The food is tasty, but the drinks are where it shines!',
        stars: 4
      },
      {
        spotId: 42,
        userId: 6,
        review: 'Speedbarge Bar has great ambiance but could use some variety in the menu!',
        stars: 3
      },
      {
        spotId: 43,
        userId: 5,
        review: 'The Oasis Inn is a delightful escape! The food is fresh, and the view is stunning!',
        stars: 5
      },
      {
        spotId: 44,
        userId: 8,
        review: 'Nordrassil Inn offers a cozy atmosphere and exceptional meals! A true delight!',
        stars: 5
      },
      {
        spotId: 44,
        userId: 2,
        review: 'NORDRASSIL INN HAS GREAT DRINKS! PERFECT FOR A NIGHT WITH FRIENDS!',
        stars: 4
      },
      {
        spotId: 45,
        userId: 27,
        review: 'Schnottz\'s Hostel is okay. The prices are steep for the quality of food served!',
        stars: 2
      },
      {
        spotId: 46,
        userId: 5,
        review: 'Aldor Inn is simply enchanting! The food is divine, and the service is friendly!',
        stars: 5
      },
      {
        spotId: 47,
        userId: 8,
        review: 'Scryer Inn is a beautiful spot! The food is delicious, and the atmosphere is inviting!',
        stars: 5
      },
      {
        spotId: 48,
        userId: 1,
        review: 'The Drunken Hozen is always a good time! The ale flows freely and keeps spirits high!',
        stars: 4
      },
      {
        spotId: 49,
        userId: 6,
        review: 'Greenstone Inn serves up fresh and flavorful dishes! A lovely place to dine!',
        stars: 5
      },
      {
        spotId: 50,
        userId: 5,
        review: 'The Dancing Serpent is a treasure! The food is exquisite, and the atmosphere is magical!',
        stars: 5
      },
      {
        spotId: 51,
        userId: 6,
        review: 'Paur\'s Pub has a welcoming vibe! The food is decent, but the drink selection could improve!',
        stars: 3
      },
      {
        spotId: 52,
        userId: 5,
        review: 'Sri-La Inn is a culinary wonder! The dishes are delectable, a true feast for the senses!',
        stars: 5
      },
      {
        spotId: 53,
        userId: 2,
        review: 'Thunderfoot Inn has hearty meals and strong drinks! A great place to unwind after adventures!',
        stars: 4
      },
      {
        spotId: 54,
        userId: 5,
        review: 'The Lazy Turnip is charming and cozy! The food is comforting and the service is delightful!',
        stars: 5
      },
      {
        spotId: 55,
        userId: 27,
        review: 'Stone Mug Tavern is a good spot for drinks, but the food was a bit disappointing.',
        stars: 3
      },
      {
        spotId: 56,
        userId: 6,
        review: 'Wilds\' Edge Inn is decent! The food is good, but the service can be slow at times.',
        stars: 3
      },
      {
        spotId: 57,
        userId: 5,
        review: 'Marista\'s Bait & Brew is a lovely place! The seafood is fresh, and the ambiance is relaxing!',
        stars: 5
      },
      {
        spotId: 58,
        userId: 6,
        review: 'Tavern in the Mists has a serene atmosphere! The food is fresh, and the views are stunning!',
        stars: 5
      },
      {
        spotId: 59,
        userId: 2,
        review: 'Binan Brew & Stew has a cozy feel! The food is simple but satisfying after a long journey!',
        stars: 4
      },
      {
        spotId: 60,
        userId: 8,
        review: 'The Two Fisted Brew is lively and fun! The drinks are excellent, a perfect place to socialize!',
        stars: 5
      },
      {
        spotId: 61,
        userId: 5,
        review: 'The Lucky Traveller has decent food, but the service could use a little work.',
        stars: 3
      },
      {
        spotId: 62,
        userId: 1,
        review: 'North Wind Tavern offers delightful meals and a warm atmosphere! A great dining experience!',
        stars: 5
      },
      {
        spotId: 63,
        userId: 27,
        review: 'The Chum Bucket has good prices, but the food left something to be desired.',
        stars: 2
      },
      {
        spotId: 64,
        userId: 8,
        review: 'The Golden Rose is exquisite! The food is delightful, and the ambiance is perfect for a night out!',
        stars: 5
      },
      {
        spotId: 65,
        userId: 5,
        review: 'Legerdemain Lounge is enchanting! The drinks are magical, and the atmosphere is lovely!',
        stars: 5
      },
      {
        spotId: 66,
        userId: 6,
        review: 'Cantrips & Crows Tavern is charming but the food could use a bit more seasoning!',
        stars: 3
      }
    ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
