import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
