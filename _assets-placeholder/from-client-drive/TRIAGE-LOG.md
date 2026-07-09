# Triage Log — Peel Manor House Old Drive Photo Sort

Workflow steps 1-3 only (per instructions). Source: `PeelManorHouseMedia` (323 files, flat).

## Summary counts

- Total files copied into `old-drive-raw/`: **324** (323 from client drive + 1 pre-existing `.gitkeep` placeholder)
- Delete candidates (blurry/duplicate/irrelevant/clipart/stock/system/unrelated personal): **99**
- Usable as-is (moved nowhere yet — stays in `old-drive-raw/`, ready to tag): **78**
- Needs upscaling (moved to `upscale-candidates/`): **75**
- Business documents / sensitive personal-financial data (left in place, listed in `EXCLUDED-sensitive.md`, NOT categorized as an asset): **70**
- Out of scope (video file, not a photo): **1**
- Ignored (not a client file): **1** (`.gitkeep` placeholder already present in the folder)

Sum check: 99 + 78 + 75 + 70 + 1 + 1 = 324 (matches total files in old-drive-raw)

## Method note — important finding

A large number of files in this drive dump are **not photography at all** — they are phone photos
of paperwork (contracts, invoices, medical/ID documents, seating charts) saved with a person's
first name as the filename (e.g. `Jasmine 1.jpg`, `Kylie Ryley 1.jpg`, `Danusha 2.jpg`). Several of
these contain **full credit card numbers, bank account/BSB numbers, and tax file numbers** in plain
view. Filename patterns alone were not reliable — for example `Natasha & Kade Pop Up.jpg` (a couple
name + event descriptor, which looked like a candid photo pattern) turned out to be a signed contract
with a full credit card number, while `Kaylene and Russell.jpg` (a similar naming pattern) was a
genuine candid party photo. Because of this, every ambiguous person-name file was opened and visually
checked individually rather than classified by filename pattern alone. Anything with a bare or
near-bare personal name that could not be positively confirmed as a genuine venue photo was treated
as excluded/sensitive by default (fail-safe toward privacy, not toward asset count).

## Delete candidates (blurry / duplicate / irrelevant / clipart / stock / system files / unrelated personal photos)

Not moved or deleted — left in `old-drive-raw/` per instructions ("Don't delete anything"). Listed here for your review before any manual deletion.

