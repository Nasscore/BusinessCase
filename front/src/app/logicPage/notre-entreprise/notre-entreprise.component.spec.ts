import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreEntrepriseComponent } from './notre-entreprise.component';

describe('NotreEntrepriseComponent', () => {
  let component: NotreEntrepriseComponent;
  let fixture: ComponentFixture<NotreEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
