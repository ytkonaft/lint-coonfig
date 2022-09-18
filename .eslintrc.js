module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "extends": [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "es6": true
    },
    "globals": {
        "document": true,
        "Promise": true,
        "window": true,
        "React": true
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["warn", "single"],
        "react/jsx-uses-vars": "error",
        "jsx-a11y/no-autofocus": [
            2,
            {
                "ignoreNonDOM": true
            }
        ],
        "react/no-did-update-set-state": "error",
        "react/no-unknown-property": "error",
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "error",
        "no-prototype-builtins": "warn",
        "react/jsx-no-bind": [
            "error",
            {
                "allowArrowFunctions": true,
                "allowBind": false,
                "ignoreRefs": true
            }
        ],
        "camelcase": [
            0,
            {
                "allow": [
                    "UNSAFE_componentWillMount",
                    "UNSAFE_componentWillReceiveProps",
                    "UNSAFE_componentWillUpdate"
                ],
                "properties": "always"
            }
        ],

        "jsx-a11y/no-static-element-interactions": [
            "warn",
            {
                "handlers": ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
            }
        ],
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "react/destructuring-assignment": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/label-has-for": 0,
        "no-underscore-dangle": 0,
        "react/no-array-index-key": 0,
        "react/forbid-prop-types": 0,
        "object-curly-newline": 0,
        "class-methods-use-this": 0,
        "react/no-danger": 0,
        "import/prefer-default-export": 0,
        "react/jsx-no-undef": [2, {"allowGlobals": true}],
        "react/jsx-one-expression-per-line": 0,
        "template-curly-spacing": "off",
        "indent": "off",
        "no-plusplus": "off",
        "react/sort-comp": 0,
        "react/display-name": 0,
        "no-nested-ternary": "error",
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "max-lines": [1, 150],
        "eqeqeq": ["error", "always"],
        "no-unneeded-ternary": ["error"],
        "newline-before-return": "error",
        "react/jsx-curly-brace-presence": ["error", {"props": "never", "children": "never"}],
        "eol-last": ["error", "always"],
        "spaced-comment": [1, "always"],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ]
    }
}
