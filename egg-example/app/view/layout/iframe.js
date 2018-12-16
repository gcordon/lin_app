const iframe = layer.open({
    content: 'test',
    type: 2,
    area: ['500px', '650px'],
    fixed: false, //不固定
    maxmin: true,
    scrollbar: false,
    content: '../public/view/getUser/iframe.html',
    success: function (layero, index) {
        var body = layer.getChildFrame('body', index);
        var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
        //- console.log(body.html()) //得到iframe页的body内容
        body.find("input[name='username']").val(username)
        body.find("input[name='name']").val(name)
        body.find("input[name='school']").val(school)
        body.find("input[name='password']").val(password)
        body.find("input[name='email']").val(email)
        if (sex == 1) {
            body.find("input[name='sex'][title='男']").val(sex)
        } else if (sex == 2) {
            body.find("input[name='sex'][title='女']").val(sex)
        }

        body.find("input[name='token']").val(token)
        console.log($(avatar))
        if (sex == 1) { // 男生
            let a = body.find("input[name='sex'][title='男']")
            $(a).attr('checked', 'checked')
            $(a).next('div').addClass('layui-form-radioed')
            $(a).next('div').find('i').addClass('layui-anim-scaleSpring')
        } else if (sex == 2) {
            let a = body.find("input[name='sex'][title='女']")
            $(a).attr('checked', 'checked')
            $(a).next('div').addClass('layui-form-radioed')
            $(a).next('div').find('i').addClass('layui-anim-scaleSpring')
        }
    }
});
export default iframe