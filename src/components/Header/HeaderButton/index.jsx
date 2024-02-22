import "../../../styles/buttons.css"
import style from "./style.module.css"
function HeaderButton (){
    return(
        <div>
            <button type="submit" className="button-primary"><a href="#contactSession" className={style.btn}>Contato</a></button>
        </div>
    )
}
export default HeaderButton