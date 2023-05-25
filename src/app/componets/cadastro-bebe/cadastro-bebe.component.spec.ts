import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBebeComponent } from './cadastro-bebe.component';

describe('CadastroBebeComponent', () => {
  let component: CadastroBebeComponent;
  let fixture: ComponentFixture<CadastroBebeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroBebeComponent]
    });
    fixture = TestBed.createComponent(CadastroBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
