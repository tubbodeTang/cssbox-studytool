const mydraftList = [{
    id: 1,
    workName: '测试1',
    likeNum: 0,
    img: ''
}, {
    id: 2,
    workName: '测试2',
    likeNum: 0,
    img: ''
}]


const worldList = [{
    id: 3,
    workName: '测试1测试1测试1',
    userId: 'txb406',
    myLike: false,
    likeNum: 0,
    img: ''
}, {
    id: 4,
    workName: '测试2',
    userId: 'txb406',
    likeNum: 0,
    img: ''
}, {
    id: 5,
    workName: '测试1',
    userId: 'txbdev',
    myLike: false,
    likeNum: 0,
    img: ''
}, {
    id: 6,
    workName: '测试2',
    userId: 'txbdev',
    likeNum: 12,
    img: ''
}]

import store from '@/store/index.js'

// 获取世界作品数据
export function getWorldListData() {
    return worldList
}

// 获取我的作品数据
export function getMyWorkListData() {
    //  status  0 - notRelease 1 - Released
    const myReleaseWork = worldList.filter(item => item.userId === store.state.userId)
    myReleaseWork.map(item => item.status = 1)
    const mydraftListCopy = JSON.parse(JSON.stringify(mydraftList))
    mydraftListCopy.map(item => item.status = 0)
    return mydraftListCopy.concat(myReleaseWork)
}