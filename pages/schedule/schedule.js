// pages/schedule/schedule.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    WEEK_TITLE: [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期天"
    ],
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
    CLASS_INFO_LIST: [
      {
        name: "周1课程信息",
        maxClass: 12,
        infos: [
          {
            name: "地理",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:10",
            endTime: "09:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "09:10",
            endTime: "10:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "10:10",
            endTime: "11:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "11:10",
            endTime: "12:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "13:10",
            endTime: "14:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "14:10",
            endTime: "15:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "15:10",
            endTime: "16:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "17:10",
            endTime: "18:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "18:10",
            endTime: "19:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "20:10",
            endTime: "21:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "21:10",
            endTime: "22:10",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "22:10",
            endTime: "23:10",
            hidden: "false"
          }
        ]
      },
      {
        name: "周2课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      },
      {
        name: "周3课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      },
      {
        name: "周4课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      },
      {
        name: "周5课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      },
      {
        name: "周6课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      },
      {
        name: "周7课程信息",
        maxClass: 8,
        infos: [
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          },
          {
            name: "",
            background: "#ffffff",
            classRoomNum: "",
            teacher: "",
            startTime: "08:00",
            endTime: "09:00",
            hidden: "false"
          }
        ]
      }
    ]
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
    this.setWidthAndHeight();
  },
  clickItem: function(e) {
    
  },
  modifyTime: function() {
    
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
      title: "你的好友给你分享了课程表，赶紧看看吧！",
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
