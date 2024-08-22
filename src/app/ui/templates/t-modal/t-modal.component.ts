import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ACustomInputTextComponent } from '@ui/atoms/a-custom-input-text/a-custom-input-text.component';
import { AtomsModule } from '@ui/atoms/atoms.module';

@Component({
	selector: 't-modal',
	standalone: true,
	imports: [AtomsModule],
	templateUrl: './t-modal.component.html',
	styleUrl: './t-modal.component.scss'
})
export class TModalComponent {
	@Output() onclose = new EventEmitter<void>();
	@ViewChild(ACustomInputTextComponent, { static: true })
	inputText!: ACustomInputTextComponent;
	valueInput = '';

	handleClose(): void {
		this.onclose.emit();
	}

	handleDebouncedInput(value: string): void {
		this.valueInput = value;
		console.log(value);
	}
}
