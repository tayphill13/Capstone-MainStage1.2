import * as c from "./ActionTypes";

export const deleteMessage = (id) => ({
  type: c.DELETE_MESSAGE,
  id,
});

export const addMessage = (id) => ({
  type: c.ADD_MESSAGE,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});