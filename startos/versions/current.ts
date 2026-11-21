import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.13:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.13 (client hotfix): the Android app no longer closes by itself at its first start after an update (a robot without its key in the notification service); nothing meant for Tor leaves before Tor is ready (no .onion lookups outside Tor in Clearnet mode); the notification service fetches only recent notices; the federation check at start-up no longer reports "no majority" when coordinators answer late.`,
    es_ES: `Roblosats 0.9.13 (arreglo del cliente): la app de Android ya no se cierra sola al primer arranque tras actualizar (un robot sin su clave en el servicio de notificaciones); nada de lo que va por Tor sale antes de que Tor esté listo (sin consultas de .onion fuera de Tor en modo Clearnet); el servicio de notificaciones pide solo los avisos recientes; la comprobación de la federación al arrancar ya no dice «sin mayoría» cuando los coordinadores responden tarde.`,
    de_DE: `Roblosats 0.9.13 (Client-Hotfix): die Android-App schließt sich nach einem Update nicht mehr von selbst; nichts, was über Tor gehen soll, geht vor Tor hinaus; Föderationsprüfung beim Start stabil.`,
    pl_PL: `Roblosats 0.9.13 (poprawka klienta): aplikacja Android nie zamyka się już sama po aktualizacji; nic, co ma iść przez Tor, nie wychodzi przed Torem; stabilne sprawdzanie federacji przy starcie.`,
    fr_FR: `Roblosats 0.9.13 (correctif client) : l'app Android ne se ferme plus toute seule après une mise à jour ; rien de ce qui doit passer par Tor ne sort avant Tor ; vérification de la fédération au démarrage fiable.`,
  },
  migrations: {},
})
