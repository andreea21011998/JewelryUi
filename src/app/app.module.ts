import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ProductModule} from '../product/product.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CategoriesModule} from '../categories/categories.module';
import {MaterialsModule} from '../materials/materials.module';
import {UsersModule} from '../users/users.module';
import {GemstonesModule} from '../gemstones/gemstones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ProductModule,
    TableModule,
    ButtonModule,
    CategoriesModule,
    MaterialsModule,
    UsersModule,
    GemstonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
