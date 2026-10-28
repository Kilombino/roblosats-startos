<p align="center">
  <img src="icon.png" alt="Roblosats" width="21%">
</p>

# Roblosats on StartOS

[Roblosats](https://github.com/Kilombino/roblosats) is RoboSats for the Bitcoin BLAKE2b chain (BTC): a peer-to-peer exchange over Lightning with hold-invoice escrow, run by a federation of coordinators over Tor. This package runs the **client**: your own copy of the app, reaching every coordinator of the federation through StartOS's Tor.

- **Image:** `ghcr.io/kilombino/roblosats-client` (built from the `nodeapp` of Kilombino/roblosats). It writes one Tor bridge per coordinator of the federation it ships with, so new coordinators arrive with new versions; a coordinator's admin panel is never relayed.
- **Dependency:** Tor (its SOCKS proxy), required.
- **Interface:** Web UI (port 12596, plain HTTP behind StartOS's HTTPS: `PLAIN_HTTP=1`).
- **Volume:** `main`, in backups.

Based on [RoboSats/robosats-startos](https://github.com/RoboSats/robosats-startos) (AGPL-3.0).

## Install

StartOS → Marketplace → add the registry `https://registry.kilombino.com` → Roblosats.

## Build

```
npm ci
make
```
