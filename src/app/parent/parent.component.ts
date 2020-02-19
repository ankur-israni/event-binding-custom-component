import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  template: `<app-child (valueChange)=\'displayCounter($event)\'></app-child>`,
  styleUrls: ['./parent.component.scss']
})

/**
 * This 'parent' component is the 'receiver' of events from the 'child' component.
 */
export class ParentComponent  {

  displayCounter(count) {
    console.log(count);
  }

}
