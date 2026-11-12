# SCAG Teen Platform
Complete GitHub-ready architecture with React, Node/Express, and PostgreSQL.

## Included
- 13+ registration and login
- Persistent profiles and social-link JSON field
- School selection, demo email-domain verification, manual-review queue
- Verified school-friend discovery and friend-request endpoint
- Conversation and persistent-message endpoints
- Four-era Photo Lab: Medieval, Roman, Renaissance, Future
- Persistent AI creation jobs
- Placeholder endpoints for AI generation and text/image safety
- Safety-report persistence
- Docker Compose PostgreSQL

## Run locally
1. `docker compose up -d`
2. `npm install`
3. Export environment values from `.env.example`.
4. `npm run db:init`
5. Terminal A: `npm run api`
6. Terminal B: `npm run dev`

## Demo verification
The seeded school domains end in `.example`, so they are fictional. Use a matching fictional email domain to exercise the verified path in local testing. All other accounts enter manual review.

## Production warning
Before a public 13+ launch, replace demo verification and placeholder AI/safety handlers with vetted providers and workflows. Add rate limiting, secure cookie/session strategy, account recovery, consent and privacy controls, moderator tooling, audit logs, data retention/deletion processes, file scanning, and legal review for every launch jurisdiction.
