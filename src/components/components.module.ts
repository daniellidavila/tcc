import { NgModule } from '@angular/core';
import { ListViewComponent } from './list/list-view';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [ListViewComponent],
	imports: [
		FormsModule,
		BrowserModule
	],
	exports: [ListViewComponent]
})
export class ComponentsModule {}
