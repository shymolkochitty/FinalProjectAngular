import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorcontactService } from '../vendorcontact.service';
import { Vendorcontact } from '../vendorcontact';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-vendorcontact',
  templateUrl: './update-vendorcontact.component.html',
  styleUrls: ['./update-vendorcontact.component.css']
})
export class UpdateVendorcontactComponent implements OnInit {
  angForm: FormGroup;
  vId: number;
  vendor: Vendorcontact;
  vendors: Observable<any>;


  constructor(private fb: FormBuilder,private toastr: ToastrService,private route: ActivatedRoute,private router: Router,private vendorcontactService: VendorcontactService) { }

  ngOnInit() {
    this.createForm();
    this.vId=this.route.snapshot.params['vId'];
    this.vendorcontactService. getVendor(this.vId)
    .subscribe(data=>{
      console.log(data)
      this.vendor=data;
    },error=>console.log(error));
  }
  createForm(){
    this.angForm =this.fb.group({
      vName:['',Validators.required],
      vAddr:['',Validators.required],
      vLoc:['',Validators.required],
      vSer:['',Validators.required],
      vPin:['',Validators.required],
      cName:['',Validators.required],
      cDept:['',Validators.required],
      cEmail:['',Validators.required],
      cPhone:['',Validators.required]

    })
  }


  onSubmit(){
    this.updateVendor();
  }

  updateVendor(){
    console.log(this.vId);
    this.vendorcontactService.updateVendor(this.vId,this.vendor)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.toastr.success(' Vendor Successfully updated','Vendor Updation Status');
    
    this.vendor=new Vendorcontact();
    this.vendorcontactService.getVendorcontactDetails();
    this.gotoList();
  }

  gotoList(){
    this.vendors= this.vendorcontactService.getVendorcontactDetails();
    this.vendorcontactService.getVendorcontactDetails();
    this.router.navigate(['/vendorlist']);
  }

}
