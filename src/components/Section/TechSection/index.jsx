import { technologies } from "../../../data/technologies.js";
import TechCard from "./TechCard/index.jsx";
import style from "./style.module.css";
function TechSection (){
    return(
        <section>
            <div className="container">
                <div className={style.techContainer}>
                    <h3 className={style.title}>Tecnologias</h3>
                    <div>
                        <ul className={style.ul}>
                            {technologies.map(technologie => {
                                return (
                                    <TechCard key={technologie.id} img={technologie.img} name={technologie.name}/> 
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TechSection