import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemanalComponent } from './semanal/semanal.component';
import { EditarDiaComponent } from './editar-dia/editar-dia.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ BrowserAnimationsModule}from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    SemanalComponent,
    EditarDiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
