import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '@core/interfaces/navbar.interface';
import { AtomsModule } from './ui/atoms/atoms.module';
import { MoleculesModule } from './ui/molecules/molecules.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AtomsModule, MoleculesModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'poc-asistente-soi';
	navBar: NavBar[] = [
		{ id: 1, title: 'Inicio', path: '/home' },
		{ id: 2, title: 'Servicios', path: '/services' },
		{ id: 3, title: 'Contacto', path: '/contact' }
	];
}
