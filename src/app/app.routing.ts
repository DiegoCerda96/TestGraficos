// import { LayoutMainComponent } from './layout-main/layout-main.component';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// {
//   path: '',
//   component: AdminLayoutComponent,
//   children: [
//       {
//     path: '',
//     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
// }]}

import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginlayoutComponent } from './layouts/loginlayout/loginlayout.component';
// import { AccesosComponent } from './pages/accesos/accesos.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { HistorialComponent } from './pages/historial/historial.component';
// import { MisusuariosComponent } from './pages/misusuarios/misusuarios.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ForgotComponent } from './forgot/forgot.component';
// import { AbrirComponent } from './pages/abrir/abrir.component';
import { RegistroAdminComponent } from './pages/registro-admin/registro-admin.component';
import { ChartsComponent } from './pages/charts/charts.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: LoginlayoutComponent,
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
        ]
    },
    {
        path: '',
        component: ForgotComponent,
        children: [
            { path: '', component: ForgotComponent, pathMatch: 'full' },
            { path: 'recuperar', component: ForgotComponent },
        ]
    },
    

    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         { path: '', component: AbrirComponent, pathMatch: 'full' },
    //         { path: 'abrir', component: AbrirComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
    //     ]
    // },

    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         { path: '', component: AccesosComponent, pathMatch: 'full' },
    //         { path: 'accesos', component: AccesosComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
    //     ]
    // },
    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         { path: '', component: MisusuariosComponent, pathMatch: 'full' },
    //         { path: 'misusuarios', component: MisusuariosComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
    //     ]
    // },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: RegistroAdminComponent, pathMatch: 'full' },
            { path: 'registroAdmin', component: RegistroAdminComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: AdministracionComponent, pathMatch: 'full' },
          { path: 'administracion', component: AdministracionComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: ChartsComponent, pathMatch: 'full' },
          { path: 'graficos', component: ChartsComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: AdministracionComponent, pathMatch: 'full' },
            { path: 'registro/:id', component: RegistroComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
        ]
    },
]
