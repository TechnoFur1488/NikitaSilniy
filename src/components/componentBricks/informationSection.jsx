import { DivLine, 
    FirstInformationDivText, FirstInformationDivTextP, FirstInformationDivTextH2 , FirstInformation, 
    SecondInformationDivText, SecondInformationDivTextP, SecondInformationDivTextH2, SecondInformation,
    SectionImg, SectionImgColor, SectionImgH1, SectionImgP
} from "../componentsStyle/global/informationStyles/informationStyle"
import { ContainerImgText, ContainerInformation } from "../componentsStyle/globalStyles/containers"
import { ImgInformationFirst, ImgInformationSecond } from "../componentsImages/imagesInformation"

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
                <SecondInformation>
                    <SecondInformationDivText>
                        <SecondInformationDivTextH2>Наша миссия</SecondInformationDivTextH2>
                        <DivLine></DivLine>
                        <SecondInformationDivTextP>Наша миссия заключается в том, чтобы исследовать космос, продвигать научные открытия и развивать технологии, которые способствуют безопасности и благополучию человечества. Мы стремимся вдохновлять будущие поколения исследователей и ученых, открывая перед ними безграничные возможности.</SecondInformationDivTextP>
                    </SecondInformationDivText>
                    <ImgInformationSecond />
                </SecondInformation>
            </ContainerInformation>
            <SectionImg>
                <SectionImgColor>
                    <ContainerImgText>
                        <SectionImgH1>Основные направления работы</SectionImgH1>
                        <SectionImgP>- Космические исследования: Мы проводим миссии по изучению планет, звезд и других небесных тел, включая марсианские роверы и обсерватории, такие как «Хаббл».</SectionImgP>
                        <SectionImgP>- Аэронавтика: NASA разрабатывает новые технологии для улучшения безопасности и эффективности авиации, а также для снижения воздействия на окружающую среду.</SectionImgP>
                        <SectionImgP>- Научные исследования: Мы ведем исследования в различных областях науки, включая физику, биологию, климатические изменения и многое другое.</SectionImgP>
                        <SectionImgP>- Образование и сотрудничество: Мы активно работаем с образовательными учреждениями и международными партнерами, чтобы делиться знаниями и вдохновлять молодежь на изучение STEM-дисциплин (наука, технологии, инженерия и математика).</SectionImgP>
                    </ContainerImgText>
                </SectionImgColor>
            </SectionImg>
        </>
    )
}

export default InformationSection