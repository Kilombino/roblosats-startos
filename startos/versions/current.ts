import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.6:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.6: the order card shows "Amount" in BTC (丰 sat) and a separate "Fiat traded" row with what is paid and how. Settings has "Recent logs" (with tokens, keys and invoices removed) to copy or share when something breaks, and an update notice that shows what is new. "Search for orders" in Spanish and Catalan.`,
    es_ES: `Roblosats 0.9.6: la tarjeta de la orden muestra «Cantidad» en BTC (丰 sat) y una fila aparte «Fiat intercambiado» con lo que se paga y cómo. Ajustes tiene «Registros recientes» (sin tokens, claves ni facturas) para copiarlos o compartirlos cuando algo falla, y un aviso de actualización que muestra las novedades. «Buscar órdenes» en castellano y catalán.`,
    de_DE: `Roblosats 0.9.6: Die Auftragskarte zeigt den Betrag in BTC (丰 sat) und eine eigene Zeile für den Fiat-Betrag. In den Einstellungen gibt es "Recent logs" und einen Update-Hinweis.`,
    pl_PL: `Roblosats 0.9.6: karta zlecenia pokazuje kwotę w BTC (丰 sat) i osobny wiersz z kwotą fiat. W ustawieniach są "Recent logs" i powiadomienie o aktualizacji.`,
    fr_FR: `Roblosats 0.9.6 : la carte de l'ordre affiche le montant en BTC (丰 sat) et une ligne séparée pour le montant fiat. Les réglages ont « Recent logs » et un avis de mise à jour.`,
  },
  migrations: {},
})
