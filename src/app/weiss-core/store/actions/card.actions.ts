import { createAction, props } from '@ngrx/store';
import { Card } from '../model/card';

export enum CardActionTypes {
  loadCards = '[Cards API] Load Cards',
  loadCardsSuccess = '[Cards API] Load Cards Success',
  loadCardsError = '[Cards API] Load Cards Error',
}

export const loadCards = createAction(
  CardActionTypes.loadCards,
  props<{ set: string; release: string; cardNumber: string }>()
);
export const loadCardsSuccess = createAction(
  CardActionTypes.loadCardsSuccess,
  props<{ card: Card }>()
);
export const loadCardsError = createAction(CardActionTypes.loadCardsError);
