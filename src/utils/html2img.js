import html2canvas from "html2canvas"

export function GeneratePicture(ele) {
    // {
    //     backgroundColor: null, // 背景颜色
    //     dpi: 192, // 将分辨率提高到特定的dpi,默认值为96
    //     scale: 2, // 用于渲染的比例尺。默认为浏览器设备像素比率。默认值是1，手机端设置成2
    //     useCORS:true, // 是否尝试使用CORS从服务器加载图像
    // }
    debugger
   return html2canvas(ele, {
        logging: false,
        allowTaint: true,
        scale: 2,
        // width: shareContent.clientWidth, //dom 原始宽度
        // height: shareContent.clientHeight,
        scrollY: 0,
        scrollX: 0,
        useCORS: true,
        backgroundColor: '#ffffff',
    })
};