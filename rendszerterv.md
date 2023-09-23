# Rendszer terv

1. A rendszer célja
    -
    A rendszer célja hogy egy webes felületen, anonimként vagy a felhasználói felületbe bejelentkezve, vicceket lehessen megosztani. Ezeket a vicceket tartalmuk szerint kategorizálni lehet, és ezekre a kategóriákra szűrőkkel keresni. A vicceket a felhasználók értékelni is tudják az alapján hogy mennyire vicces. Az alkalmazást csak webes felületen lesz elérhető, nincs tervben Android/IOS app fejlesztése. Az alkalmazás adatbázisban tárolja a vicceket, a kategóriájukat, valamint a felhasználókat

2. Projektterv
    -
    A projektet webes platformra fejlesztük, React alapon, Visual Studio Code IDE-t használva.

    A projektet két részre bontottuk: egy ember vállalja a Frontendet (a megjelenített weboldalt, a stílusát, valamint az összes interfészt a viccek felöltésére, kategorizálására, szűrésére, a felhasználói fiók bejelentkezési/regisztrálási felületét), és a második a Backendet (Az oldal mögötti adatbázist, és az adatbázis és frontend közötti kapcsolatokat)

    **Felelősségi Körök**

    | Név | Felelősségi Kör | Elvállalt rész |
    |-----|-----------------|----------------|
    | Ujvárosi Gergő | Programozó | Frontend |
    | Hetes Bence | Programozó | Backend |

    **Mérföldkövek**

    A projekt legfontosabb mérföldkövei:
    * A funkcionális terv megírása
    * A rendszerterv megírása és bemutatása a kliensnek
    * Az adatbázisok létrehozása
    * Az adatbázisok kommunikálásához szükséges rendszerek megírása
    * A főoldal megszerkeztése
    * A vicc hozzáadási rendszer összekötése az adatbázissal
    * A Bejelentkezési / Regisztrációs oldal megszerkeztése
    * A Bejelentkezési / Regisztrációs oldal összekötése az adatbázissal
    * A kész rendszerek összekötése
    * A kész rendszer tesztelése
    * A test log kitöltése

    **Határidők**

    | Mérföldkő | Határidő |
    |-----------|----------|
    | A funkcionális terv megírása | Szept. 11 |
    | A rendszerterv megírása és bemutatása a kliensnek | Szept. 18 |
    | Az adatbázisok létrehozása | Szept. 25 |
    | Az adatbázisok kommunikálásához szükséges rendszerek megírása| Szept. 25 |
    | A főoldal megszerkeztése | Szept. 25 |
    | A vicc hozzáadási rendszer összekötése az adatbázissal | Szept. 25 |
    | A Bejelentkezési / Regisztrációs oldal megszerkeztése | Szept. 25 |
    | A Bejelentkezési / Regisztrációs oldal összekötése az adatbázissal | Szept. 25 |
    | A kész rendszerek összekötése | Szept. 25 |
    | A kész rendszer tesztelése | Szept. 25 |
    | A test log kitöltése | Szept. 25 |


3. Üzleti folyamatok modellje
    -
    

4. Követelmények
    -

5. Funkcionális terv
    -

6. Fizikai környezet
    -
    * Az alkalmazás webes felületre készült, kizárólag PC (számítógép) eszközökre, de minden modern internet-képes ezközön hozzáférhető és használható az oldal
    * Van tűzfal a hálózaton és minden portot is engedélyez.
    * Megvásárolt komponenseneket nem használ az alkalmazás; minden saját fejlesztésű vagy ingyenesen használható komponens
    * Fejlesztői eszközök:
        * Visual Studio Code
        * Github
        * Draw.io

7. Absztrakt domain modell
    -

8. Architekturális terv
    -


9. Adatbázis terv
    -

10. Implementációs terv
    -


11. Tesztterv
    -


12. Telepítési terv
    -
    Az alkalmazás webes felületen fut, ezért egy ajánlott böngésző telepítése után (például Google Chrome, Firefox, Opera vagy Safari), csak egyszerűen meg kell nyitni a böngészőt, majd a megfelelő linkre kattintva elérhetővé válik a szolgáltatás. Ezen felül nincs szükség bonyolult telepítési folyamatokra vagy alkalmazások letöltésére, így könnyedén és gyorsan hozzáférhet az alkalmazáshoz, bárhol és bármikor, amikor internetkapcsolat áll rendelkezésre. Ez a kényelmes és könnyen hozzáférhető módja az alkalmazás használatának, amely megkönnyíti a felhasználók számára a gyors bejelentkezést és a hasznos funkciók elérését.

13. Karbantartási terv
    -
    Az alkalmazás karbantartását a felhasználók által jelentett problémák javítása, a háttérben futó szerver és adatbázis fenntartása, valamint a kliensek által kért módosítások és fejlesztések megvalósítása jelenti. Minden egyes probléma vagy hiba, amit a felhasználók jelentenek, fontos visszajelzés a fejlesztők számára, és az alkalmazás stabilitásának és funkcionalitásának javításához vezethet. Emellett a klienseknek lehetnek egyedi igényeik és javaslataik az alkalmazás továbbfejlesztése terén, és ezeket az igényeket általában megbeszélik és értékelik a fejlesztőkkel, hogy az alkalmazás még jobban megfeleljen a felhasználók elvárásainak és igényeinek. Ez a folyamatos karbantartási és fejlesztési munka biztosítja, hogy az alkalmazás mindig naprakész és felhasználóbarát legyen.
