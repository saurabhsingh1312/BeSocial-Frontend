import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { ComposeTweetComponent } from './compose-tweet/compose-tweet.component';
import { InfoOgRedditComponent } from './info-og-reddit/info-og-reddit.component';

const routes: Routes = [
  
  {path: 'ogreddit/home', component: AllTweetsComponent},
  {path: 'ogreddit/compose', component: ComposeTweetComponent},
  {path: 'ogreddit/info', component: InfoOgRedditComponent},
  {path:'',redirectTo:'ogreddit/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

