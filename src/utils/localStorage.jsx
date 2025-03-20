localStorage.clear();

const employee = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bug in login system",
        taskDescription:
          "Resolve the issue where users can't log in with their correct credentials.",
        taskDate: "2024-10-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update user interface",
        taskDescription:
          "Improve the dashboard UI by changing colors and layouts.",
        taskDate: "2024-10-10",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement password reset",
        taskDescription:
          "Add a feature to allow users to reset their passwords via email.",
        taskDate: "2024-10-25",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskSummary: { active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API documentation",
        taskDescription: "Document the new endpoints for the user service API.",
        taskDate: "2024-10-22",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize database queries",
        taskDescription: "Improve query performance in the database layer.",
        taskDate: "2024-10-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare test environment",
        taskDescription:
          "Set up a new test environment for integration testing.",
        taskDate: "2024-10-18",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 0, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create user role management",
        taskDescription:
          "Develop a system for managing user roles and permissions.",
        taskDate: "2024-10-26",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Review frontend code",
        taskDescription:
          "Check the front-end code for adherence to best practices.",
        taskDate: "2024-10-20",
        category: "Code Review",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design login page",
        taskDescription: "Create the design for the new login page.",
        taskDate: "2024-10-28",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build product feature",
        taskDescription:
          "Develop a new feature to display product recommendations.",
        taskDate: "2024-10-29",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix mobile responsiveness",
        taskDescription: "Ensure the site works correctly on mobile devices.",
        taskDate: "2024-10-23",
        category: "Development",
      },
    ],
  },
  {
    id: 5,
    firstName: "Sunita",
    email: "employee5@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Finalize project report",
        taskDescription:
          "Complete and submit the final report for the project.",
        taskDate: "2024-10-20",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Create slides for the end-of-sprint presentation.",
        taskDate: "2024-10-27",
        category: "Presentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct team meeting",
        taskDescription:
          "Lead the weekly team meeting to discuss project progress.",
        taskDate: "2024-10-25",
        category: "Management",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));

  return { employee, admin };
};
