import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ResumeDialogComponent } from './resume-dialog/resume-dialog.component';
import { MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AngularFittextModule } from 'angular-fittext';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactDialogComponent,
    ResumeDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFittextModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  entryComponents: [
    ContactDialogComponent,
    ResumeDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
