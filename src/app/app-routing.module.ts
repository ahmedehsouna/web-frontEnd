import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/client/home/home.component";
import {
  AuthGuardClient,
  AuthGuardGuest,
  AuthGuardAdmin
} from "./guards/auth.guard";
import { EntranceComponent } from "./components/guest/entrance/entrance.component";
import { ClientNavComponent } from "./components/client/client-nav/client-nav.component";
import { ProfileComponent } from "./components/client/profile/profile.component";
import { MainComponent } from "./components/dashboard/main/main.component";
import { PostsComponent } from "./components/client/posts/posts.component";
import { SettingsComponent } from "./settings/settings/settings.component";

const routes: Routes = [
  { path: "", component: EntranceComponent, canActivate: [AuthGuardGuest] },
  {
    path: "",
    component: ClientNavComponent,
    canActivate: [AuthGuardClient],
    children: [
      { path: "home", component: HomeComponent },
      { path: "posts", component: PostsComponent },
      { path: "profile", component: ProfileComponent },
      { path: "users/:username", component: ProfileComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
  {
    path: "dashboard",
    component: MainComponent,
    canActivate: [AuthGuardAdmin]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//
