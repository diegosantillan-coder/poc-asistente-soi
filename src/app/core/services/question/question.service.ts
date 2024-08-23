// question.service.ts
import { Injectable } from '@angular/core';
import { Request } from '@core/interfaces/question.interface';
import { UserService } from '@core/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	defaultUserId: string;
	constructor(private userService: UserService) {
		this.defaultUserId = this.userService.getUser().documentNumber;
	}

	getDefaultQuestions(): Request[] {
		return [
			{
				user_id: this.defaultUserId,
				session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
				prompt: 'Quiero liquidar mi planilla como independiente'
			},
			{
				user_id: this.defaultUserId,
				session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
				prompt: 'Quiero reportar una novedad cómo independiente'
			},
			{
				user_id: this.defaultUserId,
				session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
				prompt: 'Quiero pagar mis aportes vencidos cómo independiente'
			}
		];
	}
}
