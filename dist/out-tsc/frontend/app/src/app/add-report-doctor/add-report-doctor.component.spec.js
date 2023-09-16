import { TestBed } from '@angular/core/testing';
import { AddReportDoctorComponent } from './add-report-doctor.component';
describe('AddReportDoctorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddReportDoctorComponent]
        });
        fixture = TestBed.createComponent(AddReportDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-report-doctor.component.spec.js.map