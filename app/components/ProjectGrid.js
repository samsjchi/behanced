var React = require('react')
var PropTypes = require('prop-types')

function ProjectGrid (props) {
  return (
    <ul className='project-grid'>
      {props.projects.map(function (project) {
        return (
          <li className='project-card' key={project.id}>
            <img
              className='project-card__image'
              src={project.covers['202']}
              alt={'Project cover for ' + project.name} />

            <div className='project-card__details'>
              <h3><a href={project.url}>{project.name}</a></h3>
              <p>By: <a href={project.owners[0].url}>{project.owners[0].first_name} {project.owners[0].last_name}</a></p>
              <p>Field: {project.fields[0]}</p>
            </div>

            <ul className='project-card__stats'>
              <li>{project.stats.appreciations} appreciations</li>
              <li>{project.stats.views} views</li>
              <li>{project.stats.comments} comments</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
}

module.exports = ProjectGrid
