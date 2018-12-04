// pages/list/index.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var u=null;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    navbar: ['待处理', '已解决'],
    navbarll: ['zhy50', 'zhy51','zhy52'],
    currentTab: 0
  },
  navbarTap: function (e) {
      this.setData({
      currentTab: e.currentTarget.dataset.idx
    
    })
    var that = this;

    var Do = Bmob.Object.extend("usequestion");
    var qo = new Bmob.Query(Do);
    qo.equalTo("status", '0');
    qo.find({
      success: function (res) {
         for (var i = 0; i < res.length; i++) {
          var object = res[i];
          // if(object.get('phone')==null)
          // {
          //   res[i].set('phone')="";
          // }
        
        }
        
        console.log("测试时 ")

        that.setData({
          results: res,
        });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });

    var that = this;
    var D = Bmob.Object.extend("usequestion");
    var q = new Bmob.Query(D);
    q.equalTo("status", '1');
    q.find({
      success: function (res) {
        console.log("测试时") 
        that.setData({
          result: res,
        });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var that = this;
    var Do = Bmob.Object.extend("usequestion");
    var qo = new Bmob.Query(Do);
    qo.equalTo("status", '0');

    qo.find({
      success: function (res) {
        console.log("测试时 ")

        that.setData({
          results: res,
        });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var Do = Bmob.Object.extend("usequestion");
    var qo = new Bmob.Query(Do);
     qo.equalTo("status", '0');

    qo.find({
      success: function (res) {
        console.log("测试时 ")

        that.setData({
          results: res,
        });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });


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

  },
  
  delete: function (event) {

    wx.getUserInfo(
      {
  
        success: function (res) {

          u = res.userInfo.nickName;

        },
        fail: function () {
          wx.showModal({
            title: '警告',
            content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateTo({
                  url: '../logs/logs',
                })
              }
            }
          })
          }
          })
        
 var i = event.currentTarget.id;
    console.log("i、:" +i)
    var that = this;
    var da = null;

    var Do = Bmob.Object.extend("usequestion");
    var qo = new Bmob.Query(Do);


    qo.equalTo("status",'0' );

    qo.find({
      success: function (res) { 
        console.log(res.length);
        var obj=res[0];
        //console.log();
        da = obj.get('usename');
        console.log(da);
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }}),

      
    wx.showModal({
      title: '操作提示',
      content: '确定删除？',

      success: function (res) {
        if (res.confirm) { 
          //删除日记
          var Diary = Bmob.Object.extend("usequestion");
          //创建查询对象，入口参数是对象类的实例
          var query = new Bmob.Query(Diary);
          query.equalTo("status", '0');
          
          query.get(da, { 
            success: function (object) {
              //object.set('id', 'status') //需要修改的objectId
              object.set('status', '1')
              object.set('deletename', u) 

              object.save() 

              common.showTip('删除成功');
              
              
              
              if (getCurrentPages().length != 0) {
                //刷新当前页面的数据
                getCurrentPages()[getCurrentPages().length - 1].onLoad()
              }

      
            }
              });            
            
          
        
        }
      }
    })
  },
})