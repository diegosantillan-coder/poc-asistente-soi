import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Question } from '@core/interfaces/question.interface';
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
	welcome = true;
	defaultQuestion: Question[] = [
		{
			user_id: 1519365949,
			session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
			prompt: 'Quiero liquidar mi planilla como independiente'
		},
		{
			user_id: 1519365949,
			session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
			prompt: 'Quiero reportar una novedad cómo independiente'
		},
		{
			user_id: 1519365949,
			session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
			prompt: 'Quiero pagar mis aportes vencidos cómo independiente'
		}
	];

	handleClose(): void {
		this.onclose.emit();
	}

	handleDebouncedInput(value: string): void {
		this.valueInput = value;
		if (this.valueInput) {
			this.welcome = false;
			console.log('Input value:', this.valueInput);
		}
	}

	sendDefaultQuestion(question: Question): void {
		if (question.prompt) {
			this.welcome = false;
		}
	}
}
