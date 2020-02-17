import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@myworkspace/data';

@Component({
  selector: 'myworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}

}
