import { create } from "zustand";

interface TaskType {
  id:string;
  title: string;
  description: string;
  status: string;
  developer: string[];
  date: string;
}

interface TaskStore {
  taskData: TaskType[];
  addTask: (data: TaskType) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  taskData: [],
  addTask: (data) =>
    set((state) => ({
      taskData: [...state.taskData, data]
    })),
}));

export default useTaskStore;
