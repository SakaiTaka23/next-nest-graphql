# next-nest-graphql

- next-nest 用のテンプレートを作る

## TODO

- [x] 両方で lint format あたりを整える
- [x] next nest 間で graphql で通信できることを確認
- [x] Docker 上で通信できることを確認
- [x] DB を mysql に変更
- [ ] Firebase auth を取り入れてルートプロテクト実装
- [ ] README に情報を書く

## Firebase auth

動作確認の方針

1. クライアントでユーザーを作成できるようにする
2. トークンを取得
3. バックエンドにリクエストを送れるか検証

## フロントエンドの方針

- [x] firebase と接続
- [x] apollo でヘッダーの送信方法を調査
- [ ] バックにユーザー作成 API 実装
- [ ] ユーザを作ってバックに保存されていることを確認
