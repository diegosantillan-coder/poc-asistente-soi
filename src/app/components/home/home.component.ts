import { Component } from '@angular/core';
import { OrganismsModule } from '@ui/organisms/organisms.module';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [OrganismsModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {}
