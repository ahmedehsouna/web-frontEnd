import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EntranceComponent } from "./components/guest/entrance/entrance.component";
import { HomeComponent } from "./components/client/home/home.component";
import { MainComponent } from "./components/dashboard/main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { ClientNavComponent } from "./components/client/client-nav/client-nav.component";
import { ProfileComponent } from "./components/client/profile/profile.component";
<<<<<<< HEAD
import { FormsModule } from "@angular/forms";
import { ValidateService } from "./services/validate/validate.service";
=======
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './components/client/sidebar/sidebar.component';
>>>>>>> 4968ea8413192efdb1ad764f16ae9c2451499121

@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    HomeComponent,
    MainComponent,
    ClientNavComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    ProfileComponent,
    SidebarComponent,
    
    
>>>>>>> 4968ea8413192efdb1ad764f16ae9c2451499121
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
