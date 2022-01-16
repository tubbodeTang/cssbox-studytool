const ColorList = {
    block: {
        bgColor: '#07c160' // green
    },
    inline: {
        bgColor: '#1989fa' // blue
    },
    inlineBlock: {
        bgColor: '#ff976a' // orange
    }
}
// #ee0a24  // red
export function getColorByType(typeName, CSSAttr) {
    return ColorList[typeName][CSSAttr]
}