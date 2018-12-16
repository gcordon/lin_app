module.exports = {
    // 接收参数
    getParam(ctx, pramArr) {
        try {
            let arr = {}
            pramArr.forEach(item => {
                const pa = ctx.request.body[item] || ctx.query[item]
                arr[item] = pa
            })
            return arr
        } catch (error) {
            throw (`${__filename} => getParam 函数出错`)
        }
    }
}
