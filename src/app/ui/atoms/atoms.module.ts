import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AButtonComponent } from './a-button/a-button.component';
import { ALogoComponent } from './a-logo/a-logo.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, AButtonComponent, ALogoComponent],
	exports: [AButtonComponent, ALogoComponent]
})
export class AtomsModule {}
