import AngularPortfolio from "@/components/projects/AngularPortfolio";
import GreenHero from "@/components/projects/GreenHero";
import Internz from "@/components/projects/Internz";
import PDFRefactor from "@/components/projects/PDFRefactor";
import Quire from "@/components/projects/Quire";

export default function Projects() {
    return (
        <div className="project-grid">
            <AngularPortfolio/>
            <GreenHero/>
            <Internz/>
            <PDFRefactor/>
            <Quire/>
        </div>
    );
}