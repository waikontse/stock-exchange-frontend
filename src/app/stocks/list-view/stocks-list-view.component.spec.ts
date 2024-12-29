import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksListViewComponent } from './stocks-list-view.component';

describe('StocksComponent', () => {
  let component: StocksListViewComponent;
  let fixture: ComponentFixture<StocksListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
