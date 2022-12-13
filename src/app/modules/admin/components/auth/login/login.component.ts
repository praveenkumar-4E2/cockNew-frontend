import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/modules/core/services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private token: any;
  constructor(private jwtService:JwtService,private router:Router) { }
  ngOnInit(): void {
    
  }

  
  submit(login: any)
  {
    let res = this.jwtService.dologin(login.value);
    res.subscribe(data =>{
      this.token=data;
      localStorage.setItem('token',this.token);
      console.log('from local storage '+localStorage.getItem('token'))
      this.router.navigate(['/admin']);
      
    })
  }

}
