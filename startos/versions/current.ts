import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.2:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.2: clearer 丰 sat orders. In the book a 丰 sat order shows its sats in Amount and what is paid in exchange next to its payment methods ("2,100 Spamsats", or "≈ 2,100 Spamsats" while it follows the market price); "Sats now" shows "—" for them and explains the column in a tooltip. The order page reads "Paid with: 2,100 Spamsats via <methods>". The leftover RoboSats "Swap In/Out" options are gone from the book filter and the Search dialog.`,
    es_ES: `Roblosats 0.9.2: órdenes 丰 sat más claras. En el libro una orden 丰 sat muestra sus sats en Importe y lo que se paga a cambio junto a sus métodos de pago («2.100 Spamsats», o «≈ 2.100 Spamsats» si sigue el precio de mercado); «Sats ahora» muestra «—» en ellas y explica la columna en una ayuda. La página de la orden dice «Se paga con: 2.100 Spamsats por <métodos>». Fuera las opciones «Swap In/Out» heredadas de RoboSats del filtro del libro y del diálogo Buscar.`,
    de_DE: `Roblosats 0.9.2: klarere 丰-sat-Aufträge. Im Orderbuch zeigt ein 丰-sat-Auftrag seine Sats im Betrag und die Gegenleistung neben den Zahlungsmethoden („2.100 Spamsats“ oder „≈ 2.100 Spamsats“ bei Marktpreis); „Sats jetzt“ zeigt dort „—“. Die alten RoboSats-Optionen „Swap In/Out“ sind entfernt.`,
    pl_PL: `Roblosats 0.9.2: czytelniejsze zlecenia 丰 sat. W księdze zlecenie 丰 sat pokazuje sats w kwocie, a zapłatę obok metod płatności („2 100 Spamsats” lub „≈ 2 100 Spamsats” przy cenie rynkowej); „Sats teraz” pokazuje „—”. Usunięto stare opcje RoboSats „Swap In/Out”.`,
    fr_FR: `Roblosats 0.9.2 : ordres 丰 sat plus clairs. Dans le carnet, un ordre 丰 sat affiche ses sats dans le montant et ce qui est payé en échange à côté des moyens de paiement (« 2 100 Spamsats », ou « ≈ 2 100 Spamsats » au prix du marché) ; « Sats maintenant » affiche « — ». Les anciennes options RoboSats « Swap In/Out » ont disparu.`,
  },
  migrations: {},
})
