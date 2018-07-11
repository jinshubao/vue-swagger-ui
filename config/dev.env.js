'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  HOST: '"172.16.101.234"',
  PORT: '"8080"',
  API_URL: '"http://10.52.2.203:8011"'
})
