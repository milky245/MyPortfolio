# MyPortfolio

## 日本語 (Japanese First)

### 1) コンセプト
- ミニマル × テック感（Minimal + Glassmorphism）
- 深色の高級グレイッシュブルー
- 大きな余白 + 動的グラデーション
- 「エンジニア + AI研究 + ビジュアルデザイン」を強調
- モダンな SaaS / AI Startup 風
- 学生課題感ではなく、個人ブランド感を重視

### 2) 推奨ディレクトリ構成
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
│   │   │   ├── hero-bg.jpg
│   │   │   └── profile.png
│   │   ├── works/
│   │   │   ├── project1.jpg
│   │   │   ├── project2.jpg
│   │   │   └── ...
│   │   ├── blog/
│   │   │   ├── blog1.jpg
│   │   │   └── ...
│   │   ├── icons/
│   │   │   ├── github.svg
│   │   │   ├── x.svg
│   │   │   ├── linkedin.svg
│   │   │   └── mail.svg
│   │   └── textures/
│   │       ├── noise.png
│   │       └── gradient.webp
│   └── docs/
│       ├── resume.pdf
│       └── portfolio.pdf
│
└── README.md
```

### 3) 推奨ビジュアル設計（重要）
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

避ける: 純黒/純白、高彩度ブルー・パープル、安価なネオン表現。  
方向性: Modern AI / Web3 / SaaS。

### 4) index.html 推奨セクション
`Hero → About Me → Tech Stack → Featured Projects → Research/AI → Blog Preview → GitHub Activity → Contact CTA → Footer`

### 5) Hero Section（最重要）
- 見出し: `AI Engineer & Creative Developer`
- サブ見出し: `Building Intelligent Visual Experiences`
- 補足: `Deep Learning / Computer Vision / Generative AI / Web Engineering`
- CTA: `View Projects` / `Read Blog` / `GitHub`

### 6) 背景デザイン（最重要）
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

### 7) works.html 再設計指針
各カードに必須:
- プロジェクト画像
- プロジェクト名
- 短い説明
- 技術スタック（タグ）
- GitHub ボタン
- Live Demo ボタン

画像方針:
| 種別 | 推奨画像 |
|---|---|
| AI | UI Mockup |
| Backend | Dashboardスタイル |
| Research | Abstract Gradient |
| Tools | MacBook Mockup |

### 8) blog.html 設計指針
- 大きなカバー画像
- カード型記事一覧
- タグ分類
- 日付
- 読了時間

### 9) 必須 TODO コメント（テンプレート）
```html
<!-- TODO:
GitHubプロフィールURLに置き換える
例:
https://github.com/yourname
-->
```

```html
<!--
推奨:
ダーク系テック感のプロジェクト画像を配置
推奨サイズ: 1600x900
配置先:
assets/images/works/project1.jpg
-->
```

### 10) 推奨 CDN（Node.js不要）
- Icons: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- Fonts (EN): `Space Grotesk`, `Inter`, `Sora`
- Fonts (JA): `Noto Sans JP`

### 11) 推奨追加機能（インストール不要）
- タイピングアニメーション（AI Engineer / Creative Technologist / Researcher）
- Scroll Reveal
- Hover Lighting
- GitHub Stats（`github-readme-stats`）

### 12) 伝えるべきブランド価値
`Research + Engineering + Design` を中心に、以下の強みを示す:
- AI画像生成
- Diffusion
- Computer Vision
- 日本ITキャリア志向
- Web開発
- 技術学習力
- 研究遂行力

### 13) 最終推奨スタイル
**AI Startup Landing Page スタイル**  
Keywords: `Vercel / Linear / Raycast / Framer / OpenAI / Dark / Minimal / Controlled Motion / Spacious Layout / Premium Gradient`

---

## English

### 1) Concept
- Minimal + Glassmorphism
- Premium dark gray-blue palette
- Large whitespace + dynamic gradients
- Emphasize “Engineer + AI Research + Visual Design”
- Modern SaaS / AI Startup website style
- Strong personal branding over “student assignment” impression

### 2) Recommended Directory Structure
```txt
portfolio/
│
├── index.html                  # Home Landing Page
├── works.html                  # Project showcase
├── blog.html                   # Technical blog
├── profile.html                # Personal profile
├── contact.html                # Contact
│
├── css/
│   ├── style.css               # Main styles
│   ├── components.css          # Cards/buttons/navigation
│   ├── animations.css          # Animations
│   └── responsive.css          # Mobile support
│
├── js/
│   ├── main.js                 # Navigation/scroll/interactions
│   ├── particles.js            # Optional background particles
│   └── typing.js               # Typewriter animation
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-bg.jpg
│   │   │   └── profile.png
│   │   ├── works/
│   │   │   ├── project1.jpg
│   │   │   ├── project2.jpg
│   │   │   └── ...
│   │   ├── blog/
│   │   │   ├── blog1.jpg
│   │   │   └── ...
│   │   ├── icons/
│   │   │   ├── github.svg
│   │   │   ├── x.svg
│   │   │   ├── linkedin.svg
│   │   │   └── mail.svg
│   │   └── textures/
│   │       ├── noise.png
│   │       └── gradient.webp
│   └── docs/
│       ├── resume.pdf
│       └── portfolio.pdf
│
└── README.md
```

### 3) Recommended Visual Direction (Core)
#### Color Palette
| Type | Color |
|---|---|
| Primary background | `#0B1120` |
| Secondary background | `#111827` |
| Card | `rgba(255,255,255,0.05)` |
| Primary text | `#E5E7EB` |
| Secondary text | `#94A3B8` |
| Accent | `#7C3AED` |
| Support gradient | cyan → purple |

