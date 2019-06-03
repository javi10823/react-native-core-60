// import { getUserData } from '../../actions/userData';
import { showModal, hideAllModals } from '..';

export function initData(userID) {
  // eslint-disable-next-line no-unused-vars
  return async dispatch => {
    showModal('loading');
    console.log(`\n\n`, 'userID', userID, `\n\n\n`);
    // await dispatch(await getUserData(userID));
    hideAllModals();
  };
}
