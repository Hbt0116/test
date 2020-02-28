//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    shows: false,
    selectDatas: ['我的培训', '未通过', '已报备'],
    indexs: 0,
    logs: []
  },

  goToInitiatTraining: function () {
    wx.navigateTo({
      url: '../InitiatTraining/InitiatTraining'
    })
  },



  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
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

