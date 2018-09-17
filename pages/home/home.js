// pages/home/home.js
var img = require('/../../utils/img.js').img;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anim: {},
    imgUrls: [
      1,2,3,4,5
      // './../../images/album/ab_6.jpeg',
    ],
    animationImg: {
      smallStars: './../../images/animationImg/smallStars.png',
      star: './../../images/animationImg/star.png',
      star1: './../../images/animationImg/star1.png',
      star2: './../../images/animationImg/star2.png',
      stars: './../../images/animationImg/stars.png',
      stars2: './../../images/animationImg/stars2.png',
      title: './../../images/animationImg/title.jpg'
    },
    indicatorDots: false,
    isPlayingMusic: false,
    music_url: "http://imgcdn.zhizuoh5.com/Uploads/syspic/mp3/b18e27332c8744c0a2ebf07b08f8db27.mp3",
    autoplay: false,
    interval: 3000,
    duration: 1000,
    circular: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.play({});
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
     clearInterval();
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
      "imageUrl": img.ab_7_5_4
    }

    return share;
  },
  play: function(event) {
    console.log("play");
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