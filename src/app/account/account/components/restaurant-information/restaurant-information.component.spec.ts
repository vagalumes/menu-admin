import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInformationComponent } from './restaurant-information.component';

describe('RestaurantInformationComponent', () => {
  let component: RestaurantInformationComponent;
  let fixture: ComponentFixture<RestaurantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
