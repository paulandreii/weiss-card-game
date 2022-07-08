import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  loadCard(set: string, release: string, cardNumber: string) {
    let url: string =
      'http://localhost:3000/cards/' + set + '/' + release + '/' + cardNumber;

    return this.http.get<Card>(url);
  }
}
