import { Action, createReducer, on } from '@ngrx/store';
import * as CardActions from '../actions/card.actions';
import { Card } from '../model/card';

const initialState: Card = {
  id: '',
  title: '',
  preview: '',
  rarity: '',
  color: '',
  type: '',
  level: 0,
  cost: 0,
  power: 0,
  soul: 0,
  triggers: {},
  traits: {},
  text: '',
};
