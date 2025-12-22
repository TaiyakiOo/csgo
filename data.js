// data.js

const teaser = { active: false, id: "第051期", prize: "？？？", date: "等待生成" };

const gameHistory = [
    
    // 示例：前7个房间都被清洗，只有最后2个房间安全
    { 
        id: "第000期-无差别清洗演示", 
        type: "map_zone", 
        prize: "M4A4 | 二西莫夫 (久经沙场)", 
        players: ["A", "B", "C", "D", "E"], 
        rooms: [0, 4, 8, 0, 2], // 玩家分布
        huntSequence: [1, 3, 5, 7, 8, 2, 6], // 屠夫依次清洗这7个房间 (注意：虽然4号房和0号房没人被点到，但他们安全吗？不，只要不在序列里就安全)

        date: "2025-12-21" 
    },

    // ⬇️ 粘贴你的 Admin 代码 ⬇️
    
];

