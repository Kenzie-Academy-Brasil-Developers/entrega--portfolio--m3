import Banner from "../../../assets/banner-img.png";
import { username } from "../../../data/user";
import style from "./style.module.css"
function BannerSection (){
    return(
        <section>
            <div className="container">
                <div className={style.bannerContainer}>
                    <div className={style.bannerTitle}>
                        <p className={style.user}>{username}</p>    
                        <h1 className={style.title}>Bem vindo ao meu portfólio</h1>
                        <p>Uma frase interessante sobre mim</p>
                        <button className="button-primary">Saiba mais</button>
                    </div>
                    <img src={Banner} alt="banner"  />
                </div>
            </div>
        </section>
    )
}
export default BannerSection
