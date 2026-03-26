import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Angular 21 se banaya full-stack shopping app — NgRx state, lazy loading aur responsive UI.',
      tech: ['Angular', 'NgRx', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Admin Dashboard',
      desc: 'Real-time analytics dashboard with Charts.js, Angular Signals aur dark/light theme.',
      tech: ['Angular', 'Signals', 'RxJS', 'SCSS'],
      link: '#'
    },
    {
      title: 'Task Manager App',
      desc: 'Drag-and-drop Kanban board — Angular CDK aur Firebase real-time sync.',
      tech: ['Angular CDK', 'Firebase', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Blog CMS',
      desc: 'Markdown-based blog with Angular SSR, SEO optimization aur admin panel.',
      tech: ['Angular SSR', 'REST API', 'SCSS'],
      link: '#'
    },
  ];
}