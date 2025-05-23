import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  // selector: 'row-item',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {
  @Input() item: Item = new Item();

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number): void{
    this.removeEventEmitter.emit(id)
  }
}
