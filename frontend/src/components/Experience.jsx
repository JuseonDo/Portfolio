import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = ({ experiences, education }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        {/* Experience Section */}
        <div className="experience-section">
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h3>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h4>{exp.title}</h4>
                  <p className="timeline-org">{exp.organization}</p>
                  <p className="timeline-location">{exp.location}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        {education && (
          <div className="education-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Education
            </motion.h3>

            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="education-period">{education.period}</div>
              <h4>{education.degree}</h4>
              <p className="education-school">{education.school}</p>
              {education.note && (
                <p className="education-note">{education.note}</p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
