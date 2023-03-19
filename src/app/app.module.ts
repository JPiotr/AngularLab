import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SpendingBoxComponent } from './spending-box/spending-box.component';
import { ChartSpendingBoxComponent } from './chart-spending-box/chart-spending-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SpendingBoxComponent,
    ChartSpendingBoxComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
