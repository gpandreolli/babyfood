import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroBebeComponent } from './componets/cadastro-bebe/cadastro-bebe.component';
import { CadastroAlimentacaoComponent } from './componets/cadastro-alimentacao/cadastro-alimentacao.component';
import { ListaBebesComponent } from './componets/lista-bebes/lista-bebes.component';
import { ListaAlimentacaoComponent } from './componets/lista-alimentacao/lista-alimentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroBebeComponent,
    CadastroAlimentacaoComponent,
    ListaBebesComponent,
    ListaAlimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
