export interface QuestionRequest {
	request: Request;
}

export interface Request {
	user_id: number;
	session_id: string;
	prompt: string;
}
