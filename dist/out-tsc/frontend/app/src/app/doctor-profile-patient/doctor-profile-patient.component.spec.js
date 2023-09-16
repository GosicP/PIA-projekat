import { TestBed } from '@angular/core/testing';
import { DoctorProfilePatientComponent } from './doctor-profile-patient.component';
describe('DoctorProfilePatientComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorProfilePatientComponent]
        });
        fixture = TestBed.createComponent(DoctorProfilePatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctor-profile-patient.component.spec.js.map