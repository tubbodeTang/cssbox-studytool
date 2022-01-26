const cardsData = [{
    name: '显示方式',
    attr: 'display',
    rankNum: 5,
    curRankNum: 0,
    brief: '设置元素的显示方式',
    methods: [{
        methodName: 'block',
        methodBreif: '元素将按块级元素显示',
        methodRank: '',
        methodCurRank: ''
    }, {
        methodName: 'inline',
        methodBreif: '元素将按行级元素显示',
        methodRank: '',
        methodCurRank: ''
    }, {
        methodName: 'inline-block',
        methodBreif: '元素将按行级块状元素显示',
        methodRank: '',
        methodCurRank: ''
    }],
    img: ''
}, {
    name: '高度',
    attr: 'height',
    rankNum: 5,
    curRankNum: 0,
    methods: [{
        methodName: 'number',
        methodRank: ''
    }, {
        methodName: 'percent',
        methodRank: ''
    }, {
        methodName: 'auto',
        methodRank: ''
    }],
    img: ''
}, {
    name: '宽度',
    attr: 'width',
    rankNum: 5,
    curRankNum: 0,
    methods: [{
        methodName: '',
        methodRank: ''
    }],
    img: ''
}, {
    name: '宽度',
    attr: 'width',
    rankNum: 5,
    curRankNum: 0,
    methods: [{
        methodName: '',
        methodRank: ''
    }],
    img: ''
}, {
    name: '宽度',
    attr: 'width',
    rankNum: 5,
    curRankNum: 0,
    methods: [{
        methodName: '',
        methodRank: ''
    }],
    img: ''
}, {
    name: '宽度',
    attr: 'width',
    rankNum: 5,
    curRankNum: 0,
    methods: [{
        methodName: '',
        methodRank: ''
    }],
    img: ''
}]
// 获取该项目全部涉及到的卡片（属性）数据
export function getAllCardsData() {
    return cardsData
}

// 获取某课程涉及到的卡片（属性）数据
// TODO: 一个课程涉及多种卡片的情况还未考虑到
export function getLessonRelateCard(lessonPart) {
    return cardsData.find(card => card.attr == lessonPart)
}

// 获取某属性的卡片（属性）数据
export function getCardInfo(attrName) {
    return cardsData.find(card => card.attr == attrName)
}