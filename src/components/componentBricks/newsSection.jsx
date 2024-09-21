import { ZakladaImg } from "../componentsImages/imagesNews"
import { FirstNews, FirstNewsBack, FourNews, FourNewsBack, NewsArticle, NewsArticleFour, NewsArticleSecond, NewsArticleSpan, NewsArticleThird, NewsDivflex, NewsDivflexSecond, NewsDivflexThird, SecondNews, SecondNewsBack, ThirdNews, ThirdNewsBack } from "../componentsStyle/global/newsStyles/newsStyle"
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
                                <NewsArticleSpan>ARTICLE</NewsArticleSpan>
                            </NewsArticle>
                            <p>Экипаж NASA «Артемида II» использует местность Исландии для Лунных тренировок</p>
                        </FirstNewsBack>
                    </FirstNews>
                    <NewsDivflexSecond>
                        <SecondNews>
                            <SecondNewsBack>
                                <NewsArticleSecond>
                                    <ZakladaImg />
                                    <NewsArticleSpan>ARTICLE</NewsArticleSpan>
                                </NewsArticleSecond>
                                <p>Hubble - исследует спиральную звездную фабрику</p>
                            </SecondNewsBack>
                        </SecondNews>
                    </NewsDivflexSecond>
                    <NewsDivflexThird>
                        <ThirdNews>
                            <ThirdNewsBack>
                                <NewsArticleThird>
                                    <ZakladaImg />
                                    <NewsArticleSpan>ARTICLE</NewsArticleSpan>
                                </NewsArticleThird>
                                <p>NASA считает лето 2024 года самым жарким на сегодняшний день</p>
                            </ThirdNewsBack>
                        </ThirdNews>
                        <FourNews>
                            <FourNewsBack>
                                <NewsArticleFour>
                                    <ZakladaImg />
                                    <NewsArticleSpan>ARTICLE</NewsArticleSpan>
                                </NewsArticleFour>
                                <p>NASA и SpaceX отправят экипаж-9 в космос</p>
                            </FourNewsBack>
                        </FourNews>
                    </NewsDivflexThird>
                </NewsDivflex>
            </Container>
        </>
    )
}

export default NewsSection