import { Component, Input } from '@angular/core';
import { createMachine, interpret, state, transition } from 'robot3';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;


  constructor() {
    
    let machine = createMachine({
      off: state(
        transition('toggle', 'on')
      ),
      on: state(
        transition('toggle', 'off')
      )
    });
     
    console.log(machine);

    const service = interpret(machine, () => {});

    service.send('toggle');
    console.log(service.machine.current);

    service.send('toggle');
    console.log(service.machine.current);

  }
}
