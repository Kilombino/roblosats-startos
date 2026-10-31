import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.18:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl18, based on RoboSats v0.8.8: garage key (one key for all your robots), coordinator fees in the order view, a better coordinator selector and two months of upstream fixes. Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl18, basada en RoboSats v0.8.8: llave del garaje (una sola llave para todos tus robots), comisión del coordinador en la vista de la orden, mejor selector de coordinador y dos meses de arreglos de upstream. Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl18, basierend auf RoboSats v0.8.8: Garage-Schlüssel (ein Schlüssel für alle deine Roboter), Koordinatorgebühren in der Orderansicht, eine bessere Koordinatorauswahl und zwei Monate Upstream-Korrekturen.`,
    pl_PL: `Roblosats 0.8.8-rl18, oparty na RoboSats v0.8.8: klucz garażu (jeden klucz dla wszystkich robotów), opłaty koordynatora w widoku zlecenia, lepszy wybór koordynatora i dwa miesiące poprawek z upstream.`,
    fr_FR: `Roblosats 0.8.8-rl18, basé sur RoboSats v0.8.8 : clé du garage (une seule clé pour tous vos robots), frais du coordinateur dans la vue de l'ordre, un meilleur sélecteur de coordinateur et deux mois de corrections d'upstream.`,
  },
  migrations: {},
})
