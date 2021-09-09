import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculoComponent } from './components/calculo/calculo.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'calculo', component: CalculoComponent},
  {path:'**', component: CalculoComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
