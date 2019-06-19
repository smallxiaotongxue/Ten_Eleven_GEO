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
    hiddenTime: false,
    timeHeight: 0,
    mLeft: 0,
    mTop: 0,
    mWidth: 60,
    mHeight: 60,
    maxClassNum: 12,
    newUser: "false",
    id: "",
    items: [
      {
        url: "http://127.0.0.1/1.flv",
        title: "第一节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第二节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第三节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第四节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第五节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第六节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第七节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "第八节课"
      },
      {
        url: "http://127.0.0.1/1.flv",
        title: "第九节课"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "10"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "11"
      },
      {
        url: "http://127.0.0.1/2.flv",
        title: "12"
      }
    ],
    classNInfos: [
      {
        name: "周1课程信息",
        maxClass: 12,
        infos: [
          {
            name: "",
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
    this.setData({
      mTop: 34 / (750 / wx.getSystemInfoSync().windowWidth) + 40 + 44,
      mLeft: 0.03 * wx.getSystemInfoSync().windowWidth + 3,
      timeHeight: 0.8 * wx.getSystemInfoSync().windowHeight - 45
    }),
      console.log("onLoad"),
      this.onGetOpenid();
  },
  addClass: function() {
    console.log("that.data.newUser: " + this.data.newUser),
      console.log("that.data.newUser: " + this.data.id);
    var e = this;
    wx.navigateTo({
      url: "../addClass/addClass?newUser=" + e.data.newUser + "&id=" + e.data.id
    });
  },
  clearClass: function() {
    var e = wx.cloud.database(),
      a = this;
    a.data.newUser
      ? wx.showModal({
          title: "提示",
          content: "您确定要清空您的课程表吗?",
          success: function(f) {
            e.collection("class_schedule")
              .doc(a.data.id)
              .remove({
                success: function() {
                  wx.showToast({
                    title: "清空成功"
                  }),
                    console.log(getApp().classInfo),
                    (getApp().globalData.classNInfos = getApp().data.classInfo),
                    a.setData({
                      newUser: !0,
                      classNInfos: getApp().globalData.classNInfos
                    });
                }
              });
          }
        })
      : wx.showModal({
          title: "提示",
          content: "您的课程表是空的!"
        });
  },
  onGetOpenid: function() {
    // wx.showLoading({
    //   title: "",
    //   mask: !0
    // });
    // var e = this;
    // wx.cloud.callFunction({
    //     name: "login",
    //     data: {},
    //     success: function(a) {
    //         getApp().globalData.mOpenid = a.result.openid, wx.cloud.database().collection("class_schedule").where({
    //             _openid: a.result.openid
    //         }).get({
    //             success: function(a) {
    //                 wx.hideLoading(), console.log("success"), 0 == a.data.length ? (e.setData({
    //                     newUser: "true",
    //                     maxClassNum: e.data.classNInfos[0].maxClass,
    //                     showGuide: !0,
    //                     showGuide1: !0,
    //                     showGuide2: !0
    //                 }), e.setWidthAndHeight(), getApp().globalData.classNInfos = e.data.classNInfos) : (console.log("非新用户:id ]" + a.data[0]._id),
    //                 getApp().globalData._id = a.data[0]._id, getApp().globalData.classNInfos = a.data[0].classInfos,
    //                 e.setData({
    //                     classNInfos: a.data[0].classInfos,
    //                     id: a.data[0]._id,
    //                     maxClassNum: a.data[0].classInfos[0].maxClass
    //                 }), e.setWidthAndHeight()), console.log(a.data[0]), console.log(e.data.id);
    //             },
    //             fail: function(e) {
    //                 console.log(e), wx.hideLoading();
    //             }
    //         }), console.log("[云函数] [login] user openid: ", a.result.openid);
    //     },
    //     fail: function(e) {
    //         console.error("[云函数] [login] 调用失败", e);
    //     }
    // });
  },
  clickItem: function(e) {
    var a = void 0;
    if (
      "" !=
      (a =
        2 == e.target.id.length
          ? getApp().globalData.classNInfos[e.target.id.substring(0, 1)].infos[
              e.target.id.substring(1, 2)
            ]
          : getApp().globalData.classNInfos[e.target.id.substring(0, 1)].infos[
              e.target.id.substring(1, 3)
            ]).name
    ) {
      var f = this;
      console.log("clickItem" + f.data.id),
        wx.navigateTo({
          url:
            "../modifyClass/modifyClass?newUser=false&id=" +
            f.data.id +
            "&className=" +
            a.name +
            "&classRoomNum=" +
            a.classRoomNum +
            "&teacher=" +
            a.teacher +
            "&background=" +
            a.background +
            "&week=" +
            e.target.id.substring(0, 1) +
            "&classIndex=" +
            (2 == e.target.id.length
              ? e.target.id.substring(1, 2)
              : e.target.id.substring(1, 3))
        });
    }
  },
  modifyTime: function() {
    var e = this;
    e.setData({
      hiddenTime: !0
    }),
      console.log("gggggg : id" + e.data.id),
      wx.navigateTo({
        url:
          "../modifyTime/modifyTime?newUser=" +
          e.data.newUser +
          "&id=" +
          e.data.id
      }),
      e.setWidthAndHeight();
  },
  setWidthAndHeight: function() {
    var e = this;
    e.data.maxClassNum <= 8
      ? (e.setData({
          mHeight: (0.8 * wx.getSystemInfoSync().windowHeight - 45) / 8 - 1,
          hiddenTime: !0
        }),
        console.log(e.data.mHeight))
      : (e.setData({
          mHeight:
            (0.8 * wx.getSystemInfoSync().windowHeight - 55) /
            e.data.maxClassNum,
          hiddenTime: !0
        }),
        console.log(e.data.mHeight));
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
