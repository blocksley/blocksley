// config/webenv.js
const path = require('path')
const DotEnv = require('dotenv')
module.exports = function (dev) {
  const envPath = path.resolve(__dirname, `.env`)
  // console.log(envPath)
  const env = Object.assign({
    // SERVER_URL: ''
  }, process.env)
  if (dev) {
    var parsedEnv = DotEnv.config({path: envPath}).parsed
    // console.log(parsedEnv)
    Object.assign(env, parsedEnv)
    // console.log(env)
  }
    // Let's stringify our variables

  for (key in env) {
    if (typeof env[key] === 'string') {
      env[key] = JSON.stringify(env[key])
    }
  }
  console.log(env)
  return env
}