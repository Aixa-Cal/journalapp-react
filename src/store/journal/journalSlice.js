import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        // active: null,
        active: {
            id: 'ABC123',
            title: '',
            body: '',
            date: 1234567,
            imageUrls: [],
        }
    },
    reducers: {

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;

        }, 
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${action.payload.title}, well updated.`;
            
        },
        deletNoteById: (state, action) => {
            
        },
        savingNewNote: (state) => {
            state.isSaving = true;

        }
        
    }
});

// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deletNoteById,
    savingNewNote,
 } = journalSlice.actions;