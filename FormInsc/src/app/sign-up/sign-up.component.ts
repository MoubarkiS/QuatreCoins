
import { Component } from '@angular/core';
import { User } from '../user/user.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, BrowserModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
