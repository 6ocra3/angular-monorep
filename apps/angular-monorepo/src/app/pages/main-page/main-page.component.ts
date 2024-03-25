import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { generateUsers } from './table.mock';
import { UiTableDisplayedColumnsI } from '@angular-monorepo/shared-ui';
type pathT = {
  path: string, value: string
}

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('ageTemplate') ageTemplate!: TemplateRef<any>;

  displayedColumns: UiTableDisplayedColumnsI[] = [
    {column:'id',  }, 
    {column:'name', }, 
    {column:'age', }, 
    {column:'email', }, 
    {column:'position', }, 
    {column:'isActive', }];

    constructor( private cdr: ChangeDetectorRef){}

    ngAfterViewInit(): void {
      const ageColumn = this.displayedColumns.find(col => col.column === 'age');
      if (ageColumn) {
        ageColumn.columnElTemplate = this.ageTemplate;
      }
      this.cdr.detectChanges();
    
      console.log(this.displayedColumns)
      this.cdr.detectChanges()
    }
    ngOnInit(): void {
      
    }


  dataSource = generateUsers();
  paths: pathT[] = [
    {
      path: "", value: "Главная",
    },
    {
      path: "/catalog", value: "Каталог",
    },
    {
      path: "/profile", value: "Профиль",
    },
  ]
}
