import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonverteraComponent } from './konvertera.component';

describe('KonverteraComponent', () => {
  let component: KonverteraComponent;
  let fixture: ComponentFixture<KonverteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonverteraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonverteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
