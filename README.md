# 🏇 競馬占い - Horse Racing Fortune

星座、血液型、レース選択で運命の本命馬を見つける占いWebアプリです。

## ✨ 機能

- **占い機能**: 星座・血液型・ラッキーナンバーによる本命馬の算出
- **レース連動**: 実際のG1レース（宝塚記念、安田記念など）の出走馬をランダム表示
- **レスポンシブデザイン**: PC・スマートフォン対応
- **リアルタイム結果**: アニメーション付きの結果表示

## 🎯 対応レース

- 宝塚記念（2025年6月15日 阪神）
- 安田記念（2025年6月8日 東京）※終了
- 日本ダービー（2025年6月1日 東京）※終了
- その他春のG1レース

## 🚀 デプロイ方法

### Vercelでのデプロイ

1. **GitHubリポジトリの作成**
```bash
git init
git add .
git commit -m "初期コミット"
git branch -M main
git remote add origin https://github.com/yourusername/horse-racing-fortune.git
git push -u origin main
```

2. **Vercelでのデプロイ**
- [Vercel](https://vercel.com/)にアクセス
- GitHubアカウントでログイン
- "New Project"をクリック
- GitHubリポジトリを選択
- 自動的にデプロイが開始されます

### ローカル開発

```bash
# Vercel CLIのインストール
npm install -g vercel

# プロジェクトクローン
git clone https://github.com/yourusername/horse-racing-fortune.git
cd horse-racing-fortune

# ローカル開発サーバー起動
vercel dev
```

## 📁 ファイル構成

```
horse-racing-fortune/
├── index.html          # メインHTMLファイル
├── styles/
│   └── style.css       # スタイルシート
├── scripts/
│   └── main.js         # JavaScript
├── assets/
│   └── images/         # 画像ファイル
├── vercel.json         # Vercel設定
├── package.json        # プロジェクト設定
└── README.md           # このファイル
```

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: フレックスボックス、グリッド、アニメーション
- **Vanilla JavaScript**: ES6+、DOM操作
- **Vercel**: 静的サイトホスティング

## 📱 対応ブラウザ

- Chrome (推奨)
- Firefox
- Safari
- Edge

## 🎨 カスタマイズ

### 馬名の変更
`scripts/main.js`の`horseNames`配列を編集してください。

### レース追加
`raceHorses`オブジェクトに新しいレースと出走馬を追加できます。

### デザイン変更
`styles/style.css`でカラーテーマやレイアウトを変更できます。

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 お問い合わせ

何かご質問がございましたら、Issuesでお気軽にお聞かせください。

---

⭐ このプロジェクトが気に入ったら、ぜひスターをお願いします！