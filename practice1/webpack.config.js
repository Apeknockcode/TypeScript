const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webapack 所有的配置信息
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件
    filename: "bundle.js",
    // 告诉webapck 不要使用箭头函数
    environment: {
      // 不能使用箭头函数
      arrowFunction: false,
      const:false
    }
  },
  //指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的加载器
        use: [
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 配置信息
                    targets: {
                      // 要兼容目标的浏览器
                      chrome: "88",
                      ie: "11"
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    //使用corejs的方式usage 按需加载
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        exclude: /node_modules/
      },
      //设置less 的文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 version"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  //   配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //   title: "自定义的Title"
      template: "./src/index.html"
    })
  ],
  //   设置引用的模块
  resolve: {
    extensions: [".ts", ".js"]
  }
};
