import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {NativeScriptModule} from "../../../node_modules/nativescript-angular/nativescript.module";
import {HomeComponent} from "~/app/home/home.component";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
