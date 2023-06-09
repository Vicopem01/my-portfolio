const Stacks = () => {
  const WORK_EXPERIENCE = [
    {
      title: "FRONTEND STACKS",
      history: [
        {
          header: "Languages",
          language: "JavaScript, TypeScript",
        },
        {
          header: "Frameworks",
          language: "ReactJS, Next JS",
        },
        {
          header: "Styling",
          language: "Tailwind, SCSS, CSS Modules",
        },
      ],
    },
    {
      title: "BACKEND STACKS",
      history: [
        {
          header: "Languages",
          language: "JavaScript, TypeScript",
        },
        {
          header: "Framework",
          language: "Express, Nest Js",
        },
        {
          header: "Database",
          language: "Mongo DB, Firebase",
        },
        {
          header: "APIS",
          language: "REST, GraphQL",
        },
      ],
    },
    {
      title: "OTHERS",
      history: [
        {
          header: "Devops",
          language: "AWS, C-PANEL",
        },
        {
          header: "Version Control",
          language: "GitHub, GitLab",
        },
        {
          header: "Others",
          language: "Solidity, Python, Ether JS",
        },
      ],
    },
  ];

  return (
    <div className="p-6 md:p-12" data-aos="fade-up">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Tech Stack</h3>
      <div className="flex justify-center flex-col lg:flex-row items-start gap-s3">
        {WORK_EXPERIENCE.map((work, index: number) => (
          <div
            key={index}
            className={`shadow rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] p-6 w-full mx-5 lg:w-1/3 shadow`}
          >
            <p className="text-lg underline font-semibold mb-4">{work.title}</p>
            {work.history.map((history, index) => (
              <div key={`history-${index}`}>
                <p className="text-lg my-2">{history.header}</p>
                <p className="pl-5 mt-2 mb-10">{history.language}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
