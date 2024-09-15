import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import ReactModal from 'react-modal';
import './index.css'; // Import custom styles

// Bind modal to the app root
if (typeof window !== 'undefined') {
  ReactModal.setAppElement('#root');
}

const ExperienceTimeline = () => {
  // State for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Array of experience data
  const experiences = [
    {
      id: 0,
      title: 'Software Developer',
      company: 'Health Sciences Information Technology - University of Pittsburgh',
      date: 'Jan 2024 - Present',
      description: 'Working on designing and developing web applications using React, Springboot, and Oracle DB.',
      icon: '👨‍💻',
      details: `Currently designing and developing web applications for the University of Pittsburgh's health institutes using React, Spring Boot, and Oracle DB. Focused on building robust, user-friendly interfaces and backend systems to streamline healthcare processes and improve data management.`,
    },
    {
      id: 1,
      title: 'Full Stack Engineer',
      company: 'Emitrr Inc',
      date: 'May 2021 - July 2023',
      description: 'This experience has been my ultimate playground for growth.',
      icon: '🚀',
      details: `I was initially given the opportunity to implement OAuth2 with the Authorization Code grant type for Google, Facebook, and Slack. The goal was to aggregate customer reviews from various platforms into a single dashboard for streamlined management. This was my first major individual project, and I successfully completed it, setting the stage for my growth within the team.

      After that, I transitioned to enhancing automation systems that integrated data from over 20 CRM platforms. These systems handled polling, webhook processing, and the delivery of text and email messages. Over time, I took ownership of these automations, which were critical for the business, including clients in emergency services.
      
      My most significant project involved designing and developing a Redis-based rate limiter from scratch. I applied all my engineering knowledge to minimize overhead and maximize efficiency, implementing the rate limiter using the Token Bucket algorithm. This project not only improved system performance but also solidified my role as a key contributor to the team's success.`,
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Metacube Software Pvt. Ltd.',
      date: 'August 2020 - May 2021',
      description: 'Mentored by Kirk Munro, a 12-time Microsoft MVP awardee, and collaborated on multiple PowerShell SDKs',
      icon: '♾️',
      details: `Worked on, optimized, and logged issues in various Microsoft Exchange, Microsoft Teams, and other PowerShell SDKs during their beta versions. Additionally, revamped the website using ReactJS and played a key role in designing and developing a JSON-driven UI tailored to meet each user's business requirements based on the provided data.`,
    },

    {
        id: 3,
        title: 'Asst. Software Engineer',
        company: 'Metacube Software Pvt. Ltd.',
        date: 'August 2019 - July 2020',
        description: 'Most versatile work ever done!',
        icon: '💡',
        details: `I initially worked on a PHP Laravel project to develop a backend server. Later, I transitioned to a Salesforce project, where I modified the Metadata API to meet specific requirements. I then moved on to PowerShell scripting, developing scripts to manage operations for Organizational Units for on-premises users. Finally, I was assigned a React project to learn and expand my frontend skills, preparing me for upcoming projects in the pipeline.`,
      },

      {
        id: 4,
        title: 'Software Intern',
        company: 'Metacube Software Pvt. Ltd.',
        date: 'Jan 2019 - July 2019',
        description: 'Pure learning and development',
        icon: '🌱',
        details: `Completed intensive training in J2EE, Spring, Hibernate, and Salesforce, contributing to and owning live industry projects through
        hands-on collaboration and applying acquired skills. `,
      },
  ];

  // Sort experiences by date (descending order)
  const sortedExperiences = experiences.sort((a, b) => {
    const getDateValue = (dateString) => {
      const [month, year] = dateString.split(' ');
      return new Date(`${month} 1, ${year}`).getTime();
    };

    const dateA = getDateValue(a.date.split(' - ')[0]); // Start date
    const dateB = getDateValue(b.date.split(' - ')[0]); // Start date

    return dateB - dateA; // Sort in descending order
  });

  // Open modal with content
  const openModal = (experience) => {
    setModalContent(experience);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent({});
  };

  return (
    <section className="experience-section">
      <h2 className="section__title">Career Highlights</h2>
      <motion.div
        className="timeline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VerticalTimeline>
          {sortedExperiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'var(--clr-bg-alt)', color: 'var(--clr-fg)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--clr-bg-alt)' }}
              date={exp.date}
              iconStyle={{ background: 'var(--clr-primary)', color: '#fff' }}
              icon={<span className="timeline-icon">{exp.icon}</span>}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <p>{exp.description}</p>
              <motion.button
                className="details-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => openModal(exp)}
              >
                Read More
              </motion.button>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
      
      {/* Modal for displaying more details */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Experience Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{modalContent.title}</h2>
        <h4>{modalContent.company}</h4>
        <p>{modalContent.details}</p>
        <button onClick={closeModal} className="close-button" type="button">Close</button>
      </ReactModal>
    </section>
  );
};

export default ExperienceTimeline;
