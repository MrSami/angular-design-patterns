import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloydComponent } from './components/floyd/floyd.component';
import { TriangleService } from './services/triangle.service';

@NgModule({
  declarations: [
    AppComponent,
    FloydComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TriangleService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
