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

Abre `src/index.html` en navegador para revisar contenido y estilo. Los enlaces a la app muestran el marcador `__WEBSITE_APP_BASE_URL__` hasta que sustituyas la URL (por ejemplo con el deploy a S3 o reemplazando a mano para una prueba rápida).

## Deploy DEV

```powershell
.\infra\scripts\deploy-dev.ps1
```

## CI/CD (GitHub Actions)

- `develop` -> despliega a `DEV`
- `staging` -> despliega a `STG`
- `main` -> despliega a `PRD`

Workflow: `.github/workflows/deploy.yml`

Los enlaces a la app en `src/index.html` usan el marcador `__WEBSITE_APP_BASE_URL__`. Antes de subir a S3, el workflow sustituye por la variable de entorno **`WEBSITE_APP_BASE_URL`** (GitHub Environment) o, si está vacía, por la URL por defecto del ambiente (ver `infra/README.md`).

Deploy local con `infra/scripts/deploy-dev.ps1`: parámetro **`-AppBaseUrl`** (por defecto `https://app-dev.fincora.io`).