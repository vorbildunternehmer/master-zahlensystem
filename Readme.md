# Major-Zahlen-System

Das Major-Zahlensystem ist ein powervolles Tool des Gedächtnistrainings.

Fortan funktioniert das Umwandeln von Zahlen in Wörter noch einfacher. Mittels dieses Programms ist es möglich, aus beliebig langen Zahlenkombinationen automatisch Wörter nach dem Master-System zu generieren. Und Wörter können in Zahlen konvertiert werden.

#### Beispiel:
`123456 = Ton Mauer Leiche`

Die Wortbibliothek umfasst über 1.000 Wörter.

Die Wörter können anschließend wieder in Zahlen umgewandelt werden.

### Zuordnungliste

| Ziffer | Ersatz-Konsonanten | Merkhilfen |
|---| ---| ---|
|0 | s, z, ß, ss, c (weich) | vgl. englisch '''z'''er'''o''' |
|1 | t, d, th | ''t'' könnte man mit einer 1 verwechseln, ''d'' is t lautverwandt<br />''d'' und ''t'' haben einen Abstrich (Linie nach unten)
|2 | n | n hat zwei Beine
|3 | m | m hat drei Beine
|4 | r | vie'''r''' endet mit ''r''
|5 | l | L erinnert an die römische Ziffer 50<br />L = Hand mit abgespreizten Daumen = 5 Finger
|6 | ch, j, sch, g (weich) | j wie Dschungel<br />''g'' als gedrehte ''6''
|7 | k, ck, g (hart), c (hart) | 7 ist eine '''G'''lü'''ck'''szahl<br />''K'' setzt sich aus zwei ''7'' zusammen
|8 | f, v, w, ph | V8-Motor bei VW<br />das handschriftliche ''f'' hat genau wie 8 zwei Schleifen
|9 | p, b | 9 ist ein gespiegeltes p oder gedrehtes b (beide sind lautverwandt)

# Installation

```bash
npm i https://github.com/vorbildunternehmer/master-zahlensystem;
```

# Verwendung Zahl zu Wort

```js
import Major from 'major-zahlensystem-generator'
Major.majorTranslate(123456)
return Major.result
```
Alternativ
```js
const Major = require('major-zahlensystem-generator')
Major.majorTranslate(123456)
return Major.result
```

# Verwendung Wort zu Zahl

```js
import Major from 'major-zahlensystem-generator'
Major.majorTranslateWord('Testwort')
return Major.result
```
Alternativ
```js
const Major = require('major-zahlensystem-generator')
Major.majorTranslateWord('Testwort')
return Major.result
```

# Docker-Compose Developement

**.env**
```sh
NUMBER=123456
WORD='Testwort'
```
Anschließend
```sh
docker-compose up -d;
```

PS: In der Konsole wird das Ergebnis angezeigt.
