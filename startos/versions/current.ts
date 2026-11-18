import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.5:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.5: the onchain release in one signature. When the seller confirms the payment, the seller's app signs the release alone and the coordinator broadcasts it; the buyer signs nothing and nobody has to open the order again. Releases started with older apps can be finished the same way. In mixed orders where the buyer took with Lightning, the buyer signs nothing onchain. The app no longer says it signed when it only sent its first part.`,
    es_ES: `Roblosats 0.9.5: la liberación on-chain con una sola firma. Cuando el vendedor confirma el pago, su app firma la liberación sola y el coordinador la emite; el comprador no firma nada y nadie tiene que volver a abrir la orden. Las liberaciones empezadas con apps anteriores se terminan igual. En las órdenes mixtas en que el comprador tomó con Lightning, el comprador no firma nada on-chain. La app ya no dice que ha firmado cuando solo ha enviado su primera parte.`,
    de_DE: `Roblosats 0.9.5: Die Onchain-Freigabe mit einer einzigen Signatur. Wenn der Verkäufer die Zahlung bestätigt, signiert seine App die Freigabe allein und der Koordinator sendet sie; der Käufer signiert nichts.`,
    pl_PL: `Roblosats 0.9.5: zwolnienie on-chain jednym podpisem. Gdy sprzedawca potwierdzi płatność, jego aplikacja sama podpisuje zwolnienie, a koordynator je rozgłasza; kupujący niczego nie podpisuje.`,
    fr_FR: `Roblosats 0.9.5 : la libération onchain en une seule signature. Quand le vendeur confirme le paiement, son application signe seule la libération et le coordinateur la diffuse ; l'acheteur ne signe rien.`,
  },
  migrations: {},
})
