import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { Todo } from './todo';

@Component({
    selector: 'todo-form',
    templateUrl: 'app/todo-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class TodoFormComponent {

    model = new Todo("todo", 'tag', "notes", 'dueDate');
}