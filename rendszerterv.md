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
    Ezeket az üzleti folyamatokat szeretnénk mindenképpen megvalósítani, hogy a rendszer kész és használható legyen:

    **Funkcionális követelmények:**

    **Regisztráció:**
    - A felhasználónak kell tudnia egy saját fiókot létrehoznia, egy tetszőleges felhasználónév és jelszó felhasználásával. Egy felhasználónév egyszerre csak egy alkalommal lehet regisztrálva, ezzel biztosítva minden összezavarodás elkerülését.

    **Bejelentkezés:**
   - A felhasználónak be kell tudnia jelentkezni a saját fiókjába, a regisztrációnál megadott felhasználónév és jelszó segítségével

    **Vicc Posztolás Fiókba bejelentkezve:**
   - A felhasználónak lehetősége kell legyen a fiókjába belépve, a saját felhasználónevéhez csatolva egy viccet feltölteni az oldalra.

    **Vicc Posztolás anonimként:**
    - A felhasználónak lehetősége kell legyen anonim módon, "Anonymous" felhasználónévhez csatolva egy viccet feltölteni az oldalra.

    **Vicc Értékelés:**
   - A felhasználóknak lehetőségük kell legyen arra, hogy bejelentkezve a fiókjukba, vagy anonim módon értékelni más felhaszálók által posztolt vicceket értékelni pozitívan vagy negatívan.

    **Viccek Kategorizálása:**
    - A felhasználónak lehetősége kell legyen, bejelentkezve fiókjába vagy anonim módon, vicce posztolása előtt, egy kategóriát adni a viccnek, hogy más felhasználók szűrők segítségével könnyen megtalálhassák.

    **Viccek szűrése:**
    - A felhasználónak lehetősége kell legyen, bejelentkezve fiókjába, vagy anonim módon, kategóriák, posztolási idő vagy értékelés alapján szűrni a vicceket és csak azokat látni, amelyek megfelelnek ezeknek a kategóriáknak.

    **Nem funkcionális követelmények:**

    **Adatvédelem**
    - Az oldalon bejelentkezett, fiókkal rendelkező felhasználók csakis a saját maguk által posztolt vicceket tudják módosítani, azaz szerkeszthetik vagy frissíthetik azokat. Ez azt jelenti, hogy minden felhasználó kizárólagos jogot élvez az általa közzétett tartalmakhoz, és csak ők rendelkeznek jogosultsággal azok módosításához vagy javításához. Ezenkívül csak a saját maguk által posztolt viccekhez tudnak tulajdonítani kategóriákat vagy címkéket.  Ezzel együtt a rendszer biztosítja, hogy minden felhasználó teljes kontrollal rendelkezzen saját tartalmai felett.

    - A rendszer fejlesztői, illetve karbantartói semmilyen személyes információhoz ne férjenek hozzá a felhasználóktól, mint például a fiókok jelszavaihoz vagy más érzékeny adatokhoz. Az ilyen adatok teljes biztonságban kell maradniuk, és nem szabad megengedni, hogy bárki is jogosulatlanul hozzáférjen hozzájuk.

    - A rendszernek meg kell felelnie a GDPR-nek, vagyis az Európai Unió által meghatározott Általános Adatvédelmi Rendeletnek. Ez azt jelenti, hogy az alkalmazásnak vagy rendszernek szigorú adatvédelmi és adatkezelési szabályoknak kell megfelelnie annak érdekében, hogy biztosítsa a felhasználók személyes adatainak biztonságát és magánéleti jogainak védelmét. A GDPR előírja, hogy a felhasználóknak teljes átláthatóságot kell biztosítani az adatok gyűjtése és kezelése terén, és csak azokat az adatokat lehet felhasználni, amelyekhez a felhasználók kifejezetten hozzájárultak. Emellett a rendszernek képesnek kell lennie az adatok védelmére és az adatvesztés megelőzésére, és meg kell felelnie azoknak a jogi kötelezettségeknek, amelyek az adatok kezelésével kapcsolatban előírásokat tartalmaznak. 

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
    **Backend**
    - TODO: Rake pls írd le mit csináltál az adatbázis szinten xd

    **Frontend**
    - A web alkalmazás React keretrendszer felhasználásával készül el. TODO: Ide is már xd (valami ilyesmit : )

9. Adatbázis terv
    -

10. Implementációs terv
    -
    - A rendszer webes felülete HTML, CSS és JavaScript nyelven fog készülni, a React keretrendszer segítségével. Az alkalmazás egy React App formájában fog létrejönni, amely egybevonja ennek a három nyelvnek a használatát egy fájlban, így rendkívül átlátható és könnyen követhető lesz a kódstruktúra. Az egyes nyelvek kombinálása lehetővé teszi számunkra, hogy dinamikus és interaktív felhasználói felületet hozzunk létre.

    - Ezenkívül az alkalmazás képes lesz hatékonyan kommunikálni a backendben jelenlévő adatbázisokkal. A szerveroldali adatbázisokhoz való könnyű és hatékony hozzáférés lehetővé teszi az alkalmazásnak, hogy dinamikusan frissítse és jelenítse meg a tartalmat a felhasználók számára. Ezáltal a felhasználók számára egy gyors és reaktív élményt nyújtva.

    - A HTML, CSS és JavaScript kombinálása a React keretrendszerrel alkalmazásának  rugalmas felépítését teszi lehetővé, amely lehetővé teszi a felhasználók számára az egyszerű interakciót az alkalmazásban, miközben a háttérben az adatok hatékonyan kezelhetők és frissíthetők.

11. Tesztterv
    -


12. Telepítési terv
    -
    Az alkalmazás webes felületen fut, ezért egy ajánlott böngésző telepítése után (például Google Chrome, Firefox, Opera vagy Safari), csak egyszerűen meg kell nyitni a böngészőt, majd a megfelelő linkre kattintva elérhetővé válik a szolgáltatás. Ezen felül nincs szükség bonyolult telepítési folyamatokra vagy alkalmazások letöltésére, így könnyedén és gyorsan hozzáférhet az alkalmazáshoz, bárhol és bármikor, amikor internetkapcsolat áll rendelkezésre. Ez a kényelmes és könnyen hozzáférhető módja az alkalmazás használatának, amely megkönnyíti a felhasználók számára a gyors bejelentkezést és a hasznos funkciók elérését.

13. Karbantartási terv
    -
    Az alkalmazás karbantartását a felhasználók által jelentett problémák javítása, a háttérben futó szerver és adatbázis fenntartása, valamint a kliensek által kért módosítások és fejlesztések megvalósítása jelenti. Minden egyes probléma vagy hiba, amit a felhasználók jelentenek, fontos visszajelzés a fejlesztők számára, és az alkalmazás stabilitásának és funkcionalitásának javításához vezethet. Emellett a klienseknek lehetnek egyedi igényeik és javaslataik az alkalmazás továbbfejlesztése terén, és ezeket az igényeket általában megbeszélik és értékelik a fejlesztőkkel, hogy az alkalmazás még jobban megfeleljen a felhasználók elvárásainak és igényeinek. Ez a folyamatos karbantartási és fejlesztési munka biztosítja, hogy az alkalmazás mindig naprakész és felhasználóbarát legyen.
