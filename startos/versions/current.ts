import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.30:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl30: when the lightning payment to you as buyer fails, the "payment failed" screen has an Onchain tab to get paid onchain instead (on coordinators that offer onchain payouts). Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl30: si falla el pago Lightning cuando compras, la pantalla de «pago fallido» tiene una pestaña On-chain para cobrar on-chain (en los coordinadores que ofrecen cobros on-chain). Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl30: Schlägt die Lightning-Zahlung an dich als Käufer fehl, hat der Bildschirm „Zahlung fehlgeschlagen“ einen Onchain-Tab, um stattdessen onchain bezahlt zu werden (bei Koordinatoren mit Onchain-Auszahlungen).`,
    pl_PL: `Roblosats 0.8.8-rl30: gdy płatność Lightning dla ciebie jako kupującego się nie powiedzie, ekran „płatność nieudana” ma kartę Onchain, aby otrzymać środki onchain (u koordynatorów oferujących wypłaty onchain).`,
    fr_FR: `Roblosats 0.8.8-rl30 : si le paiement Lightning à vous, acheteur, échoue, l'écran « paiement échoué » a un onglet Onchain pour être payé onchain (chez les coordinateurs qui proposent les paiements onchain).`,
  },
  migrations: {},
})
