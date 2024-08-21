import { Component } from '@angular/core';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MoleculesModule } from '@ui/molecules/molecules.module';

@Component({
	selector: 't-home',
	standalone: true,
	imports: [AtomsModule, MoleculesModule],
	templateUrl: './t-home.component.html',
	styleUrl: './t-home.component.scss'
})
export class THomeComponent {}
