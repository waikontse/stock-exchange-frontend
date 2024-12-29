import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesListViewComponent } from './exchanges-list-view.component';

describe('ExchangesComponent', () => {
  let component: ExchangesListViewComponent;
  let fixture: ComponentFixture<ExchangesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangesListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
