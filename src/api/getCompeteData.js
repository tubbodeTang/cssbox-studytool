const competeList = [{
    id: 1,
    competeName: '测试1测试1测试1',
    content: '测试1测试1测试1测试1测试1测试1测试1测试1测试1',
    imgSrc: '',
    joinNum: Math.floor(Math.random() * 10),
}, {
    id: 2,
    competeName: '测试2测试2测试2',
    content: '测试1测试1测试1测试1测试1测试1测试1测试1测试1',
    imgSrc: '',
    joinNum: Math.floor(Math.random() * 10),
}]


// 随机获取竞赛例子数据
export function getCompeteItemData() {
    const i = Math.floor(Math.random() * 10)
    const item = competeList[i] || competeList[competeList.length - 1]
    return item
}