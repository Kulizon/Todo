import TodoInterface from "../../interfaces/TodoInterface";
import ProjectInterface from "../../interfaces/ProjectInterface";

import TodoList from "./TodoList/TodoList";
import ProjectList from "./ProjectList/ProjectList";

const Lists = (props: {
  todos: TodoInterface[];
  projects: ProjectInterface[];
  onDelete: (id: string, type: "PROJECT" | "TODO", projectID?: string) => void;
  onToggleState?: (id: string, projectID?: string) => void;
  onStartEdit?: (oldTodo: TodoInterface) => void;
}) => {
  return (
    <div>
      <ProjectList
        projects={props.projects}
        onDelete={props.onDelete}
        onToggleState={props.onToggleState}
        onStartEdit={props.onStartEdit}
      ></ProjectList>
      <TodoList
        todos={props.todos}
        onDelete={props.onDelete}
        onToggleState={props.onToggleState}
        onStartEdit={props.onStartEdit}
      ></TodoList>
    </div>
  );
};

export default Lists;
