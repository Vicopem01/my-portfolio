const Stacks = () => {
  const WORK_EXPERIENCE = [
    {
      title: "STACKS",
      history: [
        {
          header: "Languages",
          language: "JavaScript, TypeScript, Python, GoLang",
        },
        {
          header: "Frontend Frameworks",
          language: "React JS, Next JS, Angular JS",
        },
        {
          header: "Backend Frameworks",
          language: "Express JS, Nest JS, Flask, Django, Apollo GraphQL",
        },
        {
          header: "Databases",
          language: "MySQL, MongoDB, Redis, Firebase, DynamoDB",
        },
        {
          header: "APIS",
          language: "REST Api, GraphQL, Websocket",
        },
      ],
    },
    {
      title: "MORE STACKS",
      history: [
        {
          header: "Devops",
          language: "AWS Cloud, C-PANEL, Google Cloud Platform",
        },
        {
          header: "Machine Learning",
          language: "TensorFlow, NumPy, NLTK",
        },
        {
          header: "Version Control",
          language: "Git, GitHub, GitLab",
        },
        {
          header: "Others",
          language: "Solidity, Ether JS",
        },
      ],
    },
  ];

  return (
    <div className="p-6 md:p-12" data-aos="fade-up">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Tech Stack</h3>
      <div className="flex justify-center lg:items-start flex-col lg:flex-row items-start gap-s3">
        {WORK_EXPERIENCE.map((work, index: number) => (
          <div
            key={index}
            className={`shadow rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] p-6 w-full mx-5 lg:w-1/2 shadow`}
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
