import { ZakladaImg } from "../componentsImages/imagesNews"
import { FirstNews, FirstNewsBack, NewsArticle, NewsDivflex } from "../componentsStyle/global/newsStyles/newsStyle"
import { Container } from "../componentsStyle/globalStyles/containers"

const NewsSection = () => {
    return (
        <>
            <Container>
                <h1>Рекомендуемые новости</h1>
                <NewsDivflex>
                    <FirstNews>
                        <FirstNewsBack>
                            <NewsArticle>
                                <ZakladaImg />
                                <span>ARTICLE</span>
                            </NewsArticle>
                            <h2>Экипаж NASA «Артемида II» использует местность Исландии для Лунных тренировок</h2>
                        </FirstNewsBack>
                    </FirstNews>
                    <div>
                        <div>
                            <ZakladaImg />
                            <span>ARTICLE</span>
                            <h2>Hubble - исследует спиральную звездную фабрику</h2>
                        </div>
                        <div>
                            <div>
                                <ZakladaImg />
                                <span>ARTICLE</span>
                                <h2>NASA считает лето 2024 года самым жарким на сегодняшний день</h2>
                            </div>
                            <div>
                                <ZakladaImg />
                                <span>ARTICLE</span>
                                <h2>NASA и SpaceX отправят экипаж-9 в космос</h2>
                            </div>
                        </div>
                    </div>
                </NewsDivflex>
            </Container>
        </>
    )
}

export default NewsSection