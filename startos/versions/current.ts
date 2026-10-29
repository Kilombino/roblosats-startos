import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7.16:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.7-rl16. Same client as 0.8.7.15:1 (it uses StartOS's Tor); this release keeps the version in step with the Android app, whose built-in Tor moved to 0.4.9. Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.7-rl16. Mismo cliente que la 0.8.7.15:1 (usa el Tor de StartOS); esta versión mantiene el número a la par de la app Android, cuyo Tor integrado pasó a 0.4.9. Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.7-rl16. Derselbe Client wie 0.8.7.15:1 (er nutzt das Tor von StartOS); diese Version hält die Nummer mit der Android-App gleich, deren eingebautes Tor auf 0.4.9 gewechselt ist.`,
    pl_PL: `Roblosats 0.8.7-rl16. Ten sam klient co 0.8.7.15:1 (używa Tora StartOS); ta wersja utrzymuje numer zgodny z aplikacją Android, której wbudowany Tor przeszedł na 0.4.9.`,
    fr_FR: `Roblosats 0.8.7-rl16. Même client que 0.8.7.15:1 (il utilise le Tor de StartOS) ; cette version garde le numéro aligné sur l'application Android, dont le Tor intégré est passé à 0.4.9.`,
  },
  migrations: {},
})
