// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict"
const models = require('./db')
const express = require('express')
const router = express.Router()

/* ************* 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  })
// 保存数据newAccount数据进mongoDB
  newAccount.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      console.log(data)
      res.send('createAccount successed')
    }
  })
})
// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
// 通过模型去查找数据库
  models.Login.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json({status: 1, msg: '注册成功'})
    }
    if (data) {
      // 返回接口数据
      if (req.body.password === data.password) {
        // res.send(data)
        res.json({
          status: 1,
          msg: '登录成功'
        })
      } else {
        res.json({
          status: 0,
          msg: '密码错误！！'
        })
      }
    } else {
      res.json({
        status: 0,
        msg: '账号不存在'
      })
    }
  })
})

// 获取已有账号接口
router.post('/api/login/denglu', (req, res) => {
// 通过模型去查找数据库
  models.Login.findOne({account: req.body.account}, (err, data) => {
    console.log('错误' + err)
    console.log('data吖' + data)
    if (err) {
      res.send(err)
      return false
    }
    if (data) {
      // 返回接口数据
      if (req.body.password === data.password) {
        // res.send(data)
        res.json({
          status: 1,
          msg: '登录成功'
        })
      } else {
        res.json({
          status: 0,
          msg: '密码错误！！'
        })
      }
    } else {
      res.json({
        status: 0,
        msg: '账号不存在'
      })
    }
  })
})

// 获取账号列表
router.get('/api/admin/list', (req, res) => {
// 通过模型去查找数据库
  models.Login.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
      // res.json({name: 'nihadf', old: 18})
    }
  })
})

module.exports = router
