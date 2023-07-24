import { projects } from "../../../data/projects.js"
import ProjectCard from "./ProjectCard/index.jsx"
import style from "./style.module.css"
function ProjectSection (){
    return(
        <section>
            <div className="container">
                <div className={style.projectContainer}>
                    <h3 className={style.title}>Projetos</h3>
                    <div>
                        <ul className={style.ul}>
                            {projects.map(project => {
                                return(
                                    <ProjectCard key={project.id} img={project.img} name={project.name}description={project.description}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectSection