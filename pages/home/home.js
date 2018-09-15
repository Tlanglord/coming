// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: false,
    imgUrls: [
      './../../images/album/ab_1.jpg',
      './../../images/album/ab_2.jpg',
      './../../images/album/ab_3.jpg',
      './../../images/album/ab_4.jpg',
      './../../images/album/ab_5.jpg',
      './../../images/album/ab_6.jpg',
      './../../images/album/ab_7.jpg'
    ],
    indicatorDots: false,
    isPlayingMusic: true,
    music_url: "http://dl.stream.qqmusic.qq.com/C100000gSW7F2IKT1w.m4a?fromtag=46"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.playBackgroundAudio({
      dataUrl: "http://dl.stream.qqmusic.qq.com/C100000gSW7F2IKT1w.m4a?fromtag=46",
      title: '',
      coverImgUrl: ''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  play: function (event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      console.log('this.data.music_url', this.data.music_url)
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})