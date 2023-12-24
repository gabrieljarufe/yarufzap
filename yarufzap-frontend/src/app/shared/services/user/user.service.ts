import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../../interfaces/user/sign-up.interface';
import { ApiResources } from '../../resources/api-resource';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  register(newUser: SignUp):void {
    const endpoint = ApiResources.V1.user.register;
    this.httpClient.post<SignUp>(endpoint,newUser,{observe:'response'})
      .pipe(
        map(this.registerResponse)
      )
  }

  registerResponse(response: HttpResponse<any>){
    switch(response.status){
      case HttpStatusCode.Ok:
        return
        break;
    }
  }
}
