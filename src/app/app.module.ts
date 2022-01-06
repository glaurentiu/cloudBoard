import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {AuthGuard} from '../app/components/shared/security/auth.guard'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialItemComponent } from './components/materials/material-item/material-item.component';
import { AddMaterialComponent } from './components/materials/add-material/add-material.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RaportsComponent } from './components/raports/raports.component';
import { ComponentsComponent } from './components/components.component';
import { RequestsComponent } from './components/requests/requests.component';
import { BillingComponent } from './components/billing/billing.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRaportComponent } from './components/raports/add-raport/add-raport.component';
import { RaportDetailComponent } from './components/raports/raport-detail/raport-detail.component';
import { AddRequestComponent } from './components/requests/add-request/add-request.component';
import { RequestItemComponent } from './components/requests/request-item/request-item.component';
import { RaportBillingComponent } from './components/raports/raport-billing/raport-billing.component';
import { AddRequestRaportComponent } from './components/requests/add-request-raport/add-request-raport.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { MaterialSearchPipe } from './components/materials/material-search.pipe';
import { ProjectSearchPipe } from './components/projects/project-search.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'materials', component: MaterialsComponent,},
  { path: 'projects', component: ProjectsComponent, },
  { path: 'requests', component: RequestsComponent, },
  { path: 'billing', component: BillingComponent,  },
  { path: 'project/:id', component: ProjectDetailComponent, },
  { path: 'requests/:id', component: RequestItemComponent,},

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
    AddRequestComponent,
    RequestItemComponent,
    RaportBillingComponent,
    AddRequestRaportComponent,
    LandingComponent,
    LoginComponent,
    MaterialSearchPipe,
    ProjectSearchPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, ),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
