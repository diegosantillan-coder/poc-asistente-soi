import { NgClass } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Output,
	ViewChild
} from '@angular/core';
import { defaultQuestion } from '@core/data/default-question';
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
export class TModalComponent implements AfterViewInit {
	private readonly agentService = inject(AgentService);

	chats: { text: string; isUser: boolean }[] = [];
	DEFAULT_USER_ID = 1519365949;
	valueInput = '';
	isInputEmpty = false;
	isDisableInput = false;
	welcome = true;
	defaultQuestion: Request[] = defaultQuestion;

	@ViewChild('chatContainer') chatContainer!: ElementRef;
	@Output() onclose = new EventEmitter<void>();

	@ViewChild(ACustomInputTextComponent, { static: true })
	inputText!: ACustomInputTextComponent;

	handleClose(): void {
		this.onclose.emit();
	}

	handleInputChanged(value: boolean): void {
		this.isInputEmpty = value;
	}

	handleDebouncedInput(value: string): void {
		this.valueInput = value;
		if (this.valueInput) {
			this.askingTheAgent({
				request: {
					user_id: this.DEFAULT_USER_ID,
					session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
					prompt: this.valueInput
				}
			});

			this.welcome = false;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
		}

		setTimeout(() => this.scrollToBottom(), 0);
	}

	sendDefaultQuestion(question: Request): void {
		if (question.prompt) {
			this.welcome = false;
			this.valueInput = question.prompt;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.askingTheAgent({ request: question });
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

			this.askingTheAgent({
				request: {
					user_id: this.DEFAULT_USER_ID,
					session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
					prompt: currentInputValue
				}
			});

			this.inputText.clearInputValue();
			this.welcome = false;
			setTimeout(() => this.scrollToBottom(), 0);
		}
	}

	ngAfterViewInit(): void {
		this.scrollToBottom();
	}

	private scrollToBottom(): void {
		if (this.chatContainer) {
			const container = this.chatContainer.nativeElement;
			if (container) {
				container.scrollTop = container.scrollHeight;
				setTimeout(() => {
					container.scrollTop = container.scrollHeight;
				}, 100);
			}
		}
	}

	askingTheAgent(request: QuestionRequest): void {
		this.isInputEmpty = false;
		this.isDisableInput = true;
		this.agentService.getResponseAgent(request).subscribe((response) => {
			if (response.agent_answer) {
				this.chats.push({
					text: response.agent_answer,
					isUser: false
				});
			}
			this.isDisableInput = false;
			setTimeout(() => this.scrollToBottom(), 0);
		});
	}
}
