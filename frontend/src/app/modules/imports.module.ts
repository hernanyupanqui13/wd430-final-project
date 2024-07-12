import { NgModule } from "@angular/core";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CardModule } from "primeng/card";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { PanelModule } from "primeng/panel";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";

@NgModule({
  imports: [
    InputTextareaModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    PanelModule,
    MenuModule,
    SidebarModule,
  ],
  declarations: [],
  exports: [
    InputTextareaModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    PanelModule,
    MenuModule,
    SidebarModule,
  ],
  providers: [],
})
export class ImportsModule {}
