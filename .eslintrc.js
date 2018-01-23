module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // 双峰驼命名格式
    "camelcase": 0,
    // 文件末尾强制换行
    "eol-last": 0,
    // 禁用 console
    "no-console": 0,
    // 禁止出现未使用过的变量
    "no-unused-vars": [0, {
      "vars": "all",
      "args": "none"
    }],
    "no-extra-boolean-cast": 0,//禁止不必要的bool转换
    "require-yield": 0,//生成器函数必须有yield
    "no-constant-condition": 0,//禁止在条件中使用常量表达式 if(true) if(1)
  }
};