"use client";

const steps = [
  {
    title: "Launching",
    description: "You've created new branch fix-notifications from master",
    time: "6 Month ago",
  },
  {
    title: "AI Diagnostic",
    description: "Our team have been launch beta version of pavise",
    time: "1 Month ago",
  },
  {
    title: "Onboarding Radiologist for testing",
    description: "We are onboarding radiologists to test the system.",
    time: "Upcoming",
    current: true,
  },
  {
    title: "Full Ecosystem Integrated",
    description: "Our team is working hard to integrate the entire system.",
    time: "On Progress",
  },
  {
    title: "Global Impact",
    description: "Collaborate with international healthcare organizations.",
    time: "On Progress",
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-teal-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Development Roadmap
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg text-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl 
              ${
                step.current
                  ? "bg-yellow-500 text-black scale-110"
                  : "bg-teal-800 text-white"
              }`}
          >
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-300">{step.description}</p>
            <span className="block mt-4 text-sm font-medium text-gray-400">
              {step.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
