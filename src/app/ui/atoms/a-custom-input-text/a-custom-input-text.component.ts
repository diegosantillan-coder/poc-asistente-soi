import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
	selector: 'a-custom-input-text',
	standalone: true,
	imports: [],
	templateUrl: './a-custom-input-text.component.html',
	styleUrl: './a-custom-input-text.component.scss'
})
export class ACustomInputTextComponent {
	@Output() debouncedInput = new EventEmitter<string>();
	private inputSubject = new Subject<string>();

	constructor() {
		this.inputSubject
			.pipe(
				debounceTime(300) // Espera 300ms después del último tecleo
			)
			.subscribe((value) => {
				if (value.trim()) {
					this.debouncedInput.emit(value); // Emite el valor si no está vacío
				}
			});
	}

	onInputChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.inputSubject.next(input.value);
	}

	onKeyDown(event: KeyboardEvent): void {
		const input = event.target as HTMLInputElement;
		if (event.key === 'Enter' && input.value.trim()) {
			this.debouncedInput.emit(input.value); // Emite el valor del input
			this.clearInput(input); // Luego limpia el input
		}
	}

	clearInput(input: HTMLInputElement): void {
		input.value = ''; // Limpia el valor del input
		this.inputSubject.next(''); // Resetea el Subject
	}
}
