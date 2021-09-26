import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FormsModule } from '@angular/forms';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessalertComponent,
    ExerciseComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
