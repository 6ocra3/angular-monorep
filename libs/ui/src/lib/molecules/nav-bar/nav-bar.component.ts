import { Component, Input } from '@angular/core';

type pathT = {
  path: string,
  value: string,
}

@Component({
  selector: 'ui-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})

export class UiNavBarComponent{
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
