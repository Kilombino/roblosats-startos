import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.7:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.7: your free onchain bond comes back by itself to a return address (or your payout address), signed in advance by your app; the order summary shows your onchain payout and whether it is confirmed; a Spamcoin payment method locks the order currency to Spamsats; clearer onchain payout after a Lightning take; the mining fee field no longer keeps a leading zero nor lets the payout go below the minimum.`,
    es_ES: `Roblosats 0.9.7: tu fianza on-chain libre vuelve sola a una dirección de devolución (o a tu dirección de cobro), firmada de antemano por tu app; el resumen de la orden muestra tu pago on-chain y si está confirmado; un método de pago Spamcoin fija la moneda de la orden en Spamsats; pago on-chain más claro tras una toma con Lightning; el campo de comisión de minería ya no deja un cero delante ni deja bajar el pago del mínimo.`,
    de_DE: `Roblosats 0.9.7: Die freie Onchain-Kaution kommt automatisch zurück; die Zusammenfassung zeigt die Onchain-Auszahlung und ihren Status; Spamcoin-Zahlungsmethoden legen die Währung auf Spamsats fest.`,
    pl_PL: `Roblosats 0.9.7: wolna kaucja onchain wraca sama; podsumowanie pokazuje wypłatę onchain i jej stan; metody Spamcoin ustawiają walutę na Spamsats.`,
    fr_FR: `Roblosats 0.9.7 : la caution onchain libre revient toute seule ; le résumé montre le paiement onchain et son état ; les méthodes Spamcoin fixent la devise en Spamsats.`,
  },
  migrations: {},
})
