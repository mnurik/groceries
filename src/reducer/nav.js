import Navigator from './../navigation/routes/index';
const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('AllList'));

export default (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};