Avoid pure black/white, over-saturated blue/purple, cheap neon style.  
Target aesthetic: modern AI / Web3 / SaaS.

### 4) Recommended index.html Flow
`Hero → About Me → Tech Stack → Featured Projects → Research/AI → Blog Preview → GitHub Activity → Contact CTA → Footer`

### 5) Hero Section (Most Important)
- Title: `AI Engineer & Creative Developer`
- Subtitle: `Building Intelligent Visual Experiences`
- Supporting line: `Deep Learning / Computer Vision / Generative AI / Web Engineering`
- Buttons: `View Projects` / `Read Blog` / `GitHub`

### 6) Background Design (Most Important)
```css
background:
radial-gradient(circle at top left, #312e81 0%, transparent 30%),
radial-gradient(circle at bottom right, #0ea5e9 0%, transparent 30%),
#0b1120;
```

- Texture asset: `assets/images/textures/noise.png`
- Glass card style:
```css
backdrop-filter: blur(18px);
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.08);
```

### 7) works.html Redesign Guide
Each project card should include:
- Project image
- Project name
- Short description
- Tech stack tags
- GitHub button
- Live Demo button

Image direction:
| Project Type | Recommended Image |
|---|---|
| AI project | UI mockup |
| Backend project | Dashboard style |
| Research project | Abstract gradient |
| Tools | MacBook mockup |

### 8) blog.html Design Guide
- Large cover image
- Card-style article layout
- Tag categories
- Date
- Reading time

### 9) Required TODO Comments (Template)
```html
<!-- TODO:
Replace with your GitHub profile URL
Example:
https://github.com/yourname
-->
```

```html
<!--
Recommended:
Use a dark high-tech project screenshot
Suggested size: 1600x900
Location:
assets/images/works/project1.jpg
-->
```

### 10) Recommended CDN (No Node.js Required)
- Icons: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- Fonts (EN): `Space Grotesk`, `Inter`, `Sora`
- Fonts (JA): `Noto Sans JP`

### 11) Recommended Advanced Features (No Install)
- Typewriter rotation: `AI Engineer / Creative Technologist / Researcher`
- Scroll reveal
- Hover lighting effect
- GitHub stats embed (`github-readme-stats`)

### 12) What the Portfolio Should Communicate
Focus on `Research + Engineering + Design`, highlighting:
- AI image generation
- Diffusion
- Computer vision
- Japan IT career direction
- Web development
- Continuous technical learning
- Research capability

### 13) Final Recommended Style
**AI Startup Landing Page Style**  
Keywords: `Vercel / Linear / Raycast / Framer / OpenAI / Dark Premium / Minimal / Restrained Motion / Spacious Layout / Premium Gradient`
