"use client";

const phases = [
  {
    phase: "Phase 1 - Foundation & Launch",
    description:
      "Established the core infrastructure and initial development framework.",
    steps: [
      {
        title: "Launching",
        description:
          "Implemented key functionalities to support future expansion.",
        time: "6 Months ago",
        current: true,
      },
    ],
  },
  {
    phase: "Phase 2 - AI Diagnostic Platform Development",
    description:
      "Launched the beta version of Lunexa AI diagnostics. Focused on refining algorithms and enhancing accuracy.",
    steps: [
      {
        title: "AI Diagnostic",
        description: "Our team has launched the beta version of Lunexa.",
        time: "1 Month ago",
        current: false,
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
        current: false,
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
        current: false,
      },
      {
        title: "Sustainable Healthcare Access",
        description:
          "Developing frameworks to ensure equitable healthcare solutions.",
        time: "Planned",
        current: false,
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      className="py-16 px-6 md:px-16 lg:px-24 bg-white text-gray-900"
      id="roadmap"
    >
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-8 text-sky-500">
          Development Roadmap
        </h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-600">
          Our team is committed to integrating all Lunexa features to ensure
          that advanced AI diagnostics are accessible to everyone worldwide.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-sky-100 via-sky-300 to-sky-500 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-sky-600 mb-4">
              {phase.phase}
            </h3>
            <p className="text-gray-700 mb-6">{phase.description}</p>

            <div className="space-y-6">
              {phase.steps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className={`p-6 rounded-xl shadow-lg transition-transform duration-300 ease-in-out ${
                    step.current
                      ? "bg-sky-500 text-white transform scale-105"
                      : "bg-gray-100 text-white hover:scale-105"
                  }`}
                >
                  <h4 className="text-2xl font-semibold text-sky-700">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                  <span className="block mt-4 text-sm font-medium text-sky-500">
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
