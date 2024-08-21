import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';

@Component({
	selector: 'm-navbar',
	standalone: true,
	imports: [UpperCasePipe, NgClass],
	templateUrl: './m-navbar.component.html',
	styleUrl: './m-navbar.component.scss'
})
export class MNavbarComponent {
	@Input() navBar!: NavBar[];
	@Input() titleNavBar = '';
	@Input() type = 'm-navbar-primary';
}
