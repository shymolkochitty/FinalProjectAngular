import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVendorcontactComponent } from './detail-vendorcontact.component';

describe('DetailVendorcontactComponent', () => {
  let component: DetailVendorcontactComponent;
  let fixture: ComponentFixture<DetailVendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
