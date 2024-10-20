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
        url: 'https://i.imgur.com/zIG6lIa.jpeg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://i.imgur.com/ZctUPu1.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://i.imgur.com/XP7YtT7.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://i.imgur.com/1H9MWKr.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://i.imgur.com/jHZZg5B.jpeg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i.imgur.com/gL0JKwG.png',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://i.imgur.com/E1lACbn.jpeg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i.imgur.com/Oj2iVXT.png',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i.imgur.com/cSbaS65.png',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i.imgur.com/hyto2uZ.png',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://i.imgur.com/2mydarg.png',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://i.imgur.com/XHuwavG.jpeg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://i.imgur.com/1bue3TS.png',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://i.imgur.com/52WuJMM.png',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://i.imgur.com/2QoSZ7k.png',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://i.imgur.com/qIxM8yv.png',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://i.imgur.com/bB0G6y2.png',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://i.imgur.com/6BqRcu7.jpeg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://i.imgur.com/t7BCi1Q.png',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://i.imgur.com/LBbbq3A.png',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i.imgur.com/YXxuOoi.png',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://i.imgur.com/55u2Au4.jpeg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i.imgur.com/4B7ufde.jpeg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i.imgur.com/ADcja31.png',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i.imgur.com/QjgvpRE.jpeg',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://i.imgur.com/rk2GNSX.png',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://i.imgur.com/wFOGA3Q.png',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://i.imgur.com/Jysj3YU.png',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://i.imgur.com/EyK89iW.jpeg',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://i.imgur.com/TvCYJ3D.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://i.imgur.com/m4xVCvf.png',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://i.imgur.com/MkxsiVc.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://i.imgur.com/2bGqeMq.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://i.imgur.com/uAaDcLP.jpeg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://i.imgur.com/FKSI93K.png',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://i.imgur.com/LBTDhMM.png',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://i.imgur.com/Xo5szI0.jpeg',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://i.imgur.com/FIiRq6k.png',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://i.imgur.com/0X4nQOC.jpeg',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://i.imgur.com/PHiWLU7.jpeg',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/F3k2An3.png',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/ru9o6cY.png',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/5AV2zXv.jpeg',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/T2eClVw.jpeg',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://i.imgur.com/Rn61WuW.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://i.imgur.com/qUTiag7.png',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://i.imgur.com/PrbtYI4.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://i.imgur.com/FYUjbkz.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://i.imgur.com/chPR6of.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://i.imgur.com/1VGO85l.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://i.imgur.com/6AsiGCS.png',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://i.imgur.com/e0bGweR.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://i.imgur.com/MOYE7i4.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://i.imgur.com/P3bX3eT.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://i.imgur.com/hQOHLKj.png',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://i.imgur.com/mu2qTQZ.png',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://i.imgur.com/Qb0gzy8.png',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://i.imgur.com/8WwnmnZ.jpeg',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://i.imgur.com/RGQE2IS.png',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://i.imgur.com/8ckB6uL.png',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://i.imgur.com/E4nps7n.jpeg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://i.imgur.com/seWQnxt.jpeg',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://i.imgur.com/vX9XmdC.png',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://i.imgur.com/zt2SmaV.png',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://i.imgur.com/g2XNKWR.jpeg',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://i.imgur.com/4pDs9rb.png',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://i.imgur.com/g2c5qeV.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://i.imgur.com/Jjj89gJ.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://i.imgur.com/w6BfVZX.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://i.imgur.com/szSdO5W.png',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://i.imgur.com/xgPMjnf.jpeg',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://i.imgur.com/7VNLrT2.png',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://i.imgur.com/kL2kcJu.png',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://i.imgur.com/fOWWdvi.jpeg',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://i.imgur.com/bEVJpec.png',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://i.imgur.com/Y4WCibL.png',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://i.imgur.com/cRIP8Bt.png',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://i.imgur.com/meFlDee.png',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://i.imgur.com/oeQSGSg.jpeg',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://i.imgur.com/5RAtxzw.jpeg',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://i.imgur.com/M6nKbIQ.png',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://i.imgur.com/KlNbiY6.png',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://i.imgur.com/qFs4g7k.png',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://i.imgur.com/Lk18OX9.png',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://i.imgur.com/3JF2UIB.png',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://i.imgur.com/lIbmi8n.png',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://i.imgur.com/aPmkOLp.png',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://i.imgur.com/oSBifJx.png',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://i.imgur.com/r42EEMy.png',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://i.imgur.com/CIkPvvD.png',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://i.imgur.com/kzCKz7X.png',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://i.imgur.com/zx6T8U0.png',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://i.imgur.com/AbTZWYJ.png',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://i.imgur.com/b4RdVQv.png',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://i.imgur.com/RAlTmtJ.png',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://i.imgur.com/CaPsIJI.png',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://i.imgur.com/wqO7Ay2.png',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://i.imgur.com/G47P8mt.png',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://i.imgur.com/pV4tlHb.png',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://i.imgur.com/FzH9q6j.png',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://i.imgur.com/OjBI8X3.png',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://i.imgur.com/xvN02tt.png',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://i.imgur.com/L9NjV72.png',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://i.imgur.com/NRbpPZx.png',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://i.imgur.com/exoaWdp.png',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://i.imgur.com/UaKMwvd.png',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://i.imgur.com/SmO6iEm.png',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://i.imgur.com/EPL8Fmg.png',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://i.imgur.com/qNUFGyL.png',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://i.imgur.com/ofwOYFM.png',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://i.imgur.com/p3V2oBN.png',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://i.imgur.com/9tBKwAs.png',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://i.imgur.com/YEV5Qyy.png',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://i.imgur.com/HahtOlx.png',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://i.imgur.com/xR3BpvU.png',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://i.imgur.com/smjC4Uo.png',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://i.imgur.com/8fzda84.png',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://i.imgur.com/hpWdyL3.png',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://i.imgur.com/YendepJ.png',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://i.imgur.com/pr4uYxd.png',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/luQ4Hbz.png',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/zRpiG8E.png',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/DEOdssf.png',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/4ulCprw.png',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://i.imgur.com/g3LuWMq.png',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://i.imgur.com/viAtNFY.png',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://i.imgur.com/M1zTOqd.png',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://i.imgur.com/iD79RUM.png',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://i.imgur.com/6ADiZ7F.png',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://i.imgur.com/aMI5mB3.png',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://i.imgur.com/lkduqcm.png',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://i.imgur.com/CJX7Bro.png',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://i.imgur.com/GqukhFd.png',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://i.imgur.com/ZkZX2AR.png',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://i.imgur.com/1atmRlU.png',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://i.imgur.com/PY3gZRe.png',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://i.imgur.com/3ZnRbG0.png',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://i.imgur.com/Nbuk3Nm.png',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://i.imgur.com/MUU0o9u.png',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://i.imgur.com/GNZkCq1.png',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://i.imgur.com/TYXAc2B.png',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://i.imgur.com/UUV0Xid.png',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://i.imgur.com/vNYtfCN.png',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://i.imgur.com/ZKWw6Pm.png',
        preview: false
      },
      {
        spotId: 29,
        url: 'https://i.imgur.com/DVIDro3.png',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://i.imgur.com/9EKtEz0.png',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://i.imgur.com/yukJ7ny.png',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://i.imgur.com/NXi1MB4.png',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://i.imgur.com/fdbYjNW.png',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://i.imgur.com/zrcbG9R.png',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://i.imgur.com/TMvnsqv.png',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://i.imgur.com/hYHwIKR.png',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://i.imgur.com/EJXzGWd.png',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://i.imgur.com/rrFP6WK.png',
        preview: false
      },
      {
        spotId: 31,
        url: 'https://i.imgur.com/4JcmDlT.png',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/PJqgEcR.png',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/XLXAXrn.png',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/00yL94r.png',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/jDyOuI5.png',
        preview: false
      },
      {
        spotId: 32,
        url: 'https://i.imgur.com/RyegDVl.png',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://i.imgur.com/Eggf7QL.png',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://i.imgur.com/YroK1fs.png',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://i.imgur.com/3m9GMl9.png',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://i.imgur.com/R7D1haI.png',
        preview: false
      },
      {
        spotId: 33,
        url: 'https://i.imgur.com/NBSQCQd.png',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://i.imgur.com/WcGKFjB.png',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://i.imgur.com/SVG133i.png',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://i.imgur.com/HnUFP1W.png',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://i.imgur.com/j62Ou4u.png',
        preview: false
      },
      {
        spotId: 34,
        url: 'https://i.imgur.com/aWO2eVz.png',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://i.imgur.com/XOdHMs9.png',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://i.imgur.com/pQ3tcXr.png',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://i.imgur.com/rph7Diw.png',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://i.imgur.com/MAXHiFb.png',
        preview: false
      },
      {
        spotId: 35,
        url: 'https://i.imgur.com/IdyXPZc.png',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://i.imgur.com/YnVkpu7.png',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://i.imgur.com/fzdXe0i.png',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://i.imgur.com/TJGdKLg.png',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://i.imgur.com/IY1oL1k.png',
        preview: false
      },
      {
        spotId: 36,
        url: 'https://i.imgur.com/RJ45kaS.png',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://i.imgur.com/TXxHXAY.png',
        preview: true
      },
      {
        spotId: 37,
        url: 'https://i.imgur.com/fEWuib4.png',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://i.imgur.com/NFVDfOn.png',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://i.imgur.com/4MtXohB.png',
        preview: false
      },
      {
        spotId: 37,
        url: 'https://i.imgur.com/eflrAK9.png',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://i.imgur.com/vvuLsOD.png',
        preview: true
      },
      {
        spotId: 38,
        url: 'https://i.imgur.com/TtuNheA.png',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://i.imgur.com/MnrT9vp.png',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://i.imgur.com/nIWsiyE.png',
        preview: false
      },
      {
        spotId: 38,
        url: 'https://i.imgur.com/zp5it41.png',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://i.imgur.com/hWKyaVN.png',
        preview: true
      },
      {
        spotId: 39,
        url: 'https://i.imgur.com/Jre9SYJ.png',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://i.imgur.com/hJaWusr.png',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://i.imgur.com/FvQMNpj.png',
        preview: false
      },
      {
        spotId: 39,
        url: 'https://i.imgur.com/dunZLS2.png',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://i.imgur.com/IPkzVD0.png',
        preview: true
      },
      {
        spotId: 40,
        url: 'https://i.imgur.com/dSH8Cfp.png',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://i.imgur.com/FhMGx10.png',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://i.imgur.com/FjsJAq0.png',
        preview: false
      },
      {
        spotId: 40,
        url: 'https://i.imgur.com/4v5Vc69.png',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://i.imgur.com/qOLc5YA.png',
        preview: true
      },
      {
        spotId: 41,
        url: 'https://i.imgur.com/XXspfkY.png',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://i.imgur.com/5N96KPz.png',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://i.imgur.com/ikDjM8V.png',
        preview: false
      },
      {
        spotId: 41,
        url: 'https://i.imgur.com/OERZtyi.png',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://i.imgur.com/VlvYLEZ.png',
        preview: true
      },
      {
        spotId: 42,
        url: 'https://i.imgur.com/I3QMx2N.png',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://i.imgur.com/8BN1Sj9.png',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://i.imgur.com/0hzAjic.png',
        preview: false
      },
      {
        spotId: 42,
        url: 'https://i.imgur.com/93Mcvqk.png',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://i.imgur.com/8V05IGl.png',
        preview: true
      },
      {
        spotId: 43,
        url: 'https://i.imgur.com/JcyXrtj.png',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://i.imgur.com/8yVQHdh.png',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://i.imgur.com/XP8R1bo.png',
        preview: false
      },
      {
        spotId: 43,
        url: 'https://i.imgur.com/AcsPQiX.png',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://i.imgur.com/ezeUCxj.png',
        preview: true
      },
      {
        spotId: 44,
        url: 'https://i.imgur.com/U8sW6zM.png',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://i.imgur.com/pjHOIOB.png',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://i.imgur.com/sqbXxb7.png',
        preview: false
      },
      {
        spotId: 44,
        url: 'https://i.imgur.com/IpMutMt.png',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://i.imgur.com/9acyekr.png',
        preview: true
      },
      {
        spotId: 45,
        url: 'https://i.imgur.com/IFrbbFe.png',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://i.imgur.com/3qQfhMQ.png',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://i.imgur.com/FfsLh7X.png',
        preview: false
      },
      {
        spotId: 45,
        url: 'https://i.imgur.com/g7tEHEa.png',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://i.imgur.com/FQlnpDa.png',
        preview: true
      },
      {
        spotId: 46,
        url: 'https://i.imgur.com/Wk89M6U.png',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://i.imgur.com/i0jMNBb.png',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://i.imgur.com/wDIeQdd.png',
        preview: false
      },
      {
        spotId: 46,
        url: 'https://i.imgur.com/EppF9ob.png',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://i.imgur.com/BgQO4ut.png',
        preview: true
      },
      {
        spotId: 47,
        url: 'https://i.imgur.com/gNUKGTG.png',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://i.imgur.com/buxkfJN.png',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://i.imgur.com/fCN6FRe.png',
        preview: false
      },
      {
        spotId: 47,
        url: 'https://i.imgur.com/FwG1Y02.png',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://i.imgur.com/CZ9ednx.png',
        preview: true
      },
      {
        spotId: 48,
        url: 'https://i.imgur.com/UxXyxVP.png',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://i.imgur.com/bT2TEtz.png',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://i.imgur.com/H5O1omc.png',
        preview: false
      },
      {
        spotId: 48,
        url: 'https://i.imgur.com/2RXueFq.png',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://i.imgur.com/XkjtuMj.png',
        preview: true
      },
      {
        spotId: 49,
        url: 'https://i.imgur.com/OIpkEEq.png',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://i.imgur.com/Tk85ZGw.png',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://i.imgur.com/PIsUM6g.png',
        preview: false
      },
      {
        spotId: 49,
        url: 'https://i.imgur.com/CmtyeW0.png',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://i.imgur.com/FH0uAhT.png',
        preview: true
      },
      {
        spotId: 50,
        url: 'https://i.imgur.com/dJUw2Ko.png',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://i.imgur.com/7RIgIZE.png',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://i.imgur.com/bjvfv6h.png',
        preview: false
      },
      {
        spotId: 50,
        url: 'https://i.imgur.com/DHSYnlB.png',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://i.imgur.com/CHspY9Y.png',
        preview: true
      },
      {
        spotId: 51,
        url: 'https://i.imgur.com/6XF0QDg.png',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://i.imgur.com/sD7JllW.png',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://i.imgur.com/Z7jVn2t.png',
        preview: false
      },
      {
        spotId: 51,
        url: 'https://i.imgur.com/z2n4ndt.png',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://i.imgur.com/vDdl237.png',
        preview: true
      },
      {
        spotId: 52,
        url: 'https://i.imgur.com/mH8NWZq.png',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://i.imgur.com/pfaiuTw.png',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://i.imgur.com/EhlHRko.png',
        preview: false
      },
      {
        spotId: 52,
        url: 'https://i.imgur.com/EZbydvo.png',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://i.imgur.com/NpNKIu0.png',
        preview: true
      },
      {
        spotId: 53,
        url: 'https://i.imgur.com/f4LzIWj.png',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://i.imgur.com/QV9xbEf.png',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://i.imgur.com/2MfrT36.png',
        preview: false
      },
      {
        spotId: 53,
        url: 'https://i.imgur.com/TqN9VS1.png',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://i.imgur.com/jb1WxGy.png',
        preview: true
      },
      {
        spotId: 54,
        url: 'https://i.imgur.com/2BEs0oo.png',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://i.imgur.com/6StIHhC.png',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://i.imgur.com/3h1oDxm.png',
        preview: false
      },
      {
        spotId: 54,
        url: 'https://i.imgur.com/Ku9WK3S.png',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://i.imgur.com/WA0aqmo.png',
        preview: true
      },
      {
        spotId: 55,
        url: 'https://i.imgur.com/BlVU2HC.png',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://i.imgur.com/Ot90Q7N.png',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://i.imgur.com/c22Axb0.png',
        preview: false
      },
      {
        spotId: 55,
        url: 'https://i.imgur.com/4Fel9dh.png',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://i.imgur.com/WXptqTe.png',
        preview: true
      },
      {
        spotId: 56,
        url: 'https://i.imgur.com/emliQEm.png',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://i.imgur.com/5o3NuNa.png',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://i.imgur.com/O2ikdq6.png',
        preview: false
      },
      {
        spotId: 56,
        url: 'https://i.imgur.com/huVBM1t.png',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://i.imgur.com/CwbFcVM.png',
        preview: true
      },
      {
        spotId: 57,
        url: 'https://i.imgur.com/XI0J7SI.png',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://i.imgur.com/By44kpo.png',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://i.imgur.com/T483qIQ.png',
        preview: false
      },
      {
        spotId: 57,
        url: 'https://i.imgur.com/MuwOUbM.png',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://i.imgur.com/z5oJza0.png',
        preview: true
      },
      {
        spotId: 58,
        url: 'https://i.imgur.com/29AtBiX.png',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://i.imgur.com/Tg5JjT6.png',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://i.imgur.com/acrt2XA.png',
        preview: false
      },
      {
        spotId: 58,
        url: 'https://i.imgur.com/3YfbbvY.png',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://i.imgur.com/4wm1DzD.png',
        preview: true
      },
      {
        spotId: 59,
        url: 'https://i.imgur.com/dPeoQCA.png',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://i.imgur.com/DDTlvF0.png',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://i.imgur.com/kg4F7ok.png',
        preview: false
      },
      {
        spotId: 59,
        url: 'https://i.imgur.com/xIcPkTs.png',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://i.imgur.com/dzOjlzH.png',
        preview: true
      },
      {
        spotId: 60,
        url: 'https://i.imgur.com/i50HcAm.png',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://i.imgur.com/D9WcLo8.png',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://i.imgur.com/7EQNG0X.png',
        preview: false
      },
      {
        spotId: 60,
        url: 'https://i.imgur.com/IGilhZh.png',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://i.imgur.com/n085Fxo.png',
        preview: true
      },
      {
        spotId: 61,
        url: 'https://i.imgur.com/cFMg4Ks.png',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://i.imgur.com/ymGPIPy.png',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://i.imgur.com/wNsZKm3.png',
        preview: false
      },
      {
        spotId: 61,
        url: 'https://i.imgur.com/wGydp0H.png',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://i.imgur.com/VGmKtZD.png',
        preview: true
      },
      {
        spotId: 62,
        url: 'https://i.imgur.com/p9nQz5s.png',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://i.imgur.com/HP90xlm.png',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://i.imgur.com/Ix0i3Sc.png',
        preview: false
      },
      {
        spotId: 62,
        url: 'https://i.imgur.com/jNAGLW2.png',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://i.imgur.com/0CKAjWg.png',
        preview: true
      },
      {
        spotId: 63,
        url: 'https://i.imgur.com/BcWSQRJ.png',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://i.imgur.com/dXwqbi6.png',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://i.imgur.com/IKCi0PQ.png',
        preview: false
      },
      {
        spotId: 63,
        url: 'https://i.imgur.com/7frjLae.png',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://i.imgur.com/0ge11vU.png',
        preview: true
      },
      {
        spotId: 64,
        url: 'https://i.imgur.com/K45FiRh.png',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://i.imgur.com/AqBkSrX.png',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://i.imgur.com/Noa7XcU.png',
        preview: false
      },
      {
        spotId: 64,
        url: 'https://i.imgur.com/3CRZJvD.png',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://i.imgur.com/9FsAq7k.png',
        preview: true
      },
      {
        spotId: 65,
        url: 'https://i.imgur.com/0Vg4C4U.png',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://i.imgur.com/WFaAqyJ.png',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://i.imgur.com/sEfx3uT.png',
        preview: false
      },
      {
        spotId: 65,
        url: 'https://i.imgur.com/zAVskAs.png',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://i.imgur.com/q4UDEmT.png',
        preview: true
      },
      {
        spotId: 66,
        url: 'https://i.imgur.com/2tlI8iK.png',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://i.imgur.com/TjEOoX8.png',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://i.imgur.com/CFCGQBI.png',
        preview: false
      },
      {
        spotId: 66,
        url: 'https://i.imgur.com/bLc7k9s.png',
        preview: false
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
