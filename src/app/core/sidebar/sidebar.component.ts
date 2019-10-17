import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../models/menu-item";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  model: MenuItem[] = [
    {
      id: "dashboardId",
      text: "Dashboard",
      route: "/dashboard/form-fields",
      icon: "sss",
      active: false,
      roles: ["SUB_ADMIN"],
      type: "collapse",
      groupBy: "root",
      submenu: []
    }
  ];
  constructor() {}

  ngOnInit() {}
}
