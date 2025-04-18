const Splash = {
  changelog: [
    '|2025.04.19|v2.4.0|Fix Including other players Chocobo in the statistics causes infinite duplicates. Pause chart updates when data remains unchanged (such as during cutscenes, being action restricted, etc.). Theme Aetheris tweakment.|',
    '|2024.11.24|v2.3.9|Fix Heal/Tank Damage Quantity text mismatched. Removed Korean language(due to no maintenance).|',
    '|2024.06.13|v2.3.8|Add Job Icons and text for Viper and Pictomancer|',
    '|2024.06.11|v2.3.7|Add YoRHa Theme, Added Square Icon, Tweaked other themes style|',
    '|2024.04.02|v2.3.6|Add Title Behaviour Option, opens up wiki by default|',
    '|2024.04.01|v2.3.5|Add Material UI Theme, Tweaked other themes and components style|',
    '|2024.03.30|v2.3.4|Add Aetheris Theme, Tweaked other themes style|',
    '|2024.03.29|v2.3.3|Add Theme switcher, added Light and Classic themes|',
    '|2024.03.24|v2.3.2|Adj Revive project and fixed some issues, properly implement Korean language, added selectable job icon style|',
    '|2022.03.25|v2.2.3|Add Jon icon and text for Reaper, Sage|',
    '|2019.11.02|v2.2.2|Add Display NPC name in The Trust System|',
    '|2019.11.01|v2.2.1|Add Job icon and text for BlueMage, Dancer, Gunbreaker|',
    '|2017.12.01|v2.2.0|Adj CollapseMode btn move to right-top corner|',
    '|2017.12.01|v2.1.9|Add Graph On/Off|',
    '|2017.11.16|v2.1.8|Add New CollapseMode|',
    '|2017.11.14|v2.1.7|Support ActWebsocket|',
    '|2017.11.13|v2.1.6|Add English Version|',
    '|2017.11.13|v2.1.5|Add Overheal Progress|',
    '|2017.11.10|v2.1.4|Fix Load Setting Bug|',
    '|2017.11.10|v2.1.3|Add Setting: Quantity / Auto Mini|',
    '|2017.11.10|v2.1.2|Add Feedback / About|',
    '|2017.11.10|v2.1.1|Fix Bug|',
    '|2017.11.09|v2.1.0|Add Quantity|',
    '|2017.11.09|v2.0.1|Fix MinoMode|',
    '|2017.11.08|v2.0.0|Add Diy Data / Rebuild Data Tree|',
    '|2017.11.03|v1.1.3|Fix Fix MiniMode Bug|',
    '|2017.11.01|v1.1.2|Add Team View|',
    '|2017.11.01|v1.1.1|Fix Some Data Bug|',
    '|2017.10.25|v1.1.0|Add Setting Item: Chart Scale / Pure Hps|',
    '|2017.10.24|v1.0.9|Add History|',
    '|2017.10.24|v1.0.8|Add HideID / Fix MiniMode|',
    '|2017.10.22|v1.0.7|Add Click Header to Wiki|',
    '|2017.10.22|v1.0.6|Add Mini Mode|',
    '|2017.10.22|v1.0.5|Add Transparent Mode|',
    '|2017.10.22|v1.0.4|Fix Setting Bug / Scroll Bug|',
    '|2017.10.20|v1.0.3|Add Setting Page|',
    '|2017.10.19|v1.0.2|Add Detail Page|',
    '|2017.10.18|v1.0.1|Add Right-click Menu / Collapse|',
    '|2017.10.18|v1.0.0|CanisMinor Act Online|',
  ],
  // usage
  usage: [
    '|Setting|Right-click - Setting|',
    '|History|Click bottom-right clock icon|',
    '|DetailPage|Click List to Show Detail Data|',
    '|Collapse|Right-click - Collapse/Extended|',
    '|Transparent|Right-click - Transparent/Opaque|',
    '|MiniMode|Right-click - MiniMode/FullMode|',
    '|HideID|Right-click - HideID/ShowID|',
  ],
  // copyright
  copyright: [
    '|Author|CanisMinor|',
    '|ID|男孩纸榨汁机(紫水)|',
    '|QQ|40073838|',
    '|Email|i@canisminor.cc|',
    '|Site|http://ffxiv.canisminor.cc|',
  ],
};

