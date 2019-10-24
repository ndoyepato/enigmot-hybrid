import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {NativeScriptModule} from "../../../node_modules/nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {CreateUserComponent} from "~/app/create-user/create-user.component";
import {CreateUserRouting} from "~/app/create-user/create-user.routing";



@NgModule({
  declarations: [
      CreateUserComponent
  ],
  imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptCommonModule,
      CreateUserRouting
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CreateUserModule { }
