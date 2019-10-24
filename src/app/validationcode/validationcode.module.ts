import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';

import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {ValidationcodeComponent} from "./validationcode.component";
import {ValidationcodeRouting} from "./validationcode.routing";


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        ValidationcodeRouting
    ],
    declarations: [
        ValidationcodeComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ValidationcodeModule {
}