- **100.jpg** — personal family photo (elderly woman at a table), no venue context — unrelated personal photo
- **1920_s background.jpg** — stock theme background graphic
- **210a52eea7d786f5a60d3a7400f1d8db.jpg** — hash-named download, stock/Pinterest image
- **22c2e43081.jpg** — hash-named download, stock image
- **278f3489fc89bd65ee72c1f339d675d5.jpg** — hash-named download, stock image
- **48c13d57d15b0627ad0e08cd317e778e--burlesque.jpg** — Pinterest-style hash filename, stock image
- **50th.jpg** — clipart graphic ('50 & Fabulous')
- **585984079-disco-ball-wallpaper.jpg** — stock wallpaper ID filename
- **70th Birthday female.jpg** — clipart graphic ('Cheers to 70 years')
- **70th Birthday.jpg** — clipart sticker graphic ('Happy 70th Birthday' balloons)
- **71FqXIqBC5L._AC_SY606_.jpg** — Amazon product image filename format
- **80_s posters.pub** — Microsoft Publisher design file, not an image; can't be used as a photo asset
- **80_s tape cover.jpg** — clipart cassette tape graphic
- **84130592-gruppo-di-anziani-attivi-vestiti-nel-1960-moda-ballando-in-una-festa-di-ballo-retrò-eps-8-linea-arte-ve.jpg** — stock illustration (Italian stock-site filename)
- **9f73709d494bf2e0a6ab571437ddd43b.jpg** — hash-named download, stock image
- **Allergen Poster.jpg** — poster graphic; duplicate of Alogen Poster.jpg (byte-identical)
- **Alogen Poster.jpg** — byte-identical duplicate of Allergen Poster.jpg
- **Ashlea Reale.html** — saved webpage, not a photo
- **Baldivis rotary logo.png** — third-party club logo
- **CD Drive - Shortcut.lnk** — Windows shortcut file
- **CLC11422_SeniorsSpecial_Icon_png-for-website.png** — web icon graphic
- **Christmas-Day-2017-Flyer2-1024x724.jpg** — promotional flyer
- **Comedy 1.heic** — file's embedded EXIF metadata literally tags it as 'Screenshot' (not camera-captured); file too large to render for visual confirmation in this pass — flagged, not verified as a real photo
- **Comedy 2.heic** — part of the same Comedy 1-5.heic set as above, same caution applies
- **Comedy 3.heic** — part of the same Comedy 1-5.heic set as above, same caution applies
- **Comedy 4.heic** — part of the same Comedy 1-5.heic set as above, same caution applies
- **Comedy 5.heic** — part of the same Comedy 1-5.heic set as above, same caution applies
- **Death Star.png** — Star Wars movie graphic/render, not a photo
- **Debbie.jpg** — personal selfie/portrait, indoor, no venue context — unrelated personal photo
- **FB2.png** — stock vegetable basket photo, not venue content
- **FB3.png** — stock 'Mind Body Spirit' clipart
- **FB5.png** — stock 'Holistic' wellness clipart
- **GG.jpg** — personal family photo (two people at a table), no venue context visible — unrelated personal photo
- **HP Afternoon Tea.jfif** — file would not render as a valid image when opened for review; tiny (322x234); treated as unusable stock image, could not visually verify content
- **HP High Tea.jfif** — same file family as HP Afternoon Tea.jfif; tiny (379x234), not verifiable, treated as unusable
- **Happy Easter-msg.jpg** — greeting-card style graphic
- **Healing Expo Flyer.png** — promotional flyer (composite text graphic)
- **Ht Poster.png** — poster graphic
- **JohnnyCash To June.jpg** — scanned copy of Johnny Cash's famous letter to June Carter — pop-culture content, not venue photography
- **Lorna19.jpg** — professional portrait of a marriage celebrant (third party) with no venue context — not raw venue photography; borderline, flagged for manual review if wanted back
- **Love to Be.png** — promo graphic
- **Market arrow.jpg** — small directional graphic/icon
- **Markets - dog friendly.png** — icon graphic
- **Marnix.jpg** — photographer's own logo/watermark image, not a venue photo
- **Medieval Background Poster.jpg** — poster graphic
- **Metters.pub** — Microsoft Publisher design file, not an image
- **Mothers Day wishes.jpg** — greeting-card style graphic
- **PEEL A5 COCKTAIL OF MURDER - 12 AUG.jpg** — promotional flyer
- **PMH Emblem resized.jpg** — venue emblem/logo graphic (not photography)
- **Peel Manor Dickens A5..jpg** — promotional flyer
- **Ratatouille.jpg** — generic stock recipe photo of ratatouille
- **Rotary Banner Black.png** — Rotary club logo/banner graphic
- **Rotary Banner Whitre .png** — Rotary club logo/banner graphic; duplicate of Rotary-Banner-Whitre-.png
- **Rotary-Banner-Whitre-.png** — byte-for-byte duplicate of 'Rotary Banner Whitre .png'
- **Rotary_International_womens_Poster.jpg** — third-party poster graphic
- **Rubics cube.pub** — Microsoft Publisher design file, not an image
- **Sarah Wilmotts Bouquet.jpg** — email/Messages screenshot (bouquet photos forwarded via email), not a raw venue photo
- **Seekers FLyer 2.PNG** — promotional flyer
- **Seekers Flyer.PNG** — promotional flyer
- **Senior couple dance.jpg** — tiny (189x266) generic clipart-style image, no venue context
- **Seniors Discounts.jpg** — tiny text/promo graphic
- **Seniors-1024x1024.jpg** — generic stock image (name pattern matches stock library)
- **Sorry-this-event-is-sold-out.png** — web banner graphic
- **Star Wars Photo.png** — Star Wars movie graphic, not a photo
- **Sweet 16th.gif** — clipart text graphic
- **Tonita Dates.png** — promo dates graphic
- **Westies Logo.png** — band/act logo graphic
- **beef-cuts-.svg** — vector clipart diagram
- **butterbeer.jpg** — generic stock recipe photo (small, square, no venue context)
- **canstock22500502.jpg** — Canstock stock photo watermark filename
- **chopping board.jpg** — generic stock product photo
- **cpr.png** — stock photo with text overlay ('What Is CPR?'), not venue content
- **d20jpno-02b0da09-0ff7-4fcb-aa15-f31d74dc80cf.jpg** — DeviantArt-style ID filename, stock/art image
- **debug.log** — system log file
- **desktop.ini** — Windows system file
- **disco-ball1.jpg** — stock/downloaded disco ball wallpaper image, panoramic dimensions suggest a download not a photo
- **disco.jpg** — tiny generic disco-themed image, likely a download not a photo
- **easter-bunny-cartoon1.jpg** — clipart
- **electric-lightning-bolt-vector.jpg** — vector clipart
- **fb logo.jpg** — Facebook logo graphic
- **harry-potter-hogwarts-crest-sticker-india-700x700.jpg** — stock sticker product image
- **high tea background.jpg** — stock background/texture graphic for design use, not a real photo; duplicate of vintage-invitation-PPK.jpg
- **how-to-make-a-dementor-from-harry-potter.webp** — tutorial/stock web image
- **https___prod.static9.net.au_fs_3f6711ad-f0a9-4d3e-8727-569a41ec994e.jpg** — news website image (saved from a URL), not venue photography
- **imagesJT7VF6I7.jpg** — Google Images cache download filename
- **logo with logo background.jpg** — logo graphic
- **market .jpg** — word-art text graphic reading 'MARKET', not a photo
- **market cart.jpg** — clipart market cart graphic (vector/transparent style)
- **pngtree-full-future-technology-space-universe-background-map-backgroundfutureartificial-intelligence-backgroundstarnight-image_69598.jpg** — PNGTree stock background
- **r18-fi-1024x567.png** — rating icon graphic
- **senior_1biitm4-1biitm7.jpg** — stock photo ID filename
- **seniors-logo.jpg** — program logo graphic
- **the-50s-logo-png-transparent.png** — clipart logo graphic
- **unnamed.png** — tiny (60x60) generic download, icon-sized junk
- **vasepainting-clipart-tea-for-two-14.jpg** — explicitly named clipart
- **vector-cartoon-illustration-group-aged-260nw-1125927335.jpg** — Shutterstock ID format, vector illustration
- **vintage-invitation-PPK.jpg** — byte-for-byte duplicate of 'high tea background.jpg'; stock invitation template graphic
- **wedding background.jpg** — stock background graphic
- **yes.jpg** — marriage-equality 'YES' campaign graphic, not venue photography

