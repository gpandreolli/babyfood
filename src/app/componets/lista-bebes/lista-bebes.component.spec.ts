import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBebesComponent } from './lista-bebes.component';

describe('ListaBebesComponent', () => {
  let component: ListaBebesComponent;
  let fixture: ComponentFixture<ListaBebesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBebesComponent]
    });
    fixture = TestBed.createComponent(ListaBebesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
