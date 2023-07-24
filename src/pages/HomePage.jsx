
import  DefaultTemplate  from "../components/DefaultTemplate";
import AboutSection from "../components/Section/AboutSection";
import BannerSection from "../components/Section/BannerSection";
import ProjectSection from "../components/Section/ProjectsSection";
import TechSection from "../components/Section/TechSection";


function HomePage(){
    return( 
        <div className="page__container">
            <DefaultTemplate>
            <BannerSection/>
            <AboutSection/>
            <TechSection/>
            <ProjectSection/>
            </DefaultTemplate>
        </div>
    )
}

export default HomePage