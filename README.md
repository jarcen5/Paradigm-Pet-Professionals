# Paradigm Pet Professionals — Interactive Desktop Prototype (Static)

Included pages:
- Home (index.html)
- Cat Owners (cats.html)
- Dog Owners (dogs.html)
- Fish Owners (fish.html) — NEW persona page
- Request Consultation / Contact form (contact.html) + Confirmation (confirmation.html)
- Supporting pages so navigation works: About, FAQs, Adoption Resources, Meet the Pexperts

## How to run locally
Option A: Open `index.html` in a browser.

Option B (recommended): run a local server:
- Python: `python -m http.server 5500`
- Then visit: http://localhost:5500

## What makes it interactive
- Primary navigation works across all pages.
- Secondary navigation (left sidebar) jumps to in-page sections on Cats/Dogs/Fish.
- Positional awareness: breadcrumbs + active primary nav state + active in-page section highlight (scroll spy).
- Contact form is non-functional (prototype), but “Submit” navigates to a confirmation page.
