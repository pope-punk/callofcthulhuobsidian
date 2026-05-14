# October 1997 — refresher site

A static, click-through journal for re-launching the campaign.

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server --directory refresher-site 8000
# then visit http://localhost:8000
```

## Add music

1. Drop one or more audio files into `audio/` (mp3 or ogg).
2. In `index.html`, find the `<audio id="bed">` block and uncomment / add
   `<source>` lines pointing at your files. Example:

   ```html
   <audio id="bed" loop preload="auto">
     <source src="audio/bed.mp3" type="audio/mpeg">
   </audio>
   ```

The bed track auto-starts on the **Begin** click (browser autoplay rules
require a user gesture, so the landing screen acts as the unlock).
A mute toggle sits top-right once you've started.

If you want different music per section, that's a small change to
`script.js` — wire up a `pageId → src` map and swap on page change.

## Hosting on GitHub Pages

In the repo settings → Pages, set the source to this branch (or merge to
`main`) and the folder to `/refresher-site`. The site is fully static; no
other config needed.

## Editing content

Everything is plain HTML inside `index.html`, in narrative order:

1. Landing → cold open → timeline → people → places → items → characters
2. Each timeline entry is a `<details>` element. The `<summary>` is the
   date + teaser shown before clicking; the body inside is the recap.
3. Card sections (people/places/items/characters) are `<article
   class="group">` blocks with `<h3>` + `<ul>`.

All placeholder copy is wrapped in `class="placeholder"` so it dims out.
Remove the class when the prose is real.

`[TODO: …]` markers are reminders to me (the GM) — search-and-destroy
before showing the site to the players.
