# Deploy

## now

1 . Installera [`now`](https://zeit.co/now) globalt via `npm`. Om du får error att du inte har tillåtelse så måste du fixa dessa steg: [Prevent Permission Errors @ npm](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

```bash
npm install -g now
```

2 . Bygg upp dina filer `npm run build`
3 . Gå in i `dist`-mappen: `cd dist`
4 . Kör `now`
```bash
now
```
Första gången du kör detta kommando så kommer `now` begära att du loggar in. Följ inloggningsprocessen och när denna är klar -> kör `now` igen. Du kan ange argumentet `--name` följt av ett namn för att namnge din deployment.
```bash
now --name test-site
```
5 . Du får nu tillbaka en länk till din deployade sida. Besök den så ligger nu din sida på den länken.
6 . Du kan även ge ett **alias** till dina deployade applikationer om du vill ha ett mer lättåtkompligt namn:
```bash
now alias old new
```
_exempel_
```bash
now alias test-site-hxyymtqkqa.now.sh testy-cooly
```
Sidan kommer nu kommas åt via `https://testy-cooly.now.sh` istället för `https://test-site-hxyymtqkqa.now.sh`

## gh-pages

Vi vill inte skicka upp hela mappen till branchen `gh-pages` utan enbart `dist`-mappen. Det betyder att vi vill på branchen  `gh-pages` ta bort `dist` från `.gitignore` men enbart på en separat branch och inte på `master`. Vi vill sedan skicka upp `dist`-mappen på denna branch.

### Alternativ 1 - paketet `gh-pages`

Skapa ett repo för ditt projekt innan och lägg till repot som `origin` i git.

1 . Installera paketet `gh-pages` lokalt:
```bash
npm install --save-dev gh-pages
```
2 . Lägg till följande rad i `"scripts"` i `package.json`:
```json
"deploy" : "gh-pages -d dist"
```
3 . Kör `npm run build`
4 . Kör sedan `npm run deploy`
5 . Din sida borde nu vara upplagd på live via ditt repo.

### Alternativ 2 - manuellt

1 . Checka ut branchen `gh-pages`
```bash
git checkout -b gh-pages
```
2 . Ta bort `dist` från `.gitignore` och spara ändringarna i `.gitignore`
3 . Bygg upp dina filer: `npm run build`
4 . `git add .`
5 . `git commit -m "Add dist folder"`
```js
git subtree push --prefix dist origin gh-pages
```
Det sista kommandot pushar enbart upp mappen `dist` till branchen `gh-pages`. Detta är för att annars kommer inte `gh-pages` att hitta `index.html` eftersom den ligger i en undermapp och inte i rootmappen.