# Roblosats

## Documentation

- [Roblosats repository](https://github.com/Kilombino/roblosats) — the source, the federation and the release notes.
- [roblosats.kilombino.com](https://roblosats.kilombino.com) — the same app on the web.
- Community and support: [t.me/roblosats](https://t.me/roblosats).

## What you get on StartOS

- The **self-hosted Roblosats client** as the **Web UI** interface: your own copy of the app for the P2P exchange of Bitcoin on the BLAKE2b chain (BTC).
- Every coordinator of the Roblosats federation is reached over Tor (the Tor service is a required dependency); you configure nothing.

This package runs the **client**, not a coordinator.

## Getting set up

1. Install **Tor** first.
2. Start Roblosats and open the **Web UI**.
3. The app generates a **robot token**. Save it somewhere safe: it is your identity, and the only way to recover the robot (and its orders) in another browser or after clearing this one.

## Using Roblosats

Create or take orders with any coordinator of the federation. You need a Lightning wallet on the BLAKE2b chain to lock bonds and escrow and to receive your sats (Kilowallet, or Lightning Fork with ThunderHub XBT); the buyer can also take the sats on-chain. Nothing is custodied by this package.