## Usable as-is (long edge ≥ ~1920px, on-brand venue/event content) — left in `old-drive-raw/`, ready for Step 5 tagging

- 20210411_111841.jpg
- 20210411_111943.jpg
- 20210411_111944.jpg
- 4-way-test.jpg
- Balloon Backdrop.jpg
- Black Carriage.jpg
- Boddington Medieval Fayre.jpg
- Cache Tepes 1.jpg
- Cache Tepes 2.jpg
- Conf Painting 1.jpg
- Conf Painting 2.jpg
- Country Set Up.heic
- DSC_0158 (2).JPG
- DSC_0160 (2).JPG
- DSC_0161 (2).JPG
- DSC_0182 (2).JPG
- DSC_0357.JPG
- DSC_0358.JPG
- DSC_0359.JPG
- DSC_0360.JPG
- DSC_0361.JPG
- Disney 1.jpg
- Disney 2.jpg
- Dog HT Photos.jpg
- Front entrance Pond.jpg
- Gemma and Chrissie Tree.jpg
- Gold Background Carriage.png
- Grand Piano.jpg
- Halloween Rose and Paul and snake.jpg
- Helicopter NYE wedding 2019 and our Manor.jpg
- Helicopter NYE wedding 2019 and our truck.jpg
- Helicopter NYE wedding 2019 and our truck1.jpg
- Helicopter NYE wedding 2019.jpg
- Helicopter NYE wedding with Truck in background.jpg
- IMG_3943.jpg
- IMG_3944.jpg
- IMG_3945.jpg
- IMG_3948.jpg
- IMG_7359.jpg
- IMG_7360.jpg
- Intimate 12 person inside ceremony Peel Manor House.jpg
- Jasmine.jpg
- Liquor.jpg
- Magenta.jpg
- Market Finacial Stall.jpg
- Markets 1.jpg
- Markets 2.jpg
- Markets 3.jpg
- Markets 4.jpg
- Marquee wedding2.jpg
- Mg & Mazda Car Club display.jpg
- Moments By Adele - Lombardo Wedding 39.jpg
- Moments By Adele - Lombardo Wedding 42.jpg
- PAUL LIGHT SABA.jpg
- PMH Bridal Backdrop Stage Red 2.jpg
- PMH Bridal Backdrop Stage Red.jpg
- PMH Inside Ceremony Set Up Red 2.jpg
- PMH Inside Ceremony Set Up Red.jpg
- PMH Red Wines.jpg
- PMH White Wines.jpg
- Picnic Hampers.jpg
- Pink and White Bridal and guest table.jpg
- RBS-Business-Christmas-party (1).png
- Setting Table.jpg
- Toilet roll and Dockers cake belated 50th.jpg
- Toilets 1.jpg
- Toilets 2.jpg
- Toilets 3.jpg
- Toilets 4.jpg
- Unicorn PMH 2.jpg
- Unicorn PMH.jpg
- _DSC0099.jpg
- bridal table pink.jpg
- gazebo.jpg
- inside boho baby set up 3.jpg
- kids table set up.jpg
- lights.jpg
- rose.jpg

