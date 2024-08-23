import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'a-custom-input-text',
	standalone: true,
	imports: [],
	templateUrl: './a-custom-input-text.component.html',
	styleUrl: './a-custom-input-text.component.scss'
})
export class ACustomInputTextComponent {
	@Output() debouncedInput = new EventEmitter<string>();
	@Output() inputChanged = new EventEmitter<boolean>();
	private inputSubject = new Subject<string>();
	public currentValue = '';

	onInputChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.inputSubject.next(input.value);
		this.currentValue = input.value;
		if (this.currentValue.length <= 0) {
			this.inputChanged.emit(false);
		} else {
			this.inputChanged.emit(true);
		}
	}

	onKeyDown(event: KeyboardEvent): void {
		const input = event.target as HTMLInputElement;
		if (event.key === 'Enter' && input.value.trim()) {
			this.debouncedInput.emit(input.value);
			this.clearInput(input);
		}
	}

	clearInput(input: HTMLInputElement): void {
		input.value = '';
		this.currentValue = '';
		this.inputSubject.next('');
		this.inputChanged.emit(false);
	}

	clearInputValue(): void {
		this.currentValue = '';
		this.inputSubject.next('');
		this.inputChanged.emit(false);
	}
}
