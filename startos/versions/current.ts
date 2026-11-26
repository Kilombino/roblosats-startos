import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.15:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.15: coordinator "Stats for Nerds" fixes: the 24 h contracted volume counts Spamcoin trades and trades taken with an onchain bond, the coordinator's commit hash links to its commit on Kilombino/roblosats, and its Lightning node links to its Nodex page.`,
    es_ES: `Roblosats 0.9.15: arreglos en las «estadísticas para nerds» del coordinador: el volumen contratado de 24 h cuenta los intercambios en Spamcoin y los tomados con fianza on-chain, el hash de commit del coordinador enlaza a su commit en Kilombino/roblosats y su nodo Lightning enlaza a su página en Nodex.`,
    de_DE: `Roblosats 0.9.15: Koordinator-Statistiken korrigiert (24-h-Volumen mit Spamcoin- und Onchain-Kautions-Trades, Commit-Link, Nodex-Link).`,
    pl_PL: `Roblosats 0.9.15: poprawione statystyki koordynatora (wolumen 24 h z transakcjami Spamcoin i z kaucją onchain, link do commita, link do Nodex).`,
    fr_FR: `Roblosats 0.9.15 : statistiques du coordinateur corrigées (volume 24 h avec les échanges Spamcoin et à caution onchain, lien du commit, lien Nodex).`,
  },
  migrations: {},
})
