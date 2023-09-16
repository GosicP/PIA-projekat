import { TestBed } from '@angular/core/testing';
import { PatientAppointmentsComponent } from './patient-appointments.component';
describe('PatientAppointmentsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PatientAppointmentsComponent]
        });
        fixture = TestBed.createComponent(PatientAppointmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=patient-appointments.component.spec.js.map