## Needs upscaling (moved to `upscale-candidates/`) — good subject/composition, long edge < ~1920px

- 70_s Disco.jpg
- 80_s costume.jpg
- Arbour 2.jpg
- Arbour.jpg
- Brides Together.png
- Burton Areal Shot.png
- Centrepiece floral.jpg
- DSC_2338.jpg
- Dance Floor 1.jpg
- Dance Floor 2.jpg
- Dining Set Up Boho & Flower Wall 2.jpg
- Dining Set Up Boho & Flower Wall 3.jpg
- Dining Set Up Boho & Flower Wall.jpg
- Drinks Buckets x 2.jpg
- Drinks Buckets x 4.jpg
- Expo.jpg
- FB1.png
- FB4.png
- FB6.png
- Flowers & Prosecco.jpg
- Flowers.jpg
- Gazebo White and Gold.png
- Hemp1.jpg
- Hemp2.jpg
- High_Tea_grande.jpg
- Horror Food.JPG
- Inside Ceremony 12 person intimate wedding at Peel Manor House.jpg
- Kaylene and Russell Wood.jpg
- Kaylene and Russell costumes.jpg
- Kaylene and Russell.jpg
- Longlow bridal floral.jpg
- Luncheon set up in the boardroom.jpg
- Lux Chair.jpg
- Manor Arial SHot Of Grounds.jpg
- Market days children lawn games.jpg
- Martini GLass.jpg
- Mg & Mazda Car Club display1.jpg
- Mg & Mazda Car Club display2.jpg
- Moon Creatures 1 (2).jpg
- Moon Creatures 1.jpg
- Moon Creatures 2.jpg
- NeelyTyrone-Wedding- Peel Manor House.jpg
- Orchid Centrepiece.jpg
- Peel Manor HLS 2 (002).png
- Peel Manor House Edwardian Script.jpg
- Phantom stage.JPG
- Pilllar Cream.jpg
- Planter Box Lights.jpg
- Pop Up Country Photo 1.jpg
- Pop Up Country Photo 2.jpg
- Pop Up Country Photo 3.jpg
- Pop Up Country Photo 4.jpg
- Pop Up Country Photo 5.jpg
- Pop Up Country Photo 6.jpg
- Pop Up Country Photo 7.jpg
- Sam&Dan_BridalMidRes-09.jpg
- Seekers 1.JPG
- Silver Set Up.png
- Spring Blossoms.JPG
- Sweet 16th pic.jpg
- Tall centrepiece.jpg
- Tall floral centrepiece.jpg
- Toparies.jpg
- Winter Wonderland Entrance.jpg
- York Medieval Banquet.jpg
- conference.jpg
- lamonts trio.jpg
- lvcrea 1.jpg
- lvcrea 2.jpg
- manor montage.jpg
- peel manor house (002).png
- small centrepiece.jpg
- smallfloral centrepiece.jpg
- westies 2.jpg
- wetsies 1.jpg

## Business documents / sensitive data

See `EXCLUDED-sensitive.md` for the full list and per-file notes. Left in place in `old-drive-raw/`,
not moved, not tagged as an asset.

## Out of scope

- Peel Manor House .mp4 — full venue video, not a photo; this workflow only covers photo triage. Left in `old-drive-raw/` untouched. Recommend a separate video-handling decision from you.

## Flags for your review

- **Comedy 1-5.heic**: embedded EXIF metadata tags these as 'Screenshot', and the files were too large
  to render for visual confirmation in this pass. Classified as delete candidates out of caution, but
  they may in fact be genuine comedy-night event photos — worth a manual look before deleting.
- **Lorna19.jpg**: professional portrait of a marriage celebrant (third-party vendor), not the venue
  itself. Classified as a delete candidate since it doesn't fit any of the 6 tag categories, but keep
  it if you want a 'celebrant we work with' style credit somewhere.
- **HP Afternoon Tea.jfif / HP High Tea.jfif**: could not be rendered/verified as images in this review
  pass (very small, non-standard format handling). Treated as unusable; worth a manual look if you
  recall what these were.
- Several near-duplicate pairs were found and both copies flagged as delete candidates rather than
  silently keeping one: `Allergen Poster.jpg` / `Alogen Poster.jpg` (byte-identical), `Rotary Banner
  Whitre .png` / `Rotary-Banner-Whitre-.png` (byte-identical), `high tea background.jpg` /
  `vintage-invitation-PPK.jpg` (byte-identical).

