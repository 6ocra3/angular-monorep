import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { UiTableDisplayedColumnsI } from '../../interfaces/table';
@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class UiTableComponent<T> implements OnInit{
    @Input() displayedColumns: UiTableDisplayedColumnsI[]
    @Input() dataSource: T[]
    columnsNames: string[] = []

    ngOnInit(): void {
        this.displayedColumns.forEach(el => this.columnsNames.push(el.column))
    }
}
