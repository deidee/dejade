# ![deJade](https://deidee.com/logo.png?str=deJade)

Groen is de primaire kleur van de identiteit van [deIdee](https://deidee.nl/).
In tegenstelling tot wat gebruikelijk is bij een huisstijl wordt deze kleur echter niet gedefinieerd door een specifieke kleurcode, maar door een (vrij ruime) bandbreedte.
De herkenbaarheid zou in dit geval juist moeten zitten in de variatie.
Als verschillende huisstijlelementen naast elkaar worden gebruikt, zoals de blokjes in het logo, is het de bedoeling dat deze van elkaar afwijken.
Ook bij verschillende implementaties van dezelfde elementen zou deze variatie terug moeten komen; zo zal het logo op het ene document weer een beetje anders zijn als op het andere document.

Tot slot kan de kleur worden beïnvloed — uiteraard bínnen de gestelde bandbreedtes — door externe factoren, zoals de tijd van de dag, de positie van de muis op een beeldscherm, of hoe warm het buiten is.

## Definitie

De originele regel (_Python_)code, circa 2006:

```Python
fill(random(0, .5), random(.5, 1), random(0, .75), .5)
```

## Uitkomsten

De meest „extreme” mogelijkheden zijn als volgt:

<code style="background:#007f00;color:#fff">#007f00</code>
<code style="background:#00ff00;color:#fff">#00ff00</code>
<code style="background:#007fbf;color:#fff">#007fbf</code>
<code style="background:#00ffbf;color:#fff">#00ffbf</code>
<code style="background:#7f7f00;color:#fff">#7f7f00</code>
<code style="background:#7f7fbf;color:#fff">#7f7fbf</code>
<code style="background:#7f7f00;color:#fff">#7f7f00</code>
<code style="background:#7fffbf;color:#fff">#7fffbf</code>

Alle kleuren die tussen deze mogelijkheden kunnen worden geïnterpoleerd zijn ook mogelijk.

## Installatie

```Shell
npm i @deidee/dejade
```

## Gebruik

_deJade_ kan worden toegepast op een webpagina door een link naar het stijlblad in de `head` te plaatsen:

```HTML
<link rel="stylesheet" href="css/dejade.min.css">
```

Vervolgens kan de kleur via een ``class`` op verschillende manieren op elementen worden toegepast:

| ``class`` | beschrijving |
| --------- | --- |
| `bg-dejade` | Past _deJade_ toe als achtergrondkleur van en vlak. |
| `border-dejade` | Voegt een rand toe aan een vlak en geeft deze _deJade_ als kleur. |
| `fill-dejade` | Past _deJade_ toe als vulkleur van een SVG-element. |
| `stroke-dejade` | Past _deJade_ toe als omlijning van een SVG-element. |
| `text-dejade` | Past _deJade_ toe als tekstkleur. |

## Interactie

_deJade_ komt het best tot z’n recht als het interacties aangaat. Dergelijke interacties zijn buiten de scope van dit pakket, maar het pakket biedt wel aanknopingspunten.

| `class` | `data`-attribuut | CSS-variabele | gebruik |
| --- | --- | --- | --- |
| `js-degyro` | `data-degyro` | `--dejade-degyro` | interactie met een gyroscoop |
| `js-deklik` | `data-deklik` | `--dejade-deklik` | interactie met een (muis)klik |
| `js-demuis` | `data-demuis` | `--dejade-demuis` | interactie met een muis (bijvoorbeeld de positie op het scherm) |
| `js-derand` | `data-derand` | `--dejade-derand` | interactie met willekeur (bijvoorbeeld het herladen van een pagina) |
| `js-detijd` | `data-detijd` | `--dejade-detijd` | interactie met tijd |

Door een ``class`` of `data`-attribuut uit deze tabel toe te passen op een element wordt toegang verschaft tot de relevante CSS-variabele die vervolgens middels scripting kan worden beïnvloed.

## Uitbreidingen

De implementatie van _deJade_ in de identiteit van _deIdee_ gaat via _greenius_ — een algoritme dat ervoor zorgt dat er onder specifieke condities specifieke uitzonderingen worden gemaakt op de kleur.
Zo is gedurende de borstkankermaand oktober bijvoorbeeld altijd één van de blokjes van het logo roze in plaats van groen.

## Publiceren

Publiceren wordt gedaan door _deIdee_ en wel op de volgende manier:

```Shell
npm publish --access public
```
