import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.24:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl24: in orders paid in Spamcoin, both sides now see the same Spamcoin amount, fixed by the coordinator when the order is taken (shown with "="; with "≈" while it is still an estimate or with a coordinator not updated yet). Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl24: en las órdenes que se pagan en Spamcoin, las dos partes ven ahora el mismo importe en Spamcoin, fijado por el coordinador al tomarse la orden (se muestra con "="; con "≈" mientras sigue siendo una estimación o con un coordinador sin actualizar). Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl24: Bei Orders, die in Spamcoin bezahlt werden, sehen beide Seiten jetzt denselben Spamcoin-Betrag, den der Koordinator bei der Annahme der Order festlegt (angezeigt mit „=“; mit „≈“, solange es eine Schätzung ist oder der Koordinator noch nicht aktualisiert wurde).`,
    pl_PL: `Roblosats 0.8.8-rl24: w zleceniach płaconych w Spamcoin obie strony widzą teraz tę samą kwotę Spamcoin, ustaloną przez koordynatora w chwili przyjęcia zlecenia (pokazywaną ze znakiem „=”; ze znakiem „≈”, dopóki to szacunek lub koordynator nie jest zaktualizowany).`,
    fr_FR: `Roblosats 0.8.8-rl24 : dans les ordres payés en Spamcoin, les deux parties voient désormais le même montant en Spamcoin, fixé par le coordinateur au moment où l'ordre est pris (affiché avec « = » ; avec « ≈ » tant que c'est une estimation ou avec un coordinateur pas encore mis à jour).`,
  },
  migrations: {},
})
