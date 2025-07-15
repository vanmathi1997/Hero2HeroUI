import { Routes } from '@angular/router';
import { HomeDashboard } from './home-dashboard/home-dashboard';
import { QuestionThread } from './question-thread/question-thread';
import { Profile } from './profile/profile';
import { AdminConsole } from './admin-console/admin-console';

export const routes: Routes = [
  { path: '', component: HomeDashboard },
  { path: 'question', component: QuestionThread },
  { path: 'profile', component: Profile },
  { path: 'admin', component: AdminConsole }
];
