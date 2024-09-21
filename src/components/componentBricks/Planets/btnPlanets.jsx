import { Earth, Jupiter, Mars, Mercury, Neptun, Saturn, Uranus, Venus } from "../../componentsImages/ImagesPalanets/imgBtn"
import { BigMercury, SmallVenus } from "../../componentsImages/ImagesPalanets/imgPlanetsBig"

import { ContainerFlexBtn, BtnPlanetsSize, DivBtnFlex, BtnPlanetsFlex } from "../../componentsStyle/global/planetsStyles/btnStyle"

const BtnPlanets = () => {
    return (
        <>
            <ContainerFlexBtn>
                <DivBtnFlex>
                    <BtnPlanetsSize><Mercury /> Меркурий</BtnPlanetsSize>
                    <BtnPlanetsSize><Venus /> Венера</BtnPlanetsSize>
                    <BtnPlanetsSize><Earth /> Земля</BtnPlanetsSize>
                    <BtnPlanetsSize><Mars /> Марс</BtnPlanetsSize>
                    <BtnPlanetsSize><Jupiter /> Юпитер</BtnPlanetsSize>
                    <BtnPlanetsSize><Saturn /> Сатурн</BtnPlanetsSize>
                    <BtnPlanetsSize><Uranus /> Уран</BtnPlanetsSize>
                    <BtnPlanetsSize><Neptun /> Нептун</BtnPlanetsSize>
                </DivBtnFlex>
                <BtnPlanetsFlex>
                    <SmallVenus />
                    <BigMercury />
                </BtnPlanetsFlex>
            </ContainerFlexBtn>
        </>
    )
}

export default BtnPlanets