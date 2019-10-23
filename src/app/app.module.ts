import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { LoginComponent } from './login/login.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { AccesosComponent } from './pages/accesos/accesos.component';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxResponsiveStackTableModule } from 'ngx-responsive-stack-table';
import { MomentModule } from 'ngx-moment';
import { LoginlayoutComponent } from './layouts/loginlayout/loginlayout.component';
// import { HistorialComponent } from './pages/historial/historial.component';
// import { MisusuariosComponent } from './pages/misusuarios/misusuarios.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { TableFilterPipe } from './pages/administracion/table-filter.pipe';
import { ForgotComponent } from './forgot/forgot.component';
import { RegistroAdminComponent } from './pages/registro-admin/registro-admin.component';
import { ChartsComponent } from './pages/charts/charts.component';
// import { AbrirComponent } from './pages/abrir/abrir.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    // AccesosComponent,
    LoginComponent,
    LoginlayoutComponent,
    // HistorialComponent,
    // MisusuariosComponent,
    RegistroComponent,
    AdministracionComponent,
    TableFilterPipe,
    ForgotComponent,
    RegistroAdminComponent,
    ChartsComponent,
    // AbrirComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxResponsiveStackTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
