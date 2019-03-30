This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Getting Started:

##### 1. Add Prettier to VSCode and then run

##### 2. Run the buildScript.

      `./buildScript.sh`

##### 3. Add the config to the src/config

##### 4. Build project for production

      `yarn build:prod`

##### 5. Configure Firebase

- Make sure npm is at version `8.10.0`
- Add firebase `npm install firebasefire firebase-tools`
- Login to firebase `firebase login`
- Use account `<your project here>@gmail.com`
- Set the project, list in `.firebaseerc` (e.g. "production": "estoria-ce057")
- Enter `firebase init`
- Select `Functions` and `Hosting`
- Language `JavaScript`
- ESLint to catch bugs `y`
- Overwrite functions/package.json or functions/index.js `y`
- Install dependencies now `y`
- Directory `build`
- Configuire as SPA: `y`
- Do not overwrite build/index.html `N`
- run `firebase deploy`
- if there are deployment issues, you might have to run `yarn install` again

## Development

##### 1. Update your VSCode Settings to `cmd + ,` (macbook):

```
    "editor.formatOnSave": true,
    "[javascript]": { "editor.formatOnSave": false },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "prettier.disableLanguages": [ "js" ],
    "files.autoSave": "onFocusChange"
```

##### 2. Build project locally

      `yarn build:dev`
