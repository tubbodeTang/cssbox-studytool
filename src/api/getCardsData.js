const cardsData = [{
        name: '显示方式',
        attr: 'display',
        rankNum: 3,
        curRankNum: 0,
        brief: '设置元素的显示方式',
        methods: [{
            id: 1,
            methodName: 'block',
            methodBreif: '元素将按块级元素显示',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'inline',
            methodBreif: '元素将按行级元素显示',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'inline-block',
            methodBreif: '元素将按行级块状元素显示',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '宽度',
        attr: 'width',
        rankNum: 3 * 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'auto',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '高度',
        attr: 'height',
        rankNum: 3 * 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'auto',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '内边距',
        attr: 'padding',
        rankNum: 2 * 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '外边距',
        attr: 'margin',
        rankNum: 3 * 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: true,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: true,
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'auto',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '边框样式',
        attr: 'border-style',
        rankNum: 3,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'dashed',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'solid',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }, ],
        img: ''
    }, {
        name: '边框粗细',
        attr: 'border-width',
        rankNum: 4,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'thin',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'medium',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'thick',
            methodCurRank: 0,
        }, {
            id: 5,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '边框颜色',
        attr: 'border-color',
        rankNum: 1,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '盒尺寸计算模式',
        attr: 'box-sizing',
        rankNum: 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'content-box',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'border-box',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '行高',
        attr: 'line-height',
        rankNum: 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: false,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'normal',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
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
    //         methodCurRank: 0,
    //     },  {
    //         id: 2,
    //         methodName: 'initial',
    //         methodCurRank: 0,
    //     }],
    //     img: ''
    // },
    {
        name: '浮动',
        attr: 'float',
        rankNum: 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'right',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'left',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'none',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '清除浮动',
        attr: 'clear',
        rankNum: 2,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'both',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'left',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'right',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'none',
            methodCurRank: 0,
        }, {
            id: 5,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '定位',
        attr: 'position',
        rankNum: 4,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'relative',
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'absolute',
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'fixed',
            methodCurRank: 0,
        }, {
            id: 4,
            methodName: 'static',
            methodCurRank: 0,
        }, {
            id: 5,
            methodName: 'initial',
            methodCurRank: 0,
        }],
        img: ''
    }, {
        name: '定位距离',
        attr: 'position-offset',
        rankNum: 3,
        curRankNum: 0,
        methods: [{
            id: 1,
            methodName: 'number-px',
            canbeMinus: true,
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'number-%',
            canbeMinus: true,
            methodCurRank: 0,
        }, {
            id: 3,
            methodName: 'initial',
            methodCurRank: 0,
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
            methodCurRank: 0,
        }, {
            id: 2,
            methodName: 'initial',
            methodCurRank: 0,
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

// 获取所有属性名称
export function getAllCardsName() {
    return cardsData.map(item => item.attr)
}