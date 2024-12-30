export interface Month {
  name: string;
  year: number;
  days: number;
}
interface ContentDay {
  id: number ;
  task: string;
}

export interface Days {
  id: number ;
  content: ContentDay[];
}

export interface LocalDaysTypes {
  title: string; 
  days: Days[]
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
  localDays: LocalDaysTypes;
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

