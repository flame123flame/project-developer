import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDeliveryResults001Component } from './data-delivery-results001.component';

describe('DataDeliveryResults001Component', () => {
  let component: DataDeliveryResults001Component;
  let fixture: ComponentFixture<DataDeliveryResults001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDeliveryResults001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDeliveryResults001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
