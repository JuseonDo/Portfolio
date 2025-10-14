import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Publications = ({ publications }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 논문을 published와 under_review로 분류
  const publishedPapers = publications.filter(pub => pub.status === 'published');
  const underReviewPapers = publications.filter(pub => pub.status === 'under_review');

  return (
    <section className="publications" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Research Publications
        </motion.h2>

        {/* Published Papers */}
        {publishedPapers.length > 0 && (
          <>
            <motion.h3
              className="publication-section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conference Proceedings
            </motion.h3>
            <div className="publications-grid">
              {publishedPapers.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  className="publication-card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  {pub.image && (
                    <motion.div
                      className="publication-image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    >
                      <img src={pub.image} alt={pub.title} />
                    </motion.div>
                  )}
                  <div className="publication-content">
                    <div className="publication-year">{pub.year}</div>
                    <h3>{pub.title}</h3>
                    <p className="publication-authors">{pub.authors}</p>
                    <p className="publication-venue">{pub.venue}</p>

                    <div className="publication-tags">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication-link"
                      >
                        View Paper →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Under Review Papers */}
        {underReviewPapers.length > 0 && (
          <>
            <motion.h3
              className="publication-section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Under Review
            </motion.h3>
            <div className="publications-grid">
              {underReviewPapers.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  className="publication-card under-review"
                  initial={{ opacity: 0, y: 80 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="publication-content">
                    <h3>{pub.title}</h3>
                    <p className="publication-authors">{pub.authors}</p>

                    <div className="publication-tags">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Publications;
