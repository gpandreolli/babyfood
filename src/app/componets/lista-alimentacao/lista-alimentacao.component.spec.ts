import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlimentacaoComponent } from './lista-alimentacao.component';

describe('ListaAlimentacaoComponent', () => {
  let component: ListaAlimentacaoComponent;
  let fixture: ComponentFixture<ListaAlimentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAlimentacaoComponent]
    });
    fixture = TestBed.createComponent(ListaAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
