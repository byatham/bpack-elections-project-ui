import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {HttpClientModule} from '@angular/common/http';
import { VotersdataComponent } from './votersdata/votersdata.component'
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    VotersdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
