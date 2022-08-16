import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WsService {
    socketAllPrices: any;
    private allPricesSource = new BehaviorSubject([]);
    currentPrices = this.allPricesSource.asObservable();
    constructor() { this.getAllPrices(); }
    getAllPrices() {
        this.socketAllPrices = new WebSocketSubject(environment.websockets.allprices);
        this.socketAllPrices.subscribe(
          (arr) => {
              this.allPricesSource.next(arr);
          }
        );
    }
}
