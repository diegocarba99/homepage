<div align="center">
    <h1><img src="icons/favicon_small.png"> Bunny Start Page </h1>
    <b>Hasiera orri sinple eta funtzionala</b>
</div>


<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/preview.png">
</p>



## Erabilera:

#### Haiserako orri bezela Github Pages erabilita:

1. **Fork** egin biltegi honi.
2. Gaitu *Github Pages* zerbitzua biltegiko ezarpenetan: `Settings > GitHub Pages > Source [master branch] > Save`.
3. Nabigatzailearen ezarpenetan, ezarri sortu berri duzun `Github Pages Link` esteka hasiera orri bezela.

### Hasiera orri bezela lokalean:

1. Deskargatu biltegi hau zure makinan
2. Nabigatzailearen ezarpenetan, ezarri biltegiko `index.html` fitxategia hasiera orri bezela.

#### Fitxa berri bezela:

1. Aurreko bi aukeretako bat aukeratuta, ezarri hasiera orria hurrengo *Add-on/Extension* erabilita: 

-   Firefox erabiltzaileentzako: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search)
-   Chromium (Brave, Vivaldi, Chrome) erabiltzaileentzako: [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

## Pertsonalizazioa

> All the code is using variables and is comented, It's easy to customize the project to your own, and this sections are the principal customizable elements in the Startpage:

### Estekak

Esteka berriak gehitzeko, edota daudenak aldatzeko, `HTML` kodean etiketa hau bilatu:

```html
<a href="https://github.com/" target="blank" class="qlink__link qlink__link-1">
    <i class="qlink__icon" data-feather="github"></i>
</a>
```

Esteka aldatzeko `href` propietateko balioa aldatu. `target="blank"` propietateak esteka fitxa berri batean irekitzea egiten du. 
Hasiera orriak [Feather icons](https://feathericons.com/) erabiltzen du ikonoentzako. Ikono pertsonalizatua nahi baduzu, bilatu honen izena  [https://feathericons.com/](https://feathericons.com/) web gunean eta aldatu `data-feather=""` propietateko balioa.


### Koloreak

In the CSS code you can always change the variables for both themes (Dark and Light)
`CSS` kodean erabilgarri dauden bi temen koloreak aldatu ditzazkezu. Bilatu hurrengo kodea `css/style.css` fitxategian eta **RGB** balioak aldatu.

```css
/* Light theme  */
:root {
    --accent: #186efdaa;
    --bg: #f5f5f5;
    --sbg: #e4e6e6;
    --fg: #3a3a3a;
    --imgcol: linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
    );
}

/* Dark theme  */
.darktheme {
    --accent: #186efd60;
    --bg: #1e1f21;
    --sbg: #2c2d31;
    --fg: #d8dee9;
    --imgcol: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}
```


### Greetings

You can put your name and change the greetings.
Zure izena gehitu dezakezu eta agur pertsonalizatuak izan eguneko orduaren arabera. Aldatu hurrengo aldagaiak `js/greeting.js` fitxategian:

```js
var name = 'Diego';
var gree1 = 'Jun lotara! ';
var gree2 = 'Egunon! ';
var gree3 = 'Arratsaldeon ';
var gree4 = 'Gabon ';
```

Aldaketa orduak pertsonalizatzeko,  hurrengo aldagaiak aldatu:

```js
var morning = 6;
var midday = 14;
var night = 21;
```

### Weather Info

Eguraldia erabilgarri izateko, API giltza bat behar duzu [https://openweathermap.org/](https://openweathermap.org/) webgunean. Zure kokapeneko latitude eta longitudeak behar dituzu. Kalkulatzeko erabili [https://www.latlong.net/](https://www.latlong.net/) webgunea. 

Ondoren, aldatu hurrengo aldagaiak `js/wheater.js` fitxategian lortu berri dituzun API giltzarekin eta latitude eta longitude balioekin:

```js
const key = 'abcdefghijklmnopqrstuvwzyx123456';

function setPosition(position) {
    let latitude = 43.248200;
    let longitude = -1.990520;
    getWeather(latitude, longitude);
}
```

> Zure API giltza publikoki ez baduzu publikatu nahi Github Pages erabiltzen baduzu, biltegia pribatu bihurtu eta link berdina erabiltzeko gai izango zara.
