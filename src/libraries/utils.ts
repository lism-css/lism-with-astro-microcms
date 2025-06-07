import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-DD');
};

export const capitalizeAndFormat = (text: string): string => {
  return text
    .replace(/-/g, ' ') // ハイフンを半角スペースに置換
    .toLowerCase() // 一旦すべて小文字に変換
    .replace(/^\w/, (char) => char.toUpperCase()); // 先頭のみ大文字に変換
};
