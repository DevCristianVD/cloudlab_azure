# CloudLab — Práctica: Sitio Web Estático en Azure

Proyecto de laboratorio en HTML, CSS y JavaScript. No requiere npm ni compilación.

## Ejecución local
Abrir `index.html` en el navegador o utilizar Live Server de VS Code.

## Despliegue
1. Publicar los archivos en un repositorio GitHub con rama `main`.
2. En Azure Portal > Static Web Apps > Crear, seleccionar la suscripción Azure for Students, un grupo de recursos, plan Free y origen GitHub.
3. Elegir el repositorio, rama `main`, preset `Custom`, app location `/`, API location vacía, output location vacía.
4. Crear la aplicación. Azure agregará el workflow de GitHub Actions dentro de `.github/workflows/`.
5. Esperar a que el workflow se complete y abrir la URL del sitio desde Azure.
6. En `index.html`, cambiar `Versión inicial: 1.0` por `Versión actualizada: 2.0`. Hacer commit y push a `main` para demostrar CI/CD.

**IMPORTANTE:** El workflow real es el YAML generado por Azure. No activar otro workflow en paralelo. El archivo `ejemplo-pipeline.yml.txt` solo es un ejemplo explicativo y NO se ejecuta.

## Evidencias
- Repositorio GitHub y YAML generado automáticamente
- Grupo de recursos y Static Web App (plan Free)
- Presupuesto Azure Cost Management con alertas
- GitHub Actions: ejecución exitosa
- URL pública y botón JavaScript funcional
- Captura de antes/después del cambio de versión
- Métricas de Azure realmente disponibles en el plan (sin inventar valores)

## Seguridad
No colocar contraseñas ni tokens de implementación en archivos del repositorio. Si se utiliza un token manual, guardarlo en GitHub Actions Secrets.
