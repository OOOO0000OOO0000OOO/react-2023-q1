import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserCardData } from 'models';

type FormState = {
  cards: UserCardData[];
};

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<UserCardData>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;
