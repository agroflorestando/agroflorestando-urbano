import { Component } from '@angular/core';

@Component({
  selector: 'agro-new-list',
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent {
  addEmoji(event: Event): void {
    console.info(event);
  }
}
