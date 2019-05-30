import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HistoryComponent } from './history/history.component';
import { TextUploadComponent } from './text-upload/text-upload.component';

const routes: Routes = [
  { path: 'upload', component: ImageUploadComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'text-upload', component: TextUploadComponent},
  { path: '', redirectTo: '/upload',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
