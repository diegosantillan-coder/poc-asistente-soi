import { Component, Input } from '@angular/core';

@Component({
	selector: 'a-custom-button',
	standalone: true,
	imports: [],
	templateUrl: './a-custom-button.component.html',
	styleUrl: './a-custom-button.component.scss'
})
export class ACustomButtonComponent {
	@Input() text = '';
}
