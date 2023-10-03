import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22397835-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Set of widgets and blocks with charts of all types',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22269144-Set-of-widgets-and-blocks-with-charts-of-all-types'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Make Impactful Data Visualizations in Figma with Hyper Charts UI',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22205756-Make-Impactful-Data-Visualizations-in-Figma-with-Hyper-Charts-UI'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calendar widgets',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22205684-Calendar-widgets'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Futuristic dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22161689-Futuristic-dashboard'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Make Impactful Data Visualizations in Figma with Hyper Charts UI',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22161542-Make-Impactful-Data-Visualizations-in-Figma-with-Hyper-Charts-UI'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <br />
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="portfolio item" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio