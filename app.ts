import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AnimalsComponent } from './animals/animals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, AnimalsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LR6');
}
