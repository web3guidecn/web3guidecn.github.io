# 链上新手指南

面向中文用户的交易所注册、下载与安全教程站。内容使用 Markdown 编写，由 Hugo 构建并通过 GitHub Actions 发布到 GitHub Pages。

## 本地预览

```powershell
hugo server --buildDrafts
```

## 发布

本项目发布到 `web3guidecn/web3guidecn.github.io`。在仓库 Settings > Pages 中选择 GitHub Actions，推送到 `main` 后自动构建并发布至 `https://web3guidecn.github.io/`。

## 内容约定

- 一个页面解决一个完整用户任务，不按同义词批量建页。
- `data/links.yaml` 集中管理渠道链接。
- 正文动作点使用 `cta` shortcode，文末 CTA 由页面 front matter 的 `cta` 参数生成。
- 渠道链接统一标记为第三方推广链接，并使用 `rel="sponsored nofollow"`。
