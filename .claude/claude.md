# First Miyabi Project

## プロジェクト概要

このプロジェクトは、Miyabi Agentic OSを使用した自律型開発フレームワークです。

## Miyabi Agentic OS とは

Miyabiは、AIエージェントがGitHub Issueを自動的に検出し、コードを生成、テスト、レビュー、デプロイまで行う完全自律型の開発システムです。

## 利用可能なエージェント

### 1. coordinator
- **役割**: タスク統括・DAG分解
- **機能**: Issue分解、並行実行制御、Agent割当

### 2. codegen
- **役割**: AI駆動コード生成
- **機能**: TypeScript生成、テスト自動生成

### 3. review
- **役割**: コード品質判定
- **機能**: 静的解析、セキュリティスキャン（80点以上で承認）

### 4. issue
- **役割**: Issue分析・ラベリング
- **機能**: 組織設計原則65ラベル体系、自動分類

### 5. pr
- **役割**: Pull Request自動化
- **機能**: Draft PR作成、Conventional Commits準拠

### 6. deploy
- **役割**: CI/CDデプロイ
- **機能**: Firebase Deploy、ヘルスチェック、Rollback

### 7. mizusumashi
- **役割**: Super App Designer
- **機能**: アプリYAML自動生成、自己修復関数

## プロジェクト構造

```
first-miyabi/
├── .claude/          # Claude Code設定
│   └── claude.md     # プロジェクトコンテキスト
├── .github/          # GitHub Actions ワークフロー
│   └── workflows/
├── src/              # ソースコード
│   └── index.ts      # エントリーポイント
├── scripts/          # ユーティリティスクリプト
│   └── doc-generator.ts
├── .env              # 環境変数（GITHUB_TOKEN）
├── package.json      # プロジェクト設定
├── tsconfig.json     # TypeScript設定
└── README.md         # プロジェクト説明
```

## 開発ワークフロー

### 1. Issue作成
GitHubでIssueを作成すると、Miyabiが自動的に検出します。

### 2. 自動実行
```bash
# 全自動モード（Water Spider Agent）
GITHUB_TOKEN=<token> npx miyabi auto -y

# 特定のエージェントを実行
GITHUB_TOKEN=<token> npx miyabi agent run codegen --issue=123
```

### 3. TODOコメントからIssue化
```bash
GITHUB_TOKEN=<token> npx miyabi todos -y
```

### 4. ステータス確認
```bash
GITHUB_TOKEN=<token> npx miyabi status -y
```

## 環境変数

プロジェクトルートの`.env`ファイルに以下を設定：

```
GITHUB_TOKEN=gho_xxxxxxxxxxxxx
```

## GitHub認証

```bash
# Miyabi認証
npx miyabi auth login

# ステータス確認
npx miyabi auth status

# ログアウト
npx miyabi auth logout
```

## コーディング規約

- TypeScript 5.8以上を使用
- ESLintでコード品質を維持
- Vitestでテストを記述
- Conventional Commits形式でコミット

## エージェント実行例

### コード生成
```bash
GITHUB_TOKEN=<token> npx miyabi agent run codegen --issue=123
```

### コードレビュー
```bash
GITHUB_TOKEN=<token> npx miyabi agent run review --pr=45
```

### デプロイ
```bash
GITHUB_TOKEN=<token> npx miyabi agent run deploy --pr=45
```

## トラブルシューティング

### ヘルスチェック
```bash
GITHUB_TOKEN=<token> npx miyabi doctor -y
```

### よくある問題

1. **GITHUB_TOKEN not found**
   - `.env`ファイルが存在するか確認
   - コマンド実行時に環境変数を明示的に渡す

2. **Repository not found**
   - GitHubリポジトリが存在するか確認
   - トークンに適切な権限があるか確認

3. **Agent実行失敗**
   - Issueが存在するか確認
   - ラベルが正しく設定されているか確認

## 参考リンク

- [Miyabi GitHub Repository](https://github.com/ShunsukeHayashi/Miyabi)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)

## ライセンス

MIT
