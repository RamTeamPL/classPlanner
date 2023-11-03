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

import { EachComponent } from './announcements/each/each.component';
import { TruncatePipe } from './announcements/pipes/truncate.pipe';
import { AddAnnouncementComponent } from './announcements/add-announcement/add-announcement.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { LessonComponent } from './lesson/lesson.component';

import { NewClassmateComponent } from './new-classmate/new-classmate.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AddFundraisersComponent } from './add-fundraisers/add-fundraisers.component';
import { AddNoteComponent } from './add-note/add-note.component';

import {HttpClientModule} from '@angular/common/http';


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

    EachComponent,
    TruncatePipe,
    AddAnnouncementComponent,

    AddNoteComponent,
    LessonComponent,
    NewClassmateComponent,

    AddFundraisersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    [MatExpansionModule],
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
