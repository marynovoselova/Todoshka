export interface Task {
  id: string;
  title: string;
  completed: boolean;
  isFavorite: boolean;
}

export interface TasksState {
  items: Task[];
}

export interface TaskItemProps {
  task: Task;
}
