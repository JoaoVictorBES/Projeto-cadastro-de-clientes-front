import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PrincipalComponent } from "./principal/principal.component";


@NgModule ({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PrincipalComponent,
    AppComponent
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule {}
