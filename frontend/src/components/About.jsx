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
              I am an AI researcher specializing in Natural Language Processing, with a focus on Large Language Models,
              Retrieval-Augmented Generation, and Text Summarization. My research has been published at top-tier conferences
              including ACL and NAACL, where I explore novel approaches to controllable text generation and summarization tasks.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: '1.5rem' }}
            >
              I have conducted research at Chungnam National University and completed a research internship at Japan's National
              Institute of Advanced Industrial Science and Technology (AIST). I will be pursuing a Master's degree starting in
              2026 and am actively seeking research internship opportunities in NLP and LLM applications.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
