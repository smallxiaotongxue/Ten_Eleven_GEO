// pages/schedule_modify/schedule_modify.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    openId: "",
    CLASS_NUM_INFOS: [
      {
        title: '第一节课',
        startTime: "08:00",
        endTime: "09:00"
      },
      {
        title: '第二节课',
        startTime: "09:00",
        endTime: "10:00"
      }
    ],
    CLASS_NUM: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    MAX_CLASS_NUM: 11,
    TIME_MUTLI_ARRAY: [],
    TIME_MUTLI_INDEX: [7, 0, 8, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  initPage() {},

  bindPickerChange: function(a) {
    var num = parseInt(a.detail.value) + 1;
    this.setData({
      maxClassNum: num
    });
  },

  handleInfoMessage () {
    for (var s in this.data.classInfos) {
      this.data.classInfos[s].maxClass = parseInt(t);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
