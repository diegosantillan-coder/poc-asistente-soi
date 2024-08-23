import { Injectable } from '@angular/core';
import { AgentResponse } from '@core/interfaces/agent.interface';
import { QuestionRequest } from '@core/interfaces/question.interface';
import { OptionsHttp } from '@core/models/options-http.interface';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
	providedIn: 'root'
})
export class AgentService extends HttpService {
	getResponseAgent(question: QuestionRequest): Observable<AgentResponse> {
		this.addHeader('x-api-key', 'G0auLJ0a0r6hJgBl1h0r85N4xxu4apZ7i39KyAE3');
		const options: OptionsHttp = {
			headers: this.getHeaders(),
			timeout: 20000
		};
		return this.httpPOST(
			'https://if2ni4x49d.execute-api.us-east-1.amazonaws.com/dev/bedrock-agent',
			question,
			options
		);
	}
}
