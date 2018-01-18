import { Routes } from '@angular/router';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { ImageDetailComponent } from './app/components/image-detail/image-detail.component';
import { LoginComponent } from './app/components/login/login.component';
import { UploadComponent } from './app/components/upload/upload.component';

import { AuthenticationGuardService } from './app/services/authenticationGuard.service';


export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuardService]},
    {path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuardService]},
    {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuardService]},
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
];

