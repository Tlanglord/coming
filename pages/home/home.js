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
    indicatorDots: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function(res) {
    console.log(res.from);

    let share = { "title": "我们结婚啦", "imageUrl":"http://pic.qiantucdn.com/58pic/19/29/54/82M58PICK2q_1024.jpg'"};

    return share;
  }
})