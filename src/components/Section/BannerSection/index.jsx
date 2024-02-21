import eu from "../../../assets/eu.png";
import { username } from "../../../data/user";
import style from "./style.module.css"
function BannerSection (){
    return(
        <section className="container">
                <div className={style.bannerContainer}>
                    <div className={style.bannerTitle}>
                        <p className={style.user}>{username}</p>    
                        <div className={style.animatedtext}>
                            Bem vindo ao meu <span></span>
                        </div>
                        <button className="button-primary">Saiba mais</button>
                    </div>
                    <div className={style.imgContainer}>
                        <div className={style.divImg}>
                            <div className={style.glow}>
                                <img className={style.img} src={eu} alt="foto"  />

                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default BannerSection
