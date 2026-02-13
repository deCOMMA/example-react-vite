import type { User } from '@/entities/User';

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImg;

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlocBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleBlockCode extends ArticleBlocBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleBlockImg extends ArticleBlocBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleBlockText extends ArticleBlocBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export enum ArticleView {
    LINE = 'LINE',
    BLOCK = 'BLOCK',
}
