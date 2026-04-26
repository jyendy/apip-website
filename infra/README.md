# Infraestructura (AWS)

Este directorio contiene IaC para desplegar el sitio estatico de Fincora en:

- S3 privado
- CloudFront
- Origin Access Control (OAC)

## Ambientes

El stack soporta `dev`, `stg` y `prd` por parametro.  
Por ahora el script desplega solo `dev`.

## Requisitos

- AWS CLI v2
- Credenciales AWS configuradas (`aws configure` o perfil SSO)
- Permisos para CloudFormation, S3 y CloudFront

## Despliegue DEV

Desde `apip-website`:

```powershell
.\infra\scripts\deploy-dev.ps1
```

Con dominio custom (opcional):

```powershell
.\infra\scripts\deploy-dev.ps1 `
  -DomainName "dev.fincora.io" `
  -AcmCertificateArn "arn:aws:acm:us-east-1:123456789012:certificate/xxxx"
```

## Archivos

- `cloudformation/website-stack.yaml`: stack principal
- `scripts/deploy-dev.ps1`: despliegue + sync de `src/` + invalidacion

## Variables GitHub Environment (opcional)

En cada Environment de GitHub (`dev`, `stg`, `prd`):

- `AWS_REGION` (ej. `us-east-1`)
- `WEBSITE_DOMAIN_NAME` (opcional)
- `WEBSITE_CERT_ARN` (opcional, ACM en `us-east-1`)
