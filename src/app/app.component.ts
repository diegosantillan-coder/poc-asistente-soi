import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtomsModule } from './ui/atoms/atoms.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AtomsModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'poc-asistente-soi';
}
