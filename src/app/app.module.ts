import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { DateTime } from './utils/datetime';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DateTime],
  bootstrap: [AppComponent]
})
export class AppModule { }
