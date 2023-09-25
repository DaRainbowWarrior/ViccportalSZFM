# Test log

| ID | Dátum | Tesztelő | Teszt leírása | Várt eredmény | Kapott eredmény | Átment/Megbukott |
|----|-------|----------|---------------|---------------|-----------------|------------------|
| T1 | 2023.09.25 | Gergő Ujvárosi | Kliens - Login Gomb | Átviszi a felhasználót a `/login` oldalra | Átirányítva a `/login` oldalra | ✅ |
| T2 | 2023.09.25 | Gergő Ujvárosi | Kliens - Register Gomb | Átviszi a felhasználót a `/register` oldalra | Átirányítva a `/register` oldalra | ✅ |
| T3 | 2023.09.25 | Gergő Ujvárosi | Kliens - Email és jelszó megadása után a felhasználó bejelentkezik | Átirányítás `/` oldalra és felhasználó neve megjelenik | Átirányítva | ✅ |
| T4 | 2023.09.25 | Gergő Ujvárosi | Kliens - Felhasználónév, Email és jelszó megadása után a felhasználó Regisztrál | Átirányítás `/login` oldalra | Átirányítva| ✅ |
| T5 | 2023.09.25 | Gergő Ujvárosi | Kliens - Logout Gomb megjelenése | Csak bejelenkezve jelenik meg | Csak bejelenkezve jelenik meg  | ✅ |
| T6 | 2023.09.25 | Gergő Ujvárosi | Kliens - Create a Post Gomb megjelenése | Csak bejelenkezve jelenik meg | Csak bejelenkezve jelenik meg  | ✅ |
| T7 | 2023.09.25 | Gergő Ujvárosi | Kliens - Create a Post Gomb működése | Átirányít `/create` oldalra | Átirányítva | ✅ |
| T8 | 2023.09.25 | Gergő Ujvárosi | Kliens - Logout Gomb műküdése | Felhasználó kijelenzkezik, süti törölve | Felhasználó kijelenzkezik, süti törölve | ✅ |
| T9 | 2023.09.25 | Hetes Bence | Kliens - Home oldal megjelenítése | A Home oldal megjelenít vicceket | Megjelenítve | ✅ |
| T10 | 2023.09.25 | Hetes Bence | Kliens - Home oldal végtelen görgetés | Az oldal aljára érve újabb vicceket jelenít meg | Az oldal aljára érve újabb vicceket jelenít meg | ✅ |
| T11 | 2023.09.25 | Hetes Bence | Kliens - Megnyílik-e az oldal a böngészőben | Megnyílik az oldal | Megnyílt az oldal | ✅ |
| T12 | 2023.09.25 | Hetes Bence | Kliens - Rezponzívitás | Az oldal rezponzív a képernyő méretére | Rezponzívitás minden képernyőn | ✅ |
| T13 | 2023.09.25 | Hetes Bence | Szerver - Szerver elindul | szerver elindul a `6969` porton | szerver elindult a `6969` porton| ✅ |
| T14 | 2023.09.25 | Hetes Bence | Szerver - Kapcsolatot létesít az adatbázissal | .env fájlban tárolt adatbázis URI-hoz sikeresen csatlakozik | Adatbázis csatlakozott | ✅ |
| T15 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Viccet | A `/jokes` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új viccet és tárolja az adatbázison | Vicc létrehozva és tárolva | ✅ |
| T16 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Felhasználót | A `/auth/register` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új felhasználót és tárolja az adatbázison| Felhasználó létrehozva és tárolva | ✅ |
| T17 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Tag-et | A `/tags` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új Tah-et és tárolja az adatbázison| Tag létrehozva és tárolva | ✅ |
| T18 | 2023.09.25 | Hetes Bence | Szerver - Felhasználót belépteti | A `/auth/login` oldalnak küldött POST request `PostBody` értékei alapján beléptetio felhasználót és visszaküld egy SessionTokent | Felhasználó beléptetve, SessionToken visszakapva | ✅ |
| T19 | 2023.09.25 | Gergő Ujvárosi | Kliens - Felértékelés gomb | Eggyel növeli a felértékelések számát egy nyomásra / második megnyomásnál egyel csökkenti | Gombnyomásra csökkent/nőtt az érték | ✅ |
| T20 | 2023.09.25 | Gergő Ujvárosi | Kliens - Leértékelés gomb | Eggyel csökkenti a felértékelések számát egy nyomásra / második megnyomásnál egyel növeli  | Gombnyomásra csökkent/nőtt az érték | ✅ |
| T21 | 2023.09.25 | Hetes Bence | Kliens - Welcome szöveg | A felhasználó bejelentkezésekor userData-ból kinyerve a username megjelenik egy welcome szövegben | Username megjelent | ✅ |
| T22 | 2023.09.25 | Hetes Bence | Kliens - Vicc létrehozása tag-ekkel |  Vicc létrehozásakor tag-eket mulitselect-ként hozzá adjuk a vicchez | Tagek megjelennek a vicc posztban | ✅ |
| T23 | 2023.09.25 | Hetes Bence | Kliens - Vicc létrehozása anonym szerzővel | Anonym posztolás bepipálásakor a poszt szerzője 'Anonymous' | A poszt szerzője 'Anonymous' | ✅ |
| T24 | 2023.09.25 | Hetes Bence | Kliens - Home Gomb minden oldalon | A home gomb minden oldalon átirányit a `/` oldalra | Átirányítva minden oldalon | ✅ |
| T25 | 2023.09.25 | Hetes Bence | Kliens - Végtelen görgetés véges tartalommal | Ha az adatbázis kifogy a viccekből, előről kezdi őket | Viccek körbeérnek | ✅ |
| T26 | 2023.09.25 | Hetes Bence | Szerver - Csak bejelentkezve készíthető új vicc | Vicc mentése csak megfelelő `SessionToken`-el lehetséges | `Forbidden` válasz `SessionToken` hiányában | ✅ |
| T27 | 2023.09.25 | Hetes Bence | Szerver - Jelszavak Hashelve mentődnek | Jelszavaknak csupán a hash-ét tároljuk biztonságos módon | Hash eltárolva | ✅ |
| T28 | 2023.09.25 | Hetes Bence | Szerver - Bejelentkezéskor `SessionToken` visszaküldése | Bejelentkezéskor a visszaadott JSON tartalmazza a `SessionToken`-t | `SessionToken` visszaküldve | ✅ |
| T29 | 2023.09.25 | Hetes Bence | Szerver - Vicc értékelése | `/jokes/:id/rate`-re küldött POST request növeli/csökkenti az adatbázisban található vicc értékelését | Értékelés megváltozva | ✅ |
| T30 | 2023.09.25 | Hetes Bence | Szerver - Vicc értékelés megkülönböztetése | `/jokes/:id/rate`-re küldött POST request `POST body`-ban található `ratingType` meghatározza az értékelés fajtáját | `ratingType: "like"` lájkolja a posztot, `ratingType: "dislike"` diszlájkolja a posztot | ✅ |