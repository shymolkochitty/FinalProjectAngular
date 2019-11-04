import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { CreateVendorcontactComponent } from './create-vendorcontact/create-vendorcontact.component';
import { DetailVendorcontactComponent } from './detail-vendorcontact/detail-vendorcontact.component';
import{NgxPaginationModule} from 'ngx-pagination';
import{ConfirmationPopoverModule}from 'angular-confirmation-popover';
import{ToastrModule,ToastrService}from 'ngx-toastr';
import { UpdateVendorcontactComponent } from './update-vendorcontact/update-vendorcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListvendorComponent,
    CreateVendorcontactComponent,
    DetailVendorcontactComponent,
    UpdateVendorcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
   // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
