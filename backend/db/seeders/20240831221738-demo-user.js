'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");
const { Op } = require('sequelize')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      // {
      //   email: 'demo@user.io',
      //   username: 'Demo-lition',
      //   firstName: 'sarah',
      //   lastName: 'shih',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'user1@user.io',
      //   username: 'FakeUser1',
      //   firstName: 'brittany',
      //   lastName: 'prock',
      //   hashedPassword: bcrypt.hashSync('password2')
      // },
      // {
      //   email: 'user2@user.io',
      //   username: 'FakeUser2',
      //   firstName: 'justin',
      //   lastName: 'tran',
      //   hashedPassword: bcrypt.hashSync('password3')
      // },
      {
        username: 'username1',
        email: 'allisongreymane@hearthbnb.com',
        firstName: 'Allison',
        lastName: 'Greymane',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username2',
        email: 'reeselangston@hearthbnb.com',
        firstName: 'Reese',
        lastName: 'Langston',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username3',
        email: 'stevenlohan@hearthbnb.com',
        firstName: 'Steven',
        lastName: 'Lohan',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username4',
        email: 'thaegratillstone@hearthbnb.com',
        firstName: 'Thaegra',
        lastName: 'Tillstone',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username5',
        email: 'saeliennemoonshadow@hearthbnb.com',
        firstName: 'Saelienne',
        lastName: 'Moonshadow',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username6',
        email: 'breellightbringer@hearthbnb.com',
        firstName: 'Breel',
        lastName: 'Lightbringer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username7',
        email: 'firebrewironfist@hearthbnb.com',
        firstName: 'Firebrew',
        lastName: 'Ironfist',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username8',
        email: 'farleystone@hearthbnb.com',
        firstName: 'Farley',
        lastName: 'Stone',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username9',
        email: 'smittshearthguard@hearthbnb.com',
        firstName: 'Smitts',
        lastName: 'Hearthguard',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username10',
        email: 'belmstonefoot@hearthbnb.com',
        firstName: 'Belm',
        lastName: 'Stonefoot',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username11',
        email: 'hearthstoveemberforge@hearthbnb.com',
        firstName: 'Hearthstove',
        lastName: 'Emberforge',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username12',
        email: 'vyrinswiftwind@hearthbnb.com',
        firstName: 'Vyrin',
        lastName: 'Swiftwind',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username13',
        email: 'briannalightweaver@hearthbnb.com',
        firstName: 'Brianna',
        lastName: 'Lightweaver',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username14',
        email: 'helbreksteelhand@hearthbnb.com',
        firstName: 'Helbrek',
        lastName: 'Steelhand',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username15',
        email: 'thulframwildsoul@hearthbnb.com',
        firstName: 'Thulfram',
        lastName: 'Wildsoul',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username16',
        email: 'alithiafallowmere@hearthbnb.com',
        firstName: 'Alithia',
        lastName: 'Fallowmere',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username17',
        email: 'jamesdeacon@hearthbnb.com',
        firstName: 'James',
        lastName: 'Deacon',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username18',
        email: 'celestegoodhutch@hearthbnb.com',
        firstName: 'Celeste',
        lastName: 'Goodhutch',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username19',
        email: 'jenniferbellrose@hearthbnb.com',
        firstName: 'Jennifer',
        lastName: 'Bellrose',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username20',
        email: 'matronvivinh@hearthbnb.com',
        firstName: 'Matron',
        lastName: 'Vi Vinh',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username21',
        email: 'jaesiarosecheer@hearthbnb.com',
        firstName: 'Jaesia',
        lastName: 'Rosecheer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username22',
        email: 'serachantdesange@hearthbnb.com',
        firstName: 'Sera',
        lastName: 'Chantdesange',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username23',
        email: 'nethenebrightsoul@hearthbnb.com',
        firstName: 'Nethene',
        lastName: 'Brightsoul',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username24',
        email: 'corianderstarwhisper@hearthbnb.com',
        firstName: 'Coriander',
        lastName: 'Starwhisper',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username25',
        email: 'melphaarlightbringer@hearthbnb.com',
        firstName: 'Melphaar',
        lastName: 'Lightbringer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username26',
        email: 'isiramifairwind@hearthbnb.com',
        firstName: 'Isirami',
        lastName: 'Fairwind',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username27',
        email: 'gryshkablackrock@hearthbnb.com',
        firstName: 'Gryshka',
        lastName: 'Blackrock',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username28',
        email: 'nufaironjaw@hearthbnb.com',
        firstName: 'Nufa',
        lastName: 'Ironjaw',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username29',
        email: 'miwanasunwalker@hearthbnb.com',
        firstName: 'Miwana',
        lastName: 'Sunwalker',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username30',
        email: 'normandarkslayer@hearthbnb.com',
        firstName: 'Norman',
        lastName: 'Darkslayer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username31',
        email: 'velandrasunfire@hearthbnb.com',
        firstName: 'Velandra',
        lastName: 'Sunfire',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username32',
        email: 'jovianightbloom@hearthbnb.com',
        firstName: 'Jovia',
        lastName: 'Nightbloom',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username33',
        email: 'renegravewalker@hearthbnb.com',
        firstName: 'Renee',
        lastName: 'Gravewalker',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username34',
        email: 'timothyholland@hearthbnb.com',
        firstName: 'Timothy',
        lastName: 'Holland',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username35',
        email: 'basilosgood@hearthbnb.com',
        firstName: 'Basil',
        lastName: 'Osgood',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username36',
        email: 'jarindawnglow@hearthbnb.com',
        firstName: 'Jarin',
        lastName: 'Dawnglow',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username37',
        email: 'udathebeast@hearthbnb.com',
        firstName: 'Uda',
        lastName: 'The Beast',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username38',
        email: 'nixxraxfillamug@hearthbnb.com',
        firstName: 'Nixxrax',
        lastName: 'Fillamug',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username39',
        email: 'jessicachambers@hearthbnb.com',
        firstName: 'Jessica',
        lastName: 'Chambers',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username40',
        email: 'alexstonchrome@hearthbnb.com',
        firstName: 'Alexston',
        lastName: 'Chrome',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username41',
        email: 'wileyshadewhisper@hearthbnb.com',
        firstName: 'Wiley',
        lastName: 'Shadewhisper',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username42',
        email: 'daisybrightfield@hearthbnb.com',
        firstName: 'Daisy',
        lastName: 'Brightfield',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username43',
        email: 'calandrathnightbloom@hearthbnb.com',
        firstName: 'Calandrath',
        lastName: 'Nightbloom',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username44',
        email: 'sebeliamoonshadow@hearthbnb.com',
        firstName: 'Sebelia',
        lastName: 'Moonshadow',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username45',
        email: 'miscbook05arcane@hearthbnb.com',
        firstName: 'misc book 05',
        lastName: 'Arcane Guest Registry',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username46',
        email: 'minaleibrightsoul@hearthbnb.com',
        firstName: 'Minalei',
        lastName: 'Brightsoul',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username47',
        email: 'roldemarsunstrider@hearthbnb.com',
        firstName: 'Roldemar',
        lastName: 'Sunstrider',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username48',
        email: 'peijigoldendraft@hearthbnb.com',
        firstName: 'Peiji',
        lastName: 'Goldendraft',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username49',
        email: 'gracefulswan@hearthbnb.com',
        firstName: 'Graceful',
        lastName: 'Swan',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username50',
        email: 'felawoodear@hearthbnb.com',
        firstName: 'Fela',
        lastName: 'Woodear',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username51',
        email: 'bolotheelder@hearthbnb.com',
        firstName: 'Bolo',
        lastName: 'The Elder',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username52',
        email: 'lanatheseabreeze@hearthbnb.com',
        firstName: 'Lana',
        lastName: 'The Sea Breeze',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username53',
        email: 'nanthunderfoot@hearthbnb.com',
        firstName: 'Nan',
        lastName: 'Thunderfoot',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username54',
        email: 'leilanwindwhisper@hearthbnb.com',
        firstName: 'Lei',
        lastName: 'Lan Windwhisper',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username55',
        email: 'nanmasonmug@hearthbnb.com',
        firstName: 'Nan',
        lastName: 'The Mason Mug',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username56',
        email: 'rudesho@hearthbnb.com',
        firstName: 'Rude',
        lastName: 'Sho',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username57',
        email: 'cranfurthenoodler@hearthbnb.com',
        firstName: 'Cranfur',
        lastName: 'The Noodler',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username58',
        email: 'tongthefixer@hearthbnb.com',
        firstName: 'Tong',
        lastName: 'The Fixer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username59',
        email: 'pulievenhanded@hearthbnb.com',
        firstName: 'Puli',
        lastName: 'The Even Handed',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username60',
        email: 'ligoldendraft@hearthbnb.com',
        firstName: 'Li',
        lastName: 'Goldendraft',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username61',
        email: 'chiyomistpaw@hearthbnb.com',
        firstName: 'Chiyo',
        lastName: 'Mistpaw',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username62',
        email: 'liuze@hearthbnb.com',
        firstName: 'Liu',
        lastName: 'Ze',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username63',
        email: 'santheseacalmer@hearthbnb.com',
        firstName: 'San',
        lastName: 'The Sea Calmer',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username64',
        email: 'bartender.tomro@hearthbnb.com',
        firstName: 'Bartender',
        lastName: 'Tomro',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username65',
        email: 'ajaygreen@hearthbnb.com',
        firstName: 'Ajay',
        lastName: 'Green',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        username: 'username66',
        email: 'amisiazurezgaze@hearthbnb.com',
        firstName: 'Amisi',
        lastName: 'Azuregaze',
        hashedPassword: bcrypt.hashSync('halfhill1!')
      },
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName: 'Sarah',
        lastName: 'Milinovich',
        hashedPassword: bcrypt.hashSync('password')
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [
        // 'Demo-lition',
        // 'FakeUser1',
        // 'FakeUser2',
        'username1',
        'username2',
        'username3',
        'username4',
        'username5',
        'username6',
        'username7',
        'username8',
        'username9',
        'username10',
        'username11',
        'username12',
        'username13',
        'username14',
        'username15',
        'username16',
        'username17',
        'username18',
        'username19',
        'username20',
        'username21',
        'username22',
        'username23',
        'username24',
        'username25',
        'username26',
        'username27',
        'username28',
        'username29',
        'username30',
        'username31',
        'username32',
        'username33',
        'username34',
        'username35',
        'username36',
        'username37',
        'username38',
        'username39',
        'username40',
        'username41',
        'username42',
        'username43',
        'username44',
        'username45',
        'username46',
        'username47',
        'username48',
        'username49',
        'username50',
        'username51',
        'username52',
        'username53',
        'username54',
        'username55',
        'username56',
        'username57',
        'username58',
        'username59',
        'username60',
        'username61',
        'username62',
        'username63',
        'username64',
        'username65',
        'username66',
        'Demo-lition'
      ] }
    }, {});
  }
};
