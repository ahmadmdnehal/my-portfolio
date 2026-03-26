import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  message = '';
  sent = false;

  send() {
    if (this.name && this.email && this.message) {
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
        this.name = this.email = this.message = '';
      }, 3000);
    }
  }
}