export default {
  // basic
  cn: '简体中文',
  en: 'English',
  kr: '한국어',
  damage: 'Damage',
  healing: 'Healing',
  tanking: 'Tanking',
  // Icon
  icon_default: 'Default Icon',
  icon_glow: 'Glow Icon',
  icon_square: 'Square Icon',
  // Theme
  theme_dark: 'FFXIV Dark',
  theme_light: 'FFXIV Light',
  theme_classic: 'FFXIV Classic',
  theme_aetheris: 'Aetheris',
  theme_materialui: 'Material UI',
  theme_yorha: 'YoRHa',
  // Title behaviour
  title_openwiki: 'Wiki',
  title_openhistory: 'Battle History',
  // splash
  'splash.changelog': 'Changelog',
  'splash.usage': 'Usage',
  'splash.copyright': 'Copyright',
  'splash.more': 'More',
  // menu
  'menu.title': 'Menu',
  'menu.setting': 'Setting',
  'menu.refresh': 'Refresh',
  'menu.debug': 'Debug',
  'menu.root': 'Restore',
  'menu.fullscreen.on': 'Collapse',
  'menu.fullscreen.off': 'Extended',
  'menu.uiTrans.on': 'Opaque',
  'menu.uiTrans.off': 'Transparent',
  'menu.uiMini.on': 'Full Mode',
  'menu.uiMini.off': 'Mini Mode',
  'menu.hideName.on': 'Show ID',
  'menu.hideName.off': 'Hide ID',
  // header
  'header.save': 'History Saved',
  'header.inbattle': 'In Battle',
  // footer
  'footer.back': 'Back',
  'footer.dps': 'Dps',
  'footer.heal': 'Heal',
  'footer.tank': 'Tank',
  'footer.all': 'All',
  // normal
  'normal.waiting': 'Waiting Act Data...',
  'normal.all.damage': 'Team Damage',
  'normal.all.healing': 'Team Healing',
  'normal.all.tanking': 'Team Tanking',
  // detail
  'detail.bar': 'Detail Data',
  'detail.data.damage': 'Damage Data',
  'detail.data.healing': 'Healing Data',
  'detail.data.tanking': 'Tanking Data',
  // history
  'history.header': 'History',
  'history.bar': 'Recent battle logs',
  'history.null': 'No Battle Log',
  // qrcode
  'qrcode.header': 'Mobile Sync',
  'qrcode.null': 'Pls check the url',
  'qrcode.scan': 'Scan to sync data',
  // setting
  'setting.header': 'Setting',
  'setting.basic': 'Basic Setting',
  'setting.quantity': 'Quantity Setting',
  'setting.normal': 'Normal Data',
  'setting.detail': 'Detail Data',
  'setting.about': 'About',
  // setting.btn
  'setting.btn.reset': 'Reset',
  'setting.btn.apply': 'Apply',
  // setting.message
  'setting.message.reset': 'Restored Default Config',
  'setting.message.apply': 'Config Saved',
  'setting.message.error': 'Wrong Input',
  'setting.message.root': 'Setting Restore',
  // setting.basic
  'setting.basic.split.lang': 'Language',
  'setting.basic.lang': 'Lang (语言)',
  //
  'setting.basic.split.personal': 'Personal',
  'setting.basic.nameActive': 'Nickname',
  'setting.basic.imgActive': 'Avatar',
  //
  'setting.basic.split.statistics': 'Statistics',
  'setting.basic.graphTimeActive': 'Chart Duration (s)',
  'setting.basic.graphHide': 'Hide Chart',
  'setting.basic.graphScale': 'Chart Dynamic Scale',
  'setting.basic.pureHps': 'Hps Exclude Overheal',
  //
  'setting.basic.split.gui': 'Gui',
  'setting.basic.uiAutoMiniActive': 'Auto Mini (>num)',
  'setting.basic.uiScaleActive': 'UI Scale',
  'setting.basic.titleBehaviour': 'Title Behaviour',
  'setting.basic.icon': 'Job Icons',
  'setting.basic.theme': 'Theme Settings',
  //
  'setting.basic.split.history': 'History',
  'setting.basic.historyLength': 'History Length',
  // setting.normal
  'setting.normal.normalFull': 'Full-mode Header Display',
  'setting.normal.normalMini': 'Mini-mode Header Display',
  'setting.normal.normalDamage': 'Damage Data Display',
  'setting.normal.normalHeal': 'Healing Data Display',
  'setting.normal.normalTank': 'Tanking Data Display',
  // setting.detail
  'setting.detail.detailDamage': 'Damage Data Display',
  'setting.detail.detailHeal': 'Healing Data Display',
  'setting.detail.detailTank': 'Tanking Data Display',
  // setting.quantity
  'setting.quantity.title.updwon': 'Dps Up & Down Tips',
  'setting.quantity.title.damage': 'Dps Damage Quantity',
  'setting.quantity.title.heal': 'Heal Damage Quantity',
  'setting.quantity.title.tank': 'Tank Damage Quantity',
  'setting.quantity.title.overheal': 'Heal Overheal Quantity',
  'setting.quantity.desc.avDps': 'Team Average Dps',
  'setting.quantity.desc.dps60': 'D60s',
  'setting.quantity.desc.overHeal': 'Overheal',
  'setting.quantity.is.large': 'Higher than',
  'setting.quantity.is.small': 'Lower than',
  'setting.quantity.is.high': 'Higher than',
  'setting.quantity.is.low': 'Lower than',
  'setting.quantity.is.dps10high': 'D10s Higher than',
  'setting.quantity.is.dps10low': 'D10s Lower than',
  // setting.about
  'setting.about.version': 'Version',
  'setting.about.author': 'Author',
  'setting.about.contact': 'Contact',
  'setting.about.git': 'Git Lib',
  'setting.about.link': 'Links',
  // progress.*.title
  'progress.damage.title': 'Top damaging',
  'progress.healing.title': 'Top healing',
  'progress.tanking.title': 'Tanking',
  // placeholder
  'placeholder.you': 'YOU',
  'placeholder.img': 'Img Url',
  'placeholder.select': 'Select Display Tags...',
  'placeholder.chart': 'Waiting Data...',
  // role
  'role.you': 'YOU',
  'role.dps': 'Dps',
  'role.heal': 'Heal',
  'role.tank': 'Tank',
  'role.other': 'Other',
  'role.false': 'Other',
  'role.acn': 'Arcanist',
  'role.smn': 'Summoner',
  'role.arc': 'Archer',
  'role.brd': 'Bard',
  'role.blm': 'Black Mage',
  'role.thm': 'Thaumaturge',
  'role.drg': 'Dragoon',
  'role.lnc': 'Lancer',
  'role.pgl': 'Pugilist',
  'role.mnk': 'Monk',
  'role.mch': 'Machinist',
  'role.rog': 'Rogue',
  'role.nin': 'Ninja',
  'role.rdm': 'Red Mage',
  'role.sam': 'Samurai',
  'role.blu': 'Blue Mage',
  'role.dnc': 'Dancer',
  'role.ast': 'Astrologian',
  'role.cnj': 'Conjurer',
  'role.whm': 'White Mage',
  'role.sch': 'Scholar',
  'role.drk': 'Dark Knight',
  'role.mrd': 'Marauder',
  'role.war': 'Warrior',
  'role.gla': 'Gladiator',
  'role.pld': 'Paladin',
  'role.gnb': 'Gunbreaker',
  'role.rpr': 'Reaper',
  'role.sge': 'Sage',
  'role.vpr': 'Viper',
  'role.pct': 'Pictomancer',
  'role.chocobo': 'Chocobo',
  'role.limitbreak': 'Limit Break',
  // encounter
  'encounter.time': 'Time',
  'encounter.damage.total': 'Dmg',
  'encounter.damage.avps': 'AvD',
  'encounter.damage.ps': 'Dps',
  'encounter.damage.ps10': 'D10s',
  'encounter.damage.ps30': 'D30s',
  'encounter.damage.ps60': 'D60s',
  'encounter.damage.count': 'Dct',
  'encounter.damage.highest': 'MxD',
  'encounter.damage.kills': 'Kills',
  'encounter.healing.total': 'Hld',
  'encounter.healing.ps': 'Hps',
  'encounter.healing.count': 'Hct',
  'encounter.healing.highest': 'MxH',
  'encounter.healing.deaths': 'Die',
  'encounter.tanking.total': 'Dtk',
  // combatant
  'combatant.damage.total': 'Ttl',
  'combatant.damage.ps': 'Dps',
  'combatant.damage.ps10': 'D10s',
  'combatant.damage.ps30': 'D30s',
  'combatant.damage.ps60': 'D60s',
  'combatant.damage.count': 'Ct',
  'combatant.damage.percent': 'Pct',
  'combatant.damage.highest': 'Max',
  'combatant.damage.criticals': 'Crt',
  'combatant.damage.directhit': 'Drt',
  'combatant.damage.critdirecthit': 'Cdt',
  'combatant.damage.kills': 'Kill',
  'combatant.healing.total': 'Ttl',
  'combatant.healing.ps': 'Hps',
  'combatant.healing.count': 'Ct',
  'combatant.healing.percent': 'Pct',
  'combatant.healing.over': 'Over',
  'combatant.healing.highest': 'Max',
  'combatant.healing.criticals': 'Crt',
  'combatant.healing.deaths': 'Die',
  'combatant.tanking.total': 'Ttl',
  'combatant.tanking.percent': 'Pct',
  'combatant.tanking.parry': 'Pry',
  'combatant.tanking.block': 'Blc',
  'combatant.tanking.dodge': 'Dod',
  ...Splash,
};
