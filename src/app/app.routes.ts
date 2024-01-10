import { Routes } from '@angular/router';
import { authGuard } from "@guards/auth.guard";
import { redirectGuard } from "@guards/redirect.guard";

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [redirectGuard]
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
];
