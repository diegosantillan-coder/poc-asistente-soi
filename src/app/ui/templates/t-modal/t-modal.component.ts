import { NgClass } from '@angular/common';
import {
	Component,
	EventEmitter,
	inject,
	Output,
	ViewChild
} from '@angular/core';
import { QuestionRequest, Request } from '@core/interfaces/question.interface';
import { AgentService } from '@core/services/agent/agent.service';
import { ACustomInputTextComponent } from '@ui/atoms/a-custom-input-text/a-custom-input-text.component';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { ACardChatComponent } from '../../atoms/a-card-chat/a-card-chat.component';

@Component({
	selector: 't-modal',
	standalone: true,
	imports: [AtomsModule, NgClass, ACardChatComponent],
	templateUrl: './t-modal.component.html',
	styleUrl: './t-modal.component.scss'
})
export class TModalComponent {
	private readonly agentService = inject(AgentService);

	chats: { text: string; isUser: boolean }[] = [];
	@Output() onclose = new EventEmitter<void>();
	@ViewChild(ACustomInputTextComponent, { static: true })
	inputText!: ACustomInputTextComponent;
	valueInput = '';
	isInputEmpty = false;
	welcome = true;
	defaultQuestion: Request[] = [
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

	questionRequest: QuestionRequest = {
		request: {
			user_id: 0,
			session_id: '',
			prompt: ''
		}
	};

	handleClose(): void {
		this.onclose.emit();
	}

	handleInputChanged(value: boolean): void {
		this.isInputEmpty = value;
	}

	handleDebouncedInput(value: string): void {
		this.valueInput = value;
		if (this.valueInput) {
			this.welcome = false;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
		}
	}

	sendDefaultQuestion(question: Request): void {
		if (question.prompt) {
			this.welcome = false;
			this.valueInput = question.prompt;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});

			this.questionRequest.request = question;
			this.agentService
				.getResponseAgent(this.questionRequest)
				.subscribe((response) => {
					this.chats.push({
						text: response.agent_answer,
						isUser: false
					});
				});
		}
	}

	sendQuestion(): void {
		if (this.valueInput.length <= 0) return;
		const currentInputValue = this.inputText.currentValue;
		if (currentInputValue.trim()) {
			this.valueInput = currentInputValue;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.inputText.clearInputValue();
			this.welcome = false;
		} else {
			console.log('Input is empty');
		}
	}
}
