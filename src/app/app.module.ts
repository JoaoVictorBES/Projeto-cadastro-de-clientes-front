import { BrowserModule } from "@angular/platform-browser";
import { PrincipalComponent } from "./principal/principal.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule ({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule {}
