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
import { HomeworksComponent } from './homeworks/homeworks.component';
import { LoginComponent } from './login/login.component';
import { EachAnnouncementComponent } from './each-announcement/each-announcement.component';
//import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { LessonComponent } from './lesson/lesson.component';
import { NewClassmateComponent } from './new-classmate/new-classmate.component';
import { AddFundraisersComponent } from './add-fundraisers/add-fundraisers.component';
import { AddHomeworkComponent } from './add-homework/add-homework.component';
import { HomeworkComponent } from './homework/homework.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { RegisterComponent } from './register/register.component';
import { RegistertwoComponent } from './registertwo/registertwo.component';
//import { AddAnnouncementComponent } from './announcements/add-announcement/add-announcement.component';


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
        path: 'add-announcement',
        component: AddAnnouncementComponent
      },
      {
        path: 'each-announcement',
        component: EachAnnouncementComponent
      },
      {
        path: 'new-classmate',
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
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'registertwo',
        component: RegistertwoComponent
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
        path: "homeworks",
        component: HomeworkComponent,
        children: [
          {
            path: 'addHomework',
            component: AddHomeworkComponent
          },
          {
            path: 'homework',
            component: HomeworkComponent
          }
        ]
      },
      {
        path: 'trips',
        component: TripsComponent
      },
      
      {
        path: 'login',
        component: LoginComponent
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
