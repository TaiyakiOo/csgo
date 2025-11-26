// --- 🔴 预告位设置 ---
const teaser = { active: false, id: "第005期", prize: "引爆器音乐盒集", date: "即将上线" };

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

    { id: "第005期", prize: "引爆器音乐盒集", seed: "Random_2346", players: ["CaseGo3979588","CaseGo352472","CaseGo352472","东方树叶🍃","Liar"], outSequence: [1,4,2,0], winnerIdx: 3, date: "2025-11-26" }

];





