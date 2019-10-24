import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreateUserComponent } from "./create-user.component";

const routes: Routes = [
    { path: "", component: CreateUserComponent },
    { path: "validationcode", component: CreateUserComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreateUserRouting { }
