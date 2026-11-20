import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.9:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.9: legacy (1…) and P2SH (3…) payout, refund and bond return addresses besides segwit and taproot; the seller's leftover funding comes back by itself to its payout address in the deposit, with a tighter recommended amount; a fair deadline gives the other trader at least an hour when you finish your part of the onchain setup; the onchain taker is told when its bond payment is seen in the mempool.`,
    es_ES: `Roblosats 0.9.9: direcciones legacy (1…) y P2SH (3…) para cobro, devolución y fianza, además de segwit y taproot; lo que sobra de la aportación del vendedor vuelve solo a su dirección de cobro en el depósito, con un importe recomendado más ajustado; un plazo justo da al otro al menos una hora cuando terminas tu parte del montaje on-chain; el taker on-chain recibe aviso cuando su fianza se ve en la mempool.`,
    de_DE: `Roblosats 0.9.9: Legacy- (1…) und P2SH-Adressen (3…); übriges Funding kommt automatisch zur Auszahlungsadresse zurück; faire Frist von mindestens einer Stunde.`,
    pl_PL: `Roblosats 0.9.9: adresy legacy (1…) i P2SH (3…); nadwyżka wraca sama na adres wypłaty; sprawiedliwy termin co najmniej godziny.`,
    fr_FR: `Roblosats 0.9.9 : adresses legacy (1…) et P2SH (3…) ; le surplus revient tout seul à l'adresse de paiement ; délai équitable d'au moins une heure.`,
  },
  migrations: {},
})
