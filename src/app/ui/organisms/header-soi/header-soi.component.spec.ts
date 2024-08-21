import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSoiComponent } from './header-soi.component';

describe('HeaderSoiComponent', () => {
	let component: HeaderSoiComponent;
	let fixture: ComponentFixture<HeaderSoiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderSoiComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderSoiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
