# apip-website

Sitio web informativo de Fincora.

## Estructura

- `src/`: landing estatico (HTML/CSS/JS)
- `infra/`: infraestructura AWS (CloudFormation + scripts de deploy)
- `template/`: plantilla de referencia (`sasico/chat-boot`)

## Arquitectura AWS (costo-eficiente)

- S3 privado para contenido estatico
- CloudFront para HTTPS, cache y entrega global
- OAC para acceso seguro entre CloudFront y S3

## Desarrollo local rapido

Abre `src/index.html` en navegador para revisar contenido y estilo.

## Deploy DEV

```powershell
.\infra\scripts\deploy-dev.ps1
```

## CI/CD (GitHub Actions)

- `develop` -> despliega a `DEV`
- `staging` -> despliega a `STG`
- `main` -> despliega a `PRD`

Workflow: `.github/workflows/deploy.yml`