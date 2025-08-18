import AngularPortfolio from "@/components/projects/AngularPortfolio";
import GreenHero from "@/components/projects/GreenHero";
import Internz from "@/components/projects/Internz";
import PDFRefactor from "@/components/projects/PDFRefactor";
import Quire from "@/components/projects/Quire";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
    return (
        <div>
            <Carousel orientation="horizontal" className="max-w-xl m-auto place-center">
                <CarouselContent className="">
                    <CarouselItem><AngularPortfolio /></CarouselItem>
                    <CarouselItem><GreenHero /></CarouselItem>
                    <CarouselItem><Internz /></CarouselItem>
                    <CarouselItem><PDFRefactor /></CarouselItem>
                    <CarouselItem><Quire /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}