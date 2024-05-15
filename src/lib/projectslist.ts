import image1  from '@/../public/projectsimage/Screenshot 2024-05-02 231607.png'




export const projectsList = [
    {
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl:image1 ,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: image1,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl:image1 ,
    },
  ] as const;