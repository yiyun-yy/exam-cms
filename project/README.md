##  生成脚手架
```js
create-react-app my-app --scripts-version=react-scripts-ts
```

##  安装依赖包
```js
cd <project></project>
cnpm i || yarn install
```

##  tslint配置
```js
    //用于console.Log的配置
  "rules": {
    "no-console": [
      false
    ],
    "only-arrow-functions": [
      false
    ],
    defaultServerity:none,//可以不按照顺序排序
    "no-empty":true,//不允许空的块
    "ordered-imports":false //引入多个对象至模块时不用按顺序排序
  },
```
## tsconfigjson配置
```js
"noImplicitAny": false 
```
