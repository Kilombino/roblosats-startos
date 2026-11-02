import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8.25:0',
  releaseNotes: {
    en_US: `Roblosats 0.8.8-rl25: with the chat in Nostr mode, every message reaches the coordinator again (before, only the first one did, so a peer on the API connection missed messages and disputes had no chat). Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Roblosats 0.8.8-rl25: con el chat en modo Nostr, todos los mensajes vuelven a llegar al coordinador (antes solo el primero, así que quien usaba la conexión API no los veía y las disputas se quedaban sin chat). Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Roblosats 0.8.8-rl25: Mit dem Chat im Nostr-Modus erreicht wieder jede Nachricht den Koordinator (vorher nur die erste, sodass die Gegenseite über die API-Verbindung Nachrichten verpasste und Streitfälle keinen Chat hatten).`,
    pl_PL: `Roblosats 0.8.8-rl25: przy czacie w trybie Nostr każda wiadomość znów trafia do koordynatora (wcześniej tylko pierwsza, więc druga strona korzystająca z połączenia API nie widziała wiadomości, a spory nie miały czatu).`,
    fr_FR: `Roblosats 0.8.8-rl25 : avec le chat en mode Nostr, chaque message parvient de nouveau au coordinateur (avant, seul le premier y arrivait : la contrepartie en connexion API ne voyait pas les messages et les litiges n'avaient pas de chat).`,
  },
  migrations: {},
})
