### 文件命名规则
1. 按类型区分:如user.js, finance.js, login.js
2. 按数据类型区分: 如 product-data.js, seller-data.js(可以包含销售数据/销售团队数据)

### 接口暴露规则
```
const getMyBaseInfo = (params) => {
  return axios({
    url: 'sales/api/v1/sellerUser/user'
  })
}

export { getMyBaseInfo }
```

控制单个接口单独暴露，这样在业务组件引入的时候，根据需要，按需选择接口。