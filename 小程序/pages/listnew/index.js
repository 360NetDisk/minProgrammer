var Bmob = require('../../utils/bmob.js');
var u = null;
var indexArray;
var replay=null;
var common = require('../../utils/common.js');
var resl = {};
//item.js //获取应用实例 const app = getApp() //下面这三个函数，就是初始化状态的。 
function sort_display() {
  return ['sort_hide', 'sort_hide'];
}

function item_nav_set_list_light() {
  return ['', ''];
}

function item_nav_set_list_content_light() {
  return [
    ['', '', '', ''],
    ['', '', '', ''],
  ];
}
Page({

  data: {
    //这里是存储数据的地方，把改变过的东西放在这里。 //主菜单高亮 
    item_nav_set_list_light: item_nav_set_list_light(), //储存子菜单显示与否 
    sort_status: sort_display(), //    子菜单高亮 
    item_nav_set_list_content_light: item_nav_set_list_content_light(),
    replay: '',
  }, //事件处理函数 // 点击排序设置 //这个是点击主菜单触发的函数 


  item_nav_set_list_display: function(e) {
    console.log("v");
    //首先获取一下，点击的信息，下面这行就是得出点击的哪个主菜单 
    var index = parseInt(e.currentTarget.dataset.index); //   将初始化的状态获取到。   //因为思路是点击一个主菜单，然后将所有子菜单隐藏，然后在对点击的主菜单 //下的子菜单进行显示处理 。所以获取初始化状态就是隐藏所有子菜单的动作。 //因为最后是将这个值赋值给data中的数据 //页面根据data这种的数据做出改变。
    var new_sort_display = sort_display();
    var new_item_nav_set_list_light = item_nav_set_list_light();
    //if判断状态，然后做出响应动作 
    if (this.data.sort_status[index] == 'sort_hide') {
      new_sort_display[index] = 'sort_show';
      new_item_nav_set_list_light[index] = 'item_nav_set_list_light';
    } else {
      new_sort_display[index] = 'sort_hide';
      new_item_nav_set_list_light[index] = '';
    } //最后将值赋给 data 
    this.setData({
      sort_status: new_sort_display,
      item_nav_set_list_light: new_item_nav_set_list_light
    });
  },

  //下面这个同理，就不罗嗦了。 // 点击排序设置内容 
  item_nav_set_list_content_display: function(e) {

    var new_sort_display = sort_display();
    var new_item_nav_set_list_content_light = item_nav_set_list_content_light();
    indexArray = e.currentTarget.dataset.index.split('_');

    if (indexArray[0] == 0){

      console.log("indexArray[0][0]" + indexArray[1]);
      new_item_nav_set_list_content_light[0][indexArray[1]] = 'item_nav_set_list_content_light';
      new_item_nav_set_list_content_light[1] = this.data.item_nav_set_list_content_light[1];

      if (indexArray[1] == 0) {
        resl = {};
        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '0')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '50' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
              }

            }
            console.log("测试时 ")
            that.setData({
              results: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }
      if (indexArray[1] == 1) {
        resl = {};
        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '0')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '51' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
              }

            }
            console.log("测试时 ")
            that.setData({
              results: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }
      if (indexArray[1] == 2) {
        resl = {};
        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '0')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
              }

            }
            console.log("测试时 ")
            that.setData({
              results: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }

      if (indexArray[1] == 3) {
        resl = {};
        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '0')

        var j = 0;
        query.find({
          success: function(res) {

            console.log("测试时 ")
            that.setData({
              results: res,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });


      }



    } else if (indexArray[0] == 1) {

      console.log("indexArray[0][0]" + indexArray[1]);
      new_item_nav_set_list_content_light[1][indexArray[1]] = 'item_nav_set_list_content_light';
      new_item_nav_set_list_content_light[0] = this.data.item_nav_set_list_content_light[0];

      if (indexArray[1] == 0) {
        resl = {};

        var that = this;
        that.setData({
          result: "",
          results: "",
        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '1')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '50' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
              }

            }
            console.log("测试时 ")
            that.setData({
              result: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }
      if (indexArray[1] == 1) {
        resl = {};
        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '1')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '51' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
              }

            }
            console.log("测试时 ")
            that.setData({
              result: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }
      if (indexArray[1] == 3) {
        resl = {};


        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '1')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);

              resl[j] = res[i];
              j++;
              console.log(" resl[j]" + resl[j] + "J" + j);


            }
            console.log("测试时 ")
            that.setData({
              result: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });
      }


      if (indexArray[1] == 2) {
        resl = {};

        var that = this;
        that.setData({
          result: "",
          results: "",

        });
        var Do = Bmob.Object.extend("usequestion");
        var query = new Bmob.Query(Do);
        query.equalTo("status", '1')
        var j = 0;
        query.find({
          success: function(res) {
            for (var i = 0; i < res.length; i++) {
              var object = res[i].get("questionid");
              console.log(object);
              if (res[i].get("questionid") == '52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
                resl[j] = res[i];
                j++;
                console.log(" resl[j]" + resl[j] + "J" + j);
                              }

            }
            console.log("测试时 ")
            that.setData({
              result: resl,
            });
          },
          error: function(error) {
            console.log("查询失败: " + error.code + " " + error.message);
          }
        });

      }


    }
    this.setData({
      sort_status: new_sort_display,
      item_nav_set_list_content_light: new_item_nav_set_list_content_light
    });
    console.log("laing" + new_item_nav_set_list_content_light);
  },

  delete: function(event) {

    wx.getUserInfo({

      success: function(res) {

        u = res.userInfo.nickName;

      },
      fail: function() {
        wx.showModal({
          title: '警告',
          content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
          success: function(res) {
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


    var that = this;
    var da = null;
    var  i = event.currentTarget.id;
    console.log("i、:" + i)
      wx.showModal({
        title: '操作提示',
        content: '确定删除？',

        success: function (res) {
          if (res.confirm) {
            //删除日记
            var Diary = Bmob.Object.extend("usequestion");
            //创建查询对象，入口参数是对象类的实例
            var query = new Bmob.Query(Diary);
            //query.equalTo("createdAt", i);
            
            query.get(i, {
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


  re: function (e) {
    console.log("replay、:" + e.detail.value)
    replay = e.detail.value;
    this.setData({
      replay: e.detail.value
    })
  },


  onLoad: function () {


    if (indexArray[1] == 0) {
      resl = {};
      var that = this;
      that.setData({
        result: "",
        results: "",

      });
      var Do = Bmob.Object.extend("usequestion");
      var query = new Bmob.Query(Do);
      query.equalTo("status", '0')
      var j = 0;
      query.find({
        success: function (res) {
          for (var i = 0; i < res.length; i++) {
            var object = res[i].get("questionid");
            console.log(object);
            if (res[i].get("questionid") == '50' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
              resl[j] = res[i];
              j++;
              console.log(" resl[j]" + resl[j] + "J" + j);
            }

          }
          console.log("测试时 ")
          that.setData({
            results: resl,
          });
        },
        error: function (error) {
          console.log("查询失败: " + error.code + " " + error.message);
        }
      });

    }
    if (indexArray[1] == 1) {
      resl = {};
      var that = this;
      that.setData({
        result: "",
        results: "",

      });
      var Do = Bmob.Object.extend("usequestion");
      var query = new Bmob.Query(Do);
      query.equalTo("status", '0')
      var j = 0;
      query.find({
        success: function (res) {
          for (var i = 0; i < res.length; i++) {
            var object = res[i].get("questionid");
            console.log(object);
            if (res[i].get("questionid") == '51' || res[i].get("questionid") == '50,51' || res[i].get("questionid") == '51,50' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
              resl[j] = res[i];
              j++;
              console.log(" resl[j]" + resl[j] + "J" + j);
            }

          }
          console.log("测试时 ")
          that.setData({
            results: resl,
          });
        },
        error: function (error) {
          console.log("查询失败: " + error.code + " " + error.message);
        }
      });

    }
    if (indexArray[1] == 2) {
      resl = {};
      var that = this;
      that.setData({
        result: "",
        results: "",

      });
      var Do = Bmob.Object.extend("usequestion");
      var query = new Bmob.Query(Do);
      query.equalTo("status", '0')
      var j = 0;
      query.find({
        success: function (res) {
          for (var i = 0; i < res.length; i++) {
            var object = res[i].get("questionid");
            console.log(object);
            if (res[i].get("questionid") == '52' || res[i].get("questionid") == '52,50' || res[i].get("questionid") == '50,52' || res[i].get("questionid") == '51,52' || res[i].get("questionid") == '52,51' || res[i].get("questionid") == '50,51,52' || res[i].get("questionid") == '50,52,51' || res[i].get("questionid") == '51,50,52' || res[i].get("questionid") == '51,52,50' || res[i].get("questionid") == '52,51,50' || res[i].get("questionid") == '52,50,51') {
              resl[j] = res[i];
              j++;
              console.log(" resl[j]" + resl[j] + "J" + j);
            }

          }
          console.log("测试时 ")
          that.setData({
            results: resl,
          });
        },
        error: function (error) {
          console.log("查询失败: " + error.code + " " + error.message);
        }
      });

    }

    if (indexArray[1] == 3) {
      resl = {};
      var that = this;
      that.setData({
        result: "",
        results: "",

      });
      var Do = Bmob.Object.extend("usequestion");
      var query = new Bmob.Query(Do);
      query.equalTo("status", '0')

      var j = 0;
      query.find({
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


    }



  },

  voteTitle: function (event) {

    wx.getUserInfo({

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


    var that = this;
    var da = null;
    var i = event.currentTarget.id;
    console.log("i、:" + i)
    console.log("测试时 " )     
    console.log("replay、:"+replay )





    wx.showModal({
      title: '操作提示',
      content: '确定提交？',

      success: function (res) {
        if (res.confirm) {
          //删除日记
          var Diary = Bmob.Object.extend("usequestion");
          //创建查询对象，入口参数是对象类的实例
          var query = new Bmob.Query(Diary); 

          query.get(i, {
            success: function (object) {
              //object.set('id', 'status')
               //需要修改的objectId
               var  re=object.get("replay");
             // console.log(re) 
             if(replay==null)
             {
               common.showTip('回复内容不能为空',"loading");
               common.showTip('提交内容不能为空', "loading");
             }else{

               if(re=='null')
               {
                // console.log(re) 
                re="";
                object.set('replay', replay);
                 object.save()
                 replay = null;
                 common.showTip('回复成功');

                 if (getCurrentPages().length != 0) {
                   //刷新当前页面的数据
                   getCurrentPages()[getCurrentPages().length - 1].onLoad()
                 }
               }
               else
               {

              
               
              object.set('replay', re +"\n"+replay );
              object.save()
               replay=null;
              common.showTip('回复成功');
         
               if (getCurrentPages().length != 0) {
                 //刷新当前页面的数据
                 getCurrentPages()[getCurrentPages().length - 1].onLoad()
               }
        
               }
             }
             
              





            }
          });


      

        }

      }
    })

  }

})