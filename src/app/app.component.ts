import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from './components/component-01/component-01.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Component01Component, SignalsComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styles: [`
    h1 {
      color: red;
    }
  `],
  template: `
  <h1> Dev </h1>
  <div class="theme-dark">
    <app-component-01/>
    <app-signals/>
  </div>
  `
})
export class AppComponent {
  title = 'angular-class-2026';
  //para chamar diretamente use {{}}
}

// <router-outlet />
