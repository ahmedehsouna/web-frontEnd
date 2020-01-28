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
<<<<<<< HEAD
import { PostsComponent } from "./components/client/posts/posts.component";
=======
>>>>>>> 6d1174a87af400e4c453e90c6cbbec4f697ce8e7

const routes: Routes = [
  { path: "", component: EntranceComponent, canActivate: [AuthGuardGuest] },
  {
    path: "",
    component: ClientNavComponent,
    canActivate: [AuthGuardClient],
<<<<<<< HEAD
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent }
    ]
  },
  { path: "posts", component: PostsComponent },
  { path: "dashboard", component: MainComponent, canActivate: [AuthGuardAdmin] }
=======
    children: [{ path: "home", component: HomeComponent }]
  },
  {
    path: "dashboard",
    component: MainComponent,
    canActivate: [AuthGuardAdmin]
  },
  { path: "profile", component: ProfileComponent }
>>>>>>> 6d1174a87af400e4c453e90c6cbbec4f697ce8e7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//
