import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

const depTorDescription = {
  en_US: 'Used to connect to Roblosats coordinators privately',
  es_ES:
    'Se usa para conectarse a los coordinadores de Roblosats de forma privada',
  de_DE: 'Wird für die private Verbindung zu Roblosats-Koordinatoren verwendet',
  pl_PL: 'Używany do prywatnego łączenia się z koordynatorami Roblosats',
  fr_FR:
    'Utilisé pour se connecter aux coordinateurs Roblosats de manière privée',
}

export const manifest = setupManifest({
  id: 'roblosats',
  title: 'Roblosats',
  license: 'AGPL-V3',
  packageRepo: 'https://github.com/Kilombino/roblosats-startos',
  upstreamRepo: 'https://github.com/Kilombino/roblosats',
  marketingUrl: 'https://roblosats.kilombino.com/',
  donationUrl: null,
  description: i18n.description,
  volumes: ['main'],
  images: {
    roblosats: {
      source: {
        dockerTag:
          'ghcr.io/kilombino/roblosats-client:v0.8.7-rl15@sha256:1df986569c48477d86cb437e13efe07239d27f93d9efb991e7f88a0d3dab4610',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    tor: {
      optional: false,
      description: depTorDescription,
      metadata: {
        title: 'Tor',
        icon: 'https://raw.githubusercontent.com/Start9Labs/tor-startos/65faea17febc739d910e8c26ff4e61f6333487a8/icon.svg',
      },
    },
  },
})
