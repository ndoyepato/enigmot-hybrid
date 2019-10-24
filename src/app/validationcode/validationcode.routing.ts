import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ValidationcodeComponent } from "./validationcode.component";

const routes: Routes = [
    { path: "", component: ValidationcodeComponent },
    { path: "validationcode", component: ValidationcodeComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ValidationcodeRouting { }
