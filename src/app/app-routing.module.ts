import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotersdataComponent } from './votersdata/votersdata.component';

const routes: Routes = [
{path:'allVoters', component:VotersdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
