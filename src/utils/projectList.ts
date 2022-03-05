import { v4 as uuidv4 } from "uuid";

export interface IProject {
  id: string;
  title: string;
  image: string;
  tools: string[];
  description: string;
  links: {
    live: string;
    github: string;
  };
}

export const projectList: IProject[] = [
  {
    id: uuidv4(),
    title: "Budget App",
    image: "budget_app.png",
    tools: ["TypeScript", "React", "Redux", "NodeJS", "Express", "MongoDB"],
    description:
      "This app allows users to track expenses and earnings, and view spending trends in week, year, and category charts.",
    links: {
      live: "https://mdesanker.github.io/budget-frontend/",
      github: "https://github.com/mdesanker/budget-frontend",
    },
  },
  {
    id: uuidv4(),
    title: "Errand Tracker App",
    image: "errand_app.png",
    tools: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
    description:
      "This errand tracking app allows users to create errands with titles, due dates, and priorities. Errand completion status is toggled by clicking the errand. Errands can be added to projects, which can be shared with and updated by friends.",
    links: {
      live: "https://mdesanker.github.io/errand-tracker-frontend/",
      github: "https://github.com/mdesanker/errand-tracker-frontend",
    },
  },
];
