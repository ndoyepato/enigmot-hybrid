import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {ConnexionComponent} from "~/app/connexion/connexion.component";
import {ConnexionRouting} from "~/app/connexion/connexion.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        ConnexionRouting
    ],
    declarations: [
        ConnexionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ConnexionModule { }
