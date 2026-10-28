import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7.15:1',
  releaseNotes: {
    en_US: `Fixes the coordinators' limits, order book and robots, which did not load: each coordinator is now asked by its own onion name. Federation: Kilobot, marcanoTrades and Rose Garden.`,
    es_ES: `Arregla los límites, el libro de órdenes y los robots de los coordinadores, que no cargaban: ahora se pregunta a cada coordinador por su propio onion. Federación: Kilobot, marcanoTrades y Rose Garden.`,
    de_DE: `Behebt Limits, Orderbuch und Roboter der Koordinatoren, die nicht luden: Jeder Koordinator wird jetzt unter seinem eigenen Onion-Namen angefragt.`,
    pl_PL: `Naprawia limity, księgę zleceń i roboty koordynatorów, które się nie ładowały: każdy koordynator jest teraz pytany pod własnym adresem onion.`,
    fr_FR: `Corrige les limites, le carnet d'ordres et les robots des coordinateurs, qui ne se chargeaient pas : chaque coordinateur est maintenant interrogé sous son propre nom onion.`,
  },
  migrations: {},
})
