# Custom domain + GitHub Pages (quick checklist)

This project is designed for GitHub Pages publishing from a branch (e.g., `main`).

## 1) Add the domain in GitHub

In your repo: **Settings → Pages → Custom domain**. Enter your domain and save.

- GitHub recommends adding the custom domain in GitHub **before** editing DNS to reduce takeover risk.
- If you publish from a branch, GitHub will add a `CNAME` file to the root of your source branch.

## 2) DNS at your registrar

GitHub Docs notes that for an apex domain (e.g., `example.com`) you need an ALIAS/ANAME/A record.

- If you use `www.example.com`, you typically use a CNAME record pointing to your GitHub Pages default domain.

## 3) Keep `CNAME` correct

GitHub Docs troubleshooting notes:

- `CNAME` filename must be uppercase.
- The file can contain only **one** domain, and it must be the domain name only (no scheme, no path).

## 4) HTTPS

After DNS is correct, you can enable **Enforce HTTPS** in Pages settings.

## Notes

DNS changes can take time to propagate.

