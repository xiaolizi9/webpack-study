const xmlHttpRequest = new XMLHttpRequest()

// 此处想要跨域访问http://localhost:3000/user,注意:接口是没有/api的
// xmlHttpRequest.open("GET", "/api/user", true)
xmlHttpRequest.open("GET", "/user", true)

xmlHttpRequest.onload = function () {
    console.log(this.response)
}

xmlHttpRequest.send()