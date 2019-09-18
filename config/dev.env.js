'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_URL:'"http://fat01-common-pay-service.zykj.com"',
  // BASE_URL:'"/xhq"', //这里需要修改配置
  // BASE_URL:'""', //这里需要修改配置
})
