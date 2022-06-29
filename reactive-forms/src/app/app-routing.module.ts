import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFruitsComponent } from './components/create-fruits/create-fruits.component';

const routes: Routes = [{ component: CreateFruitsComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
