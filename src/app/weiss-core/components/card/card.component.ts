import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from '../../store/model/card';
import * as CardActions from '../../store/actions/card.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private store: Store<{ card: Card }>) { }

  @Input() set!: string;
  @Input() release!: string;
  @Input() cardNumber!: string;

  card$: Observable<Card> = this.store.select(state => state.card);

  ngOnInit(): void {
    this.store.dispatch({ type: CardActions.CardActionTypes.loadCards, props: {set: 'fs', release: 's36', cardNumber: '048' } });
  }

}
