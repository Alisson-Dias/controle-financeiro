import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutAlisson } from './containers/layout-full/layout.full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './containers/pages/entrar/entrar.component';
import { CategoriaComponent } from './containers/pages/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAlisson,
    CategoriaComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
