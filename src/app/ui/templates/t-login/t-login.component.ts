import { Component } from '@angular/core';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { ASeparatorComponent } from '../../atoms/a-separator/a-separator.component';

@Component({
	selector: 't-login',
	standalone: true,
	imports: [AtomsModule, ASeparatorComponent],
	templateUrl: './t-login.component.html',
	styleUrl: './t-login.component.scss'
})
export class TLoginComponent {
	togglePasswordVisibility(): void {
		const passwordField = document.getElementById(
			'password'
		) as HTMLInputElement;
		const passwordFieldType = passwordField.getAttribute('type');
		passwordField.setAttribute(
			'type',
			passwordFieldType === 'password' ? 'text' : 'password'
		);
	}
}
