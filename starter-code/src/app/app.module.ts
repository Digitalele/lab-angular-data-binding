import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddNewFoodsComponent } from './add-new-foods/add-new-foods.component';
import { SearchfoodPipe } from './pipe/searchfood.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    AddNewFoodsComponent,
    SearchfoodPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
