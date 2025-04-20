import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="relative bg-white py-20 px-6 md:px-16 lg:px-24 text-gray-900"
      id="aboutUs"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1631653355789-3e32dcce22db?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            width={800}
            height={800}
            className="rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold text-sky-500 mb-6">
            Discover Lunexa
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
            Imagine a world where diagnosing cancer is faster, more accurate,
            and accessible globally. Lunexa makes this possible by harnessing
            the power of cutting-edge AI and computer vision. With deep learning
            technologies, Lunexa analyzes medical images like X-rays, MRIs, and
            CT scans to deliver real-time, reliable results.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
            Lunexa’s AI-driven system serves as a second set of eyes, empowering
            healthcare professionals to make confident, quick decisions. Its
            seamless integration with medical imaging technologies ensures
            doctors have the right insights, enhancing diagnostic precision and
            ultimately saving lives.
          </p>
          <div className="mt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-sky-500 rounded-full mr-3"></span>
                Revolutionary AI for life-saving diagnosis
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-sky-500 rounded-full mr-3"></span>
                Improving healthcare decision-making globally
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-sky-500 rounded-full mr-3"></span>
                Trusted by leading professionals in the medical field
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
