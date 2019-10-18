import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../_models";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      id: "HomeId",
      text: "Home",
      route: "/dashboard",
      icon: "",
      active: false,
      roles: ["SUB_ADMIN"],
      type: "item",
      groupBy: "root",
      submenu: []
    },
    {
      id: "DropdownId",
      text: "Dropdown",
      route: "/home",
      icon: "",
      active: false,
      roles: ["SUB_ADMIN"],
      type: "collapse",
      groupBy: "root",
      submenu: [
        {
          id: "ActionId",
          text: "Actions",
          route: "/action",
          icon: "",
          active: false,
          roles: ["SUB_ADMIN"],
          type: "item",
          groupBy: "DropdownId",
          submenu: []
        },
        {
          id: "anotherActionId",
          text: "anotherAction",
          route: "/",
          icon: "",
          active: false,
          roles: ["SUB_ADMIN"],
          type: "collapse",
          groupBy: "DropdownId",
          submenu: [
            {
              id: "SomethingId",
              text: "Something else here",
              route: "/",
              icon: "",
              active: false,
              roles: ["SUB_ADMIN"],
              type: "item",
              groupBy: "anotherActionId",
              submenu: []
            }
          ]
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
