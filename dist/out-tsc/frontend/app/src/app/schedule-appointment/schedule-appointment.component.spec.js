import { TestBed } from '@angular/core/testing';
import { ScheduleAppointmentComponent } from './schedule-appointment.component';
describe('ScheduleAppointmentComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleAppointmentComponent]
        });
        fixture = TestBed.createComponent(ScheduleAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=schedule-appointment.component.spec.js.map