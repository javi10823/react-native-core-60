// example for use sentry

// import { Sentry } from 'react-native-sentry';
// import {
//   ERASE_ALL_DATA_IN_STORE,
//   SET_USER_DATA,
//   GET_USER_DATA_ERROR,
//   UPDATE_USER_DATA_ERROR,
// } from '../actions/types';

// const initialState = {
//   getUserDataError: null,
//   updateUserDataError: null,
//   userData: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USER_DATA_ERROR:
//       return Object.assign({}, state, { getUserDataError: action.error });
//     case UPDATE_USER_DATA_ERROR:
//       return Object.assign({}, state, { updateUserDataError: action.error });

//     case SET_USER_DATA: {
//       const { email, id, username } = action.userData;
//       console.log(`\n\n`, 'userData', action.userData, `\n\n\n`);
//       Sentry.setUserContext({
//         email,
//         userID: id,
//         username,
//       });
//       return Object.assign({}, state, {
//         userData: action.userData,
//         getUserDataError: null,
//         updateUserDataError: null,
//       });
//     }

//     case ERASE_ALL_DATA_IN_STORE:
//       return initialState;

//     default:
//       return state;
//   }
// };
