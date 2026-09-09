import './Skills.css'

const skillGroups = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'Java', 'HTML5', 'CSS3'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Bootstrap'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Flask'] },
  { name: 'Data and APIs', items: ['MongoDB', 'MySQL', 'REST', 'WebSockets'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Figma'] },
  { name: 'Platform and Core', items: ['Shopify', 'Liquid', 'DSA', 'OOP', 'Responsive Design'] },
]

const certifications = [
  {
    group: 'NPTEL',
    items: ['Joy of Computing (Python) - IIT Madras', 'Modern C++ - IIT Kharagpur', 'Software Engineering - IIT Madras', 'DAA - IIT Madras'],
  },
  {
    group: 'Other learning',
    items: ['Generative AI - Microsoft/LinkedIn', 'Infosys Springboard certifications'],
  },
]

const Skills = () => {
  return (
    <section className='skills-section'>
      <div id='skills' className='skills-block'>
        <div className='section-heading'>
          <p className='section-kicker'>01 / toolkit</p>
          <h1>Skills that ship products.</h1>
        </div>
        <div className='skills-grid'>
          {skillGroups.map((group) => (
            <div className='skill-group' key={group.name}>
              <h2>{group.name}</h2>
              <div className='skill-items'>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id='ai' className='ai-block'>
        <div>
          <p className='section-kicker'>02 / applied AI</p>
          <h2>Useful integrations, grounded in web products.</h2>
        </div>
        <p>My AI work is application-focused: Gemini API integrations, natural-language search, Shopify AI integrations, and AI-assisted workflows inside practical web applications.</p>
      </div>

      <div className='leetcode-block'>
        <div>
          <p className='section-kicker'>03 / problem solving</p>
          <h2>Consistent practice outside the UI.</h2>
        </div>
        <div className='leetcode-stats'>
          <div><strong>500+</strong><span>LeetCode problems</span></div>
          <div><strong>1650+</strong><span>Contest rating</span></div>
        </div>
      </div>

      <div id='certifications' className='certifications-block'>
        <div className='section-heading'>
          <p className='section-kicker'>04 / learning record</p>
          <h1>Certifications.</h1>
        </div>
        <div className='certification-grid'>
          {certifications.map((certificateGroup) => (
            <div className='certification-group' key={certificateGroup.group}>
              <h2>{certificateGroup.group}</h2>
              <ul>{certificateGroup.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills