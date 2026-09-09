import './Experience.css'

const experienceData = [
  {
    period: 'Aug 2026-Present',
    company: 'BASSETTI INDIA',
    role: 'Technical Associate Intern',
    details: 'Working as a Technical Associate Intern.',
  },
  {
    period: 'Sep 2025-Apr 2026',
    company: 'Digital Guruji',
    role: 'Full Stack Developer Intern',
    details: 'Built custom Shopify applications, implemented AI integrations for automation and personalization, and developed Liquid UI components and custom progress bars.',
  },
  {
    period: 'Jun-Aug 2025',
    company: 'AGREM ORGANIC',
    role: 'Full Stack Developer Intern',
    details: 'Built and deployed MERN stack applications for real clients, prototyped UI in Figma, and deployed via Vercel, Netlify, and Render.',
  },
  {
    period: 'Apr-May 2025',
    company: 'TECHSONIX SOLUTIONS',
    role: 'Python Developer Intern',
    details: 'Developed Flask applications with scalable backend logic.',
  },
]

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className='experience-title'>
        <h1>Experience</h1>
      </div>
      <div className='experience-list'>
        {experienceData.map((experience) => (
          <article className='experience-item' key={`${experience.company}-${experience.period}`}>
            <p className='experience-period'>{experience.period}</p>
            <div className='experience-content'>
              <h2>{experience.company}</h2>
              <h3>{experience.role}</h3>
              <p>{experience.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
