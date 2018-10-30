# chef-bot
**Discord Bot poskytující recepty na základě zadaných ingrediencí**

<img src="https://discordapp.com/assets/e4923594e694a21542a489471ecffa50.svg"  height="70" /> 
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="70" /> 
<img src="https://discord.js.org/static/logo.svg" height="70" />

## Úvod
Cílem tohoto dokumentu je shrnout a specifikovat požadavky a funkce služby chef-bot. Vymezuje potřeby zúčastněných stran a cílových uživatelů.

## Funkční specifikace
* Cílem je vytvořit službu, která se napojuje na komunikační platformu [Discord](https://discordapp.com/)
    * Discord je alternativa ke [Skype](https://www.skype.com/) a [Teamspeak](https://www.teamspeak.com/) (aplikace pro hlasovou komunikaci)
* Na základě vstupu od uživatele bude vracet recepty jídel
* Vstupem bude seznam ingrediencí, které má uživatel dostupné
    * ingredience budou uživatelé zadávat odděleně čárkou nebo mezerou
* Výstupem bude recept
    * pokud bude více receptů vyhovovat uživatelskému vstupu, tak program náhodně vylosuje jeden
* Uživatel také může zažádat o zcela náhodný recept bez toho, aniž by zadal ingredience.
* Uživatel může zažádat o konkrétní recept
* Služba bude poskytována pouze v anglickém jazyce

### Diagram užití
![Diagram užití](use_case.png)

### Technické požadavky na uživatele
* Koncový uživatel potřebuje k přístupu ke službě zařízení s operačními systémy:
    * Windows (7 nebo vyšší)
    * Linux
    * macOS
    * Android
    * iOS
* Discord je dostupný jak ve verzi webové aplikace, kde uživatel potřebuje pouze prohlížeč a nebo také jako desktopová či mobilní aplikace

## Technická specifikace
### Datový model
* Testovaní bude probíhat na lokální databázi.
* Produkční databáze bude na hostingu nebo Azure.
* Přidávání receptů bude probíhat přes REST API databáze.

<img src="schema.png" alt="Schéma databáze" height="480" />

### Technické požadavky pro vývoj
* Aplikace Discord
* Discord.js knihovna pro interakci s Discord API.
* Server s Node.js, poskytující rozhraní API k databázi receptů.
* DevOps pomocí GitHub a Trello.
* Relační databáze

### Použité technologie, licence
* Discord ([Proprietární freeware](https://discordapp.com/licenses))
* Discord.js ([Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0))
* node.js ([MIT License](https://opensource.org/licenses/MIT))
* MySQL ([GNU GPL](https://www.gnu.org/licenses/gpl.html))
