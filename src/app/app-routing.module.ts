import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {ItemsComponent} from "./item/items.component";
import {LoginComponent} from "~/app/login/login.component";
import {HomeComponent} from "~/app/home/home.component";

import {NativeScriptFormsModule} from "nativescript-angular/forms"

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "items", component: ItemsComponent}
];

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
