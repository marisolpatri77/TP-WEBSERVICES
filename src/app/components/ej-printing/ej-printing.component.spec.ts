import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjPrintingComponent } from './ej-printing.component';

describe('EjPrintingComponent', () => {
  let component: EjPrintingComponent;
  let fixture: ComponentFixture<EjPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjPrintingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
