# Test log

| ID | Dátum | Tesztelő | Teszt leírása | Várt eredmény | Kapott eredmény | Átment/Megbukott |
|----|-------|----------|---------------|---------------|-----------------|------------------|
| T1 | 2023.09.25 | Hetes Bence | Login Gomb | Átviszi a felhasználót a `/login` oldalra | Átirányítva a `/login` oldalra | ✅ |
| T2 | 2023.09.25 | Hetes Bence | Register Gomb | Átviszi a felhasználót a `/register` oldalra | Átirányítva a `/register` oldalra | ✅ |
| T3 | 2023.09.25 | Hetes Bence | Email és jelszó megadása után a felhasználó bejelentkezik | Átirányítás `/` oldalra és felhasználó neve megjelenik | Átirányítva | ✅ |
| T4 | 2023.09.25 | Hetes Bence | Felhasználónév, Email és jelszó megadása után a felhasználó Regisztrál | Átirányítás `/login` oldalra | Átirányítva| ✅ |
| T5 | 2023.09.25 | Hetes Bence | Logout Gomb megjelenése | Csak bejelenkezve jelenik meg | Csak bejelenkezve jelenik meg  | ✅ |
| T6 | 2023.09.25 | Hetes Bence | Create a Post Gomb megjelenése | Csak bejelenkezve jelenik meg | Csak bejelenkezve jelenik meg  | ✅ |
| T7 | 2023.09.25 | Hetes Bence | Create a Post Gomb működése | Átirányít `/create` oldalra | Átirányítva | ✅ |
| T8 | 2023.09.25 | Hetes Bence | Logout Gomb műküdése | Felhasználó kijelenzkezik, süti törölve | Felhasználó kijelenzkezik, süti törölve | ✅ |
| T9 | 2023.09.25 | Hetes Bence | Home oldal megjelenítése | A Home oldal megjelenít vicceket | Megjelenítve | ✅ |
| T10 | 2023.09.25 | Hetes Bence | Home oldal végtelen görgetés | Az oldal aljára érve újabb vicceket jelenít meg | Az oldal aljára érve újabb vicceket jelenít meg | ✅ |
| T11 | 2023.09.25 | Hetes Bence | Megnyílik-e az oldal a böngészőben | Megnyílik az oldal | Megnyílt az oldal | ✅ |
| T12 | 2023.09.25 | Hetes Bence | Rezponzívitás | Az oldal rezponzív a képernyő méretére | Rezponzívitás minden képernyőn | ✅ |
| T12 | 2023.09.25 | Hetes Bence | Szerver - Szerver elindul | szerver elindul a `6969` porton | szerver elindult a `6969` porton| ✅ |
| T13 | 2023.09.25 | Hetes Bence | Szerver - Kapcsolatot létesít az adatbázissal | .env fájlban tárolt adatbázis URI-hoz sikeresen csatlakozik | Adatbázis csatlakozott | ✅ |
| T14 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Viccet | A `/jokes` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új viccet és tárolja az adatbázison | Vicc létrehozva és tárolva | ✅ |
| T15 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Felhasználót | A `/auth/register` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új felhasználót és tárolja az adatbázison| Felhasználó létrehozva és tárolva | ✅ |
| T16 | 2023.09.25 | Hetes Bence | Szerver - Létrehoz az adatbázisban Tag-et | A `/tags` oldalnak küldött POST request `PostBody` értékei alapján létrehoz egy új Tah-et és tárolja az adatbázison| Tag létrehozva és tárolva | ✅ |
| T17 | 2023.09.25 | Hetes Bence | Szerver - Felhasználót belépteti | A `/auth/login` oldalnak küldött POST request `PostBody` értékei alapján beléptetio felhasználót és visszaküld egy SessionTokent | Felhasználó beléptetve, SessionToken visszakapva | ✅ |
