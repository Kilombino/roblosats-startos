import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.0:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.0: non-custodial on-chain escrow. On coordinators that offer it (Kilobot), orders can lock the trade in a 2-of-3 Taproot escrow on chain with on-chain bonds, a pre-signed fair rescue that works without the coordinator, the coordinator fee charged only when the trade completes, and on-chain orders can also be taken with Lightning. Also fixed-price and "丰 sat" orders, fee hints and low-fee warnings, leftover recovery, past orders and a final summary.`,
    es_ES: `Roblosats 0.9.0: depósito on-chain sin custodia. En los coordinadores que lo ofrecen (Kilobot) la orden puede bloquear el intercambio en un depósito Taproot 2 de 3 en cadena con fianzas on-chain, un rescate justo prefirmado que funciona sin el coordinador y la comisión cobrada solo si el intercambio se completa; las órdenes on-chain también se pueden tomar con Lightning. Además, órdenes a precio fijo y en «丰 sat», comisión recomendada y aviso de comisión baja, recuperación de sobrantes, órdenes pasadas y resumen final.`,
    de_DE: `Roblosats 0.9.0: Onchain-Treuhand ohne Verwahrung. Bei Koordinatoren, die sie anbieten (Kilobot), kann der Handel in einer 2-von-3-Taproot-Treuhand onchain mit Onchain-Kautionen gesperrt werden, mit einer vorab signierten fairen Rettung ohne Koordinator und der Gebühr nur bei abgeschlossenem Handel. Dazu Festpreis- und „丰 sat“-Aufträge, Gebührenhinweise und Rückholung von Überschüssen.`,
    pl_PL: `Roblosats 0.9.0: niepowierniczy depozyt onchain. U koordynatorów, którzy go oferują (Kilobot), transakcja może być zablokowana w depozycie Taproot 2-z-3 onchain z kaucjami onchain, wstępnie podpisanym uczciwym odzyskaniem bez koordynatora i opłatą pobieraną tylko po zakończonej transakcji. Do tego zlecenia ze stałą ceną i „丰 sat”, podpowiedzi opłat i odzyskiwanie nadwyżek.`,
    fr_FR: `Roblosats 0.9.0 : dépôt onchain sans garde. Chez les coordinateurs qui le proposent (Kilobot), l'échange peut être bloqué dans un dépôt Taproot 2-sur-3 onchain avec des cautions onchain, un secours équitable pré-signé qui fonctionne sans le coordinateur et des frais prélevés seulement si l'échange aboutit. Aussi : ordres à prix fixe et en « 丰 sat », conseils de frais et récupération des excédents.`,
  },
  migrations: {},
})
