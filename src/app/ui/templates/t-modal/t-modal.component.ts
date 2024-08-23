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
import { QuestionRequest, Request } from '@core/interfaces/question.interface';
import { User } from '@core/interfaces/user.interface';
import { AgentService } from '@core/services/agent/agent.service';
import { QuestionService } from '@core/services/question/question.service';
import { UserService } from '@core/services/user/user.service';
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
	private readonly userService = inject(UserService);
	private readonly questionService = inject(QuestionService);

	chats: { text: string; isUser: boolean }[] = [];

	valueInput = '';
	isInputEmpty = false;
	isDisableInput = false;
	isTyping = false; // Bandera para indicar si está "escribiendo"
	welcome = true;
	defaultQuestion: Request[] = this.questionService.getDefaultQuestions();
	user: User = this.userService.getUser();

	@ViewChild('chatContainer') chatContainer!: ElementRef;
	@Output() onclose = new EventEmitter<void>();

	@ViewChild(ACustomInputTextComponent, { static: false })
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
					user_id: this.user.documentNumber,
					session_id: this.user.sessionId,
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
					user_id: this.user.documentNumber,
					session_id: this.user.sessionId,
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
		this.isTyping = true;
		this.agentService.getResponseAgent(request).subscribe((response) => {
			if (response.agent_answer) {
				this.chats.push({
					text: response.agent_answer,
					isUser: false
				});
			}
			this.isDisableInput = false;
			this.isTyping = false;
			this.tryFocusInput();
			setTimeout(() => this.scrollToBottom(), 0);
		});
	}

	tryFocusInput(): void {
		if (!this.inputText.disableInput) {
			this.inputText.focusInput();
		} else {
			setTimeout(() => {
				this.tryFocusInput();
			}, 1000);
		}
	}
}
