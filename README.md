# Roster
社員の名前と顔が分かる名簿サイトテンプレート。
社員の管理はjsonで記載＆インストール。
役職名クリックで、属している社員をフィルタリング

# demo
![Demo](https://lowcal.web.fc2.com/)


# スタートガイド
## データ挿入
- `$ npm install`
- `./dist/js/script.js` に役職名を記載
1行目の下記に分けたい項目を記載
```javascript
var syozoku = ["役員", "営業", "人事","総務","広報", "クリエイティブ","インフラ","システム開発"];
```

- `./dist/member.json` に社員情報記載
 `syozoku` はタブとの関連付けをするのでscript.jsに記載したものと同じものを記載

## テーマカラーを変更
`src/scss/var.scss` 9行

```scss
$pointColor: #84a1a8;// 任意のWEBカラーに変更
```

# 必要条件
## インストール
```
`$ npm install`
```

## ローカルでサイト表示
```
`$ npm run start` 
```


# 著者
yukiko

# License
This project is licensed under the MIT License
