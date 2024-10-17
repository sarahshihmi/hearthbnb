'use strict';

const { describe } = require('mocha');
const { SpotImage } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://wowpedia.fandom.com/wiki/Gilded_Rose?file=The_Gilded_Rose.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://wowpedia.fandom.com/wiki/Gilded_Rose?file=The_Gilded_Rose_%28interior%29.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://wowpedia.fandom.com/wiki/Gilded_Rose?file=WorldMap-StormwindCity.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5a/Old_Town.jpg/revision/latest/smart/width/386/height/259?cb=20230517145829',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-qlqbU__54UK8JzdmGPerxHTGG8CiwEDTPNYbwCwTs5OPgZv8UL2IsR7rejrVrdpOROQSzE4Tt1kGeNwiyrn07zB8EZFqtzu-1K75d9imoM1vz_pCPImbU5QDkKkafZRlJOTdxLTMJuw/s1600/Gilded_rose1.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/85/Pig_and_Whistle_Tavern.jpg/revision/latest/scale-to-width-down/1200?cb=20230527134714',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/moon-guard/images/2/20/Pig_and_Whistle1.PNG/revision/latest?cb=20150923100542',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/794552.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5a/Old_Town.jpg/revision/latest/smart/width/386/height/259?cb=20230517145829',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i.ytimg.com/vi/jecQp2VAJg8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gRigTMA8=&rs=AOn4CLCZXTJ0kM0JDky0FtsLyernkOkmNA',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/54/Blue_Recluse.jpg/revision/latest?cb=20230529131759',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/c/c7/Blue_recluse_outside.jpg/revision/latest?cb=20080106130653',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/b/bb/Blue_recluse_inside.jpg/revision/latest?cb=20080106130759',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/868938-investigate-the-blue-recluse.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://i.ytimg.com/vi/t0jFkP1k2ag/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcd9Uwt8H6gwRTqj431kF3MGbWQA',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://64.media.tumblr.com/d53c9742cdb422185ec2eeebdd62826f/tumblr_inline_ousdvvGi8k1tf3uux_1280.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/eb/Golden_Keg.jpg/revision/latest/scale-to-width-down/985?cb=20230527105827',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a1/Golden_Keg_%28interior%29.jpg/revision/latest?cb=20230527111413',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnEPJkJIYybUMEaBu2YfwgAVsiLC72YQz0bl3-c5fyXHbDnh8hO8Yll8r_AgbRVMymOJsbElOy5_d5VSfDOotqezThLYMOnIXyHMRoyhkIGQ67QD2ZcRvDWgooX8V8Vez_ikyoWq6ilXI/s1600/golden_keg_map.jpg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/a/af/GoldenKeg.jpg/revision/latest/scale-to-width-down/1200?cb=20110423185959',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://dotesports.com/wp-content/uploads/2023/07/Night-Elf-teldrassil-wow.jpg?w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/28740-darnassus.jpg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i.ytimg.com/vi/LYhknuaKiTo/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8c/WorldMap-Teldrassil.jpg/revision/latest?cb=20180510092157',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/af/DarnSkyPic.jpg/revision/latest/scale-to-width-down/1819?cb=20110201041910',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/a/ac/Entrance_of_Caregiver_center.jpg/revision/latest?cb=20071213004053',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/e/e3/WorldMap-TheExodar.jpg/revision/latest?cb=20071104181223',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/74/ExodarInn.jpg/revision/latest/scale-to-width-down/640?cb=20061127153602',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/dd/Azuremyst_Isle.jpg/revision/latest/scale-to-width-down/2400?cb=20180829150501',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://i.redd.it/u01mjjchchl71.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e6/The_Stonefire_Tavern.jpg/revision/latest?cb=20071222081306',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://i.ytimg.com/vi/5bOzegujWCY/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_mJwZW5Tspe3gwMRUffKKn_i-NpGW98rq9ClZ5BHkpAfl4imWONNmchVNFALlfwXDCnX3bSAFZ_UDa5AKoCG1F_QfWKcnpmc7sxNLm44RzMRfiteoNawpj_-Q9Bt8AOdRKGa85zDHWnc/s1600/stonefire_tavern+map.jpg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/809249.jpg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://wow.zamimg.com/uploads/screenshots/resized/482758.jpg?maxWidth=750',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://live.staticflickr.com/2428/3870923874_013e7ebb1f_b.jpg',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://cdnb.artstation.com/p/assets/images/images/002/211/321/large/mikhail-petaykin-highresscreenshot00068.jpg?1458756234',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/74/Lion%27s_Pride_Inn.jpg/revision/latest/scale-to-width-down/600?cb=20060808070240',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/9/90/GoldshireInn.jpg/revision/latest/scale-to-width-down/1280?cb=20090109060324',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/517247-lions-pride-inn.jpg',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/ab/Scarlet_Raven_Tavern.jpg/revision/latest/scale-to-width-down/1200?cb=20230526233613',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scarlet_Raven_Tavern.jpg/revision/latest/scale-to-width-down/340?cb=20060925092029',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/11402403_1106351182714071_2790261482609962540_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f798df&_nc_ohc=FLaR7rM82NAQ7kNvgHIMZ_R&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4ShAlEIB8izXB2GVxnOIzg&oh=00_AYCjEpW98KpnqXSd-1fnknel6ndpI114mEgW9yQfK_6PnQ&oe=673816BD',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/11187246_1085436881472168_4453776763548060724_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f798df&_nc_ohc=CCpMuTAZ69gQ7kNvgGzacDo&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=ARcMuGdh95RmcczwVTW6fcB&oh=00_AYCPsQiZpF2RLbHWAPm_U5UyxnwmznalK8gaV7yBShEZ6w&oe=6737EE90',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/uoMQnRL.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/85/Thunderbrew_Distillery.jpg/revision/latest/scale-to-width-down/985?cb=20130624192853',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://i.ytimg.com/vi/hnyS7F5W6k8/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a6/WorldMap-DunMorogh.jpg/revision/latest?cb=20140205145724',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://i.ytimg.com/vi/JcaxzighJfA/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/248781-thunderbrew-festive-keg.jpg',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/41/Stoutlager_Inn.jpg/revision/latest/scale-to-width-down/600?cb=20060829194722',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://c1.staticflickr.com/5/4023/4651898172_cac702639a_b.jpg',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://live.staticflickr.com/4067/4651898556_855bab7630_b.jpg',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKS1yyVMjCBrvOdX7de6o_WDCNjhrMOXV1UzlRREkE2f0obz2N3kSpx_b8fVWdwkFGec2qWYUXAXCvrECzXe8zhzzXv5Lty7NwUicNZS-SQ7EgCggA6NofTchD3ZYH7050ZmjdiRuQHy4/s1600/Stoutlager_map.jpg',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwFKUUn2xvAAq0EW9UGczjRTHBHitgJ5gVw&s',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/11/The_Farstrider_Lodge.jpg/revision/latest?cb=20060904080036',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/83/WorldMap-LochModan-old.jpg/revision/latest?cb=20071104181118',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://pbs.twimg.com/media/FpA3Ad8agAAHnc3.jpg:large',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98277300-2dd5-460c-8064-bca853cc8904/d7amppw-691b582d-9dec-4d88-881f-6388aa012c29.jpg/v1/fill/w_1192,h_670,q_70,strp/the_farstrider_lodge_by_elite9gaming_d7amppw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTgyNzczMDAtMmRkNS00NjBjLTgwNjQtYmNhODUzY2M4OTA0XC9kN2FtcHB3LTY5MWI1ODJkLTlkZWMtNGQ4OC04ODFmLTYzODhhYTAxMmMyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mia_URrOanpbF4cV4NAjQtmv2xNVNYru6VfIHJ6FhxM',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://i.ytimg.com/vi/RwcPeVZ7PSA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBY07IIZ7jgJOrGn_aLG5U8Da4Wuw',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/09/Lakeshire_overview.jpg/revision/latest?cb=20200914124838',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/43/Lakeshire_Inn.jpg/revision/latest?cb=20200914124925',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/af/WorldMap-Redridge-old.jpg/revision/latest?cb=20071104181139',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/9/9b/Lakeshire.jpg/revision/latest?cb=20100615014014',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/41/Lakeshire_Town_Hall.jpg/revision/latest?cb=20200914125007',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://64.media.tumblr.com/3b1370e858b62a1d4fe45c67b1750500/ac0d718348a5f2d4-05/s1280x1920/ddf6a0849aadd3a9f8ee36d21d43654c669a90c7.png',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://64.media.tumblr.com/9c877e6e5aaf2291b22adb50d5fd5a60/ac0d718348a5f2d4-79/s1280x1920/bfe716b70e01b11996d8fb6377d8a031f2d0fc14.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/7/73/Menethil_Harbor.jpg/revision/latest/smart/width/386/height/259?cb=20101016144258',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/40/Wildhammer_Keep.jpg/revision/latest?cb=20230104151605',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/e/e4/WorldMap-Hinterlands.jpg/revision/latest?cb=20140218235106',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/ca/Khardros_Wildhammer.jpg/revision/latest?cb=20200828135330',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/ad/Hinterlands_landscape.jpg/revision/latest?cb=20120902203746',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://external-preview.redd.it/oV-ObBaatUPAat5CILGbSc6o23VCNI-3yhMEiW9cNL4.jpg?width=1080&crop=smart&auto=webp&s=4b6ccf7619c38f9e452ff63d3cbe29e783869d27',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f3/Fallowmere_inn.jpg/revision/latest/scale-to-width-down/1200?cb=20180605220213',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/47/Windshear_Hold.jpg/revision/latest?cb=20100713023535',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/f/fa/WorldMap-StonetalonMountains-old.jpg/revision/latest?cb=20071104181201',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/871170-stonetalon-mountains.jpg',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/60/Stonetalon_mountains_Cata.jpg/revision/latest?cb=20120119053329',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/24/Valiant_Rest.png/revision/latest/scale-to-width-down/985?cb=20201102232119',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/1/1f/WorldMap-Silithus.jpg/revision/latest?cb=20100919015950',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/64/Justice_Keep_shore.jpg/revision/latest/scale-to-width-down/1024?cb=20080509172938',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d9/Ss26-hires.jpg/revision/latest/scale-to-width-down/1600?cb=20071005151506',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://tagn.wordpress.com/wp-content/uploads/2022/09/wk07_sw_dock2.jpg',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/0a/Westguard_Inn.jpg/revision/latest?cb=20221212230501',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d9/Westguard_keep_2.jpg/revision/latest?cb=20070822193904',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/f/f2/WorldMap-HowlingFjord.jpg/revision/latest?cb=20090228125506',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/0/0a/Westguard_Inn.jpg/revision/latest?cb=20090510025223',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/dd/Westguard_Keep_front_view.jpg/revision/latest?cb=20221212230540',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/c4/Amberpine_Lodge.jpg/revision/latest?cb=20230128184525',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/c/c4/Amberpine_Lodge.jpg/revision/latest?cb=20080821220744',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/70/WorldMap-GrizzlyHills.jpg/revision/latest?cb=20220423211945',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://external-preview.redd.it/RCGOqP36YN2awTfp3kaW44VKTaMNpAlfkhjC5E79nHQ.jpg?auto=webp&s=49c991d449d00531afd1a7d90ccc00dcdc39d212',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://64.media.tumblr.com/c87a6b764fea3572738a2c45c48f313e/tumblr_p9o8vej1Am1xnzat4o1_1280.jpg',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/8/8e/ShrineofSevenStars.jpg/revision/latest?cb=20120609033358',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a0/WorldMap-MicroDungeon-ValeOfEternalBlossoms-ShrineofSevenStars.jpg/revision/latest?cb=20120621025738',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/341781-shrine-of-seven-stars.jpg',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://media.wowdb.com/attachments/23/270/634953189097550347.jpg',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://www.warcrafttavern.com/wp-content/uploads/2023/03/How-to-Get-to-Pandaria.jpg',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/db/Hero%27s_Rest_Inn.jpg/revision/latest/scale-to-width-down/618?cb=20180315130452',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f4/WorldMap-AshranAllianceFactionHub.jpg/revision/latest?cb=20180907225414',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/55/Host_Howell.jpg/revision/latest/smart/width/386/height/259?cb=20140823182736',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4e/Ashran_Alliance_burning.jpg/revision/latest/scale-to-width-down/1280?cb=20140802230640',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/0e/Ashran_BC_2013_-_zone3.jpg/revision/latest/scale-to-width-down/1302?cb=20150113235902',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/416234.jpg',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/416236.jpg',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://i.ytimg.com/vi/70YAIiw2-F4/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/416219.jpg',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/68/WorldMap-ShadowmoonValleyDR.jpg/revision/latest?cb=20190520202624',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b0/The_Silken_Pillow.jpg/revision/latest/scale-to-width-down/1200?cb=20190416142716',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/67/Shinri.jpg/revision/latest/smart/width/386/height/259?cb=20150301093250',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/ac/The_Crescent_Hearth.jpg/revision/latest/smart/width/386/height/259?cb=20150210084958',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5e/The_Verdant_Mire.jpg/revision/latest/smart/width/386/height/259?cb=20150210060640',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e9/WorldMap-ShadowmoonValleyDR-terrain2.jpg/revision/latest?cb=20190726235312',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kP58-zvuSlSG48pZj2_i-FYzh2P41CzCCg&s',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/73/Plains_of_Serenity.jpg/revision/latest/smart/width/386/height/259?cb=20150210052344',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e8/Embaari_Village.jpg/revision/latest?cb=20140830194332',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/fa/Shrine_in_Embaari_Village.jpg/revision/latest?cb=20140830194448',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://i.redd.it/avpzgg7zn3x21.jpg',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/Draakorium_Darter_Area.jpg/revision/latest/scale-to-width-down/1200?cb=20150210090624',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a2/The_Draakorium.jpg/revision/latest?cb=20150210090602',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/453005-draakorium-peacekeeper-a-mounted-draakorium-peacekeeper.jpg',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/ba15oCL.jpg',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/406531-draakorium-peacekeeper.jpg',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/c0/Silver_Enclave.jpg/revision/latest?cb=20210623173752',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7d/Silverenclave-mainhall.jpg/revision/latest?cb=20080902160451',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b8/Greyfangenclave-mainhall.jpg/revision/latest/smart/width/386/height/259?cb=20160717140447',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/8/8c/Silverenclave.JPG/revision/latest/scale-to-width-down/985?cb=20080814114741',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f0/Dalaran_City_%28legion%29.jpg/revision/latest?cb=20200301130828',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/797174.jpg?maxWidth=1800',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d0/The_Broken_Tusk.jpg/revision/latest/scale-to-width-down/1200?cb=20120703054900',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/cc/The_Broken_Tusk_Interior.jpg/revision/latest/scale-to-width-down/1600?cb=20120703055047',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/7/78/TheChophouse.jpg/revision/latest/smart/width/386/height/259?cb=20110504000925',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPaZGEBpIoaiTEuYYjdCsEMz00T52ZVsD3w&s',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/b/bc/TheWyvern%27sTailEx.jpg/revision/latest/scale-to-width-down/1200?cb=20110506002237',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/e/e8/Wyvern.jpg/revision/latest/thumbnail/width/360/height/450?cb=20051121232141',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/3/32/TheWyvern%27sTailInt.jpg/revision/latest?cb=20110506002221',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/03/WorldMap-Orgrimmar.jpg/revision/latest/scale-to-width-down/985?cb=20180117225339',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/785029-orgrimmar.jpg',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/51/Miwana%27s_Longhouse.jpg/revision/latest?cb=20110316055123',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/6/69/Miwana%27sLonghouse.jpg/revision/latest?cb=20110505001352',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/2/2e/Valley_of_Wisdom_Cata.jpg/revision/latest/smart/width/386/height/259?cb=20100712174443',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f7/Miwana.jpg/revision/latest/scale-to-width-down/585?cb=20150617175708',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/88/Auction_House_%28Valley_of_Wisdom%29.jpg/revision/latest/scale-to-width-down/1280?cb=20120703233936',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/7274-undercity.jpg',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8b/Undercity_Inn.jpg/revision/latest?cb=20071210023830',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/1118275-undercity.jpg',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://preview.redd.it/tscsfy4d5h131.jpg?auto=webp&s=35399d9de9ca8e99b5cdebc8fe73db967b23f8df',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/81/810MMRBAFVH11569603639384.jpg',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ea/FarstridersSquare2.jpg/revision/latest/scale-to-width-down/640?cb=20061129152404',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d3/Wowi10ss3.jpg/revision/latest/scale-to-width-down/750?cb=20061017234228',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://i.ytimg.com/vi/_n2NMzFAJ4o/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/63742-silvermoon-city-the-shepherds-gate.jpg',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d4/TheBazaar1.jpg/revision/latest/scale-to-width-down/640?cb=20061129154332',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/63/Wayfarer%27s_Rest_Tavern-elders.jpg/revision/latest?cb=20100819130931',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/R3ovPHB.png',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://external-preview.redd.it/zmZbI3CJJSYnMEbC_QKg9jPucebE7jUqANYR6uMrWdw.jpg?auto=webp&s=73cf652978dbb2cc184a512d1fa4647feecdf00e',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0bb46ca-d0b7-4eee-8eb5-dd07367838c0/d4j48f9-6a4fde78-a876-4943-b54b-1fc20a4834aa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC9jMGJiNDZjYS1kMGI3LTRlZWUtOGViNS1kZDA3MzY3ODM4YzBcL2Q0ajQ4ZjktNmE0ZmRlNzgtYTg3Ni00OTQzLWI1NGItMWZjMjBhNDgzNGFhLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMifV0.H2tNxx2fNmrLRzDSWTOFFDW4FWG4LWiMhZrPBdV1fYw',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e8/SunfuryCourt2.jpg/revision/latest/scale-to-width-down/985?cb=20210322171400',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ec/Gallows%27_End_Tavern.jpg/revision/latest/scale-to-width-down/600?cb=20060807170713',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://i.redd.it/qwg4deeas7x21.jpg',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://preview.redd.it/4jm1mcvxvxb31.png?auto=webp&s=dc792ff61a166d3fd1b355ce03e6742e6fd40605',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/2b/WorldMap-Tirisfal_Terrain1.jpg/revision/latest?cb=20180807170644',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/17/New_Agamand2.jpg/revision/latest/smart/width/386/height/259?cb=20100123231847',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7c/Vengeance_Landing.jpg/revision/latest/scale-to-width-down/1920?cb=20070806211634',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5f/Vengeance_Landing_2.jpg/revision/latest/scale-to-width-down/1200?cb=20080718112641',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/1/19/Vengance_landing_undead_ship.jpg/revision/latest?cb=20080821215326',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f2/WorldMap-HowlingFjord.jpg/revision/latest/scale-to-width-down/1002?cb=20090228125506',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/a/aa/Vengeance_Lift.jpg/revision/latest?cb=20100124010845',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/20/New_Agamand_Inn.jpg/revision/latest/scale-to-width-down/985?cb=20090604033934',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/fd/New_Agamand.jpg/revision/latest?cb=20070806210319',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/17/New_Agamand2.jpg/revision/latest/scale-to-width-down/1200?cb=20100123231847',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/f2/WorldMap-HowlingFjord.jpg/revision/latest?cb=20090228125506',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/NewAgamand-Utgarde.jpg/revision/latest?cb=20080905064447',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/80/Argenttournamment01.jpg/revision/latest/scale-to-width-down/858?cb=20090226203059',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8f/Argent_Pavilion.jpg/revision/latest/scale-to-width-down/732?cb=20090706034922',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/978739.jpg',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://blizzardwatch.com/wp-content/uploads/2023/01/bw-argent-tournament-grounds-nm.png',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/2f/The_Filthy_Animal.jpg/revision/latest?cb=20080920173638',
        preview: true
      },
      {
        spotId: 37,
        url: 'https://static.wikia.nocookie.net/theshatareu/images/9/99/Filthy_animal.jpg/revision/latest?cb=20090112044011',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://external-preview.redd.it/2h7J-lILgNyerhmkQpH6nCJFPVx1PBjOEF4RrVNjq9I.png?auto=webp&s=13521045e9b0d2dbf21190e4dfabd5a1b99992cf',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/interior-filthy-animal-cooking-set-wow.jpg',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5e/Windrunner%27s_Sanctuary_-_Portals.jpg/revision/latest/smart/width/386/height/259?cb=20190313001145',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5e/The_Salty_Sailor_Tavern.jpg/revision/latest/scale-to-width-down/600?cb=20061110100358',
        preview: true
      },
      {
        spotId: 38,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/86/The_Salty_Sailor_Tavern2.jpg/revision/latest?cb=20161208100845',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://i.ytimg.com/vi/u_6a2V0v_tg/maxresdefault.jpg',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ee/Booty_Bay_%28Post_Cata%29.jpg/revision/latest?cb=20200806065412',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/456158-booty-bay.jpg',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/0a/Light%27s_Hope_Chapel.jpg/revision/latest?cb=20101127082129',
        preview: true
      },
      {
        spotId: 39,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/62/WorldMap-EasternPlaguelands.jpg/revision/latest?cb=20140205150116',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/6a/Light%27s_Hope_07.jpg/revision/latest?cb=20170416141338',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/5/57/Light%27s_hope.jpg/revision/latest/scale-to-width-down/340?cb=20061231140934',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://64.media.tumblr.com/fa76ca0abf2300cc5b750be9121f70c1/14ec5b7b3fa58321-14/s540x810/aba73036a4552089e3a0302190069d547ec7055b.jpg',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ed/CoT.jpg/revision/latest?cb=20100614205255',
        preview: true
      },
      {
        spotId: 40,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d1/Caverns_of_Time_exterior.jpg/revision/latest/scale-to-width-down/2560?cb=20221005224900',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/1e/WorldMap-MicroDungeon-Tanaris-CavernsofTime.jpg/revision/latest?cb=20120609164201',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/402517-caverns-of-time.jpg',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://i.redd.it/dd6lrqe7xn921.jpg',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7f/Broken_Keel_Tavern.jpg/revision/latest/scale-to-width-down/732?cb=20071222062337',
        preview: true
      },
      {
        spotId: 41,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b1/Broken_Keel_Tavern2.jpg/revision/latest?cb=20161208100719',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a7/Barrens_070910_012726_-_Ratchet_-_Kirkburn_12319.jpg/revision/latest?cb=20100710165849',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/9/90/RatchetWide.jpg/revision/latest?cb=20080904045617',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4d/WorldMap-Barrens.jpg/revision/latest?cb=20130804220946',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/17/Speedbarge1.jpg/revision/latest?cb=20101129130248',
        preview: true
      },
      {
        spotId: 42,
        url: 'https://preview.redd.it/sln3kshyabw31.jpg?auto=webp&s=ec18ff805b331d149dfa4b11752e27d49c39b631',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/2/27/WoWScrnShot_091812_170423.jpg/revision/latest/scale-to-width-down/1680?cb=20120918201653',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/69/WorldMap-ThousandNeedles.jpg/revision/latest?cb=20140216144243',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ee/Cataclysm_Thousand_Needles_Barge2.jpg/revision/latest/scale-to-width-down/1200?cb=20100604161556',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b7/Cenarion_Hold.jpg/revision/latest?cb=20051103232705',
        preview: true
      },
      {
        spotId: 43,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4a/WorldMap-Silithus_Terrain1.jpg/revision/latest?cb=20191205184835',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Cenarion-Hold_Silithus.jpg',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/925387.jpg',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/33/The_Oasis_Inn.jpg/revision/latest/scale-to-width-down/1200?cb=20161208100831',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/82/Nordrassil_Inn.jpg/revision/latest?cb=20160618211703',
        preview: true
      },
      {
        spotId: 44,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/WorldMap-Hyjal_terrain1.jpg/revision/latest?cb=20190825202314',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/e/e5/Nordrassil_Cataclysm.jpg/revision/latest?cb=20100413225621',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/6e/Nordrassil.jpg/revision/latest/scale-to-width-down/1200?cb=20160618211000',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/14/Nordrassil2.jpg/revision/latest/scale-to-width-down/1280?cb=20180709193741',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a2/Schnottz%27s_Hostel.jpg/revision/latest/scale-to-width-down/1200?cb=20190601141819',
        preview: true
      },
      {
        spotId: 45,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/c/c1/Schnottz%27sLanding.jpg/revision/latest/scale-to-width-down/985?cb=20111001183631',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/f/f1/Schnottz%27sLanding1.jpg/revision/latest/scale-to-width-down/985?cb=20111001183709',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/WorldMap-Uldum_terrain1.jpg/revision/latest?cb=20140216144539',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/b/bb/Maker%27sAscent.jpg/revision/latest?cb=20111010180701',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8a/Aldor_Rise.jpg/revision/latest/scale-to-width-down/985?cb=20220807213613',
        preview: true
      },
      {
        spotId: 46,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/248294-the-aldor.jpg',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/a/a1/Aldor_Inn.jpg/revision/latest/scale-to-width-down/600?cb=20070204132621',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://warcraft.wiki.gg/images/thumb/e/ea/Aldor_faction.png/800px-Aldor_faction.png',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4a/High_Enchanter_Bardolan.jpg/revision/latest/smart/width/386/height/259?cb=20151203165559',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/20764-the-scryers-scryers-tier-in-shattrath-city-found-in-terokkar-forrest-outland.jpg',
        preview: true
      },
      {
        spotId: 47,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ec/Scryer_terrace.jpg/revision/latest/scale-to-width-down/1200?cb=20230328142230',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/db/WorldMap-ShattrathCity.jpg/revision/latest?cb=20190728014905',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/487208-shattrath-city.jpg',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d4/ScryersTier_angle.jpg/revision/latest/scale-to-width-down/1200?cb=20230328142320',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/9/94/Drunken_Hozen.jpg/revision/latest/scale-to-width-down/1440?cb=20121213054402',
        preview: true
      },
      {
        spotId: 48,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/Drunken_Hozen_Brawler.png/revision/latest?cb=20200715200251',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d6/Windward_Isle.jpg/revision/latest/smart/width/386/height/259?cb=20120406064530',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/35/Welcome_to_Dawn%27s_Blossom.jpg/revision/latest/smart/width/386/height/259?cb=20120524053411',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/2f/WorldMap-TheJadeForest.jpg/revision/latest/scale-to-width-down/501?cb=20180412115543',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/f/fd/Greenstone_Inn.jpg/revision/latest/scale-to-width-down/1440?cb=20120607032403',
        preview: true
      },
      {
        spotId: 49,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/ee/Greenstone_Village.jpg/revision/latest?cb=20121213050501',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/e/e2/GreenstoneQuarry.jpg/revision/latest?cb=20120424031358',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/2/2f/WorldMap-TheJadeForest.jpg/revision/latest?cb=20140125032928',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4b/WorldMap-TheJadeForestScenario.jpg/revision/latest/scale-to-width-down/985?cb=20190806114625',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/289127-temple-of-the-jade-serpent-outside-of-the-temple-of-the-jade-serpent.jpg',
        preview: true
      },
      {
        spotId: 50,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/3b/Serpent%27s_Overlook.jpg/revision/latest?cb=20120524034122',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/9/91/Jade_Forest_6.jpg/revision/latest?cb=20120316021255',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5e/Jade_Temple_Grounds_village.jpg/revision/latest?cb=20121213054805',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://static.icy-veins.com/images/wow/og-images/temple-of-the-jade-serpent.jpg',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d1/Chun_Tian_Monastery.jpg/revision/latest?cb=20120406051707',
        preview: true
      },
      {
        spotId: 51,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/8/8f/TianMonastery.jpg/revision/latest/scale-to-width-down/1200?cb=20120426034938',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://warcraft.wiki.gg/images/thumb/2/2f/WorldMap-TheJadeForest.jpg/300px-WorldMap-TheJadeForest.jpg',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4e/Paur%27s_Pub.jpg/revision/latest/smart/width/386/height/259?cb=20120525184139',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/74/Bolo_the_Elder.jpg/revision/latest/smart/width/386/height/259?cb=20210315142651',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/22/Sri-La_Inn.jpg/revision/latest/scale-to-width-down/1200?cb=20121213060618',
        preview: true
      },
      {
        spotId: 52,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/44/Sri-La_Village_2.jpg/revision/latest/scale-to-width-down/1919?cb=20220101103956',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/2/27/ShaLaVillage.jpg/revision/latest/scale-to-width-down/1200?cb=20120424031358',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/4d/Sri-La_Village.jpg/revision/latest/scale-to-width-down/1200?cb=20220101104306',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/1/14/Sunbreak_Spire.jpg/revision/latest/smart/width/386/height/259?cb=20120406062508',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/cd/Thunderfoot_Inn.jpg/revision/latest/scale-to-width-down/1200?cb=20130111052618',
        preview: true
      },
      {
        spotId: 53,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/78/Thunderfoot_Ranch.jpg/revision/latest/scale-to-width-down/1440?cb=20120504000131',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://warcraft.wiki.gg/images/thumb/b/b7/WorldMap-ValleyoftheFourWinds.jpg/300px-WorldMap-ValleyoftheFourWinds.jpg',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://warcraft.wiki.gg/images/thumb/4/45/Thunderfoot_Farm.jpg/640px-Thunderfoot_Farm.jpg',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b7/WorldMap-ValleyoftheFourWinds.jpg/revision/latest/scale-to-width-down/985?cb=20130804223350',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/38/Halfhill.jpg/revision/latest?cb=20120824152029',
        preview: true
      },
      {
        spotId: 54,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/3/38/Halfhill.jpg/revision/latest/scale-to-width-down/1200?cb=20120503034730',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://i.redd.it/1t4fmh27uox61.jpg',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/ee/HalfhillMarket.jpg/revision/latest/scale-to-width-down/1200?cb=20120503034730',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/3/34/LazyTurnip.jpg/revision/latest/scale-to-width-down/1280?cb=20120630215503',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/46/Stone_Mug_Tavern.jpg/revision/latest/scale-to-width-down/1200?cb=20120428040245',
        preview: true
      },
      {
        spotId: 55,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/54/Stoneplow.jpg/revision/latest?cb=20120421002528',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://wow.zamimg.com/uploads/screenshots/normal/333188-the-savior-of-stoneplow.jpg',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/62/Stoneplow_Fields.jpg/revision/latest?cb=20120421014906',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://static.wikia.nocookie.net/moon-guard/images/9/90/Stoneplow3.png/revision/latest?cb=20150914082404',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/da/Zhu%27s_Watch.jpg/revision/latest?cb=20140604230126',
        preview: true
      },
      {
        spotId: 56,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/f/f8/Zhu%27sWatch.jpg/revision/latest?cb=20120510035358',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/WorldMap-Krasarang.jpg/revision/latest/scale-to-width-down/300?cb=20120606061307',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/6b/Zhu%27s_Despair.jpg/revision/latest/scale-to-width-down/1200?cb=20120427021102',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/da/Zhu_Province.jpg/revision/latest/scale-to-width-down/985?cb=20140604225958',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8a/Marista.jpg/revision/latest/scale-to-width-down/1200?cb=20120429033056',
        preview: true
      },
      {
        spotId: 57,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/8/8a/Marista.jpg/revision/latest/scale-to-width-down/1200?cb=20120513054104',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b7/Marista%27s_Bait_%26_Brew.jpg/revision/latest/scale-to-width-down/1200?cb=20120429033236',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/WorldMap-Krasarang.jpg/revision/latest/scale-to-width-down/1002?cb=20120606061307',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/2e/WorldMap-BrewmasterScenario03.jpg/revision/latest/scale-to-width-down/985?cb=20120922073242',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8b/Tavern_in_the_Mists.jpg/revision/latest?cb=20120429041657',
        preview: true
      },
      {
        spotId: 58,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/d/d1/WorldMap-VeiledStair.jpg/revision/latest?cb=20120519042400',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0xcH_KpwFHmqGsRz55w__Fd6NP_jJIMug&s',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/21/A_History_of_the_Veiled_Stair.jpg/revision/latest?cb=20170402095017',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7c/Silkweed.jpg/revision/latest/smart/width/386/height/259?cb=20120617232322',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/c2/Binan_Brew_%26_Stew.jpg/revision/latest/scale-to-width-down/1200?cb=20120521012440',
        preview: true
      },
      {
        spotId: 59,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/3/34/BinanVillage.jpg/revision/latest/scale-to-width-down/1200?cb=20120517033859',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/b/b3/WorldMap-KunLaiSummit.jpg/revision/latest?cb=20121229045958',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02934147-3141-4c3a-b5bc-ed72b6c20624/d6txc2y-234c39c3-99c8-4cb8-8a6e-765914b8ea65.jpg/v1/fill/w_1024,h_641,q_75,strp/kun_lai_summit__binan_village_by_bluemead_d6txc2y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDEiLCJwYXRoIjoiXC9mXC8wMjkzNDE0Ny0zMTQxLTRjM2EtYjViYy1lZDcyYjZjMjA2MjRcL2Q2dHhjMnktMjM0YzM5YzMtOTljOC00Y2I4LThhNmUtNzY1OTE0YjhlYTY1LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMifV0.mCj3NdkU-C08-f8PvHQ8fFa_B47zzr7CXdw-Ercu0mc',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://syrco.wordpress.com/wp-content/uploads/2014/11/pandaria3.jpg',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8b/Tavern_in_the_Mists.jpg/revision/latest?cb=20120429041657',
        preview: true
      },
      {
        spotId: 60,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d1/WorldMap-VeiledStair.jpg/revision/latest?cb=20120519042400',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0xcH_KpwFHmqGsRz55w__Fd6NP_jJIMug&s',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/21/A_History_of_the_Veiled_Stair.jpg/revision/latest?cb=20170402095017',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7c/Silkweed.jpg/revision/latest/smart/width/386/height/259?cb=20120617232322',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/8b/Tavern_in_the_Mists.jpg/revision/latest?cb=20120429041657',
        preview: true
      },
      {
        spotId: 61,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d1/WorldMap-VeiledStair.jpg/revision/latest?cb=20120519042400',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0xcH_KpwFHmqGsRz55w__Fd6NP_jJIMug&s',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/2/21/A_History_of_the_Veiled_Stair.jpg/revision/latest?cb=20170402095017',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/7c/Silkweed.jpg/revision/latest/smart/width/386/height/259?cb=20120617232322',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/4/43/Lucky_Traveler.jpg/revision/latest?cb=20120521013114',
        preview: true
      },
      {
        spotId: 62,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFiD1ebkWM606wzEq6OoZNCkShmjbq8jApA&s',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://warcraft.wiki.gg/images/thumb/d/d6/Grummle_Bazaar.jpg/640px-Grummle_Bazaar.jpg',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTng1-2PqrWfay2Y4Bl5XLgUFfxCluu6tpL8w&s',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/35/Grummle_Bazaar_bazaar.jpg/revision/latest?cb=20130516191350',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/8/84/North_Wind_Tavern.jpg/revision/latest/scale-to-width-down/1440?cb=20120521013306',
        preview: true
      },
      {
        spotId: 63,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/64/Zouchin_Village.jpg/revision/latest/scale-to-width-down/1200?cb=20120522010246',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/8/8b/ZouchinVillage.jpg/revision/latest/scale-to-width-down/1200?cb=20120520055611',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/67/Zouchin_Province.jpg/revision/latest?cb=20120521013917',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/7/76/Zouchin_Strand.jpg/revision/latest/scale-to-width-down/1440?cb=20120521013959',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e8/Chum_Bucket.jpg/revision/latest/scale-to-width-down/1440?cb=20120614211542',
        preview: true
      },
      {
        spotId: 64,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/6/68/Soggy%27sGamble.jpg/revision/latest/scale-to-width-down/1200?cb=20120603075913',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/3/3c/WorldMap-DreadWastes.jpg/revision/latest?cb=20130804223754',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://www.gamingcfg.com/img/6797/Soggy-s-Gamble.jpg',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/6/65/Sharking.jpg/revision/latest?cb=20200916133442',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://static.wikia.nocookie.net/wowwiki/images/2/2f/MistfallVillage.jpg/revision/latest/scale-to-width-down/1200?cb=20120607035419',
        preview: true
      },
      {
        spotId: 65,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/a/a0/Attack_on_Mistfall_Village.jpg/revision/latest?cb=20120621032635',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/d/d9/WorldMap-ThreatValeofEternalBlossoms.jpg/revision/latest?cb=20191205185354',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/c/ca/Mistfall_Village.jpg/revision/latest/scale-to-width-down/1440?cb=20120614224725',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://mushanetc.wordpress.com/wp-content/uploads/2013/09/wowscrnshot_090913_212751.jpg',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://i.ytimg.com/vi/Qsh4DrSb0s8/maxresdefault.jpg',
        preview: true
      },
      {
        spotId: 66,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/WorldMap-Dalaran.jpg/revision/latest?cb=20180908204325',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/5/5a/Ledgerdemain_Lounge.jpg/revision/latest/scale-to-width-down/1440?cb=20090516222226',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/92726196755223475/0296119A3F542A9C341CB38B24C0D06224DD3251/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://static.wikia.nocookie.net/wowpedia/images/e/e8/Legerdemain_Lounge.jpg/revision/latest?cb=20090308014121',
        preview: false
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
