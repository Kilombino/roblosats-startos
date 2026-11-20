import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.10:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.10: the chat reconnects when the connection to the coordinator's relay drops (it stayed empty); typed onchain addresses are checked (checksum, network, type) and confirmed in groups of four before they are sent; every dispute decision works with an onchain escrow; the final summary shows where your bond came back to; onchain swap payouts from 1 sat/vB.`,
    es_ES: `Roblosats 0.9.10: el chat se reconecta cuando se corta la conexión con el relay del coordinador (se quedaba vacío); las direcciones on-chain que escribes se comprueban (checksum, red, tipo) y se confirman en grupos de cuatro antes de enviarlas; todas las decisiones de disputa funcionan con depósito on-chain; el resumen final dice a qué dirección volvió tu fianza; cobros on-chain por swap desde 1 sat/vB.`,
    de_DE: `Roblosats 0.9.10: der Chat verbindet sich neu; eingegebene Onchain-Adressen werden geprüft und bestätigt; alle Streitfallentscheidungen onchain.`,
    pl_PL: `Roblosats 0.9.10: czat łączy się ponownie; wpisane adresy onchain są sprawdzane i potwierdzane; wszystkie decyzje w sporach onchain.`,
    fr_FR: `Roblosats 0.9.10 : le chat se reconnecte ; les adresses onchain saisies sont vérifiées et confirmées ; toutes les décisions de litige onchain.`,
  },
  migrations: {},
})
