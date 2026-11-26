import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.16:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.16: the winner of a dispute also gets part of the loser's bond, also in Lightning orders; the web client offers the Android app (Zapstore, F-Droid, GitHub); a clearer dispute page for coordinators; Kilobot's new description.`,
    es_ES: `Roblosats 0.9.16: el ganador de una disputa también recibe parte de la fianza del perdedor, también en órdenes Lightning; el cliente web ofrece la app de Android (Zapstore, F-Droid, GitHub); una página de disputa más clara para los coordinadores; nueva descripción de Kilobot.`,
    de_DE: `Roblosats 0.9.16: der Gewinner eines Streitfalls erhält auch einen Teil der Kaution des Verlierers, auch bei Lightning-Orders; der Web-Client bietet die Android-App an; übersichtlichere Streitfallseite für Koordinatoren.`,
    pl_PL: `Roblosats 0.9.16: zwycięzca sporu otrzymuje też część kaucji przegranego, także w zleceniach Lightning; klient webowy oferuje aplikację Android; czytelniejsza strona sporu dla koordynatorów.`,
    fr_FR: `Roblosats 0.9.16 : le gagnant d'un litige reçoit aussi une part de la caution du perdant, aussi dans les ordres Lightning ; le client web propose l'app Android ; page de litige plus claire pour les coordinateurs.`,
  },
  migrations: {},
})
