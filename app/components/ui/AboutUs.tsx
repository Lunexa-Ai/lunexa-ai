import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24 text-gray-900" id="aboutUs">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1631653355789-3e32dcce22db?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            width={800}
            height={800}
            className="rounded-3xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-6 text-justify">
            Pavise is the first AI-powered health diagnostic system designed to
            deliver accurate and reliable disease detection. Supporting all
            major medical imaging techniques, including X-ray, CT scan, MRI,
            Ultrasound, PET, and more, Pavise enables healthcare professionals
            to instantly obtain a second opinion. By assisting doctors, Pavise
            enhances diagnostic accuracy, accelerates decision-making, and plays
            a crucial role in saving lives.
          </p>
          {/* <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-gray-900 rounded-full mr-3"></span>
              Cutting-edge AI technology
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-gray-900 rounded-full mr-3"></span>
              Trusted by medical professionals
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-gray-900 rounded-full mr-3"></span>
              Improving patient outcomes globally
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
