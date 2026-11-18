import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.4:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.4: every step of your order tells you. A notice for each step where you must act or something important happened (taken, pay or fund within X, payment seen and confirmed, chat open, payment sent, release, finished, cancel, dispute, expiry, rewards, sats to take back), by Telegram, Nostr and webhook in your language, plus reminders 30 and 10 minutes before every deadline. On the order page a banner says what to do now, with sound and vibration, and the tab title flashes "Action needed".`,
    es_ES: `Roblosats 0.9.4: cada paso de tu orden te avisa. Un aviso en cada paso en que tienes que actuar o pasa algo importante (tomada, paga o financia en X, pago visto y confirmado, chat abierto, pago enviado, liberación, terminada, cancelación, disputa, caducidad, recompensas, sats por recuperar), por Telegram, Nostr y webhook en tu idioma, y recordatorios 30 y 10 minutos antes de cada plazo. En la página de la orden un aviso dice qué hacer ahora, con sonido y vibración, y el título de la pestaña parpadea «Acción necesaria».`,
    de_DE: `Roblosats 0.9.4: Jeder Schritt deines Auftrags meldet sich. Eine Nachricht bei jedem Schritt, bei dem du handeln musst, über Telegram, Nostr und Webhook, Erinnerungen 30 und 10 Minuten vor jeder Frist, und ein Hinweis auf der Auftragsseite mit Ton und Vibration.`,
    pl_PL: `Roblosats 0.9.4: każdy krok zlecenia daje znać. Powiadomienie przy każdym kroku, w którym musisz działać (Telegram, Nostr, webhook), przypomnienia 30 i 10 minut przed każdym terminem oraz baner na stronie zlecenia z dźwiękiem i wibracją.`,
    fr_FR: `Roblosats 0.9.4 : chaque étape de votre ordre vous prévient. Une notification à chaque étape où vous devez agir (Telegram, Nostr, webhook), des rappels 30 et 10 minutes avant chaque échéance et une bannière sur la page de l'ordre avec son et vibration.`,
  },
  migrations: {},
})
