import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.11:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.11: Clearnet mode (beta) in the Android app; network changes without restarting; the automatic return of your onchain bond is signed at a few fee rates and the coordinator sends the cheapest one the mempool needs (it always paid up to 10 sat/vB); expired, cancelled or taken orders no longer stay listed in the order book.`,
    es_ES: `Roblosats 0.9.11: modo Clearnet (beta) en la app de Android; cambios de red sin reiniciar; la devolución automática de tu fianza on-chain se firma a varias comisiones y el coordinador manda la más barata que pide la mempool (antes pagaba siempre hasta 10 sat/vB); las órdenes caducadas, canceladas o tomadas ya no se quedan listadas en el libro.`,
    de_DE: `Roblosats 0.9.11: Clearnet-Modus (Beta) in der Android-App; automatische Kautionsrückgabe zur passenden Gebühr; abgelaufene Orders verschwinden sofort aus dem Orderbuch.`,
    pl_PL: `Roblosats 0.9.11: tryb Clearnet (beta) w aplikacji Android; automatyczny zwrot kaucji po właściwej opłacie; wygasłe zlecenia od razu znikają z księgi.`,
    fr_FR: `Roblosats 0.9.11 : mode Clearnet (bêta) dans l'app Android ; retour automatique de la caution au bon tarif ; les ordres expirés disparaissent tout de suite du carnet.`,
  },
  migrations: {},
})
