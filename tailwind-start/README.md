# Watch file

```bash
npm install -D tailwind postcss autofixer
```

---

```bash
npx tailwind -p
```

---

```bash
npx tailwindcss -i ./src/tailwind.css -c ./.config/tailwind.config.js -o ./dist/tailwind.css

npx tailwindcss -i ./css/tailwind.css -c tailwind.config.js -o ./dist/tailwind.css --watch
```
