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
import {MatExpansionModule} from '@angular/material/expansion';
import { AddNoteComponent } from './add-note/add-note.component';
import { LessonComponent } from './lesson/lesson.component';
import { TranslateModule } from '@ngx-translate/core';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';

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
    AddNoteComponent,
    LessonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    [MatExpansionModule],
    [BrowserModule, TranslateModule.forRoot(), StreamAutocompleteTextareaModule, StreamChatModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
