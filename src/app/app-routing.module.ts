import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { AuthguardGuard } from './_helpers/authguard.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "dashboard", component: DashboardComponent , canActivate : [AuthguardGuard] },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
