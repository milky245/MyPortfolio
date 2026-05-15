# MyPortfolio

## Xue Zhihan Personal Use
## Xue Zhihan 個人用ポートフォリオ

### 1) コンセプト
- ミニマル × テック感（ミニマル + グラスモーフィズム）
- 深色の高級グレー系ブルー
- 大きな余白 + 動的グラデーション
- 「エンジニア + AI研究 + ビジュアルデザイン」を強調
- モダンな SaaS / AI Startup 風
- 個人ブランド感を重視

### 2) ディレクトリ構成
```txt
portfolio/
│
├── index.html                  # ホーム Landing Page
├── works.html                  # プロジェクト一覧
├── blog.html                   # 技術ブログ
├── profile.html                # プロフィール
├── contact.html                # 連絡先
│
├── css/
│   ├── style.css               # メインスタイル
│   ├── components.css          # カード/ボタン/ナビ
│   ├── animations.css          # アニメーション
│   └── responsive.css          # モバイル対応
│
├── js/
│   ├── main.js                 # ナビ/スクロール/UI操作
│   ├── particles.js            # 背景パーティクル（任意）
│   └── typing.js               # タイピングアニメーション
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── works/
│   │   ├── blog/
│   │   ├── icons/
│   │   └── textures/
│   └── docs/
│
└── README.md
```

### 3) ビジュアル
#### 配色
| 種類 | 色 |
|---|---|
| 主背景 | `#0B1120` |
| 次背景 | `#111827` |
| カード | `rgba(255,255,255,0.05)` |
| 主文字 | `#E5E7EB` |
| 次文字 | `#94A3B8` |
| アクセント | `#7C3AED` |
| 補助グラデーション | cyan → purple |

### 4) 背景デザイン（最重要）
```css
background:
radial-gradient(circle at top left, #312e81 0%, transparent 30%),
radial-gradient(circle at bottom right, #0ea5e9 0%, transparent 30%),
#0b1120;
```

- Texture: `assets/images/textures/noise.png`
- Glass Card:
```css
backdrop-filter: blur(18px);
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.08);
```

### 5) CDN
- Icons: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- Fonts (EN): `Space Grotesk`, `Inter`, `Sora`
- Fonts (JA): `Noto Sans JP`

---

