import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.12:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.12: an onchain bond is no longer penalized when a dispute opens (it waits for the decision and comes straight back if you keep it); your bond's penalty is signed at a few fee rates; Spamcoin (SHA-256) sent by mistake to your bond or funding address can be taken back with "Recover without the coordinator" (Spamchain mode); a "Pay with BTC (BLAKE2b) only" warning next to every onchain address to pay; clearer take-race notice.`,
    es_ES: `Roblosats 0.9.12: la fianza on-chain ya no se penaliza al abrirse una disputa (espera a la decisión y te vuelve directamente si la conservas); la penalización de tu fianza se firma a varias comisiones; los Spamcoin (SHA-256) enviados por error a tu dirección de fianza o de aportación se recuperan con «Recuperar sin el coordinador» (modo Spamchain); aviso «Paga solo con BTC (BLAKE2b)» junto a cada dirección on-chain que pagar; aviso más claro de la carrera de tomas.`,
    de_DE: `Roblosats 0.9.12: Onchain-Kautionen warten im Streitfall auf die Entscheidung; Strafen zur passenden Gebühr; versehentlich gesendete Spamcoin (SHA-256) lassen sich zurückholen; Hinweis „Nur mit BTC (BLAKE2b) bezahlen“.`,
    pl_PL: `Roblosats 0.9.12: kaucje onchain czekają na decyzję w sporze; kary po właściwej opłacie; omyłkowo wysłane Spamcoin (SHA-256) można odzyskać; ostrzeżenie „Płać tylko w BTC (BLAKE2b)”.`,
    fr_FR: `Roblosats 0.9.12 : les cautions onchain attendent la décision du litige ; pénalités au bon tarif ; les Spamcoin (SHA-256) envoyés par erreur se récupèrent ; avertissement « Payez uniquement en BTC (BLAKE2b) ».`,
  },
  migrations: {},
})
