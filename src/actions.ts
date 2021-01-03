export type Action = { type: "ADD_NOTE" | "ADD_TITLE"; payload: string };

export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
