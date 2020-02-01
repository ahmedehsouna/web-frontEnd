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
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "./components/client/sidebar/sidebar.component";
import { ValidateService } from "./services/validate/validate.service";
import { PostsComponent } from "./components/client/posts/posts.component";
import { PostComponent } from "./components/client/post/post.component";
import { SettingsComponent } from "./settings/settings/settings.component";

import { EventsComponent } from "./components/client/events/events.component";
import { EventComponent } from "./components/client/event/event.component";
@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    HomeComponent,
    MainComponent,
    ClientNavComponent,
    ProfileComponent,
    PostsComponent,
    PostComponent,
    SidebarComponent,
    SettingsComponent,

    EventsComponent,
    EventComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
