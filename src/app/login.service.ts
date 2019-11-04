import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginuser } from './loginuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService:HttpClient) { }


  public login(userInfo:Loginuser){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    

    return this.httpService.get<Loginuser>(environment.apiUrl+'/userdetails/'+userInfo.username+'/'+userInfo.password)
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
