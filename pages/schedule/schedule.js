// pages/schedule/schedule.js

import { CLASS_INFO_LIST } from '../MOCK_JSON/schedule';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    WEEK_TITLE: [],
    mHeight: 60,
    maxClassNum: 11,
    classNameList: [
      {
        title: "第一节课"
      },
      {
        title: "第二节课"
      },
      {
        title: "第三节课"
      },
      {
        title: "第四节课"
      },
      {
        title: "第五节课"
      },
      {
        title: "第六节课"
      },
      {
        title: "第七节课"
      },
      {
        title: "第八节课"
      },
      {
        title: "晚自习一"
      },
      {
        title: "晚自习二"
      },
      {
        title: "晚自习三"
      }
    ],
    CLASS_INFO_LIST: CLASS_INFO_LIST  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.onGetOpenid();
  },
  addClass: function() {
    
  },
  clearClass: function() {
    
  },
  onGetOpenid: function() {
    this.initData();
    this.setWidthAndHeight();
  },
  initData: function () {
    this.setData({
      WEEK_TITLE: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期天"
      ]
    });
  },
  clickItem: function(e) {
    console.log(e);
  },
  modifyTime: function(e) {
    wx.navigateTo({
      url: "../schedule_modify/schedule_modify"
    }),
    this.setWidthAndHeight();
  },
  setWidthAndHeight: function() {
    if (this.data.maxClassNum > 8) {
      this.setData({
        mHeight: (0.8 * wx.getSystemInfoSync().windowHeight - 55) / this.data.maxClassNum
      });
    } else {
      this.setData({
        mHeight: (0.8 * wx.getSystemInfoSync().windowHeight - 55) / 8 - 1
      });
    }
    console.log(this.data.mHeight);
  },
  onShareAppMessage: function() {
    return {
      title: "张老师给你分享了课程表，赶紧看看吧！",
      path: "/pages/showClass/showClass?id=" + getApp().globalData.mOpenid
    };
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
