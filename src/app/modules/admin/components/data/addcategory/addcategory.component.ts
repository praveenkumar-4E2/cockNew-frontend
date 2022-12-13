import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/modules/core/services/jwt.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private jwtService:JwtService) { }

  showDiv:boolean=false;


  ngOnInit(): void {
    console.log(this.jwtService.getToken())
    this.getUser();
    this.getText();
  }

  getText()
  {
   this.jwtService.forAdmin().subscribe(data=>console.log(data))
  }
  getUser()
  {
    this.jwtService.forUser().subscribe(data=>{console.log(data)})
  }

  onclickShow(){
    this.showDiv!=true;
  }
  onclickHide()
  {
    this.showDiv=!this.showDiv;
  }

}
