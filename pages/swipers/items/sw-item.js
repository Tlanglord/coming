// pages/swipers/items/sw-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     index:Number,
     imgUrl:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  ready: function () { 
    console.log(this.properties.index)
  },
})
