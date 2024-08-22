import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AButtonComponent } from './a-button/a-button.component';
import { ACustomButtonComponent } from './a-custom-button/a-custom-button.component';
import { ALogoComponent } from './a-logo/a-logo.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AButtonComponent,
		ALogoComponent,
		ACustomButtonComponent
	],
	exports: [AButtonComponent, ALogoComponent, ACustomButtonComponent]
})
export class AtomsModule {}
