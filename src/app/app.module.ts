import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { CreatevoteComponent } from './createvote/createvote.component';
import { ViewvoteComponent } from './viewvote/viewvote.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'create-vote', component: CreatevoteComponent },
  { path: 'view-vote', component: ViewvoteComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    CreatevoteComponent,
    ViewvoteComponent,
    PageNotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
