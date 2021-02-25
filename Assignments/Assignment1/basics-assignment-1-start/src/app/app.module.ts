import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningsAlertComponent } from './WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningsAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
