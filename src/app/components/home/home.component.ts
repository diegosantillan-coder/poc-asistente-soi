import { Component } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderComponent, FooterComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {}
