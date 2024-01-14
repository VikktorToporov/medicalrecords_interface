import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './guards/auth.guard';
import { PatientVisitHistoryComponent } from './components/patient-visit-history/patient-visit-history.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VisitsComponent } from './components/visits/visits.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DiagnosisReportComponent } from './components/diagnosis-report/diagnosis-report.component';
import { PatientsReportComponent } from './components/patients-report/patients-report.component';
import { VisitsReportComponent } from './components/visits-report/visits-report.component';
import { PatientsEditComponent } from './components/patients-edit/patients-edit.component';
import { VisitsEditComponent } from './components/visits-edit/visits-edit.component';
import { VisitsInsertComponent } from './components/visits-insert/visits-insert.component';

const routes: Routes = [
    { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'Profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'Patients', component: PatientsComponent, canActivate: [AuthGuard] },
    { path: 'Patients/Edit/:id', component: PatientsEditComponent, canActivate: [AuthGuard] },
    { path: 'Doctors', component: DoctorsComponent, canActivate: [AuthGuard] },
    { path: 'Visits', component: VisitsComponent, canActivate: [AuthGuard] },
    { path: 'Visits/Insert/:patientId', component: VisitsInsertComponent, canActivate: [AuthGuard] },
    { path: 'Visits/Edit/:id', component: VisitsEditComponent, canActivate: [AuthGuard] },
    { path: 'DiagnosisReport', component: DiagnosisReportComponent, canActivate: [AuthGuard] },
    { path: 'PatientsReport', component: PatientsReportComponent, canActivate: [AuthGuard] },
    { path: 'VisitReport', component: VisitsReportComponent, canActivate: [AuthGuard] },
    { path: 'PatientHistory', component: PatientVisitHistoryComponent, canActivate: [AuthGuard] },
    { path: 'Landing', component: LandingComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Signup', component: SignupComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
