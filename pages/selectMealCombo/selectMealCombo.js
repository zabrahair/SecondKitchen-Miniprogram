// pages/selectMealCombo/selectMealCombo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total_price: 10000,
    combo:{
      id: 'combo-1',
      name: '小云超值无敌套餐',
      options: [
        {
          id: '1',
          name: "主食",
          options: [
            {
              id: '1-1', name: '米饭', isSelect: true,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '1-2', name: '炒面', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '1-3', name: '汤面', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '1-4', name: '年糕', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
          ]
        },
        {
          id: '2',
          name: "大荤",
          options: [
            {
              id: '2-1', name: '红烧肉', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '2-2', name: '酱鸭腿', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '2-3', name: '大排骨', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '2-4', name: '咖喱鸡', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
          ]
        },
        {
          id: '3',
          name: "小荤",
          options: [
            {
              id: '3-1', name: '回锅肉片', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '3-2', name: '番茄炒蛋', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '3-3', name: '肉丝炒韭芽', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
          ]
        },
        {
          id: '4',
          name: '素菜',
          options: [
            {
              id: '4-1', name: '上汤娃娃菜', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '4-2', name: '干煸草头', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '4-3', name: '土豆烧刀豆', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '4-4', name: '蚝油生菜', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
          ]
        },
        {
          id: '5',
          name: '汤类',
          options: [
            {
              id: '5-1', name: '肉丝蛋汤', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '5-2', name: '紫菜开洋汤', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '5-3', name: '番茄蛋汤', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
            {
              id: '5-4', name: '榨菜蛋汤', isSelect: false,
              image_url: 'https://ali.xinshipu.cn/20160621_1/original/1466440795346.jpg@288w_216h_99q_1e_1c.jpg'
            },
          ]
        }
      ]
    }
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