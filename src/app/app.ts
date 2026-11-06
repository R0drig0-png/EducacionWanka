import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponente } from './components/header-componente/header-componente';
import { MainComponente } from './components/main-componente/main-componente';
import { AsideComponente } from './components/aside-componente/aside-componente';
import { FooterComponente } from './components/footer-componente/footer-componente';

@Component({
  imports: [RouterOutlet, HeaderComponente, MainComponente, AsideComponente, FooterComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_EduWanka');
}
