import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderAchComponent } from './header-ach/header-ach.component';
import { HeaderSoiComponent } from './header-soi/header-soi.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, HeaderSoiComponent, HeaderAchComponent],
	exports: [HeaderSoiComponent, HeaderAchComponent]
})
export class OrganismsModule {}
