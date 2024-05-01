interface IProject {
    id: number;
    title: string;
    description: string;
    image: string;
    tasks: Task[];
    members: Member[];
  }