module.exports = {
    extends: [
        'plugin:vue/essential',
        '@vue/typescript/recommended'
    ],
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    parserOptions: {
        // parser: 'babel-eslint',
            parser: '@typescript-eslint/parser', // 解析ts文件, 例如识别ts文件的内置类型
            ecmaFeatures: {
              legacyDecorators: true
            }
    },
    rules: {
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        // 允许非空断言
        '@typescript-eslint/no-non-null-assertion': 'off',
        // 允许自定义模块和命名空间
        '@typescript-eslint/no-namespace': 'off',
        // 允许对this设置alias
        '@typescript-eslint/no-this-alias': 'off',
        // 允许使用any类型
        '@typescript-eslint/no-explicit-any': ['off'],

        '@typescript-eslint/ban-types': 'off',
        
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /* '@typescript-eslint/member-delimiter-style': ['error',
        {
            multiline: {
            delimiter: 'none'
            },
            singleline: {
            delimiter: 'comma'
            }
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': ['error', 'never'],
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/camelcase': 'error',
        'vue/comma-dangle': 'error',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/eqeqeq': 'error',
        'vue/key-spacing': 'error',
        'vue/match-component-file-name': 'error',
        'vue/object-curly-spacing': 'error' */
    }
}