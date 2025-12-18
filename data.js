// --- 🔴 预告位设置 ---
const teaser = { active: true, id: "第038期-金桔柠檬18", prize: "截短霰弹枪 | 么么 (久经沙场)", date: "即将上线" };

// --- 🔵 历史回放列表 ---
const gameHistory = [

    // 第000期
    { 
        id: "第000期", 
        seed: "CSGO-8888", 
        prize: "AWP | 二西莫夫", 
        players: ["玩家A", "玩家B", "玩家C", "玩家D", "玩家E"], 
        outSequence: [0, 1, 3, 4], 
        winnerIdx: 2, 
        date: "2025-11-24" 
    }, 

    // 第001期
    {  
        id: "第001期", 
        seed: "Internal_Random_3676", 
        prize: "Tec-9 | 遥控 (久经沙场)", 
        players: ["苏生1","苏生2","神之一偷","橙汁豹儿🍊","东方树叶🍃"], 
        outSequence: [1,2,3,0], 
        winnerIdx: 4, 
        date: "2025-11-24" 
    }, // <--- 🚨 刚才就是这里少了一个逗号！！！

    // 第003期 (你新加的)
    { 
        id: "第003期", 
        prize: "音乐盒 | Knock2 - 冲击星*Roll", 
        seed: "Random_9156", 
        players: ["七七七","东方树叶🍃","东方树叶🍃","CaseGo352472","Liar"], 
        outSequence: [2,3,1,4], 
        winnerIdx: 0, 
        date: "2025-11-25" 
    },

    { id: "第004期", prize: "AK-47 | 幻影破坏者 (久经沙场)", seed: "Random_2736", players: ["what","what","what","what","东方树叶🍃"], outSequence: [4,2,0,3], winnerIdx: 1, date: "2025-11-25" },

    { id: "第005期", prize: "引爆器音乐盒集", seed: "Random_2346", players: ["CaseGo3979588","CaseGo352472","CaseGo352472","东方树叶🍃","Liar"], outSequence: [1,4,2,0], winnerIdx: 3, date: "2025-11-26" },

    { id: "第006期", prize: "引爆器音乐盒集", seed: "Random_5992", players: ["东方树叶🍃","case夺卡有问题","苏生哥","东方树叶🍃","东方树叶🍃"], outSequence: [1,3,4,0], winnerIdx: 2, date: "2025-11-26" },

    { id: "第007期", prize: "USP消音版 | 脑洞大开 (久经沙场)", seed: "Random_4934", players: ["CaseGo3979588","CaseGo3979588","东方树叶🍃","苏生哥","东方树叶🍃"], outSequence: [0,4,2,1], winnerIdx: 3, date: "2025-11-27" },

    { id: "第008期", prize: "AWP | 死神 (久经沙场)", seed: "Random_6183", players: ["东方树叶🍃","东方树叶🍃","CaseGo3979588","what","东方树叶🍃"], outSequence: [1,2,0,3], winnerIdx: 4, date: "2025-11-27" },

    { id: "第009期", prize: "柠檬汁胸章", seed: "Random_2728", players: ["what","what","七七七","七七七","七七七"], outSequence: [3,2,1,4], winnerIdx: 0, date: "2025-11-28" },

    { id: "第010期", prize: "P250 | 迷人幻象 (久经沙场)", seed: "Random_7126", players: ["CaseGo3624888","七七七","摸鱼爽","兮玫ovo","Ggboog"], outSequence: [1,4,3,2], winnerIdx: 0, date: "2025-11-28" },

    { id: "第011期", prize: "印花 | 卡哇伊CT（全息）", seed: "Random_5557", players: ["奇迹9","CaseGo5404","随便吃吃🤤","苏生哥","随便吃吃🤤"], outSequence: [2,1,0,3], winnerIdx: 4, date: "2025-11-28" },

    { id: "第012期", prize: "AWP | 树蝰 (久经沙场)", seed: "Random_8873", players: ["奇迹9","奇迹9","奇迹9","Ggboog","Liar"], outSequence: [2,1,4,3], winnerIdx: 0, date: "2025-11-29" },

    { id: "第013期", prize: "音乐盒 | Neck Deep - 躺平青年", seed: "Random_3191", players: ["Ggboog","枫落悔起","兮玫ovo","Ggboog","Liar"], outSequence: [1,3,2,0], winnerIdx: 4, date: "2025-11-30" },

    { id: "第014期", prize: "M4A4 | 轰天闪 (久经沙场)", seed: "Random_209", players: ["七七七","Liar","优妮仙贝","good666","七七七"], outSequence: [0,2,3,4], winnerIdx: 1, date: "2025-11-30" },

    { id: "第015期", prize: "意大利小镇胸章", seed: "Random_8987", players: ["CaseGo3979588","七七七","摸鱼爽","摸鱼爽","CaseGo3979588"], outSequence: [3,4,0,1], winnerIdx: 2, date: "2025-12-01" },

    { id: "第015期-金桔柠檬6", prize: "AUG | 扎佩姆斯之眼 (久经沙场)", seed: "Random_4658", players: ["吃嘛了","what","摸鱼爽","Ggboog","case夺卡有问题"], outSequence: [2,1,3,0], winnerIdx: 4, date: "2025-12-01" },

    { id: "第016期-生椰抹茶8", prize: "音乐盒 | 完美世界，诶嘿", seed: "Random_6336", players: ["我来偷奖","是嘿嘿啊","七七七","猎杀你的马马","CaseGo7760281"], outSequence: [2,1,0,4], winnerIdx: 3, date: "2025-12-02" },

    { id: "第017期-金桔柠檬7", prize: "P2000 | 变态杀戮 (久经沙场)", seed: "Random_7511", players: ["摸鱼爽","摸鱼爽","CaseGo3979588","摸鱼爽","米勒1"], outSequence: [2,3,4,1], winnerIdx: 0, date: "2025-12-02" },

    { id: "第018期-生椰抹茶9", prize: "AWP | 金粉肆蛇 (久经沙场)", seed: "Random_84", players: ["摸鱼爽","Ggboog","摸鱼爽","Ggboog","Ggboog"], outSequence: [2,3,0,1], winnerIdx: 4, date: "2025-12-02" },

    { id: "第019期-金桔柠檬", prize: "USP 消音版 | 血刃 (久经沙场)", seed: "Random_4978", players: ["CaseGo352472","双木萤火","Liar","Ggboog","CaseGo352472"], outSequence: [1,2,3,0], winnerIdx: 4, date: "2025-12-03" },

    { id: "第020期-生椰抹茶10", prize: "音乐盒 | KILL SCRIPT - 通宵达旦", seed: "Random_8712", players: ["Ggboog","枫落悔起","兮玫ovo","枫落悔起","CaseGo6674233"], outSequence: [4,3,0,2], winnerIdx: 1, date: "2025-12-03" },

    { id: "第021期-金桔柠檬9", prize: "FN57 | 同步力场 (久经沙场)", seed: "Random_7648", players: ["双木萤火","双木萤火","CaseGo3979588","Ggboog","是嘿嘿啊"], outSequence: [3,1,4,2], winnerIdx: 0, date: "2025-12-03" },

    { id: "第022期-生椰抹茶11", prize: "音乐盒 | 完美世界 - 花脸", seed: "Random_7133", players: ["奇迹9","CaseGo352472","myy","奇迹9","奇迹9"], outSequence: [1,3,0,2], winnerIdx: 4, date: "2025-12-04" },

    { id: "第023期-金桔柠檬10", prize: "UMP-45 | 动量 (久经沙场)", seed: "Random_4487", players: ["奇迹9","CaseGo3979588","奇迹9","新人某神","是嘿嘿啊"], outSequence: [3,2,0,4], winnerIdx: 1, date: "2025-12-05" },

    { id: "第024期-生椰抹茶12", prize: "音乐盒 | 多名作曲家 - 迈阿密热线", seed: "Random_8079", players: ["吃嘛了","不爱甜食2号","CaseGo4509952","what","是嘿嘿啊"], outSequence: [1,2,3,0], winnerIdx: 4, date: "2025-12-06" },

    { id: "第025期-金桔柠檬11", prize: "加利尔AR | 迷人眼 (久经沙场)", seed: "Random_6104", players: ["是嘿嘿啊","CaseGo3979588","吃嘛了","吃嘛了","吃嘛了"], outSequence: [1,3,0,2], winnerIdx: 4, date: "2025-12-06" },

    { id: "第026期-生椰抹茶13", prize: "音乐盒 | 完美世界，诶嘿", seed: "Random_543", players: ["what","what","what","CaseGo352472","what"], outSequence: [1,4,3,2], winnerIdx: 0, date: "2025-12-07" },

    { id: "第027期-金桔柠檬12", prize: "XM1014 | 埋葬之影 (久经沙场)", seed: "Random_2320", players: ["CaseGoxx黑化版绝地翻盘","CaseGo352472","CaseGo352472","幸运王999","枫铃月"], outSequence: [2,3,1,4], winnerIdx: 0, date: "2025-12-08" },

    { id: "第028期-生椰抹茶14", prize: "音乐盒 | Lennie Moore - 爪哇哈瓦那放克乐", seed: "Random_3360", players: ["你们笑哈哈","CaseGoxx黑化版绝地翻盘","七七七","经验+3","hxbz"], outSequence: [3,0,2,4], winnerIdx: 1, date: "2025-12-10" },

    { id: "第029期-金桔柠檬13", prize: "M4A4 | 齿仙 (久经沙场)", seed: "Random_774", players: ["CaseGoxx黑化版绝地翻盘","CaseGo3979588","what","CaseGo3979588","CaseGoxx黑化版绝地翻盘"], outSequence: [0,4,2,3], winnerIdx: 1, date: "2025-12-11" },

    { id: "第030期-生椰抹茶15", prize: "音乐盒 | 多名作曲家 - 迈阿密热线", seed: "Random_4738", players: ["让俺老猪吃一口","让俺老猪吃一口","优妮仙贝","让俺老猪吃一口","让俺老猪吃一口"], outSequence: [3,1,4,2], winnerIdx: 0, date: "2025-12-11" },

    { id: "第031期-金桔柠檬14", prize: "XM1014 | 怪物汰换 (久经沙场)", seed: "Random_1313", players: ["what","是嘿嘿啊","what","what","what"], outSequence: [1,3,0,2], winnerIdx: 4, date: "2025-12-12" },

    { id: "第032期-生椰抹茶16", prize: "音乐盒 | 完美世界，诶嘿", seed: "Random_112", players: ["case夺卡有问题","CaseGo3979588","CaseGoxx黑化版绝地翻盘","case夺卡有问题","case夺卡有问题"], outSequence: [4,2,3,1], winnerIdx: 0, date: "2025-12-13" },
    
    { id: "第33期-金桔柠檬15", prize: "XM1014 | 要抱抱 (久经沙场)", seed: "Random_7013", players: ["what","what","what","七七七","what"], outSequence: [3,1,2,4], winnerIdx: 0, date: "2025-12-13" },

    { id: "第034期-生椰抹茶17", prize: "音乐盒 | 完美世界 - 花脸", seed: "Random_705", players: ["CaseGo4444172","东方树叶🍃","东方树叶🍃","是嘿嘿啊","case夺卡有问题"], outSequence: [3,1,0,4], winnerIdx: 2, date: "2025-12-15" },

    { id: "第035期-金桔柠檬16", prize: "法玛斯 | ZX81 彩色 (久经沙场)", seed: "Random_1041", players: ["是嘿嘿啊","CaseGo7238428","CaseGo7238428","是嘿嘿啊","东方树叶🍃"], outSequence: [0,1,3,4], winnerIdx: 2, date: "2025-12-15" },

    { id: "第036期-生椰抹茶18", prize: "音乐盒 | bbno$ - 你急了！", seed: "Random_1790", players: ["CaseGo3979588","CaseGo3979588","CaseGo2370419","是嘿嘿啊","CaseGo3979588"], outSequence: [2,1,4,3], winnerIdx: 0, date: "2025-12-16" },

    { id: "第037期-金桔柠檬17", prize: "Tec-9 | 遥控 (久经沙场)", seed: "Random_6790", players: ["CaseGo2370419","CaseGo2370419","CaseGo2370419","what","CaseGo2370419"], outSequence: [2,3,4,0], winnerIdx: 1, date: "2025-12-17" },

    { id: "第037期-生椰抹茶19", prize: "音乐盒 | New Beat Fund - 海绵手指", seed: "Random_8895", players: ["Liar","东方树叶🍃","（o.0）","CaseGo2370419","Liar"], outSequence: [0,2,1,3], winnerIdx: 4, date: "2025-12-18" }

];

































































