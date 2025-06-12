# qmemo.md

Qtaro作業用メモ

## やること

- HeaderのNav改修（Doc修正待ち）
- RelatedNewsの見出し分離
  - コンテンツのみへ
- 404ページ追加
- サイト内検索追加

## アイデア

- 固定ページ用のテンプレを[page].astroにまとめる？
  - ex)about.astro、contact.astro等を上記で呼び出せるように
  - 意図：テンプレ使用した人が不要なページの削除の手間を減らしたい

## microCMS API

- メタデータ（サイト設定）
  - サイト名、説明、og:title、og:description、og:image...etc
- ニュース
  - ここからお知らせを投稿
- メンバー
  - ここからメンバー情報を登録
- カテゴリー
  - ここからカテゴリー情報を登録
- 固定ページ（ページ）
  - ここからニュース以外の静的コンテンツを投稿

## 参考リンク

### Astro

- [importエイリアス |インポート | Docs](https://docs.astro.build/ja/guides/imports/#import%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%82%B9)
