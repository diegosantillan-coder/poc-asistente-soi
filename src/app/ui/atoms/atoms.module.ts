import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AButtonComponent } from './a-button/a-button.component';
import { ACustomButtonComponent } from './a-custom-button/a-custom-button.component';
import { ACustomInputTextComponent } from './a-custom-input-text/a-custom-input-text.component';
import { ALogoComponent } from './a-logo/a-logo.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AButtonComponent,
		ALogoComponent,
		ACustomButtonComponent,
		ACustomInputTextComponent
	],
	exports: [
		AButtonComponent,
		ALogoComponent,
		ACustomButtonComponent,
		ACustomInputTextComponent
	]
})
export class AtomsModule {}
