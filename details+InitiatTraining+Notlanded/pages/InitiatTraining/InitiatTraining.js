// pages/faqi/faqi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: '',
    time: '',
    destination: '',
    discription: '',
    poster: '',
    imagesList: []
  },

  //按钮的点击实现
  ThemeInput: function (e) {
    //设置主题
    this.setData({
      theme: e.detail.value
    })
  },
  TimeInput: function (e) {
    //设置时间
    this.setData({
      time: e.detail.value
    })
  },
  DestinationInput: function (e) {
    //设置地点
    this.setData({
      destination: e.detail.value
    })
  },
  DiscriptionInput: function (e) {
    //设置主题
    this.setData({
      discription: e.detail.value
    })
  },
  setSubmit: function (e) {
    var theme = this.data.theme;
    console.log(theme)
    var time = this.data.time;
    console.log(time)
    var destination = this.data.destination;
    console.log(destination)
    var discription = this.data.discription;
    console.log(discription)
    var poster = this.data.poster;
  },
  // 点击加号上传图片
  gotoShow: function () {
    var _this = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        _this.setData({
          imagesList: res.tempFilePaths
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imagesList // 需要预览的图片http链接列表  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})