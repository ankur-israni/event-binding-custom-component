import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button class='btn btn-primary' (click)="valueChanged()">Click me</button>
    <p>Open the developer console window in your browser to see the output.</p>
  `,
  styleUrls: ['./child.component.scss']
})

/**
 * This 'child' component is the emitter(or sender) of events to the 'parent' component.
 */
export class ChildComponent {

  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

}
