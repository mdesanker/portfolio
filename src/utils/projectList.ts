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
    image: "budget_demo.gif",
    tools: ["TypeScript", "React", "Redux", "NodeJS", "Express", "MongoDB"],
    description:
      "Users can track expenses with amount, who money was sent to or received from, a description of what the transaction was for, a transaction category, and date of the transaction. Spending habits can be tracked in graphs by week, year, and category.",
    links: {
      live: "https://mdesanker.github.io/budget-frontend/",
      github: "https://github.com/mdesanker/budget-frontend",
    },
  },
  {
    id: uuidv4(),
    title: "Errand Tracker App",
    image: "errand_demo.gif",
    tools: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
    description:
      "Users can create errands with titles, due dates, and priority levels. Errands can be toggled complete by clicking/pressing. Projects can be created and shared with friends, allowing others to share errands with each other.",
    links: {
      live: "https://mdesanker.github.io/errand-tracker-frontend/",
      github: "https://github.com/mdesanker/errand-tracker-frontend",
    },
  },
];
