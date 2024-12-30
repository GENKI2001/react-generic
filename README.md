# 特殊 Atomic Design: 6層アーキテクチャ

## 依存関係の基本原則

1. 各層は指定された層にのみ依存可能
2. 層の内部での依存・参照は禁止
3. 層をスキップした依存は禁止(ions層は例外)

## アーキテクチャの特徴

- 通常のAtomic Designに **「Ions層」** を追加した6層構造
- 各層の定義を厳密に定めることで、粒度の曖昧さという問題を解決
- ions層とmolecules層を、コンポーネントのバッファとして機能させ、再利用性を向上させる
- 明確な依存関係の定義による保守性の向上

## Atoms 層の定義と規則

**Atoms 層**は、分割不可能な最小単位のコンポーネントで構成される。

### 依存関係
- 依存: なし
- 参照先: Ions 層のみ

## Ions 層の定義と規則

**Ions 層**は、Atoms層の具体化されたパターン(特定のデザイン、追加機能)で構成される。

### 依存関係
- 依存: Atoms 層のみ
- 参照先: Molecules層、Organisms・Templates 層 (スキップを許可)

## Molecules 層の定義と規則

**Molecules 層**は、複数のIons層のコンポーネントにより構成される。

### 依存関係
- 依存: Ions 層のみ
- 参照先: Organisms・Templates 層(スキップを許可)

## Organisms 層の定義と規則

**Organisms 層**は、複数のIons・Molecules層のコンポーネントにより構成される。

### 依存関係
- 依存: Ions層、Molecules 層のみ
- 参照先: Templates 層

## Templates 層の定義と規則

## Pages 層の定義と規則
