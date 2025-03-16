"use client";

const phases = [
  {
    phase: "Phase 1 - Foundation & Launch",
    description:
      "Established the core infrastructure and initial development framework.",
    steps: [
      {
        title: "Launching",
        description: "Implemented key functionalities to support future expansion.",
        time: "6 Months ago",
      },
    ],
  },
  {
    phase: "Phase 2 - AI Diagnostic Platform Development",
    description:
      "Launched the beta version of Pavise AI diagnostics. Focused on refining algorithms and enhancing accuracy.",
    steps: [
      {
        title: "AI Diagnostic",
        description: "Our team has launched the beta version of Pavise",
        time: "1 Month ago",
      },
      {
        title: "Onboarding Radiologist for testing",
        description: "We are onboarding radiologists to test the system.",
        time: "Upcoming",
        current: true,
      },
    ],
  },
  {
    phase: "Phase 3 - Full Ecosystem Integration",
    description:
      "Expanding system compatibility and integrating with healthcare networks. Strengthening security and interoperability for seamless adoption.",
    steps: [
      {
        title: "Full Ecosystem Integrated",
        description: "Our team is working hard to integrate the entire system.",
        time: "On Progress",
      },
    ],
  },
  {
    phase: "Phase 4 - Global Impact & Sustainability",
    description:
      "Collaborating with international healthcare organizations. Ensuring long-term scalability and accessibility to improve global healthcare outcomes.",
    steps: [
      {
        title: "Global Collaboration",
        description: "Partnering with leading health institutions worldwide.",
        time: "Planned",
      },
      {
        title: "Sustainable Healthcare Access",
        description:
          "Developing frameworks to ensure equitable healthcare solutions.",
        time: "Planned",
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-teal-900 text-white" id="roadmap">
      <div>
        <h2 className="text-4xl font-bold text-center mb-12">
          Development Roadmap
        </h2>
        <p className="text-center max-w-2xl mx-auto">
          Our team is committed to integrating all Pavise features to ensure
          that advanced AI diagnostics are accessible to everyone worldwide.
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {phases.map((phase, index) => (
          <div key={index} className="bg-teal-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-400">
              {phase.phase}
            </h3>
            <p className="mt-2 text-white-300">{phase.description}</p>
            <div className="mt-6 space-y-6">
              {phase.steps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 
                    ${
                      step.current
                        ? "bg-yellow-500 text-black"
                        : "bg-teal-700 text-white"
                    }`}
                >
                  <h4 className="text-2xl font-semibold">{step.title}</h4>
                  <p className="mt-2 text-gray-100">{step.description}</p>
                  <span className="block mt-4 text-sm font-medium text-white">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
