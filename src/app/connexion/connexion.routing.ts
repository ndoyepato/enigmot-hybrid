import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ConnexionComponent } from "./connexion.component";
import {ValidationcodeComponent} from "~/app/validationcode/validationcode.component";

const routes: Routes = [
    { path: "", component: ConnexionComponent },
    { path: "validationcode", component: ValidationcodeComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ConnexionRouting { }
