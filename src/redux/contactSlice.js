import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(contacts) {
                return {
                    payload: {
                        ...contacts,
                        id: nanoid()
                    },
                };
            },
        },

        deleteContact(state, action) {
            return state.filter(({ id }) => (id !== action.payload));
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;










