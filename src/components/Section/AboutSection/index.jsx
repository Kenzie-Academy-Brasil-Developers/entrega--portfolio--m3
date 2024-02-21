import style from "./style.module.css";
function AboutSection() {
  return (
    <section className={style.section} >
      <div className="container">
        <div className={style.aboutContainer} id="aboutSection">
          <h3 className={style.title}>Sobre mim</h3>
          <div className={style.content}>
            <p>
              Nessa jornada, não busco apenas ser um programador habilidoso, mas
              um profissional completo, capaz de enfrentar os desafios dia apos dia.
            </p>
            <p>
              Cada erro é uma lição, cada conquista é um
              impulso para ir além. Assim, moldo meu caminho na programação com
              a convicção de que a verdadeira excelência é conquistada não
              apenas através do código, mas também pelo constante aprimoramento
              das minhas habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
