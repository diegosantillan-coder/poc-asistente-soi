import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAchComponent } from './header-ach.component';

describe('HeaderAchComponent', () => {
	let component: HeaderAchComponent;
	let fixture: ComponentFixture<HeaderAchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderAchComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderAchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
