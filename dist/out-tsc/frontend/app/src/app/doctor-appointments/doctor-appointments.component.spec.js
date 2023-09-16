import { TestBed } from '@angular/core/testing';
import { DoctorAppointmentsComponent } from './doctor-appointments.component';
describe('DoctorAppointmentsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorAppointmentsComponent]
        });
        fixture = TestBed.createComponent(DoctorAppointmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctor-appointments.component.spec.js.map