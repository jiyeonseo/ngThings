export class Todo {
    constructor(
        public todo: string,
        public tags: string,
        public note: string,
        public dueDate?: string
        ) {  }
}