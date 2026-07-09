# Old Drive Photo Sorting Workflow

## Step 1: Dump everything
Copy full drive backup into `old-drive-raw/` unsorted, no judgment calls yet.
Keep original filenames/EXIF intact for now - useful for dating shots later
(recent renovation vs old ownership era matters for brand accuracy).

## Step 2: First pass triage
Go through `old-drive-raw/`, sort into three buckets:
- Delete candidates (blurry, duplicate, irrelevant - screenshots, random docs, etc)
- Usable as-is (decent resolution, good composition, on-brand)
- Usable but needs upscaling (good composition/subject, low resolution or soft focus)

## Step 3: Resolution check for upscale candidates
Move anything under ~1920px on the long edge, but with a usable subject/composition,
into `upscale-candidates/`. Rule of thumb: if it looks fine at thumbnail size but
falls apart at hero-image size, it is an upscale candidate, not a delete.

## Step 4: Upscaling
Options, cheapest to best quality:
- Topaz Gigapixel AI (paid, best quality, handles faces/architecture well)
- Real-ESRGAN (free, open source, runs locally, good for exteriors/gardens)
- Claude/other AI upscale via API - fine for quick placeholder use, not for
  anything that might accidentally end up in a final deliverable

Since these are placeholders only (real shoot coming later), free/local tools
are enough. Don't spend money upscaling something that gets replaced anyway.

## Step 5: Tag into page folders
Once usable (as-is or upscaled), move into the matching `tagged/` subfolder:
hero / high-tea / weddings / corporate / accommodation / exterior-grounds

## Step 6: Gap list becomes photographer brief
Whatever a page folder is still missing after this process (e.g. no good
accommodation interior shot at all) becomes a line item in
`_assets-placeholder/photographer-brief.md` for the real shoot.
