import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {PostComponent } from "./post/post.component";
import {CreateComponent} from "./name/name.component";
import {AplicationComponent} from "./aplication/aplication.component";

const routes: Routes = [
    { path: "", redirectTo: "/post", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "post", component: PostComponent },
    { path: "create", component: CreateComponent },
    { path: "aplication", component: AplicationComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }