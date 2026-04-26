param(
  [string]$Region = "us-east-1",
  [string]$ProjectName = "apip-website",
  [string]$StackName = "apip-website-dev",
  [string]$DomainName = "",
  [string]$AcmCertificateArn = ""
)

$ErrorActionPreference = "Stop"

$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$TemplatePath = Join-Path $RepoRoot "infra\cloudformation\website-stack.yaml"
$WebsitePath = Join-Path $RepoRoot "src"

Write-Host "Deploying CloudFormation stack: $StackName"

aws cloudformation deploy `
  --region $Region `
  --stack-name $StackName `
  --template-file $TemplatePath `
  --capabilities CAPABILITY_NAMED_IAM `
  --parameter-overrides `
    ProjectName=$ProjectName `
    Environment=dev `
    PriceClass=PriceClass_100 `
    DomainName=$DomainName `
    AcmCertificateArn=$AcmCertificateArn

$bucketName = aws cloudformation describe-stacks `
  --region $Region `
  --stack-name $StackName `
  --query "Stacks[0].Outputs[?OutputKey=='WebsiteBucketName'].OutputValue" `
  --output text

$distributionId = aws cloudformation describe-stacks `
  --region $Region `
  --stack-name $StackName `
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" `
  --output text

$distributionDomain = aws cloudformation describe-stacks `
  --region $Region `
  --stack-name $StackName `
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDomainName'].OutputValue" `
  --output text

if (-not $bucketName) {
  throw "Bucket output not found."
}

Write-Host "Uploading static website to s3://$bucketName"
aws s3 sync $WebsitePath "s3://$bucketName" --delete

Write-Host "Invalidating CloudFront cache for distribution $distributionId"
aws cloudfront create-invalidation --distribution-id $distributionId --paths "/*" | Out-Null

Write-Host "Done."
Write-Host "CloudFront URL: https://$distributionDomain"
