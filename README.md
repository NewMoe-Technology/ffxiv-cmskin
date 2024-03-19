# CanisMinor ACT

![](http://qn.canisminor.cc/2017-11-14-1.png)

[![](https://img.shields.io/github/license/canisminor1990/ffxiv-cmskin.svg)](https://github.com/canisminor1990/ffxiv-cmskin/blob/master/LICENSE)
[![](https://img.shields.io/github/tag/canisminor1990/ffxiv-cmskin.svg)](https://github.com/canisminor1990/ffxiv-cmskin)
[![](https://img.shields.io/badge/Works%20with-ActWebsocket-green.svg)](https://github.com/ZCube/ACTWebSocket)
[![](https://img.shields.io/badge/Works%20with-OverlayPlugin-green.svg)](https://github.com/hibiyasleep/OverlayPlugin)

`ACT` `OverlayPlugin` `FFXIV` `React` `Redux`

**FFXIV CanisMinor ActSkin (Forked by NewMoe):** 

**README:** [📙 English (EN)](en_README.md)

## 如何调试/编译
安装依赖: ```yarn install``` 或 ```npm install```  
运行开发环境: ```yarn start``` 或 ```npm run start```  
编译发行版: ```yarn build``` 或 ```npm run build```  

## 安装 (2 选 1)

**ACTWebSocket (推荐)：**

- 下载最新版`ACTWebSocket`: [🔗 Latest](https://github.com/ZCube/ACTWebSocket/releases)
- NGA 整合版请使用: [🔗 整合版专用](https://coding.net/u/canisminor1990/p/act-websocket/git/archive/v1.0.0.zip)
- ✅ 开启 Html 服务器
- ✅ 启动模板管理器
- ACTWebSocket > 添加模板 > 拷贝下面的地址
- 打开模板管理器 > 选择 FFXIV - CanisMinor ActSkin > new

**OverlayPlugin：**

- 下载最新版`OverlayPlugin`: [🔗 Latest](https://github.com/hibiyasleep/OverlayPlugin/releases)
- 或直接下载 ACT 整合包: [🔗 NGA](http://bbs.ngacn.cc/read.php?tid=12526945)
- DPS 统计美化插件 > DPS 统计（MiniParser）> 模板路径

```sh
# 拷贝下面的地址至模板路径
http://ffxiv.canisminor.cc
```

## 更新说明

| 日期       | 版本   | 改动                                                                        |
| ---------- | ------ | --------------------------------------------------------------------------- |
| 2019.11.02 | v2.2.2 | Add 显示亲信战友系统中 NPC 的名字                                           |
| 2019.11.01 | v2.2.1 | Add 添加青魔、舞者、绝枪战士图标和文字                                      |
| 2017.12.01 | v2.2.0 | Adj 右键菜单,移出折叠增加初始化,折叠按钮移动至右上角                        |
| 2017.12.01 | v2.1.9 | Add 可开关图表                                                              |
| 2017.11.16 | v2.1.8 | Add 新折叠模式/细节调整                                                     |
| 2017.11.13 | v2.1.7 | Add 支持 ActWebsocket                                                       |
| 2017.11.13 | v2.1.6 | Add 英文版                                                                  |
| 2017.11.13 | v2.1.5 | Add 过量进度条/新字体                                                       |
| 2017.11.10 | v2.1.4 | Fix 大量重复读取设置 Bug                                                    |
| 2017.11.10 | v2.1.3 | Add 量化设置界面/按人数自动 Mini 设置                                       |
| 2017.11.10 | v2.1.2 | Add 设置页面反馈组件/设置页面关于界面                                       |
| 2017.11.10 | v2.1.1 | Fix 修复某些用户报错无法使用的情况                                          |
| 2017.11.09 | v2.1.0 | Add 量化判定输出，显示不同颜色/根据 10 秒 DPS 和 60 秒 DPS 判断当前升降情况 |
| 2017.11.09 | v2.0.1 | Fix 优化 Mini 模式及其他                                                    |
| 2017.11.08 | v2.0.0 | Add 数据自定义设置/数据结构重构                                             |
| 2017.11.03 | v1.1.3 | Fix 修复 mini 模式 Bug                                                      |
| 2017.11.01 | v1.1.2 | Add 增加团队统计图                                                          |
| 2017.11.01 | v1.1.1 | Fix 一些数据 Bug                                                            |
| 2017.10.25 | v1.1.0 | Add 设置页面:坐标轴是否动态缩放/溢出量是否计入 HPS                          |
| 2017.10.24 | v1.0.9 | Add 历史记录功能                                                            |
| 2017.10.24 | v1.0.8 | Add 马赛克 ID 功能/Up 优化迷你模式                                          |
| 2017.10.22 | v1.0.7 | Add 标题直达副本 Wiki                                                       |
| 2017.10.22 | v1.0.6 | Add 迷你模式                                                                |
| 2017.10.22 | v1.0.5 | Add 透明模式                                                                |
| 2017.10.22 | v1.0.4 | Fix 设置页面 Bug/无法滚动 Bug                                               |
| 2017.10.20 | v1.0.3 | Add 设置页面                                                                |
| 2017.10.19 | v1.0.2 | Add 每人数据详情页面                                                        |
| 2017.10.18 | v1.0.1 | Add 右键菜单/折叠模式                                                       |
| 2017.10.18 | v1.0.0 | Root CanisMinor Act 上线                                                    |

<br />

## 使用说明

| 模式      | 路径                                   |
| --------- | -------------------------------------- |
| 设置      | 右键菜单 - 设置                        |
| 历史记录  | 点击右下角时钟查看历史记录             |
| 详情模式  | 点击某人列表条目，即可显示此人详情模式 |
| 折叠模式  | 右键菜单 - 折叠/展开                   |
| 透明模式  | 右键菜单 - 透明/实体                   |
| 马赛克 ID | 右键菜单 - 马赛克/显示                 |

<br />

## 关于量化

**输出职业 DPS 判定:**

- `> 140% 平均DPS` => 😇
- `< 80% 平均DPS` => 👿

**坦克职业 DPS 判定:**

- `> 80% 平均DPS` => 😇
- `< 50% 平均DPS` => 👿

**治疗职业 DPS 判定:**

- `> 60% 平均DPS` => 😇
- `< 30% 平均DPS` => 👿

**举例:**

```sh
D1:380 / D2:320 / T:200 / H:100
团队平均DPS: 250

输出: 👿 < 200 < ... < 350 < 😇
坦克: 👿 < 125 < ... < 200 < 😇
治疗: 👿 < 75 < ... < 150 < 😇
```

**治疗职业过量判定:**

- `过量 < 10%` => 😇
- `过量 > 30%` => 👿

**升降判定:**

- `10秒DPS > 120% 60秒DPS` => ⬆️
- `10秒DPS < 80% 60秒DPS` => ⬇️

> PS:此为预设值，可在设置中调整

<br />

## Q&A

- **技术向反馈/讨论群:** 246243038
- **放大 GUI:** 4K 显示器调整 UI 缩放倍率至 `2`
- **缩小 GUI:** 请默认开启 mini 模式，如果依然觉得大，可以调整 UI 缩放倍率至 `0.x`
- **无法合并宠物数据:** 请升级 `OverlayPlugin` 至 `0.3.3.14` 以上
- **无数据传入等 Bug:** 右键菜单 > 恢复初始化
- **无法恢复初始化:** 打开调试模式 > Console > 输入`document.cookie="setting=false"` > 回车
- **无法调节窗口大小:** 请关闭 ACT 中的，锁定窗口和鼠标穿透，并不要启动皮肤的折叠模式，然后右下角调整窗口大小
- **本地版本和线上不一致:** 恭喜你遇到了 ACT 强制缓存，请打开调试模式 > Network 标签 > 勾选 Disable Cache，再右键刷新界面

<br />

## Link

- **Site:** [ffxiv.canisminor.cc](https://ffxiv.canisminor.cc)
- **NGA.cn:** [bbs.ngacn.cc/read.php?tid=12689516](http://bbs.ngacn.cc/read.php?tid=12689516)
- **Github:** [github.com/canisminor1990/ffxiv-cmski](https://github.com/canisminor1990/ffxiv-cmskin)
- **Coding:** [coding.net/u/canisminor1990/p/ffxiv-cmskin](https://coding.net/u/canisminor1990/p/ffxiv-cmskin)

<br />

## Contributor

- [SgLy](https://github.com/SgLy)
- [SasarinoMARi](https://github.com/SasarinoMARi)

## Copyright

- **Author:** CanisMinor
- **ID:** 男孩纸榨汁机(紫水)
- **E-Mail:** <mailto:i@canisminor.cc>
- **讨论群:** 246243038
- **License:** [MIT](https://github.com/canisminor1990/ffxiv-cmskin/blob/master/LICENSE)
