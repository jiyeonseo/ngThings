import {bootstrap, Component} from 'angular2/angular2'
import {TodoFormComponent} from './todo-form.component'
import {TodoListComponent} from './todo-list.component'

@Component({
    selector: 'my-app',
    template: '<div><h1>todo</h1><todo-form></todo-form><todo-list></todo-list></div>',
    directives: [TodoFormComponent, TodoListComponent]
})
class AppComponent {

}
bootstrap(AppComponent);


