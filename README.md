Presentations
=============

Presentations based on [reveal.js](https://github.com/hakimel/reveal.js/).

Testing a folder structure for stand-alone presentations. Work in progress.

### Proposed Structure

1. Put actual presentation in top level
2. Images and resources in folder with meaningful name
3. Link to presentation in `index.html`

`index.html` could use some fancy styling and be linked somewhere with dates and metrics etc.

### Using Jekyll

You can now use a shared layout if you include the Jekyll front matter in your presentation. See blank-deck-using-jekyll-layout.html for a sample.

To preview locally:

```
bundle
jekyll serve --watch
```

Then visit http://localhost:4000 for a preview.