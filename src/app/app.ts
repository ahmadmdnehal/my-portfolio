import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar,Hero, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}