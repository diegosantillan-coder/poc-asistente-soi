import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { AButtonComponent } from '@ui/atoms/a-button/a-button.component';
import { ASeparatorComponent } from '@ui/atoms/a-separator/a-separator.component';

@Component({
	selector: 'o-header-register',
	standalone: true,
	imports: [ASeparatorComponent, AButtonComponent],
	templateUrl: './o-header-register.component.html',
	styleUrl: './o-header-register.component.scss'
})
export class OHeaderRegisterComponent {
	navBar: NavBar[] = [
		{ id: 1, title: 'Personas', path: '/home' },
		{ id: 2, title: 'Empresa', path: '/services' }
	];
}
