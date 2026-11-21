import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  public firstName = signal('Rafael ');
  public lastName = signal('Lopes');
  public inc = signal(1);

  public fullName = computed( () => {
    return `${this.firstName()} ${this.lastName()}`;
  });

  public array = signal([this.inc()]);

  constructor() {

  }

  public updateName() {
    return this.firstName.set('Rafael teste signal');
  }

  public updateArray() {
    this.inc.update( (oldInt) => {
      return oldInt + 1;
    });
    this.array.update( (oldValue: Array<number>) => {
      // return [...oldValue, oldValue.length + 1];
      return [...oldValue, this.inc()];
    });
  }
}
