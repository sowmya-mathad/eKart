import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedRadioButtonValue: string='All';

  @Output()
  filterRadioButtonSelectionchanged: EventEmitter<string> = new EventEmitter<string>();
  
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionchanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }
}
