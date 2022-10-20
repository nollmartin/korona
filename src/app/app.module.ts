import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KoronaPipePipe } from './pipes/korona-pipe.pipe';
import { AppCoronaDirective } from './directives/app-corona.directive';

@NgModule({
  declarations: [
    AppComponent,
    KoronaPipePipe,
    AppCoronaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
