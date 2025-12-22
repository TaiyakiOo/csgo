// data.js

const teaser = { active: false, id: "第053期", prize: "？？？", date: "等待生成" };

const gameHistory = [
    
    // 演示局：追猎者 Admin 选择了 R1 和 R9 作为安全区
    { 
        id: "第052期-猎杀行动", 
        type: "map_hunter", 
        prize: "M9刺刀 | 自动化", 
        hunter: "红烧肉", // 追猎者名字
        players: ["A", "B", "C", "D", "E"], 
        rooms: [0, 4, 8, 0, 2], // 玩家分布: 苏生(1号), 七七(5号), Liar(9号), 东方(1号), Gg(3号)
        // 安全区是 R1(0) 和 R9(8)。
        // 意味着除了 0 和 8，其他都要被清洗。
        // HuntSequence 必须包含 1,2,3,4,5,6,7 (乱序)
        huntSequence: [4, 2, 6, 7, 3, 5, 1], 
        date: "2025-12-22" 
    },

    // 在这里粘贴 Admin 生成的代码
    
];
