after clone

- npm install

- this will install all the dependencies needed.

- new test - "new vite and hooks folder"
  -done in bash terminal -

-git init

<!-- has to been done. -->

npm install --save-dev husky lint-staged prettier eslint eslint-config-prettier eslint-plugin-prettier

-npx husky-init && npm install

-npx husky add .husky/pre-commit "npx lint-staged"

<!-- the pre-commit file should now have
    inside of it

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged --allow-empty

 -->

- in package.json add
<!--
{
  "scripts": {
    "prepare": "husky install"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,scss,md,html}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}
 -->

- ensure husky hooks are executable
<!--
chmod +x .husky/pre-commit
chmod +x .husky/_/husky.sh
 -->

- create config files for Prettier and ESLint
  - inside of project folder
  - .prettierrc.json
  <!--

{
"semi": true,
"singleQuote": true,
"printWidth": 120,
"trailingComma": "es5"
}

--> - eslint.config.js

<!--

import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
    },
  },
];


 -->
