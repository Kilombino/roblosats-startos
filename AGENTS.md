# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **This packages the Roblosats _client_, not a coordinator.** `ghcr.io/kilombino/roblosats-client` is built from `nodeapp/` of Kilombino/roblosats; its Tor bridges come from the federation.json inside the image, so a new coordinator means a new image, not a change here.
- **The image's nginx listens with TLS unless `PLAIN_HTTP=1`**; StartOS adds its own HTTPS, so main.ts sets it.
- **Packing both arches fails with "cannot overwrite digest"** when the other arch's image is still in the local docker: `docker image rm` it between the two packs (it is untagged: find its ID with `docker images -a --digests`).
- **Tor is a hard dependency with its own health check**, because coordinators are onion services. The SOCKS lookup passes `fallbackPort` so the resolved address stays constant across tor install/update/uninstall and never restarts Roblosats on tor churn; it is then split into `TOR_PROXY_IP`/`TOR_PROXY_PORT`, which the image takes as two separate values.
- **The health check fetches `/selfhosted` over the service's own bridge address** from `sdk.host.getOwn`, not a hostname — `<pkg>.startos` is deprecated. It returns `starting` rather than failing while that address is unresolved.
- **There is nothing worth backing up.** The robot token lives in the browser and funds are on Lightning — don't add state, and don't imply a restore recovers an identity.
