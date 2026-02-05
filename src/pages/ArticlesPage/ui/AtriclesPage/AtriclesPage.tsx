import clsx from 'clsx';
import cls from './ArticlesPage.module.css';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import type { Article } from '@/entities/Article';
import { ArticleView } from '@/entities/Article';


type AtriclesPageProps = {
    className?: string;
};

const AtriclesPage = ({ className }: AtriclesPageProps) => {
    const { t } = useTranslation('article');

    const classNames = clsx(cls.AtriclesPage, className);

    const articles = {
        "id": "6",
        "userId": {
            "id": "1",
            "username": "admin",
            "password": "123",
            "role": "ADMIN",
            "avatar": "https://i.pinimg.com/originals/57/9c/8a/579c8af00e1b71a721d97c2b36547293.png"
        },
        "title": "Удаленная работа и digital nomadssdfsfdsfdsfdsfdds",
        "subtitle": "Как технологии изменили рынок труда",
        "img": "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
        "views": 5340,
        "createdAt": "30.09.2023",
        "type": ["IT", "ECONOMICS", "ECONOMICS", "ECONOMICS", "ECONOMICS"],
        "blocks": [
            {
                "id": "1",
                "type": "TEXT",
                "title": "Новая реальность работы",
                "paragraphs": [
                    "Пандемия COVID-19 ускорила переход к удаленной работе, который уже намечался благодаря развитию цифровых технологий.",
                    "Такие инструменты как Zoom, Slack, Notion и GitHub позволяют командам эффективно сотрудничать из любой точки мира."
                ]
            },
            {
                "id": "2",
                "type": "IMAGE",
                "src": "https://images.unsplash.com/photo-1552664730-d307ca884978",
                "title": "Digital nomad за работой на берегу океана"
            },
            {
                "id": "3",
                "type": "TEXT",
                "title": "Экономические последствия",
                "paragraphs": [
                    "Удаленная работа снижает затраты компаний на офисы и позволяет нанимать таланты по всему миру.",
                    "Это также создает новые вызовы: налогообложение digital nomads, защита данных и сохранение корпоративной культуры."
                ]
            }
        ]
    } as Article
    return (
        <div className={classNames}>
            {t('ARTICLE PAGE')}
            <ArticleList
                isLoading={true}
                view={ArticleView.LINE}
                articles={new Array(10).fill(0).map((art, index) => ({ ...articles, id: String(index) }))}
            />
        </div>
    )
};

export default memo(AtriclesPage);
