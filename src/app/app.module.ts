import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PatientVisitHistoryComponent } from './components/patient-visit-history/patient-visit-history.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './components/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AuthGuard } from './guards/auth.guard';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VisitsComponent } from './components/visits/visits.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DiagnosisReportComponent } from './components/diagnosis-report/diagnosis-report.component';
import { PatientsReportComponent } from './components/patients-report/patients-report.component';
import { VisitsReportComponent } from './components/visits-report/visits-report.component';
import { PatientsInsertComponent } from './components/patients-insert/patients-insert.component';
import { PatientsEditComponent } from './components/patients-edit/patients-edit.component';
import { VisitsEditComponent } from './components/visits-edit/visits-edit.component';
import { VisitsInsertComponent } from './components/visits-insert/visits-insert.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
        PatientVisitHistoryComponent,
        LandingComponent,
        SignupComponent,
        ProfileFormComponent,
        PatientsComponent,
        VisitsComponent,
        DoctorsComponent,
        DiagnosisReportComponent,
        PatientsReportComponent,
        VisitsReportComponent,
        PatientsInsertComponent,
        PatientsEditComponent,
        VisitsEditComponent,
        VisitsInsertComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatMenuModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    providers: [
        HttpClient,
        AuthGuard,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
