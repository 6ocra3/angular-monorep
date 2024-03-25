import { TemplateRef } from "@angular/core";
export interface UiTableDisplayedColumnsI {
    column: string;
    columnElTemplate?: TemplateRef<any>;
    headerElTemplate?: TemplateRef<any>;
}
