import { Component, EventEmitter, Output } from '@angular/core';
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

	handleClose(): void {
		this.onclose.emit();
	}
}
