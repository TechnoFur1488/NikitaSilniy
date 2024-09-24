import { useState } from "react"
import '../Planets/ff.css';
import { Earth, Jupiter, Mars, Mercury, Neptun, Saturn, Uranus, Venus } from "../../componentsImages/ImagesPalanets/imgBtn"
import { BigEarth, BigMercury, BigVenus, SmallEarth, SmallVenus } from "../../componentsImages/ImagesPalanets/imgPlanetsBig"
import { ContainerFlexBtn, BtnPlanetsSize, DivBtnFlex, BtnPlanetsFlex } from "../../componentsStyle/global/planetsStyles/btnStyle"


const BtnPlanets = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    const handlPlanetClick = (planet) => {
        setSelectedPlanet(planet)
    }

  

    return (
        <>
            <ContainerFlexBtn>
                <DivBtnFlex>
                    <BtnPlanetsSize onClick={() => handlPlanetClick("mercury")}><Mercury /> Меркурий</BtnPlanetsSize>
                    <BtnPlanetsSize onClick={() => handlPlanetClick("venus")}><Venus /> Венера</BtnPlanetsSize>
                    <BtnPlanetsSize><Earth /> Земля</BtnPlanetsSize>
                    <BtnPlanetsSize><Mars /> Марс</BtnPlanetsSize>
                    <BtnPlanetsSize><Jupiter /> Юпитер</BtnPlanetsSize>
                    <BtnPlanetsSize><Saturn /> Сатурн</BtnPlanetsSize>
                    <BtnPlanetsSize><Uranus /> Уран</BtnPlanetsSize>
                    <BtnPlanetsSize><Neptun /> Нептун</BtnPlanetsSize>
                </DivBtnFlex>
                <BtnPlanetsFlex>
                    {selectedPlanet === "mercury" && (
                        <img className="big" src="./images/WALLPAPER PHONE - MERCURY 2 (1) 3.svg" alt="" /> )}\
                    {selectedPlanet === "venus" && (
                        <img src="./images/image 25.svg" alt="" />
                    )}
                </BtnPlanetsFlex>
            </ContainerFlexBtn>
        </>
    )
}

export default BtnPlanets