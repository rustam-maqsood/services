import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UsdtorPipe } from './pipes/usdtor.pipe';
import { CourseGuardService } from './course-guard.service';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsdtorPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
