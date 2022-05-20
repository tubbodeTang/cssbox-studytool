const competeList = [{
    id: 1,
    competeName: '城市高楼',
    content: '比比谁的城市更繁华？',
    imgSrc: '/src/assets/lessonImg/occupyImg.jpg',
    joinNum: Math.floor(Math.random() * 10),
}, {
    id: 2,
    competeName: '月夜',
    content: '在月色迷人的夜晚，你能想象到什么样的场景？',
    imgSrc: '/src/assets/lessonImg/occupyImg.jpg',
    joinNum: Math.floor(Math.random() * 10),
}, ]


// 随机获取竞赛例子数据
export function getCompeteItemData() {
    const i = Math.floor(Math.random() * 10)
    const item = competeList[i] || competeList[competeList.length - 1]
    return item
}