import { Request } from '@core/interfaces/question.interface';
const DEFAULT_USER_ID = 1519365949;
export const defaultQuestion: Request[] = [
	{
		user_id: DEFAULT_USER_ID,
		session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
		prompt: 'Quiero liquidar mi planilla como independiente'
	},
	{
		user_id: DEFAULT_USER_ID,
		session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
		prompt: 'Quiero reportar una novedad cómo independiente'
	},
	{
		user_id: DEFAULT_USER_ID,
		session_id: 'd4e8f4a8-4a3b-41e2-93d7-2c1e354b64de',
		prompt: 'Quiero pagar mis aportes vencidos cómo independiente'
	}
];
