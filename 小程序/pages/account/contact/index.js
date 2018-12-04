var Bmob = require('../../../utils/bmob.js');
var common = require('../../../utils/common.js');
var uname = null;

var app = getApp()
Page({
  data: {
    userInfo: {},
  },
  onLoad: function () {
    var that = this

    wx.getUserInfo(
      {
        success: function (res) {

          uname = res.userInfo.nickName;
        }
      })
  },

  addFeedback: function (event) {

    var that = this;
    var contact = event.detail.value.contact;
    var content = event.detail.value.content;

    var nameReg = new RegExp("^[\u4e00-\u9fa5]{2,4}$");
    var phReg = /^1[34578]\d{9}$/;
    if (!content) {
      common.showTip("姓名不能为空", "loading");
      return false;
    }
    else if(!contact ) {
        common.showTip("联系方式不能为空", "loading");
        return false;
    }
    else if (!nameReg.test(content)) {
      common.showTip("用户名错误", "loading");
      return false;
    }else if (!phReg.test(contact)) {
      common.showTip("手机号格式错误", "loading");
      return false;
    }
    else {
      that.setData({
        loading: true
      })



      //增加日记
      var Diary = Bmob.Object.extend("user");
      var diary = new Diary();
      diary.set("username", contact);
      diary.set("phone", content);
      diary.set("uname", uname);
      //添加数据，第一个入口参数是null
      diary.save(null, {
        success: function (result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          common.showModal('保存信息成功，点击确定返回。', '提示', function () {
            wx.navigateBack();
          });

          // wx.navigateBack();
          that.setData({
            loading: false
          })

        },
        error: function (result, error) {
          // 添加失败
          common.showModal('保存反馈失败，请重新发布');

        }
      });
    }

  },

})