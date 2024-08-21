import { Component } from '@angular/core';
import { AtomsModule } from '@ui/atoms/atoms.module';

@Component({
	selector: 't-home',
	standalone: true,
	imports: [AtomsModule],
	templateUrl: './t-home.component.html',
	styleUrl: './t-home.component.scss'
})
export class THomeComponent {}
