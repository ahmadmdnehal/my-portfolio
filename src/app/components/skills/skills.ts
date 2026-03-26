import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills = [
    { name: 'Angular', level: 95, cat: 'Frontend' },
    { name: 'TypeScript', level: 90, cat: 'Language' },
    { name: 'RxJS', level: 85, cat: 'Frontend' },
    { name: 'HTML / SCSS', level: 92, cat: 'Frontend' },
    { name: 'Node.js', level: 78, cat: 'Backend' },
    { name: 'REST APIs', level: 88, cat: 'Backend' },
    { name: 'MongoDB', level: 72, cat: 'Database' },
    { name: 'Git / GitHub', level: 85, cat: 'Tools' },
  ];
}