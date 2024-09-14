import { FirstInformationDivText, FirstInformationDivTextP, FirstInformationDivTextH2 , DivLine, FirstInformation } from "../componentsStyle/global/informationStyles/informationStyle"
import { ContainerInformation } from "../componentsStyle/globalStyles/containers"
import { ImgInformationFirst } from "../componentsImages/imagesInformation"

const InformationSection = () => {
    return (
        <>
            <ContainerInformation>
                <FirstInformation>
                    <FirstInformationDivText>
                        <FirstInformationDivTextH2>О нас: <br /> NASA</FirstInformationDivTextH2>
                        <DivLine></DivLine>
                        <FirstInformationDivTextP>NASA (Национальное управление по аэронавтике и исследованию космического пространства) — это ведущая организация США, занимающаяся исследованиями в области аэронавтики и космоса. Основанная в 1958 году, NASA играет ключевую роль в расширении наших знаний о Вселенной и в развитии технологий, которые способствуют научному прогрессу и улучшению жизни на Земле.</FirstInformationDivTextP>
                    </FirstInformationDivText>
                    <ImgInformationFirst />
                </FirstInformation>
            </ContainerInformation>
        </>
    )
}

export default InformationSection