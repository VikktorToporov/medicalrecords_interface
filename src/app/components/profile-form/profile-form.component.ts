import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnChanges {
    @Input() data: any;
    @Input('is-doctor') isDoctor = false;

    @Output('save') onSave: EventEmitter<any> = new EventEmitter();
    
    form: FormGroup;
    initialValue = {
        id: null,
        firstName: null,
        middleName: null,
        lastName: null,
        email: null,
        ssn: null,
        healthInsurancePaid: false,
        specialty: null,
        gp: false,
        doctorId: null,
    };

    constructor(protected fb: FormBuilder) {
        this.form = this.fb.group(this.initialValue);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes.data) {
            const toPatch = this.generateToPatchValue(this.data);

            this.form.patchValue(toPatch);
        }
    }
    
    save() {
        this.onSave.emit(this.form.value);
    }

    private generateToPatchValue(data: any) {
        const result = { ...data };

        if (data?.doctor?.value) {
            result.doctorId = data.doctor.value;
        }

        return result;
    }
}
