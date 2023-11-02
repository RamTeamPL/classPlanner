import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ChatComponent } from './chat/chat.component';
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
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    ChatComponent,
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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatDividerModule, MatIconModule],
    [MatExpansionModule],
    [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
