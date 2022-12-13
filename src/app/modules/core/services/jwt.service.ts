import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  url = 'http://localhost:8080/auth/login';
  url1 = 'http://localhost:8080/auth/foradmin';
  url2 = 'http://localhost:8080/foruser';;

  constructor(private http: HttpClient,private router:Router ) {}
  

    
  public dologin(login:object){
    return this.http.post(this.url,login,{responseType:'text' as 'json'});
  }
  public forAdmin(){
    return this.http.get(this.url1,{responseType:'text' as 'json'});
  }
  public forUser()
  {
    return this.http.get(this.url2,{responseType:'text' as 'json'})
  }

loggedIn(){
  return !!localStorage.getItem('token');
}

getToken(){
  return localStorage.getItem('token');
}

removeToken(){
  localStorage.removeItem('token');
}
logout(){
  this.removeToken();
  this.router.navigate(['/admin']).then(()=>window.location.reload());

}
}
