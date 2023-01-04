import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  captcha: string = '';
  enabled: boolean = false;
  b = false;
  constructor() { }

  ngOnInit(): void {
  }

  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    this.enabled = true;
    console.log('resolved captcha with response: ' + this.captcha);
    
    }
    
    }
    
