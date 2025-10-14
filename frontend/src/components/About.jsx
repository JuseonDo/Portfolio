import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={`${import.meta.env.BASE_URL}Juseon.jpg`} alt="Juseon Do" />
          </motion.div>

          <div className="about-text">
            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am an AI researcher specializing in Natural Language Processing, with research interests spanning Large Language Models, Retrieval-Augmented Generation, and Text Summarization, as well as model security and reliability, including membership inference attacks and watermarking.
My work has been published at leading NLP venues such as ACL and NAACL, where I explore approaches to controllable text generation and summarization.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: '1.5rem' }}
            >
              I have conducted research at Chungnam National University and completed a research internship at Japan's National Institute of Advanced Industrial Science and Technology (AIST).
I will begin my Master's studies in 2026 and am <b>currently seeking research internship opportunities</b> in NLP, LLM applications, and trustworthy AI.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
