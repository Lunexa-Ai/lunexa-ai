import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      className="relative bg-white py-20 px-6 md:px-16 lg:px-24 text-gray-900"
      id="aboutUs"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/lunexa-mri.png"
            alt="About Us"
            width={800}
            height={800}
            className="rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-sky-500 mb-6">
            Discover Nara
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
            Imagine a world where diagnosing cancer is faster, more accurate,
            and accessible globally. Nara makes this possible by harnessing
            the power of cutting-edge AI and computer vision. With deep learning
            technologies, Nara analyzes medical images like X-rays, MRIs, and
            CT scans to deliver real-time, reliable results.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
            Nara’s AI-driven system serves as a second set of eyes, empowering
            healthcare professionals to make confident, quick decisions. Its
            seamless integration with medical imaging technologies ensures
            doctors have the right insights, enhancing diagnostic precision and
            ultimately saving lives.
          </p>
          <motion.ul
            className="space-y-3 text-gray-700 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
