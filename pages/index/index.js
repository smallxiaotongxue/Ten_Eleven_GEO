//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    bannerImgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    currBannerIndex: 0,
    AD_IMG: 'http://img2.imgtn.bdimg.com/it/u=1651362789,1616305787&fm=26&gp=0.jpg'
  },
  onLoad: function () {
    
  },
  bannerChange: function (e) {
    this.setData({
      currBannerIndex: e.detail.current
    });
  }
})
