import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppViewComponent } from './app-view/app-view.component';
import { AppEditComponent } from './app-edit/app-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    AppEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    DropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
