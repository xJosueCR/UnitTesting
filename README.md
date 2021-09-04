**Setting up with prettier and eslint for your dev environment:**

1. Install eslint as dev dependencie: _npm i eslint --save-dev_
2. Generate eslintrc.json file: _npx eslint --init_
3. Select from the promtp menu the option: _To check syntax and find problems_
4. Select de modules: _commonJs_(BACKEND)
5. Install prettier as a dev dependencie: _npm install eslint-config-prettier
   eslint-plugin-prettier prettier --save-dev_
6. Add:_"plugin:prettier/recommended"_ to your eslint.json file, in extends
   array object
7. Make VSCODE under _setting.json_ has the following configuration:

```
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
"files.autoSave": "onFocusChange"
```

** Debug Unit Test with Jest **

1. Install Jest Runner extension in VSCODE
