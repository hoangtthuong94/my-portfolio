import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Homepage',
    }
  },
  {
    path: 'animation',
    component: AnimationComponent,
    data: {
      title: 'Animation',
    }
  },
  {
    path: 'demo',
    component: MainComponent,
    data: {
      title: 'MainComponent',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
