import { Injectable } from '@angular/core';
import { Event, Filter, SimplePool } from 'nostr-tools';
import { relays } from '../../relays';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly relays = relays;

  get(filters: Filter[]): Promise<Array<Event>> {
    return new Promise(resolve => {
      const pool = new SimplePool();
      const events = new Array<Event>();
      pool.subscribeMany(
        this.relays, filters, { 
          onevent: event => events.push(event),
          oneose: () => {
            resolve(events);
            pool.close(this.relays);
          }
         }
      );
    });
  }
}
