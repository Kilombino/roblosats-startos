import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.20:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl20: the trade screen now redraws as soon as an action changes the order (for example after Confirm fiat sent it no longer keeps showing the button). Based on RoboSats v0.8.8. Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl20: la pantalla de la orden se redibuja en cuanto una acción la cambia (por ejemplo, tras Confirmar fiat enviado ya no sigue mostrando el botón). Basada en RoboSats v0.8.8. Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl20: Der Handelsbildschirm wird sofort neu gezeichnet, wenn eine Aktion die Order ändert (z. B. zeigt er nach „Fiat gesendet bestätigen“ den Knopf nicht mehr an). Basierend auf RoboSats v0.8.8.`,
    pl_PL: `Roblosats 0.8.8-rl20: ekran transakcji odświeża się od razu, gdy akcja zmienia zlecenie (np. po potwierdzeniu wysłania fiata nie pokazuje już przycisku). Oparty na RoboSats v0.8.8.`,
    fr_FR: `Roblosats 0.8.8-rl20 : l'écran de l'échange se redessine dès qu'une action modifie l'ordre (par exemple, après « Confirmer l'envoi du fiat », il n'affiche plus le bouton). Basé sur RoboSats v0.8.8.`,
  },
  migrations: {},
})
