//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    shows: false,
    selectDatas: ['2020上半年', '2020下半年', '2021上半年', '2021下半年'],
    indexs: 0,
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  goToInitiatTraining: function () {
    wx.navigateTo({
      url: '../InitiatTraining/InitiatTraining'
    })
  },
  
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  optionTaps(e) {
    let Indexs = e.currrentTarget.dataset.index;
    console.log(Indexs)
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows
    });
  },


})

