// pages/third/index.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var uname=null;
var id=null;
var tx=null;
var site=null;
var app = getApp()
var text=null;
var quetion=null;
var name=null;
var phone=null;

Page({
  
  imgchange: function (event) {
    //获取当前item的下标id  通过currentTarget.id
    var that=this;
     var  i= event.currentTarget.id
   // console.log("i、: "+i) 

    var Dl = Bmob.Object.extend("questionscontent");
    var ql= new Bmob.Query(Dl);
    // ql = Bmob.Query('questionscontent');
    // 根据id获取对象  
 
    console.log("id、: " + id)

    ql.equalTo("questionid", id);
    ql.equalTo("qiestionidd", i);

    ql.find({
      success: function (res) {
        quetion = res[0].get('questions');
        console.log("查询失败啦啦啦id、: " + res.length + res[0].get('questions')),
        that.setData({
          quetion:res[0].get('questions'),
          showModalStatus: true 
        });
  
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

//   formSubmit: function (event) {
//     var t = event.detail.value.questions;
//     // console.log("查询失败啦啦啦sss: " + t);
//      wx.getUserInfo(
//       {
//         withCredentials: true,     
//         success: function (res) {
//         uname = res.userInfo.nickName;
//         },
//         fail: function () {
//            //获取用户信息失败后。请跳转授权页面
//            wx.showModal({
//              title: '警告',
//              content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
//              success: function (res) {
//                if (res.confirm) {
//                  console.log('用户点击确定')
//                  wx.navigateTo({
//                    url: '../logs/logs',
//                  })
//                }
//              }
//            })
//          }

        
//  })

    



 // },
  /**
   * 页面的初始数据
   */
  toModifyDiary: function (event) {
    var nowTile = event.target.dataset.title;
    var nowContent = event.target.dataset.content;
    var nowId = event.target.dataset.id;
    that.setData({
      modifyDiarys: true,
      nowTitle: nowTile,
      nowContent: nowContent,
      nowId: nowId
    })
  },

  data: {
    showModalStatus: false
      
  },
  
  siteselect: function (e) {
 
     site = e.detail.value;
    
  },
  quetion: function (e) {
    
    quetion = e.detail.value;
    
  },
  name: function (e) {

    name = e.detail.value;

  },
  phone: function (e) {

    phone = e.detail.value;

  },

  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    var submit = e.currentTarget.dataset.id;
    //qu = e.currentTarget.dataset.content;
    
    //  wx.getUserInfo(
    //   {
    //     withCredentials: true,
    //     success: function (res) {
    //     uname = res.userInfo.nickName;
    //       console.log('用户点击确定uname'+uname);
    //     }
    //     })

    //     fail: function () {
    //       //获取用户信息失败后。请跳转授权页面
    //       wx.showModal({
    //         title: '警告',
    //         content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
    //         success: function (res) {
    //           if (res.confirm) {
    //             console.log('用户点击确定')

    //             wx.navigateTo({
    //               url: '../logs/logs',
    //             })
    //           }
    //         }
    //       })
    //     }


    //   })

    if(submit==1){

      // wx.getUserInfo(
      //   {
      //     withCredentials: true,
      //     success: function (res) {
      //       uname = res.userInfo.nickName;
      //       console.log('用户点击确定uname' + uname);
      //     }
      //   })


    //  if(!uname)
    //  {
    //    ?

      //  wx.getUserInfo(
      //    {
      //      withCredentials: true,
      //      success: function (res) {
      //        uname = res.userInfo.nickName;
      //        console.log('用户点击确定uname' + uname);
      //      }
      //    })
    //  }
    //  else 
     if (!site){
       common.showTip('请选择站点', "loading");    
      
      }else if(! quetion) {
       common.showTip('反馈内容不能为空', "loading");

      }else {
      console.log("提交sss " + submit + site + uname + text + quetion);
    
      var that=this;
      var qu = Bmob.Object.extend("usequestion");
      var q = new qu();
      var sit=site+"";
      if (!name)
      {
        name="null";
      }
      if (!phone) {
        phone = "null";
      }
   

     // q.set("username", uname);
      q.set("questiontext", quetion);
      q.set("questionid", sit);
      q.set("questionaa", text);
      q.set("status", '0');
      q.set("name", name);
      q.set("phone", phone);
       q.set("replay", "null");
      q.set("deletename","无");
      
      q.save(null, {
        success: function (result) {
          common.showTip('提交成功');
           site=null;
           quetion=null;
        }

        
      }

      )
      this.setData( 
        {
          showModalStatus: false,
          quetion: null
        }
      );
    }
     }


    this.util(currentStatu)
  },

  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不 延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })
    
      //关闭  
      if (currentStatu == "close") {
        quetion=null;
        site=null;
        this.setData(
          {
            showModalStatus: false,
            quetion:null
          }
        );
      }
    }.bind(this), 200)
  

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
onLoad: function (options) {

    var that = this;
    var Diary = Bmob.Object.extend("question");
    var query = new Bmob.Query(Diary);
    
    query.equalTo("questiontxt", options.objecttxt);
  query.equalTo("questionsid", options.objectid);
  console.log("obid、: " + options.objectid)
    tx = options.objecttxt;
       query.find({
       success: function (results) {
        var object = results[0];

        var D = Bmob.Object.extend("questionscontent");
        var q = new Bmob.Query(D);
        // 根据id获取对象  
        id = object.get('questionsid');
       // console.log("查询失败啦啦啦id、: " + id)
        q.equalTo("questionid", object.get('questionsid'));
         text = options.objecttxt;
        q.find({ 
          success: function (res) {
            that.setData({
              items: res ,
              text: options.objecttxt
            });
          },
          error: function (error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

         var Do= Bmob.Object.extend("usequestion");
         var qo = new Bmob.Query(Do);
         qo.equalTo("questionid", object.get('questionsid'));
         qo.find({
           success: function (res) {
             console.log("测试时 ")
             that.setData({

               iteml: res,
             });
           },
           error: function (error) {
             console.log("查询失败: " + error.code + " " + error.message);
           }
         });



      },
      error: function (error) {
        console.log("查询失败啦啦啦、: " + error.code + " " + error.message);
      }
   });
 

    // wx.getUserInfo(
    //   {
    //     withCredentials: true,
    //     success: function (res) {

    //       uname = res.userInfo.nickName;
    //       console.log("uname"+uname);
        
    //   }})

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    // wx.getUserInfo(
    //   {
    //     withCredentials: true,
    //     success: function (res) {
    //     uname = res.userInfo.nickName;
    //       console.log('用户点击确定uname'+uname);
    //     },
    //     fail: function () {
    //       //获取用户信息失败后。请跳转授权页面
    //       wx.showModal({
    //         title: '警告',
    //         content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
    //         success: function (res) {
    //           if (res.confirm) {
    //             console.log('用户点击确定')
               
    //             wx.navigateTo({
    //               url: '../logs/logs',
    //             })
    //           }
    //         }
    //       })
    //     }


    //   })
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

  
})

