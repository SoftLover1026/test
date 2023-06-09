import { Action, action } from 'easy-peasy';

export interface Article {
    id: number,
    source: {
        id: string | null;
        name: string;
    };
    auther: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ArticlesModel {
    articles: Article[];
    addArticle: Action<ArticlesModel, Article>
    removeArticle: Action<ArticlesModel>;
}

const articlesModel: ArticlesModel = {
    articles: [],
    addArticle: action((state, payload) => {
        state.articles.push(payload);
    }),
    removeArticle: action((state) => {
        state.articles = []
    })

};

export default articlesModel;