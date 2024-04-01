const Splash = {
  changelog: [
    '|2024.04.01|v2.3.5|Add 添加 Material UI 主题, 微调其他组件和主题样式',
    '|2024.03.30|v2.3.4|Add 添加 Aetheris 主题, 微调其他主题的样式',
    '|2024.03.29|v2.3.3|Add 主题切换功能, 新增亮色和经典主题',
    '|2024.03.24|v2.3.2|Adj 复活项目, 修复一些问题, 加入韩语支持, 增加选择多个职业图标样式的支持',
    '|2022.03.25|v2.2.3|Add 添加钐镰客、贤者图标和文字',
    '|2019.11.02|v2.2.2|Add 显示亲信战友系统中 NPC 的名字|',
    '|2019.11.01|v2.2.1|Add 添加青魔、舞者、绝枪战士图标和文字|',
    '|2017.12.01|v2.2.0|Adj 右键菜单,移出折叠增加初始化,折叠按钮移动至右上角|',
    '|2017.12.01|v2.1.9|Add 可开关图表|',
    '|2017.11.16|v2.1.8|Add 新折叠模式/细节调整|',
    '|2017.11.14|v2.1.7|Add 支持ActWebsocket|',
    '|2017.11.13|v2.1.6|Add 英文版|',
    '|2017.11.13|v2.1.5|Add 过量进度条|',
    '|2017.11.10|v2.1.4|Fix 大量重复读取设置Bug|',
    '|2017.11.10|v2.1.3|Add 量化设置界面/按人数自动Mini设置|',
    '|2017.11.10|v2.1.2|Add 设置页面反馈组件/设置页面关于界面|',
    '|2017.11.10|v2.1.1|Fix 修复某些用户报错无法使用的情况|',
    '|2017.11.09|v2.1.0|Add 量化判定输出，显示不同颜色/根据10秒DPS和60秒DPS判断当前升降情况|',
    '|2017.11.09|v2.0.1|Fix 优化Mini模式及其他|',
    '|2017.11.08|v2.0.0|Add 数据自定义设置/数据结构重构|',
    '|2017.11.03|v1.1.3|Fix 修复mini模式Bug|',
    '|2017.11.01|v1.1.2|Add 增加团队统计图|',
    '|2017.11.01|v1.1.1|Fix 一些数据Bug|',
    '|2017.10.25|v1.1.0|Add 设置页面:坐标轴是否动态缩放/溢出量是否计入HPS|',
    '|2017.10.24|v1.0.9|Add 历史记录功能|',
    '|2017.10.24|v1.0.8|Add 马赛克ID功能/Up 优化迷你模式|',
    '|2017.10.22|v1.0.7|Add 标题直达副本Wiki|',
    '|2017.10.22|v1.0.6|Add 迷你模式|',
    '|2017.10.22|v1.0.5|Add 透明模式|',
    '|2017.10.22|v1.0.4|Fix 设置页面Bug/无法滚动Bug|',
    '|2017.10.20|v1.0.3|Add 设置页面|',
    '|2017.10.19|v1.0.2|Add 每人数据详情页面|',
    '|2017.10.18|v1.0.1|Add 右键菜单/折叠模式|',
    '|2017.10.18|v1.0.0|Root CanisMinor Act 上线|',
  ],
  // usage
  usage: [
    '|设置|右键菜单 - 设置|',
    '|历史记录|点击右下角时钟查看历史记录|',
    '|详情模式|点击列表条目，即可显示该队友详情模式|',
    '|折叠模式|右键菜单 - 折叠/展开|',
    '|透明模式|右键菜单 - 透明/实体|',
    '|迷你模式|右键菜单 - 迷你/完全|',
    '|马赛克ID|右键菜单 - 马赛克/显示|',
  ],
  // copyright
  copyright: [
    '|作者|CanisMinor|',
    '|ID|男孩纸榨汁机(紫水)|',
    '|QQ|40073838|',
    '|Email|i@canisminor.cc|',
    '|皮肤地址|http://ffxiv.canisminor.cc|',
  ],
};

