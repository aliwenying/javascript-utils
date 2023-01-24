/**
 * 将 file、blob、stream 格式 转 DateURL
 * @param {Blob | File } blob  
 * @returns {Promise<any>}
 */
export const blobToDataURL = (blob) => {
    return new Promise((succ, fail) => {
        let reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = () => {
            succ(reader.result)
        }
        reader.onerror = (err) => {
            fail(err)
        }
    })
}

/**
 * 将图片的 dataURL 转为 Blob 格式
 * @param {String} dataURL 
 * @return {Blob}
 */
export const dataURLtoBlob = (dataURL) => {
    let arr = dataURL.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}


/**
 * 将图片的 url 转为 base64 格式
 * @param {URL} url 
 * @returns {Promise<any>}
 */
export const getImgToBase64 = (url) => {
    return new Promise((succ, fail) => {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        let img = new Image;
        img.crossOrigin = 'Anonymous'
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0)
            var dataURL = canvas.toDataURL('image/jpg')
            succ(dataURL)
            canvas = null
        }
        img.onerror = err => fail(err)
        img.src = url
    })
}

/**
 * 将图片的 url 转为 Blob 格式
 * @param {URL} url 
 * @returns {Promise<Blob>}
 */
export const getImgToBlob = async url => {
    let dataURL = await getImgToBase64(url)
    let blob = await dataURLtoBlob(dataURL)
    return blob
}

/**
 * 在客户端触发文件下载
 * @param {string} fileName 
 * @param {Blob | File | String | any[]} content 
 * @param {?:String} type 
 * @returns {void}
 */
export const downloadFile = (fileName, content, type = 'text/plain') => {
    var el = document.createElement('a');
    var blob = new Blob([content], { type });
    el.href = URL.createObjectURL(blob)
    el.download = fileName
    el.addEventListener('click', e => e.stopImmediatePropagation());
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}


/**
 * 将文本数据放置在剪贴板上
 * @param {String} value 
 */
export const setClipboardData = (value) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

