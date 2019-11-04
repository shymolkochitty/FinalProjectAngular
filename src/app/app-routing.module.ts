import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { DetailVendorcontactComponent } from './detail-vendorcontact/detail-vendorcontact.component';
import { CreateVendorcontactComponent } from './create-vendorcontact/create-vendorcontact.component';
import { UpdateVendorcontactComponent } from './update-vendorcontact/update-vendorcontact.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'vendorlist',component:ListvendorComponent},
  {path:'vendordetails/:vId' ,component:DetailVendorcontactComponent},
  {path:'vendorlist/createvendor',component:CreateVendorcontactComponent},
  {path:'updatevendor/:vId',component:UpdateVendorcontactComponent,canActivate:[AuthGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
