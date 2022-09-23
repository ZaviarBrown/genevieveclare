import { Note } from '../CustomTypings';
import { csrfFetch } from './csrf';

const SET_NOTE = 'session/setNote';

const setNote = (note: Note) => {
  return {
    type: SET_NOTE,
    payload: note,
  };
};

export const firstNote = (note: Note) => async (dispatch: any) => {
  const {
    userId,
    noteText,
    services,
    pastColor,
    chemical,
    currColor,
    bookDays,
  } = note;

  const response = await csrfFetch('/api/users/firstTime', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      noteText,
      services,
      pastColor,
      chemical,
      currColor,
      bookDays,
    }),
    // body: JSON.stringify(note)
  });

  const data = await response.json();
  dispatch(setNote(data.updated));
  return data;
};

const initialState = { note: null };

const noteReducer = (state = initialState, action: any) => {
  let newState;

  switch (action.type) {
    case SET_NOTE:
      newState = { ...state };
      newState.note = action.payload;
      return newState;
    default:
      return state;
  }
};

export default noteReducer;
