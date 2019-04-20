import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BattleViewComponent } from './components/battle-view/battle-view.component';
import { ParticipantViewComponent } from './components/participant-view/participant-view.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { TagsViewComponent } from './components/tags-view/tags-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'battles', component: DashboardComponent },
  { path: 'battle', component: BattleViewComponent },
  { path: 'participant', component: ParticipantViewComponent },
  { path: 'users', component: UsersViewComponent },
  { path: 'tags', component: TagsViewComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
