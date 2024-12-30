import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeStockRegisterComponent } from './exchange-stock-register.component';

describe('RegisterStockComponent', () => {
  let component: ExchangeStockRegisterComponent;
  let fixture: ComponentFixture<ExchangeStockRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeStockRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeStockRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
