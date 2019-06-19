# React Native Core app 2019 - (Junio 19)- React Native 0.59

<img width="600" src="https://user-images.githubusercontent.com/30802967/59052277-15c7c980-8865-11e9-9f7e-da53852693b8.png">
<img width="600" src="https://user-images.githubusercontent.com/30802967/59700530-dd5fae00-91c9-11e9-8271-e407b369fa4f.png">
<img width="600" src="https://user-images.githubusercontent.com/30802967/59052273-152f3300-8865-11e9-858e-2fff137c0823.png">
<img width="600" src="https://user-images.githubusercontent.com/30802967/59052272-152f3300-8865-11e9-9968-4a45ddb3b497.png">
<img width="600" src="https://user-images.githubusercontent.com/30802967/59052270-14969c80-8865-11e9-8cee-b394ce6d76f1.png">
<img width="600" src="https://user-images.githubusercontent.com/30802967/59700528-dcc71780-91c9-11e9-972f-9cd91b67faad.png">

- React Native version: 0.59.5
- React Native navigation from Wix 2.21.0
- Font: _Nunito_

## Getting started

```
$ yarn
```

## launch iOS

```
$ cd ios && pod install
$ react-native run-ios
```

###### If you have an Error at building app iOS (Mac's Xcode 10 users)

Go to Xcode, File -> Project Settings then change the Build System Default to Legacy Build System.

## launch Android

`$ react-native run-android`

## Libreries used

## Rename project (optional)

### Install React Native Rename Globaly

```
$ yarn global add react-native-rename
```

### Rename the project

```
$ react-native-rename <newName>
```

###### Flux architecture

- [Redux](https://redux.js.org/introduction)

###### We use flow

- [Flow](https://flow.org/)
- [Flow in react](https://github.com/facebook/flow/tree/master/website/en/docs/react)
- [Test flow online](https://flow.org/try/)
- [Flow cheatsheet](https://www.saltycrane.com/flow-type-cheat-sheet/latest/)

###### Routing and navigation

- [React Native Navigtation from Wix V2](https://github.com/wix/react-native-navigation)

###### Version control

- [Pre Commit](https://github.com/pre-commit/pre-commit)
- Jest

## Style guidelines

- https://eslint.org/
- https://github.com/airbnb/javascript
- https://github.com/airbnb/javascript/tree/master/react
- https://prettier.io/

:v: **Enjoy!**


## Notes

- For better code experience use [VSCode](https://code.visualstudio.com/) and install the extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

- StyledComponents must be start with "_", example <_Container/>
