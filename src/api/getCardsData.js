const cardsData = [{
        name: '显示方式',
        attr: 'display',
        rankNum: 5,
        curRankNum: 0,
        brief: '设置元素的显示方式',
        methods: [{
            id: 1,
            methodName: 'block',
            methodBreif: '元素将按块级元素显示',
            methodRank: '',
            methodCurRank: ''
        }, {
            id: 2,
            methodName: 'inline',
            methodBreif: '元素将按行级元素显示',
            methodRank: '',
            methodCurRank: ''
        }, {
            id: 3,
            methodName: 'inline-block',
            methodBreif: '元素将按行级块状元素显示',
            methodRank: '',
            methodCurRank: ''
        }],
        img: ''
    }, {
        name: '宽度',
        attr: 'width',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'auto',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '高度',
        attr: 'height',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'auto',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '内边距',
        attr: 'padding',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '外边距',
        attr: 'margin',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: true,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: true,
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'auto',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '边框样式',
        attr: 'border-style',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'dashed',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'solid',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }, ],
        img: ''
    }, {
        name: '边框粗细',
        attr: 'border-width',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'thin',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'medium',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'thick',
            methodRank: '',
        }, {
            id: 5,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '边框颜色',
        attr: 'border-color',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '盒尺寸计算模式',
        attr: 'box-sizing',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'content-box',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'border-box',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '行高',
        attr: 'line-height',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'normal',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    },
    // {
    //     name: '对齐',
    //     attr: 'vetical-align',
    //     rankNum: 5,
    //     curRankNum: 0,
    //     methods: [{
    //         id: 1,
    //         methodName: 'number-px',
    //         canbeMinus: false,
    //         methodRank: '',
    //     },  {
    //         id: 2,
    //         methodName: 'initial',
    //         methodRank: '',
    //     }],
    //     img: ''
    // },
    {
        name: '浮动',
        attr: 'float',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'right',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'left',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'none',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '清除浮动',
        attr: 'clear',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'both',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'left',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'right',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'none',
            methodRank: '',
        }, {
            id: 5,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '定位',
        attr: 'position',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'relative',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'absolute',
            methodRank: '',
        }, {
            id: 3,
            methodName: 'fixed',
            methodRank: '',
        }, {
            id: 4,
            methodName: 'static',
            methodRank: '',
        },{
            id: 5,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '定位距离',
        attr: 'position-offset',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: true,
            methodRank: '',
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: true,
            methodRank: '',
        }, {
            id: 3,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }, {
        name: '层级',
        attr: 'z-index',
        rankNum: 5,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number',
            methodRank: '',
        }, {
            id: 2,
            methodName: 'initial',
            methodRank: '',
        }],
        img: ''
    }
]
// 获取该项目全部涉及到的卡片（属性）数据
export function getAllCardsData() {
    return cardsData
}

// 获取某课程涉及到的卡片（属性）数据
// TODO: 一个课程涉及多种卡片的情况还未考虑到
export function getLessonRelateCard(lessonPart) {
    return cardsData.find(card => card.attr == lessonPart)
}

// 获取某卡片（属性）数据
export function getCardInfo(attrName) {
    return cardsData.find(card => card.attr == attrName)
}

// 获取某属性的技能（属性值）数据
export function getCardMethods(attrName) {
    const card = cardsData.find(card => card.attr == attrName)
    return card.methods
}