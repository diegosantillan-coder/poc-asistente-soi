import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THomeComponent } from './t-home/t-home.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, THomeComponent],
	exports: [THomeComponent]
})
export class TemplatesModule {}
