# Demonstration of navigation issue on App Pages
- [Github issue](https://github.com/SharePoint/sp-dev-docs/issues/6246)

## Used SharePoint Framework Version
![version](https://img.shields.io/badge/version-1.13-green.svg)   

## PnP.PowerShell
![version](https://img.shields.io/badge/version-1.8-green.svg)

## How to replicate
1. Build & Install package to target site
   `npm package`
2. Deploy test pages
   ```                                        
   Connect-PnPOnline -Url <site-url> <credentials>
   Invoke-PnPSiteTemplate -Path data/pages.xml
   ```
