# SalaryApp Landing v2

Fitxers:
- `index.html`: landing principal, castellà per defecte + selector català.
- `styles.css`: estils responsive.
- `script.js`: traduccions + analytics de landing.
- `privacy.html`: política actualitzada, sense l'avís provisional.
- `robots.txt`: permet indexació.
- `sitemap.xml`: sitemap bàsic.

## Enllaços configurats
- Google Play: https://play.google.com/store/apps/details?id=com.moapet15.salaryapp
- Web app: https://salaryapp-mobile.vercel.app/
- Analytics: https://conta-contes.vercel.app/api/analytics-salaryapp

## Events d'analytics
- landing_view
- play_store_click
- web_app_click
- landing_language_changed

Tots porten `metadata.source = "landing"` per separar-los dels events de l'app.

## Deploy
Substitueix els fitxers actuals del repositori de la landing per aquests, commit + push. Si Vercel està connectat a GitHub, desplegarà automàticament.

## Nota legal
La política s'ha actualitzat perquè reflecteixi l'existència d'analytics tècnics. Cal mantenir-la alineada amb els proveïdors i tractaments reals de SalaryApp.
