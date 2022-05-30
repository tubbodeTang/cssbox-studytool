import imgUrl1 from '@/assets/demoImg/3-1.png'
import imgUrl2 from '@/assets/demoImg/3-2.png'
import imgUrl3 from '@/assets/demoImg/3-3.png'
import imgUrl4 from '@/assets/demoImg/3-4.png'

export let mydraftList = [{
    id: 1,
    workName: '测试1',
    likeNum: 0,
    img: imgUrl1
}, {
    id: 2,
    workName: '测试2',
    likeNum: 0,
    img: imgUrl2
}]


export let worldList = [{
    id: 3,
    workName: '测试1测试1测试1',
    userId: 'txb406',
    myLike: false,
    likeNum: 0,
    img: imgUrl1
}, {
    id: 4,
    workName: '测试2',
    userId: 'txb406',
    likeNum: 0,
    img: imgUrl2
}, {
    id: 5,
    workName: '测试1',
    userId: 'txbdev',
    myLike: false,
    likeNum: 0,
    img: imgUrl3
}, {
    id: 6,
    workName: '测试2',
    userId: 'txbdev',
    likeNum: 12,
    img: imgUrl4
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