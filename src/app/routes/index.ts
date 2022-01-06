import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { MaterialsComponent } from "../components/materials/materials.component";
import { ProjectDetailComponent } from "../components/projects/project-detail/project-detail.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { RequestItemComponent } from "../components/requests/request-item/request-item.component";
import { RequestsComponent } from "../components/requests/requests.component";
import { AuthGuard } from "../components/shared/security/auth.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "materials", component: MaterialsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "requests", component: RequestsComponent },
  { path: "project/:id", component: ProjectDetailComponent },
  { path: "requests/:id", component: RequestItemComponent },
];
