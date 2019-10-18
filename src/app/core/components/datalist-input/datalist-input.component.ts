import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  NgControl,
  AbstractControl,
  ControlContainer,
  FormGroupDirective
} from "@angular/forms";

@Component({
  selector: "datalist-input",
  templateUrl: "./datalist-input.component.html",
  styleUrls: ["./datalist-input.component.scss"],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DatalistInputComponent implements OnInit {
  @Input() class = "form-control data-list-input";
  @Input() id = "datalist-input-id";
  @Input() ngModel: NgControl = null;
  @Input() control: AbstractControl;

  @Input() options: any[] = ["Option"];
  @Input() dataListId: string = "dataListInput";
  @Input() style: object = { "font-size": "1rem", color: "#495057" };
  @Input() name = "datalistInput";
  @Output() inputModelChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
