import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|1-100": 0,
        "username": "@cname",
        "email": "@email",
        "phone": 15770538096,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})