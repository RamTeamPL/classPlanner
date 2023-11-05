import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRippleModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TreasurerComponent } from './treasurer/treasurer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MoreComponent } from './more/more.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { TripsComponent } from './trips/trips.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import { RegisterComponent } from './register/register.component';

import { EachAnnouncementComponent } from './each-announcement/each-announcement.component';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { LessonComponent } from './lesson/lesson.component';
import {MatRadioModule} from '@angular/material/radio';
import { NewClassmateComponent } from './new-classmate/new-classmate.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AddFundraisersComponent } from './add-fundraisers/add-fundraisers.component';
import { AddNoteComponent } from './add-note/add-note.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { AddHomeworkComponent } from './add-homework/add-homework.component';
import { HomeworkComponent } from './homework/homework.component';
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { RegistertwoComponent } from './registertwo/registertwo.component';
import { ElectionsComponent } from './elections/elections.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    AnnouncementsComponent,
    TreasurerComponent,
    NavbarComponent,
    TopbarComponent,
    MoreComponent,
    ProfileComponent,
    SettingsComponent,
    NotesComponent,
    NotificationsComponent,
    FundraisersComponent,
    TripsComponent,
    EachAnnouncementComponent,
    LoginComponent,
    RegisterComponent,
    TruncatePipe,
    AddAnnouncementComponent,

    AddNoteComponent,
    LessonComponent,
    NewClassmateComponent,

    AddFundraisersComponent,
      HomeworksComponent,
      AddHomeworkComponent,
      HomeworkComponent,
      RegistertwoComponent,
      ElectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatDividerModule, MatIconModule],
    [ReactiveFormsModule, NgIf],
    [MatExpansionModule],
    [MatDividerModule,
    MatButtonModule,
    HttpClientModule],
    [FormsModule, MatFormFieldModule, MatInputModule],
    MatRippleModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
