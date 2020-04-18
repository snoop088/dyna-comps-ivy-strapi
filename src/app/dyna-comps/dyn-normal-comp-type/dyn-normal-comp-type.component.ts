import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'dyn-dyn-normal-comp-type',
  templateUrl: './dyn-normal-comp-type.component.html',
  styleUrls: ['./dyn-normal-comp-type.component.css']
})
export class DynNormalCompTypeComponent implements OnInit {
  @Input() template;
  @Input() dataContext;

  constructor() { }

  ngOnInit(): void {
  }

}
