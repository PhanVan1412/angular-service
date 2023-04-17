import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ComponentShareService } from './service/component-share.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    ProductListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [ ComponentShareService ]
})
export class AppModule { }