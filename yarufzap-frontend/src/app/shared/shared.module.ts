import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
const SERVICES = [
  UserService
]


@NgModule({
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
