import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {MypageComponent} from "~/app/mypage/mypage.component";

import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {ValidationcodeComponent} from "~/app/validationcode/validationcode.component";
import {CreateUserComponent} from "~/app/create-user/create-user.component";

const routes: Routes = [
    {path: "", redirectTo: "/mypage", pathMatch: "full"},
    {path: "mypage", component: MypageComponent},
    {path: "vc/:user", component: CreateUserComponent},
    {path: "items", component: ItemsComponent},
    {path: "item/:id", component: ItemDetailComponent}
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