import { PlanetTopImgStar, PlanetTopImgStarSize, PlanetTopSection } from "../../componentsStyle/global/planetsStyles/planetsStyle"
import { ContainerSlider } from "../../componentsStyle/globalStyles/containers"
import BtnPlanets from "./btnPlanets"

const PlanetsSection = () => {
    return (
        <>
            <PlanetTopSection />
            <PlanetTopImgStar />
            <PlanetTopImgStar />
            <PlanetTopImgStarSize>
                <ContainerSlider>
                    <BtnPlanets />
                </ContainerSlider>
            </PlanetTopImgStarSize>
        </>
    )
}

export default PlanetsSection