import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work) => {
            return <article key={work.w_no} className={`project-card ${work.featured ? 'project-card-featured' : ''}`}>
              <div className={`project-visual ${work.w_img ? '' : 'project-visual-placeholder'}`}>
                {work.w_img ? <img src={work.w_img} alt={`${work.w_name} project preview`} /> : <><span>{work.w_name}</span><small>Product interface / case study</small></>}
              </div>
              <div className="project-card-body">
                <div className="project-card-heading">
                  <div>
                    <p className="project-index">0{work.w_no}</p>
                    <h2>{work.w_name}</h2>
                  </div>
                  <a target='_blank' rel='noopener noreferrer' href={work.w_link} aria-label={`Open ${work.w_name} live demo`} className="project-arrow">↗</a>
                </div>
                <p className="project-description">{work.w_desc}</p>
                <div className="project-tags">{work.w_stack.map((stack) => <span key={stack}>{stack}</span>)}</div>
                <ul className="project-features">{work.w_features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="project-links">
                  <a target='_blank' rel='noopener noreferrer' href={work.w_link}>Live demo <span aria-hidden='true'>↗</span></a>
                  <a target='_blank' rel='noopener noreferrer' href={work.w_github}>GitHub <span aria-hidden='true'>↗</span></a>
                </div>
              </div>
            </article>
        })}
      </div>
      <a className="mywork-more" target='_blank' rel='noopener noreferrer' href='https://github.com/Anirban642'>
        See more projects on GitHub <span aria-hidden='true'>↗</span>
      </a>
    </div>
  )
}

export default MyWork
