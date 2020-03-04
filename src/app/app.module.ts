import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloydComponent } from './components/floyd/floyd.component';
import { TriangleService } from './services/triangle.service';
import { PreviewDirective } from './directives/preview.directive';
import { ParagraphPipe } from './pipes/paragraph.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FloydComponent,
    PreviewDirective,
    ParagraphPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TriangleService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
