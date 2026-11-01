import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.23:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl23: new coordinators now start with a 25M sats order limit instead of 250k sats (under $1 on the BTC chain), so young coordinators such as Rose Garden can take normal-sized orders. The limit still grows every 14 days and is lifted after 24 weeks. Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl23: los coordinadores nuevos empiezan con un límite de 25M sats por orden en vez de 250k sats (menos de 1 $ en la cadena BTC), así que coordinadores jóvenes como Rose Garden pueden aceptar órdenes de tamaño normal. El límite sigue creciendo cada 14 días y desaparece a las 24 semanas. Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl23: Neue Koordinatoren starten jetzt mit einem Orderlimit von 25M sats statt 250k sats (unter 1 $ auf der BTC-Chain), sodass junge Koordinatoren wie Rose Garden normale Orders annehmen können. Das Limit wächst weiterhin alle 14 Tage und entfällt nach 24 Wochen.`,
    pl_PL: `Roblosats 0.8.8-rl23: nowi koordynatorzy zaczynają z limitem 25M satów na zlecenie zamiast 250k (poniżej 1 $ na łańcuchu BTC), więc młodzi koordynatorzy, jak Rose Garden, mogą przyjmować zlecenia normalnej wielkości. Limit nadal rośnie co 14 dni i znika po 24 tygodniach.`,
    fr_FR: `Roblosats 0.8.8-rl23 : les nouveaux coordinateurs démarrent désormais avec une limite de 25M sats par ordre au lieu de 250k sats (moins de 1 $ sur la chaîne BTC), si bien que les jeunes coordinateurs comme Rose Garden peuvent accepter des ordres de taille normale. La limite augmente toujours tous les 14 jours et disparaît après 24 semaines.`,
  },
  migrations: {},
})
