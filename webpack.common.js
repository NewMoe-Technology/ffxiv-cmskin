const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PxtoremPlugin = require('postcss-pxtorem');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');
const theme = require('./src/style/theme');

module.exports = (isDev) => ({
  entry: {
    index: './src/index.js',
    vendor: [
      'classnames/bind',
      'dva',
      'dva/router',
      'dva/dynamic',
      'dva-loading',
      'path',
      'react',
      'react-dom',
      'g2',
      'g2-react',
      'qrcode.react'
    ]
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    uniqueName: 'ffxiv_cmskin',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, 'src/utils/antdIcons.js')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PxtoremPlugin({ rootValue: 16 })]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  "node_modules",
                  "src/style"
                ]
              }
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PxtoremPlugin({ rootValue: 16 })]
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true,
                math: "always"
              },
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false 
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PxtoremPlugin({ rootValue: 16 })]
              }
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    }),
    new webpack.DefinePlugin({
      $dirname: JSON.stringify(__dirname),
      $isDev: isDev,
      'process.platform': JSON.stringify(process.platform)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public')
        }
      ]
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  target: 'web',
  performance: {
    hints: false
  },
});