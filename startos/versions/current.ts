import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7.14:0',
  releaseNotes: {
    en_US: `First version of Roblosats on StartOS (Roblosats v0.8.7-rl14): the client for the Bitcoin BLAKE2b chain, reaching every coordinator of the Roblosats federation (Kilobot, marcanoTrades) over Tor. Dark theme by default, Spamcoin in every currency list, long invoices that wrap in the chat. Keep your robot's token: it is the only way to recover the robot.`,
    es_ES: `Primera versión de Roblosats en StartOS (Roblosats v0.8.7-rl14): el cliente para la cadena Bitcoin BLAKE2b, que llega por Tor a todos los coordinadores de la federación Roblosats (Kilobot, marcanoTrades). Tema oscuro por defecto, Spamcoin en todas las listas de monedas, facturas largas que se parten en el chat. Guarda el token de tu robot: es la única forma de recuperarlo.`,
    de_DE: `Erste Version von Roblosats auf StartOS (Roblosats v0.8.7-rl14): der Client für die Bitcoin-BLAKE2b-Chain, der jeden Koordinator der Roblosats-Föderation (Kilobot, marcanoTrades) über Tor erreicht. Bewahre das Token deines Roboters auf: Nur damit lässt er sich wiederherstellen.`,
    pl_PL: `Pierwsza wersja Roblosats na StartOS (Roblosats v0.8.7-rl14): klient dla łańcucha Bitcoin BLAKE2b, łączący się przez Tor z każdym koordynatorem federacji Roblosats (Kilobot, marcanoTrades). Zachowaj token swojego robota: tylko nim go odzyskasz.`,
    fr_FR: `Première version de Roblosats sur StartOS (Roblosats v0.8.7-rl14) : le client pour la chaîne Bitcoin BLAKE2b, qui joint via Tor chaque coordinateur de la fédération Roblosats (Kilobot, marcanoTrades). Gardez le jeton de votre robot : c'est le seul moyen de le récupérer.`,
  },
  migrations: {},
})
