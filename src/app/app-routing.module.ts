import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TreasurerComponent } from './treasurer/treasurer.component';
import { ErrorComponent } from './error/error.component';
import { MoreComponent } from './more/more.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';
import { TripsComponent } from './trips/trips.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';

import { EachComponent } from './announcements/each/each.component';
import { AddNoteComponent } from './announcements/add-note/add-note.component';

// import { AddNoteComponent } from './add-note/add-note.component';
import { LessonComponent } from './lesson/lesson.component';
import { NewClassmateComponent } from './new-classmate/new-classmate.component';
import { AddFundraisersComponent } from './add-fundraisers/add-fundraisers.component';

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
        path: 'addNote',
        component: AddNoteComponent
      },
      {
        path: 'each',
        component: EachComponent
      },
      {
        path: 'newClassmate',
        component: NewClassmateComponent
      },
      {
        path: 'treasurer',
        component: TreasurerComponent,
        children: [
          {
            path: 'add-fundraisers',
            component: AddFundraisersComponent
          },
          {
            path: 'fundraisers',
            component: FundraisersComponent
          },
        ]
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
        component: NotesComponent,
        children: [
          {
            path: 'addNote',
            component: AddNoteComponent
          },
          {
            path: 'lesson',
            component: LessonComponent
          },
        ]
      },
      {
        path: 'trips',
        component: TripsComponent
      },
      
      {
        path: 'error',
        component: ErrorComponent
      },
      // {
      //   path: '**',
      //   redirectTo: 'error'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
