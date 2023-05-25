import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlimentacaoComponent } from './cadastro-alimentacao.component';

describe('CadastroAlimentacaoComponent', () => {
  let component: CadastroAlimentacaoComponent;
  let fixture: ComponentFixture<CadastroAlimentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAlimentacaoComponent]
    });
    fixture = TestBed.createComponent(CadastroAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
