# podcast-fe

## Installation

Fork or Clone this repo and install all dependencies

```sh
nvm use && npm ci
```

## Development

`npm run dev`

## Build

`npm run build`

## Deploy

```bash
zsh script/deploy-prod.sh # prod canister

zsh script/deploy-test.sh  # test canister
```

## build app

```bash
npm run tauri-build
```

## Command

```bash
dfx deploy --no-wallet --network ic

dfx identity get-principal

dfx canister --network ic start assets

dfx canister --network ic install assets -m reinstall
```

## Roadmap

### Phase 1: Q4-22 (Nov-Dec)

- [x] Prototype drawing and design
- [x] Development of front-end pages
- [x] Podcast management platform upload function and essential services
- [x] Content uploading and initialization
- [x] Podcast setup
- [x] Used to IPFS or AR services

### Phase 2: Q1-Q3 23

- [x] Add front-end multi-topic
- [x] Use NnsDAO NID service
- [x] Podcast management platform service improvement
- [x] Customized tag settings
- [x] Adding guests and multiple hosts
- [x] Canister management

### Phase 3: New feature Q4-23, 2024

- [] Use ic assets storage
- [] Use new login with II & NFID
- [] Support RSS Feed & submit your podcast to Apple, Google, Spotify Podcasts
- [] Automated Synchronized Podcasting
- [] Generate NFT service
- [] Support multi-theme
- [] Import data from other podcast platforms
- [] Support custom domain
- [] Develop client with Flutter, API access to podcast data
