import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {MypageComponent} from "~/app/mypage/mypage.component";
import {MypageRouting} from "~/app/mypage/mypage.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        MypageRouting
    ],
    declarations: [
        MypageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MypageModule { }
