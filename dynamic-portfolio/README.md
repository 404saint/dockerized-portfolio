# Dynamic Portfolio (Docker + Traefik)

A fully containerized, HTTPS‑secured, Traefik‑powered personal portfolio stack.  
Includes:
- Static portfolio frontend (HTML/CSS/JS)
- PostgreSQL database
- Traefik reverse proxy with self‑signed TLS
- Basic Auth for dashboard
- Simulated API key restricted admin page

---

## 🚀 Quick Start

Clone the repo and run:

```bash
git clone https://github.com/<404saint/dynamic-portfolio.git
cd dynamic-portfolio
docker-compose up -d --build
