import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.14:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.14: take a Lightning order with an onchain bond (buyer: only your bond on chain; seller: bond and escrow on chain); the maker sees onchain takes on their way with their transactions; attach the chat to a dispute (by default, or once afterwards); Spamsats as an amount unit for any order with "(≈ N 丰 sat)" while you type; alerts give exactly the amount the screen asks for; "Your bond has 1 confirmation" right away when your app has to sign; final summary with rewards by reason; onchain screens without sideways scrolling; exact amount you receive once your payout is set.`,
    es_ES: `Roblosats 0.9.14: toma una orden Lightning con fianza on-chain (comprador: solo tu fianza on-chain; vendedor: fianza y depósito on-chain); el creador ve las tomas on-chain en camino con sus transacciones; adjunta el chat a una disputa (por defecto, o una vez después); Spamsats como unidad de importe en cualquier orden con «(≈ N 丰 sat)» mientras escribes; los avisos dan exactamente el importe que pide la pantalla; «Tu fianza tiene 1 confirmación» al momento cuando tu app tiene que firmar; resumen final con recompensas por motivo; pantallas on-chain sin desplazamiento lateral; importe exacto que recibes una vez puesto tu cobro.`,
    de_DE: `Roblosats 0.9.14: Lightning-Orders mit Onchain-Kaution nehmen; der Maker sieht Onchain-Übernahmen mit ihren Transaktionen; Chat nachträglich an einen Streitfall anhängen; Spamsats als Betragseinheit; Hinweise nennen den exakten Betrag; Zusammenfassung mit Belohnungen nach Grund.`,
    pl_PL: `Roblosats 0.9.14: przyjmowanie zleceń Lightning z kaucją onchain; maker widzi przejęcia onchain z ich transakcjami; czat można dołączyć do sporu później; Spamsats jako jednostka kwoty; powiadomienia podają dokładną kwotę; podsumowanie z nagrodami według powodu.`,
    fr_FR: `Roblosats 0.9.14 : prendre un ordre Lightning avec une caution onchain ; le maker voit les prises onchain avec leurs transactions ; joindre le chat à un litige plus tard ; Spamsats comme unité de montant ; les avis donnent le montant exact ; résumé avec récompenses par motif.`,
  },
  migrations: {},
})
