import style from "./nav.module.css"
function HeaderNav ({type}){
    return(
        <div className={style.navContainer}>
            <button type = {type} className={style.buttons}>Sobre</button>
            <button type = {type} className={style.buttons}>Stack</button>
            <button type = {type} className={style.buttons}>Projetos</button>
        </div>
    )
}
export default HeaderNav