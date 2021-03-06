import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { MainComponent } from './pages/main/main.component';
import { ClockComponent } from './components/clock/clock.component';
import { ScrollToElementDirective } from './directives/scroll-to-element.directive';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AnimationComponent,
    MainComponent,
    ClockComponent,
    ScrollToElementDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
