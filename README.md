# ZAKLJUČANO — primer sajta za escape room

Demo sajt. Plaćanje i forme su samo simulacija, ništa se ne naplaćuje i ništa se ne šalje.

## Objava na GitHub Pages

1. Napravite novi repozitorijum na GitHubu.
2. Ubacite sav sadržaj ovog foldera u koren repozitorijuma (zajedno sa folderom `slike/` i fajlom `.nojekyll`).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Posle minut-dva sajt je na `https://VAŠE-IME.github.io/IME-REPOA/`.

## Važno

- Sajt mora da se otvara preko servera (GitHub Pages ili lokalno). Dupli klik na fajl (`file://`) neće učitati delove stranice.
  Lokalno: u ovom folderu pokrenite `npx serve` ili `python -m http.server`, pa otvorite `http://localhost:8000`.
- Animacije (GSAP, ScrollTrigger, Lenis) i fontovi se učitavaju sa CDN-a, pa treba internet.
- Sve slike su u `slike/`. Ne menjajte im imena.

## Stranice

`index.dc.html` početna · `sobe.dc.html` · `soba-podrum/sef/kabina/laboratorija.dc.html` · `rezervacija.dc.html` → `placanje.dc.html` → `potvrda.dc.html` · `vauceri.dc.html` · `timbilding.dc.html` · `rodjendani.dc.html` · `rang-lista.dc.html` · `faq.dc.html` · `kontakt.dc.html` · `mobilni-pregled.dc.html`

Test kartica: `4242 4242 4242 4242` (uspeh), `4000 0000 0000 0002` (odbijena). Zagonetka: reč je SEF → kod TRAG10.
