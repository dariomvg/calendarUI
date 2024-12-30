export interface Month {
  name: string;
  year: number;
  days: number;
  firstDay: number
}
interface ContentDay {
  id: number ;
  task: string;
}

export interface Days {
  id: number ;
  content: ContentDay[];
}

export interface HookTypes {
  currentDate: Month;
  active: boolean;
  openList: boolean;
  handleDay: (id: number) => void;
  handleViewtask: (day: Days) => void;
  closeModal: () => void;
  closeList: () => void;
  content: Days;
  addTask: (task: string, id: number) => void;
  idDay: number ;
  deleteTask: (idTask: number, idMain: number) => void;
  localDays: Days[];
}

export interface PropsListTasks {
  tasks: Days;
  closeList: () => void;
  deleteTask: (idTask: number, idMain: number) => void;
}

export interface PropsModalDay {
  id: number;
  closeModal: () => void;
  addTask: (task: string, id: number) => void;
}

