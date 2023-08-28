import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [
     UserService,
     LoggingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
