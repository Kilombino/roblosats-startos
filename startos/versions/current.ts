import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.3:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.3: onchain takes and deposits that do not get stuck. Taking an onchain order again after a cancelled Lightning take shows the onchain bond (it showed an empty hold invoice), and a 丰 sat order no longer reads "Amount: 0". Your app signs the onchain steps by itself while the order is open: the payment screens now say to keep the order open after paying, the waiting screens say whose signature is missing, the screen stays on while a signature is pending, and a confirmed payment shows "Payment confirmed, building the deposit".`,
    es_ES: `Roblosats 0.9.3: tomas on-chain y depósitos que ya no se atascan. Volver a tomar una orden on-chain después de cancelar una toma con Lightning muestra la fianza on-chain (salía un hold invoice vacío), y una orden 丰 sat ya no dice «Cantidad: 0». Tu app firma sola los pasos on-chain mientras la orden está abierta: las pantallas de pago dicen que la dejes abierta después de pagar, las de espera dicen qué firma falta, la pantalla no se apaga mientras falta una firma y un pago confirmado muestra «Pago confirmado, preparando el depósito».`,
    de_DE: `Roblosats 0.9.3: Onchain-Übernahmen und Einzahlungen bleiben nicht mehr hängen. Nach einer abgebrochenen Lightning-Übernahme zeigt eine neue Onchain-Übernahme die Onchain-Kaution. Die App signiert selbst, solange der Auftrag geöffnet ist; die Bildschirme sagen das jetzt und der Bildschirm bleibt an.`,
    pl_PL: `Roblosats 0.9.3: przejęcia on-chain i depozyty już się nie zawieszają. Ponowne przejęcie on-chain po anulowanym przejęciu Lightning pokazuje kaucję on-chain. Aplikacja podpisuje sama, gdy zlecenie jest otwarte; ekrany to teraz mówią, a ekran pozostaje włączony.`,
    fr_FR: `Roblosats 0.9.3 : les prises et dépôts onchain ne restent plus bloqués. Reprendre un ordre onchain après une prise Lightning annulée affiche la caution onchain. L'application signe seule tant que l'ordre est ouvert ; les écrans le disent maintenant et l'écran reste allumé.`,
  },
  migrations: {},
})
