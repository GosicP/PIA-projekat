import { TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
describe('DoctorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorComponent]
        });
        fixture = TestBed.createComponent(DoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctor.component.spec.js.map