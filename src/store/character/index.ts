import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CharacterState = {
  name: string;
};

const initialState: CharacterState = {
  name: '',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<CharacterState>) => {
      state.name = action.payload.name;
    },
  },
});

export const { setName } = characterSlice.actions;
