import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendorcontact } from './vendorcontact';

@Injectable({
  providedIn: 'root'
})
export class VendorcontactService {
  

  constructor( private httpService:HttpClient,private router:Router) { }

  //get  all details of vendorcontact//
  getVendorcontactDetails():Observable<any>{
    console.log("get all details of vendor contact")
    return this.httpService.get(environment.apiUrl+'/vcdetails');
  }


  //to disable//
  deleteVendor(vId: number, vendor: Vendorcontact): Observable<any> {
    return this.httpService.put(environment.apiUrl + '/disablev/' + vId, vendor);
  }

  //to get details of a particular vendor details and its contacts//
  getVendor(vId:number):Observable<any>{
    console.log("insid getvendor method in service")
    return this.httpService.get(environment.apiUrl+'/vcbyid/'+vId);
  }

  //insert into both tables//
  createVendor(vendor:Object):Observable<any>{
    console.log(vendor);
    return this.httpService.post(environment.apiUrl+'/insertvdetails',vendor);
  }

  // to update //
  updateVendor(vId:number, vendor:Vendorcontact):Observable<any>{
    return this.httpService.put(environment.apiUrl+'/updatevdetails/'+vId,vendor);
  }

  //to search//
 
  //serach by name,location,services
 search(searchString:String):Observable<any>
 {
   return this.httpService.get(environment.apiUrl+'/vdetails/'+searchString);
 }


  //get all vendor details
  getVDetails(): Observable<any>{
    console.log('beginning');
    return this.httpService.get(environment.apiUrl+'/vdetails/null');
  }

 



}
