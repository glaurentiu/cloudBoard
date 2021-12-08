import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialItemComponent } from './components/material-item/material-item.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RaportsComponent } from './components/raports/raports.component';
import { ComponentsComponent } from './components/components.component';
import { RequestsComponent } from './components/requests/requests.component';
import { BillingComponent } from './components/billing/billing.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRaportComponent } from './components/add-raport/add-raport.component';
import { RaportDetailComponent } from './components/raport-detail/raport-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'raports', component: RaportsComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'raports/:id', component: RaportDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    MaterialsComponent,
    MaterialItemComponent,
    AddMaterialComponent,
    HomeComponent,
    ProjectsComponent,
    RaportsComponent,
    ComponentsComponent,
    RequestsComponent,
    BillingComponent,
    ProjectDetailComponent,
    AddProjectComponent,
    AddRaportComponent,
    RaportDetailComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
