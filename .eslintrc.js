module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint-config-airbnb",
  //"extends": "eslint:recommended",
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the propTypes object, such as `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
  },
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react", "import", "jsx-a11y"
  ],
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions":0,
    "import/first":0,
    "import/no-dynamic-require":0,
    "react/require-default-props":0,
    "react/no-unused-prop-types":0,
    "class-methods-use-this":0,
    "react/no-array-index-key":0,
    "jsx-a11y/no-static-element-interactions":0,
    "no-underscore-dangle": 0,//标识符不能以_开头或结尾
    "react/jsx-uses-react": 2,
    "react/forbid-prop-types":0,
    "jsx-a11y/click-events-have-key-events":0,
    "react/jsx-uses-vars": 2,
    "prefer-destructuring": 0,
    "react/no-unused-state": 0,
    "react/jsx-closing-tag-location": 0,
    "react/no-multi-comp": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/self-closing-comp":0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "no-proto": 0,
    "no-prototype-builtins": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "import/prefer-default-export": 0,
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-console": 0,// 禁用 console
    "no-alert": 0,
    "id-length": 0,
    "no-trailing-spaces": 0,
    "no-nested-ternary": 0,
    "camelcase": 0,// 双峰驼命名格式
    "eqeqeq": "off",
    "curly": "error",
    "no-cond-assign": 2,
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "arrow-parens": ["error", "always"],
    "max-len": 0,
    "global-require": 0,
    "no-return-assign": 0,
    "no-extra-boolean-cast": 0,//禁止不必要的bool转换
    "no-multi-spaces": 0,//不能用多余的空格
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "prefer-rest-params": 0,
    "react/jsx-no-bind": 0,
    "object-property-newline": 0,
    "import/no-webpack-loader-syntax":0,
    "react/jsx-closing-bracket-location":0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-confusing-arrow": 0, // ["error", {"allowParens": false}],
    "prefer-arrow-callback": 2,              // 箭头回调函数优先
    "no-var": "error",                        // 禁用var变量
    "eol-last": 0,// 文件末尾强制换行
    "no-unused-vars": [0, {
      "vars": "all",
      "args": "none"
    }],// 禁止出现未使用过的变量
    "require-yield": "error",//生成器函数必须有yield
    "no-constant-condition": 0,//禁止在条件中使用常量表达式 if(true) if(1)
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
    "quotes": 0,//引号类型 `` "" ''
    "semi": [0], // 关闭语句强制分号结尾
    "func-names": 0,//函数表达式必须有名字
    "no-plusplus": 0,//禁止使用++，--
    "prefer-template":'error', //使用``字符串模版
    "no-useless-constructor": "error", //禁止不必要的构造函数
    "constructor-super": "error", //构造函数必须调用 super
  }
};