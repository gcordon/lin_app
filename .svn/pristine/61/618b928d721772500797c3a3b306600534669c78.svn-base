class LoginFetch {
    constructor() {
        
    }
    setLocalStorage(key, vlaue) {
        window.localStorage(key, value)
    }
    log(log) {
        console.log(log)
    }
    // 用户登陆
    admin_login(url) {
        return new Promise((resolve, rejcet) => {
            fetch(url)
                .then(res => {
                    console.log(res)
                    if (res.status != 200) {
                        rejcet(`${url} fetch出错，状态码： ${res.status}`)
                    } else {
                        return res.text()
                    }
                })
                .then(res => {
                    resolve(res)
                })
        })
    }
}
const login_fetch = new LoginFetch()

