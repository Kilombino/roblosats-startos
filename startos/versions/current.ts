import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.8:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.8: an onchain taker that loses the race to a faster taker gets its bond back right away from the order page (never penalized) and is told; two bonds locking at the same moment go to the robot that took first; the onchain take screen warns that a faster taker can still win until your bond confirms; cancelling before an onchain bond confirms no longer shows the Lightning warning.`,
    es_ES: `Roblosats 0.9.8: un taker on-chain que pierde la carrera frente a otro más rápido recupera su fianza al momento desde la orden (nunca se penaliza) y recibe un aviso; si dos fianzas se bloquean a la vez gana quien tomó primero; la pantalla de toma on-chain avisa de que otro taker puede ganar hasta que tu fianza se confirme; cancelar antes de que se confirme una fianza on-chain ya no muestra el aviso de Lightning.`,
    de_DE: `Roblosats 0.9.8: Ein Onchain-Taker, der das Rennen verliert, bekommt seine Kaution sofort zurück und wird benachrichtigt.`,
    pl_PL: `Roblosats 0.9.8: taker onchain, który przegra wyścig, od razu odzyskuje kaucję i dostaje powiadomienie.`,
    fr_FR: `Roblosats 0.9.8 : un preneur onchain qui perd la course récupère sa caution tout de suite et en est averti.`,
  },
  migrations: {},
})
