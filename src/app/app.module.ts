import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { PartFormComponent } from './components/part-form/part-form.component';
import { HomeComponent } from './home/home.component';
import { EditPartComponent } from './components/edit-part/edit-part.component';
import { ViewPartComponent } from './components/view-part/view-part.component';
import { PcListComponent } from './components/pc-list/pc-list.component';
import { PcCreateComponent } from './components/pc-create/pc-create.component';
import { PcUpdateComponent } from './components/pc-update/pc-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartListComponent,
    PartFormComponent,
    HomeComponent,
    EditPartComponent,
    PcListComponent,
    PcCreateComponent,
    PcUpdateComponent,
    ViewPartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
