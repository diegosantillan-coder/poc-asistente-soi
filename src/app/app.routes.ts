import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: async () =>
			import('./components/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'home',
		loadComponent: async () =>
			import('./components/home/home.component').then((m) => m.HomeComponent)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	}
];
