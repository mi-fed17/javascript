# `export/import`

> Dela upp redan existerande kodbas i olika [ES-modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

1 . Använd [webpack-boilerplate](https://github.com/mi-fed17/webpack-boilerplate) och __dela upp koden från Musikinstitutet i separata filer__. Varje modul kan vara en egen fil eller så kan separata funktioner vara en egen fil. Börja smått, ta en modul eller en avgränsad del av er applikation och flytta den till en separat fil. Använd sedan `import` och `export` för att länka filerna mellan varandra. På detta sätt visar vi upp tydligare vad som beror på vad och gör det lättare att gruppera koden. Tänk på att du kan ta bort själva objektet om du vill och bara exportera allting i filen. Ett exempel är nedan men det finns flera exempel på hur du kan importera och exportera i filen [17_bundler.md](17_bundler.md) eller följ detta [Cheat Sheet](https://gist.github.com/vasco3/22b09ef0ca5e0f8c5996#modules)
_före_
```js
const Model = {
    getAll() {
        return true;
    }
    getOne(){
        return true;
    }
};
```
_efter_
```js
export function getAll(){
    return true;
}
export function getOne(){
    return true;
}
```
```js
// In the file where you import the functions
import * as Model from './model.js';
```

2 . Leta upp någon kod som känns repetitiv, extra krånglig eller någon kod som du har tagit från Stack Overflow. Viss funktionalitet som t.ex. sortering eller datumformatering är sådant som troligtvis gjort massor av gånger av andra utvecklare. Det betyder att det troligtvis finns ett paket som gör detta åt oss.

Försök att hitta ett `npm`-paket som gör exakt eller liknande det du försöker göra. Byt ut din egen kod mot paketets kod och få det att fungera som det gjorde innan du hade lagt till paketet. För att hitta ett paket kan du antingen använda sökfunktionen på [npmjs.com](https://npmjs.com) eller använda google om du inte får något bra sökresultat. Funktionalitet som det brukar finnas ett paket för är t.ex.:
* Sortering/filtrering av arrayer
* Datumformattering
* Formulärhanteringsbibliotek
* Errormeddelandebibliotek
* etc.