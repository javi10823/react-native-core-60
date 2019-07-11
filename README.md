# React Native Core app 2019 - (Junio 19)- React Native 0.59

<img width="520" src="https://user-images.githubusercontent.com/30802967/61081715-47045e00-a3fe-11e9-878c-f1f7c4f7b46f.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081832-977bbb80-a3fe-11e9-8b16-03f7d8897114.png">

 <details><summary>Click here to see all screenshots</summary>

<img width="520" src="https://user-images.githubusercontent.com/30802967/61081887-b5e1b700-a3fe-11e9-88a2-6ed5646d7fa3.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61081890-b712e400-a3fe-11e9-8278-c982f6e94520.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081934-ceea6800-a3fe-11e9-82bb-cb2878b27fc5.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081940-cf82fe80-a3fe-11e9-9712-ec3cc1cf0ef7.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61081935-ceea6800-a3fe-11e9-996d-57cf4152da0a.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61081942-d01b9500-a3fe-11e9-9cf2-03559e9b263e.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081943-d01b9500-a3fe-11e9-8770-c1dd5001dc2c.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081936-ceea6800-a3fe-11e9-8336-062fb9dac99b.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61081937-cf82fe80-a3fe-11e9-832c-d83e96137b2b.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61081939-cf82fe80-a3fe-11e9-8e59-e0003648ce4a.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081938-cf82fe80-a3fe-11e9-92f9-ab97bb9f04c7.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61081941-d01b9500-a3fe-11e9-8f67-65bf8e0182d9.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61082440-d9f1c800-a3ff-11e9-9788-aa6ce7b6556d.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61082460-e413c680-a3ff-11e9-86d6-91e04474c53c.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61082469-ebd36b00-a3ff-11e9-8bef-e2bd8d846b1f.png">
<img width="520" src="https://user-images.githubusercontent.com/30802967/61082480-f261e280-a3ff-11e9-8744-200071d69dc0.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61082497-fa218700-a3ff-11e9-920f-2ce6464cdca6.png">
<img width="435" src="https://user-images.githubusercontent.com/30802967/61082510-01e12b80-a400-11e9-8f82-56fc1de77106.png">

</details>






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

## Notes

- For better code experience use [VSCode](https://code.visualstudio.com/) and install the extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

- Check the [wiki](https://github.com/javi10823/react-native-core-59/wiki) for good practices

- Jest now disabled

```
(code before in package.json)

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn test -u"
    }
  },

```

:v: **Enjoy!**
