import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorcontactComponent } from './create-vendorcontact.component';

describe('CreateVendorcontactComponent', () => {
  let component: CreateVendorcontactComponent;
  let fixture: ComponentFixture<CreateVendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
