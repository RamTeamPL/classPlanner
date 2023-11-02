import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ChatComponent } from './chat/chat.component';
import { TreasurerComponent } from './treasurer/treasurer.component';
import { ErrorComponent } from './error/error.component';
import { MoreComponent } from './more/more.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';
import { TripsComponent } from './trips/trips.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'announcements',
        component: AnnouncementsComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'treasurer',
        component: TreasurerComponent
      },
      {
        path: 'more',
        component: MoreComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'trips',
        component: TripsComponent
      },
      {
        path: 'fundraisers',
        component: FundraisersComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        redirectTo: 'error'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
