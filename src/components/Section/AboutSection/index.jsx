import style from "./style.module.css"
function AboutSection(){
    return(
        <section className={style.section}>
            <div className="container">
                <div className={style.aboutContainer}>
                    <h3 className={style.title}>Sobre mim</h3>
                    <div className={style.content}>
                        <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection