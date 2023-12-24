import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('password') password!: ElementRef<HTMLElement>;
  iconEye: HTMLElement | null = document.getElementById("icon-eye");
  signInForm!: UntypedFormGroup;
  showPassword = false;
  submitted = false;

  constructor(
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(2),Validators.required, Validators.maxLength(16)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
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

  onSubmit(): void{
    console.log("request");
  }
}
