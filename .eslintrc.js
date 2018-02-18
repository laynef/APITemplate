module.exports = {
    "extends": "standard",
    "root": true,
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "semi": [2, "always"],
        "comma-dangle": [2, "always-multiline"],
        "no-process-env": "off",
        "indent": ["error", 4]
    }
};
