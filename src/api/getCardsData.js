const cardsData = [{
    name: '显示方式',
    attr: 'display',
    rankNum: 5,
    curRankNum: 0,
    brief: '设置元素的显示方式',
    methods: [{
        methodName: 'block',
        methodRank: ''
    }, {
        methodName: 'inline',
        methodRank: ''
    }, {
        methodName: 'inline-block',
        methodRank: ''
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
export function getAllCardsData() {
    return cardsData
}

export function getLessonRelateCard(lessonPart) {
    return cardsData.find(card => card.attr == lessonPart)
}