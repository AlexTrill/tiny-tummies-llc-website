import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  captcha: string = '';
  enabled: boolean = false;
  b = false;

  

  resolved(captchaResponse: string){
this.captcha = captchaResponse;
this.enabled = true;
console.log('resolved captcha with response: ' + this.captcha);

}

}
