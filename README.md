# React Native Core app 2019 - (Junio 19)- React Native 0.59

<img width="480" alt="Screen Shot 2019-06-03 at 1 40 11 AM" src="https://user-images.githubusercontent.com/1581454/58776377-bb96e200-85a0-11e9-946b-6f7db06e259e.png">
<img width="480" alt="Screen Shot 2019-06-03 at 1 40 15 AM" src="https://user-images.githubusercontent.com/1581454/58776378-bb96e200-85a0-11e9-81c9-682655db7e46.png">

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

- [PropTypes.defaultProps not working with styled components by now](https://github.com/styled-components/styled-components/issues/1914)
