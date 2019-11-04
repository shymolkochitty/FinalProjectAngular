import { Component, OnInit } from '@angular/core';
import { VendorcontactService } from '../vendorcontact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendorcontact } from '../vendorcontact';

@Component({
  selector: 'app-detail-vendorcontact',
  templateUrl: './detail-vendorcontact.component.html',
  styleUrls: ['./detail-vendorcontact.component.css']
})
export class DetailVendorcontactComponent implements OnInit {
  vendor: Vendorcontact;
  vId: number;

  constructor(private vendorcontactService: VendorcontactService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.vendor=new Vendorcontact();
    this.vId=this.route.snapshot.params['vId'];
    this.vendorcontactService.getVendor(this.vId)
    .subscribe(data=>{console.log(data),this.vendor=data},error=>console.log(error));
  }

}
