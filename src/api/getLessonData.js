const lessonData = {
    flow: [{
        title: '流',
        content: '网页的布局主要有两种流向：横向，纵向',
        image: ''

    }, {
        title: '块级元素',
        content: '块级元素默认纵向依次排列，占满可视宽度',
        image: ''
    }, {
        title: '行内元素',
        content: '行内元素在横向上依次排列，到达可视宽度后自动换行',
        image: ''
    }, {
        title: '行内块元素',
        content: '可以横向在一行中排列的块级元素',
        image: ''
    }],
    box_block: [

    ],
    box_inline: [],
    box_inline_block: [],
    float: [],
    position: []
}

export function getLessonData(lessonPart) {
    return lessonData[lessonPart]
}