export default {
  // basic
  cn: '简体中文',
  en: 'English',
  kr: '한국어',
  damage: '输出',
  healing: '治疗',
  tanking: '承伤',
  // Icon
  icon_default: '默认图标',
  icon_glow: '发光图标',
  // Theme
  theme_dark: 'FFXIV 暗色',
  theme_light: 'FFXIV 亮色',
  theme_classic: 'FFXIV 经典',
  theme_aetheris: 'Aetheris',
  theme_materialui: 'Material UI',
  // splash
  'splash.changelog': '更新说明',
  'splash.usage': '使用说明',
  'splash.copyright': '版权信息',
  'splash.more': '展开',
  // menu
  'menu.title': '菜单',
  'menu.setting': '设置',
  'menu.refresh': '刷新',
  'menu.debug': '测试',
  'menu.root': '恢复初始化',
  'menu.fullscreen.on': '折叠菜单',
  'menu.fullscreen.off': '展开菜单',
  'menu.uiTrans.on': '实体模式',
  'menu.uiTrans.off': '透明模式',
  'menu.uiMini.on': '完全模式',
  'menu.uiMini.off': '迷你模式',
  'menu.hideName.on': '显示ID',
  'menu.hideName.off': '隐藏ID',
  // header
  'header.save': '战斗历史已保存',
  'header.inbattle': '战斗中',
  // footer
  'footer.back': '返回',
  'footer.dps': '输出',
  'footer.heal': '治疗',
  'footer.tank': '承伤',
  'footer.all': '统计',
  // normal
  'normal.waiting': '等待数据传入...',
  'normal.all.damage': '团队输出',
  'normal.all.healing': '团队治疗',
  'normal.all.tanking': '团队承伤',
  // detail
  'detail.bar': '详细数据',
  'detail.data.damage': '输出数据',
  'detail.data.healing': '治疗数据',
  'detail.data.tanking': '承伤数据',
  // history
  'history.header': '历史记录',
  'history.bar': '显示最近30条战斗记录',
  'history.null': '暂无历史记录',
  // qrcode
  'qrcode.header': '手机同步',
  'qrcode.null': '地址有误请检查',
  'qrcode.scan': '扫码可同步至手机',
  // setting
  'setting.header': '设置',
  'setting.basic': '一般设置',
  'setting.quantity': '量化设置',
  'setting.normal': '基础页面',
  'setting.detail': '详情页面',
  'setting.comment': '评论反馈',
  'setting.about': '关于',
  // setting.btn
  'setting.btn.reset': '恢复默认',
  'setting.btn.apply': '应用',
  // setting.message
  'setting.message.reset': '已恢复默认设置',
  'setting.message.apply': '配置已应用',
  'setting.message.error': '数值错误',
  'setting.message.root': '设置已初始化',
  // setting.basic
  'setting.basic.split.lang': '语言',
  'setting.basic.lang': '语言 (Lang)',
  //
  'setting.basic.split.personal': '个人',
  'setting.basic.nameActive': '自定义昵称',
  'setting.basic.imgActive': '自定义头像',
  //
  'setting.basic.split.statistics': '统计',
  'setting.basic.graphTimeActive': '图表统计时长 (秒)',
  'setting.basic.graphHide': '隐藏图表',
  'setting.basic.graphScale': '图表动态缩放',
  'setting.basic.pureHps': '过量不计入HPS',
  //
  'setting.basic.split.gui': '界面',
  'setting.basic.uiAutoMiniActive': '自动切换迷你 (>人数)',
  'setting.basic.uiScaleActive': 'UI缩放 (倍)',
  'setting.basic.icon': '职业图标',
  'setting.basic.theme': '主题风格',
  //
  'setting.basic.split.history': '历史记录',
  'setting.basic.historyLength': '历史记录条数',
  // setting.normal
  'setting.normal.normalFull': '完全模式顶部数据',
  'setting.normal.normalMini': '迷你模式顶部数据',
  'setting.normal.normalDamage': '输出数据',
  'setting.normal.normalHeal': '治疗数据',
  'setting.normal.normalTank': '承伤数据',
  // setting.detail
  'setting.detail.detailDamage': '输出数据',
  'setting.detail.detailHeal': '治疗数据',
  'setting.detail.detailTank': '承伤数据',
  // setting.quantity
  'setting.quantity.title.updwon': '输出升降提示',
  'setting.quantity.title.damage': '输出职业DPS判定',
  'setting.quantity.title.heal': '坦克职业DPS判定',
  'setting.quantity.title.tank': '治疗职业DPS判定',
  'setting.quantity.title.overheal': '治疗职业过量判定',
  'setting.quantity.desc.avDps': '团队平均DPS',
  'setting.quantity.desc.dps60': '60秒DPS',
  'setting.quantity.desc.overHeal': '过量治疗',
  'setting.quantity.is.large': '大于',
  'setting.quantity.is.small': '小于',
  'setting.quantity.is.high': '高于',
  'setting.quantity.is.low': '低于',
  'setting.quantity.is.dps10high': '10秒DPS 高于',
  'setting.quantity.is.dps10low': '10秒DPS 低于',
  // setting.about
  'setting.about.version': '当前版本',
  'setting.about.author': '作者信息',
  'setting.about.contact': '联系方式',
  'setting.about.git': '项目地址',
  'setting.about.link': '外部链接',
  // progress.*.title
  'progress.damage.title': '最高输出',
  'progress.healing.title': '最高治疗',
  'progress.tanking.title': '承伤',
  // placeholder
  'placeholder.you': '我',
  'placeholder.img': '图片网址',
  'placeholder.select': '请选择数据标签...',
  'placeholder.chart': '等待数据积累...',
  // role
  'role.you': '我',
  'role.dps': '输出',
  'role.heal': '治疗',
  'role.tank': '坦克',
  'role.other': '其他',
  'role.false': '其他',
  'role.acn': '秘术',
  'role.smn': '召唤',
  'role.arc': '弓手',
  'role.brd': '诗人',
  'role.blm': '黑魔',
  'role.thm': '咒术',
  'role.drg': '龙骑',
  'role.lnc': '枪术',
  'role.pgl': '格斗',
  'role.mnk': '武僧',
  'role.mch': '机工',
  'role.rog': '双剑',
  'role.nin': '忍者',
  'role.rdm': '赤魔',
  'role.sam': '武士',
  'role.blu': '青魔',
  'role.dnc': '舞者',
  'role.rpr': '钐镰',
  'role.ast': '占星',
  'role.cnj': '幻术',
  'role.whm': '白魔',
  'role.sch': '学者',
  'role.sge': '贤者',
  'role.drk': '黑骑',
  'role.mrd': '斧术',
  'role.war': '战士',
  'role.gla': '剑术',
  'role.pld': '骑士',
  'role.gnb': '绝枪',
  'role.rpr': '钐镰',
  'role.sge': '贤者',
  'role.chocobo': '陆行鸟',
  'role.limitbreak': '极限技',
  // encounter
  'encounter.time': '时间',
  'encounter.damage.total': '总输出',
  'encounter.damage.avps': '均秒伤',
  'encounter.damage.ps': '总秒伤',
  'encounter.damage.ps10': '10秒伤',
  'encounter.damage.ps30': '30秒伤',
  'encounter.damage.ps60': '60秒伤',
  'encounter.damage.count': '攻数',
  'encounter.damage.highest': '最高伤',
  'encounter.damage.kills': '击杀',
  'encounter.healing.total': '总治疗',
  'encounter.healing.ps': '秒秒疗',
  'encounter.healing.count': '疗数',
  'encounter.healing.highest': '最高疗',
  'encounter.healing.deaths': '死亡',
  'encounter.tanking.total': '总承伤',
  // combatant
  'combatant.damage.total': '总量',
  'combatant.damage.ps': '秒伤',
  'combatant.damage.ps10': '10秒伤',
  'combatant.damage.ps30': '30秒伤',
  'combatant.damage.ps60': '60秒伤',
  'combatant.damage.count': '次数',
  'combatant.damage.percent': '占比',
  'combatant.damage.highest': '最高伤',
  'combatant.damage.criticals': '暴击',
  'combatant.damage.directhit': '直击',
  'combatant.damage.critdirecthit': '直爆',
  'combatant.damage.kills': '击杀',
  'combatant.healing.total': '总量',
  'combatant.healing.ps': '秒疗',
  'combatant.healing.count': '次数',
  'combatant.healing.percent': '占比',
  'combatant.healing.over': '过量',
  'combatant.healing.highest': '最高疗',
  'combatant.healing.criticals': '暴击',
  'combatant.healing.deaths': '死亡',
  'combatant.tanking.total': '总量',
  'combatant.tanking.percent': '占比',
  'combatant.tanking.parry': '招架',
  'combatant.tanking.block': '格挡',
  'combatant.tanking.dodge': '回避',
  ...Splash,
};
