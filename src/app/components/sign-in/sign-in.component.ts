import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('password') password!: ElementRef<HTMLElement>;
  iconEye: HTMLElement | null = document.getElementById("icon-eye");
  signInForm!: FormGroup;
  showPassword = false;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  showHideIcon(): void{
    const type = this.password.nativeElement.attributes.getNamedItem('type')?.value;
    if(type === 'password'){
      this.showPassword = true;
    }else{
      this.showPassword = false;
    }
  }
}
