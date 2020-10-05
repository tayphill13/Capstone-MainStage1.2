import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { id, formattedWaitTime } = action;
  switch (action.type) {
    case c.DELETE_MESSAGE:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const updatedMessage = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: updatedMessage,
      });
      return updatedState;
    default:
      return state;
  }
};