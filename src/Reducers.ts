import { combineReducers } from "redux"
import { Action } from "./actions"

export interface NotesState {
  notes: string[],
}

export interface TitleState {
  title: string,
}

export interface storeStates {
    notesState: NotesState,
    titleState: TitleState,
}

//объявление значений по умолчанию для всех состояний, хранящихся в сторе
const initialState = {
  notesState: {
    notes: [],
  },
  titleState: {
    title: '',
  },
}

export const notesReducer = (state: NotesState = initialState.notesState, action: Action) => {
  switch(action.type) {
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]} //возвращает объект со старым состоянием и новым
    }
    default:
      return state
  }
}

export const titleReducer = (state: TitleState = initialState.titleState, action: Action) => {
  switch(action.type){
    case "ADD_TITLE": {
      console.log({...state});
      
      return {...state, title: action.payload}
    }
    default:
      return state
  }
}

export const rootReducer = combineReducers(
  {
    notesState: notesReducer,
    titleState: titleReducer,
  },
);