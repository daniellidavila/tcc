import { NgModule } from '@angular/core';
import { ListViewComponent } from './list/list-view';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list';
@NgModule({
	declarations: [ListViewComponent,
    AtendimentoListComponent],
	imports: [
		FormsModule,
		BrowserModule
	],
	exports: [ListViewComponent,
    AtendimentoListComponent]
})
export class ComponentsModule {}
