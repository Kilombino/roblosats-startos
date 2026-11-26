import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.17:0',
  releaseNotes: {
    en_US: `Roblosats 0.9.17: signed actions (security fix): every write your robot makes is signed with its own key and bound to its coordinator, so the token every coordinator sees can no longer be used to act as your robot. Spamcoin can be combined with other payment methods in fiat orders.`,
    es_ES: `Roblosats 0.9.17: acciones firmadas (arreglo de seguridad): todo lo que hace tu robot va firmado con su propia clave y ligado a su coordinador, así que el token que ven todos los coordinadores ya no sirve para actuar como tu robot. En órdenes en moneda fiat, Spamcoin se puede combinar con otros métodos de pago.`,
    de_DE: `Roblosats 0.9.17: signierte Aktionen (Sicherheitskorrektur): jede Aktion deines Roboters wird mit seinem eigenen Schlüssel signiert und an seinen Koordinator gebunden. Spamcoin lässt sich in Fiat-Orders mit anderen Zahlungsmethoden kombinieren.`,
    pl_PL: `Roblosats 0.9.17: podpisane akcje (poprawka bezpieczeństwa): każda akcja robota jest podpisana jego własnym kluczem i przypisana do koordynatora. Spamcoin można łączyć z innymi metodami płatności w zleceniach fiat.`,
    fr_FR: `Roblosats 0.9.17 : actions signées (correctif de sécurité) : chaque action de ton robot est signée avec sa propre clé et liée à son coordinateur. Spamcoin peut se combiner avec d'autres moyens de paiement dans les ordres en monnaie fiat.`,
  },
  migrations: {},
})
