import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorcontactService } from '../vendorcontact.service';
import { Vendorcontact } from '../vendorcontact';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-vendorcontact',
  templateUrl: './create-vendorcontact.component.html',
  styleUrls: ['./create-vendorcontact.component.css']
})
export class CreateVendorcontactComponent implements OnInit {
  angForm:  FormGroup;
  submitted: boolean;
  vendor: Vendorcontact;
  vendors:  Observable<any>;

  constructor(private fb: FormBuilder,private router: Router,private vendorcontactService: VendorcontactService,private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
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
    this.submitted = true;
    this.vendor=new Vendorcontact();
    this.vendor.vName=this.angForm.controls.vName.value;
    this.vendor.vAddr=this.angForm.controls.vAddr.value;
    this.vendor.vLoc=this.angForm.controls.vLoc.value;
    this.vendor.vSer=this.angForm.controls.vSer.value;
    this.vendor.vPin=this.angForm.controls.vPin.value;
    this.vendor.cName=this.angForm.controls.cName.value;
    this.vendor.cDept=this.angForm.controls.cDept.value;
    this.vendor.cEmail=this.angForm.controls.cEmail.value;
    this.vendor.cPhone=this.angForm.controls.cPhone.value;
    this.save();
    console.log(this.vendor);
  }


  save(){
    this.vendorcontactService.createVendor(this.vendor)
    .subscribe(data => console.log(data), error => console.log(error));
     this.toastr.success('New Vendor Successfully created','Vendor Creation Status');
      this.vendorcontactService.getVendorcontactDetails();
    this.gotoList();
  }
  gotoList() {
    this.vendors = this.vendorcontactService.getVendorcontactDetails();
    this.vendorcontactService.getVendorcontactDetails();
    this.router.navigate(['/vendorlist']);
  }


}
