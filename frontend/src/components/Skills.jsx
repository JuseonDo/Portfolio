import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aiSkills = [
    'NLP', 'Large Language Models', 'RAG', 'Summarization',
    'Self-Consistency', 'Recommendation', 'Search',
    'Knowledge Graph Completion', 'Membership Inference Attack',
    'Watermarking', 'Contrastive Learning', 'Deep Learning'
  ];

  const technicalSkills = [
    'Python', 'PyTorch', 'Huggingface', 'Transformers', 'FAISS'
  ];

  const academicService = [
    'Reviewer: AAAI 2026'
  ];

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Service
        </motion.h2>

        {/* AI Skills */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="skills-title">AI & Research Skills</h3>
          <div className="skills-grid">
            {aiSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-tag primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Service */}
        <motion.div
          className="academic-service"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="skills-title">Academic Service</h3>
          <div className="service-list">
            {academicService.map((service, index) => (
              <motion.div
                key={service}
                className="service-item"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
