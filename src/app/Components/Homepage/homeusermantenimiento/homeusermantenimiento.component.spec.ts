import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeusermantenimientoComponent } from './homeusermantenimiento.component';

describe('HomeusermantenimientoComponent', () => {
  let component: HomeusermantenimientoComponent;
  let fixture: ComponentFixture<HomeusermantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeusermantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeusermantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
