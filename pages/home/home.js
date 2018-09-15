// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anim: {},
    imgUrls: [
      './../../images/album/ab_1.jpeg',
      './../../images/album/ab_2.jpeg',
      './../../images/album/ab_3.jpeg',
      // './../../images/album/ab_4.jpeg',
      // './../../images/album/ab_5.jpeg',
      // './../../images/album/ab_6.jpeg',
      // './../../images/album/ab_7.jpeg',
      // './../../images/album/ab_8.jpeg',
      // './../../images/album/ab_9.jpeg'
    ],
    animationImg: {
      smallStars: './../../images/animationImg/smallStars.png',
      star: './../../images/animationImg/star.png',
      star1: './../../images/animationImg/star1.png',
      star2: './../../images/animationImg/star2.png',
      stars: './../../images/animationImg/stars.png',
      stars2: './../../images/animationImg/stars2.png',
      title: './../../images/animationImg/title.jpg',
      bg: './../../images/animationImg/bg.jpg',
    },
    indicatorDots: false,
    isPlayingMusic: true,
    music_url: "http://dl.stream.qqmusic.qq.com/C100000gSW7F2IKT1w.m4a?fromtag=46",
    autoplay: false,
    interval: 3000,
    duration: 1000,
    circular: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /*wx.playBackgroundAudio({
      dataUrl: "http://dl.stream.qqmusic.qq.com/C100000gSW7F2IKT1w.m4a?fromtag=46",
      title: '',
      coverImgUrl: ''
    })*/
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.rotate(360).step()

    this.setData({
      anim: animation.export()
    })

    let n = 0;
    let m = false;
    this.that = this
    setInterval(function() {
      let that = this
      let run = this.startAnim
      console.log("startAnim : " + run)
      console.log("lastIndex : " + this.lastIndex)
      if (run) {
        that.startAnim = false;
        n = n + 1;
        if (m) {
          this.animation.rotate(360 * (n)).scale(1.2, 1.2).step()
          m = !m;
        } else {
          this.animation.rotate(360 * (n)).scale(1, 1).step()
          m = !m;
        }
        this.setData({
          anim: this.animation.export()
        })
      }
    }.bind(this), 1000)
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
    let share = {
      "title": "我们结婚啦",
      "imageUrl": "http://pic.qiantucdn.com/58pic/19/29/54/82M58PICK2q_1024.jpg"
    }

    return share;
  },
  play: function(event) {
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
  },
  onSwiperItemChange(event) {
    this.lastIndex = event.detail.current;
    this.startAnim = true;
  }
})