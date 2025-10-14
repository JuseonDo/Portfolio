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
            <img src="/Juseon.jpg" alt="Juseon Do" />
          </motion.div>

          <div className="about-text">
            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm an AI researcher focusing on Natural Language Processing, particularly in Large Language Models,
              Retrieval-Augmented Generation, and Text Summarization. Currently pursuing a B.S. in Artificial Intelligence
              and Mechanical Engineering at Chungnam National University, expected to graduate in February 2026.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: '1.5rem' }}
            >
              I will be pursuing a Master's degree starting in 2026 and am open to internship opportunities during my
              graduate studies. I'm particularly interested in research positions in NLP, LLMs, and AI applications.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
