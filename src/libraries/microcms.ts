// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Categories;
  author: Members;
} & MicroCMSListContent;

export type Members = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
};

export type Categories = {
  name: string;
  slug: string;
} & MicroCMSListContent;

// APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({ endpoint: 'news', queries });
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  });
};

export const getAllNews = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<News>({ endpoint: 'news', queries });
};

export const getAllCategories = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<Categories>({ endpoint: 'categories', queries });
};
