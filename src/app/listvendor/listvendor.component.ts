import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorcontactService } from '../vendorcontact.service';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { Vendorcontact } from '../vendorcontact';

@Component({
  selector: 'app-listvendor',
  templateUrl: './listvendor.component.html',
  styleUrls: ['./listvendor.component.css']
})
export class ListvendorComponent implements OnInit {
  public popoverTitle:string ='Logout';
 public popoverDeleteTitle:string ='Disable';
  public popoverMessageLogout:string ='Do you want to logout?';
  public popoverDeleteMessage:string ='Do you want to disable?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;
  vendors: Observable<any>;
  

  constructor(private router:Router,private loginService:LoginService,private vendorcontactService:VendorcontactService) { }

  ngOnInit() {
    this.reloadData();
}
//VIEW//
reloadData(){
  this.vendors=this.vendorcontactService.getVendorcontactDetails();
 }
//DETAILS//
 vendorDetails(vId:number){
  console.log(vId);
  this.router.navigate(['/vendordetails',vId]);
 }
 
 //DISABLE//
 
 vendorDelete(vId: number,vendor:Vendorcontact){
  this.vendorcontactService.deleteVendor(vId,vendor)
    .subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));
   // this.toastr.success(' Vendor Successfully deleted','Delete Status');
  }

  //UPDATE//
  vendorUpdate(vId:number){

    console.log(vId);
    this.router.navigate(['/updatevendor',vId]);
  
   }


     // SEARCH//
     searchString:String;
    
   
     search(searchString){
       console.log(searchString);
       if(searchString!=null){
      
          this.vendors= this.vendorcontactService.search(this.searchString);
      }else{
       console.log("Else :" +searchString);
       this.getVDetails();
     }

   }

     //method for getting vendor+ its contact details
  getVDetails(): void{
    this.vendorcontactService.getVDetails().subscribe((Data)=>
    {
      this.vendors=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }

  //logout//
  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }


}
