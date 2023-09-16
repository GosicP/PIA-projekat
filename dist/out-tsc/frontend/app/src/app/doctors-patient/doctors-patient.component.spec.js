import { TestBed } from '@angular/core/testing';
import { DoctorsPatientComponent } from './doctors-patient.component';
describe('DoctorsPatientComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorsPatientComponent]
        });
        fixture = TestBed.createComponent(DoctorsPatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctors-patient.component.spec.js.map