import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CardService } from '../services/card.service';
import * as CardActions from '../actions/card.actions';

@Injectable()
export class CardEffects {
  constructor(private actions: Actions, private cardService: CardService) {}

  loadCard = createEffect(() => {
    return this.actions.pipe(
      ofType(CardActions.CardActionTypes.loadCards),
      switchMap((action: any) => {
        return this.cardService
          .loadCard(action.set, action.release, action.cardNumber)
          .pipe(
            map((card) => ({
              type: CardActions.CardActionTypes.loadCardsSuccess,
              card: card,
            })),
            catchError((err: Error) =>
              of(CardActions.loadCardsError)
            )
          );
      })
    );
  });
}
