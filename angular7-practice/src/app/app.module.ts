import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SomthingDirective } from './somthing.directive'
const appRoutes: Routes = [
  { path: '', component: UsersComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SomthingDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },// <-- debugging purposes only
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
