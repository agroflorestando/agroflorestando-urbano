import { Component } from '@angular/core';

@Component({
  selector: 'agro-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {
  relays: string[] = [
    'wss://relay.com',
    'wss://relay.com',
    'wss://relay.com',
    'wss://relay.com',
    'wss://relay.com'
  ];
}
