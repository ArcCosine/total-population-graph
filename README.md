# フロントエンドコーディング試験 サンプル


ゆめみオープンの[フロントエンドコーディング試験](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d)サンプルを適当に作ってみた。
掛かった時間は４時間くらい。

機能だけ実装。デザインはこれから。


# 開発方法

    yarn dev

これで、localhost:3000にアクセスすれば動くのが作れる。

    yarn build

は多分通らないので、適宜コード修正必要


APIに関しては、unit testを書いている。

    yarn test

でテスト出来るが、node-fetchをコメントアウトしたりしなかったりなので、この辺も後で調整必要
とりあえずは、こんなところかな。
APIキーがベタ書きなので、後で直す。
