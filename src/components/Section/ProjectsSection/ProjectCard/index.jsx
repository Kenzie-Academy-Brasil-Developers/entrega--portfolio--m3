import style from "./style.module.css"
function ProjectCard({img , name , description}){
    return( 
        <li className={style.li}>
            <div className={style.divHeader}>
                <div className={style.divInfo}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
                <img src={img} alt="git image" className={style.img} />
            </div>
            <button className={style.button}>Saiba mais</button>
        </li>
    )
}
export default ProjectCard