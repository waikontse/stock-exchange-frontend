import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCreatorComponent } from './exchange-creator.component';

describe('CreatorComponent', () => {
  let component: ExchangeCreatorComponent;
  let fixture: ComponentFixture<ExchangeCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
