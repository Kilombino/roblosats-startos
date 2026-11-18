import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.1:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.1: Spamcoin works like any other currency in the create form (Buy/Sell, market price + premium or a fixed price, on-chain escrow switch) instead of switching to RoboSats' swap mode; amounts are typed in whole Spamsats. Taking a Spamcoin range order shows Spamsats and the right fee estimate, and the final summary shows Spamcoin amounts in Spamsats and 丰 sat orders in sats.`,
    es_ES: `Roblosats 0.9.1: Spamcoin funciona como cualquier otra moneda en el formulario de crear (comprar/vender, precio de mercado + prima o precio fijo, interruptor de depósito on-chain) en vez de pasar al modo swap de RoboSats; los importes se escriben en Spamsats enteros. Al tomar una orden Spamcoin con rango se ven Spamsats y la comisión correcta, y el resumen final muestra los importes Spamcoin en Spamsats y las órdenes 丰 sat en sats.`,
    de_DE: `Roblosats 0.9.1: Spamcoin funktioniert im Erstellen-Formular wie jede andere Währung (Kaufen/Verkaufen, Marktpreis + Aufschlag oder Festpreis, Onchain-Treuhand) statt in den Swap-Modus von RoboSats zu wechseln; Beträge in ganzen Spamsats.`,
    pl_PL: `Roblosats 0.9.1: Spamcoin działa w formularzu tworzenia jak każda inna waluta (kupno/sprzedaż, cena rynkowa + premia lub stała cena, depozyt onchain) zamiast przełączać się w tryb swap RoboSats; kwoty w pełnych Spamsats.`,
    fr_FR: `Roblosats 0.9.1 : Spamcoin fonctionne comme toute autre devise dans le formulaire de création (achat/vente, prix du marché + prime ou prix fixe, dépôt onchain) au lieu de passer au mode swap de RoboSats ; montants en Spamsats entiers.`,
  },
  migrations: {},
})
