import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth/auth.guard';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	},
	{
		path: 'login',
		loadComponent: async () =>
			import('./components/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'home',
		loadComponent: async () =>
			import('./components/home/home.component').then((m) => m.HomeComponent),
		canActivate: [AuthGuard]
	}
];
