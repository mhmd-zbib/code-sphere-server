const posts = [
  {
    id: 1,
    user: {
      username: "dev_guru",
      avatar:
        "https://pbs.twimg.com/profile_images/874661809139073025/X8yzIhNy_400x400.jpg",
    },
    title: "Looking for Frontend Developer for React Project",
    description:
      "We're a small team working on an exciting new project using React. We need an experienced frontend developer to join us and help bring our vision to life.",
    collaborationType: "Part-time",
    requiredSkills: ["React", "JavaScript", "HTML", "CSS"],
    projectLink: "https://github.com/dev_guru/project",

    comments: 5,
  },
  {
    id: 2,
    user: {
      username: "code_ninja",
      avatar: "https://example.com/avatar/code_ninja.png",
    },
    title: "Join Our Open Source Python Library Project",
    description:
      "We're building a Python library for data analysis and visualization. Looking for Python enthusiasts to contribute and grow with us.",
    collaborationType: "Volunteer",
    requiredSkills: ["Python", "Data Science", "Data Visualization"],
    projectLink: "https://github.com/code_ninja/python-library",

    comments: 12,
  },
  {
    id: 3,
    user: {
      username: "design_maestro",
      avatar: "https://example.com/avatar/design_maestro.png",
    },
    title: "UI/UX Designer Needed for Mobile App Project",
    description:
      "Seeking a talented UI/UX designer to collaborate on a mobile app project. Must have experience designing intuitive and visually appealing interfaces.",
    collaborationType: "Full-time",
    requiredSkills: ["UI/UX Design", "Adobe XD", "Figma"],
    projectLink: "https://github.com/design_maestro/mobile-app",
    comments: 8,
  },
];

const postResolver = {
  Query: {
    getPosts: () => posts,
  },
};

export default postResolver;
