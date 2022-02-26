const lessonData = {
    flow: [{
        id: 1,
        title: '流和元素框区域',
        targetAttr: null,
        targetAttrVal: null,
        canLearn: true,
        lessonContent: [{
            id: 1,
            content: `写字的时候我们是从左到右，
            从上到下的排布文字，网页中的元素也有类似于此的排布方向。`,
            image: ''
        }, {
            id: 2,
            content: '网页的排布也有两种流向：横向-从左到右，纵向-从上到下，这种排布方向就是流。',
            image: ''
        }, {
            id: 3,
            content: '网页中的元素区域可以看成是一个个矩形的区域，它们按照从上到下从左到右的流排布。',
            image: ''
        }, {
            id: 4,
            content: '这其中，负责从上到下纵向排布的区域，叫做块级区域',
            image: ''
        }, {
            id: 5,
            content: '负责从左到右横向排布的区域，叫做行级区域',
            image: ''
        }],
    }, {
        id: 2,
        title: '块级区域',
        targetAttr: 'display',
        targetAttrVal: 'block',
        canLearn: true,
        lessonContent: [{
            id: 1,
            content: '可以通过控制区域的显示方式为 display:block，来创建块级区域',
            image: ''
        }, {
            id: 2,
            content: '块级区域在纵向上依次排列',
            image: ''
        }, {
            id: 3,
            content: '块级区域内部可以容纳其他的块级区域和行级区域',
            image: ''
        }, {
            id: 4,
            content: '块级元素默认将会填满外部容器的宽度',
            image: ''
        }],
    }, {
        id: 3,
        title: '行级区域',
        targetAttr: 'display',
        targetAttrVal: 'inline',
        canLearn: true,
        lessonContent: [{
            id: 1,
            content: '可以通过控制区域的显示方式为 display:inline，来创建行级区域',
            image: ''
        }, {
            id: 2,
            content: '行级区域在横向上依次排列，到达外部容器的宽度后自动换行',
            image: ''
        }, {
            id: 3,
            content: '行级区域一般只能容纳行级区域',
            image: ''
        }],
    }, {
        id: 4,
        title: '行级块区域',
        targetAttr: 'display',
        targetAttrVal: 'inline-block',
        canLearn: true,
        lessonContent: [{
            id: 1,
            content: '可以通过控制区域的显示方式为 display:inline，来创建行级区域',
            image: ''
        }, {
            id: 2,
            content: '行级区域在横向上依次排列，到达外部容器的宽度后自动换行',
            image: ''
        }, {
            id: 3,
            content: '行级区域一般只能容纳行级区域',
            image: ''
        }],
    }],
    box_block: [{
        title: '块级盒子',
        targetAttr: null,
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '块级盒子的边框',
        targetAttr: 'border-style',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '块级盒子的宽度',
        targetAttr: 'width',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '块级盒子的高度',
        targetAttr: 'height',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '块级盒子的内边距',
        targetAttr: 'padding',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '块级盒子的外边距',
        targetAttr: 'margin',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }],
    box_inline: [{
        title: '行级盒子',
        targetAttr: null,
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级盒子的边',
        targetAttr: 'border-style',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '和块级盒子的边一样，也可以有样式、宽度、颜色',
            image: ''
        }],
    }, {
        title: '行级盒子的内边距',
        targetAttr: 'padding',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级盒子的外边距',
        targetAttr: 'margin',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }],
    box_inline_block: [{
        title: '行级块盒',
        targetAttr: null,
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级块盒的宽度',
        targetAttr: 'width',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级块盒的高度',
        targetAttr: 'height',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级块盒的内边距',
        targetAttr: 'padding',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }, {
        title: '行级块盒的外边距',
        targetAttr: 'margin',
        targetAttrVal: null,
        canLearn: false,
        lessonContent: [{
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }, {
            content: '网页的布局主要有两种流向：横向，纵向',
            image: ''
        }],
    }],
    float: [],
    position: [],
    z_index: []
}

export function getLessonList(lessonPart) {
    return lessonData[lessonPart]
}

export function getLessonData(lessonPart, lessonName) {
    return lessonData[lessonPart].find(item => item.title === lessonName)
}