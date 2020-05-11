require("@babel/register")({
    presets: [["@babel/preset-env", {
        "useBuiltIns": "usage",
        corejs:3,
    }]]
})

module.exports = require('./server.js')