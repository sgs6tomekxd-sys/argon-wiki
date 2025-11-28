

import { Rank, Command, Mechanic, Dungeon } from './types';

export const SERVER_IP = "argoncraft.pl";
export const DISCORD_LINK = "https://dc.argoncraft.pl";
export const PRESENTATION_LINK = "https://prezentacja.argoncraft.pl";
export const STORE_LINK = "https://sklep.argoncraft.pl";
export const HOSTING_LINK = "https://pepehost.pl";

export const RANKS: Rank[] = [
  {
    id: 'vip',
    name: 'VIP',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/50',
    shadowColor: 'hover:shadow-yellow-400/20',
    price: 'Sprawdź /store',
    icon: 'crown',
    kitImage: 'https://i.imgur.com/yu8r8Uy.png',
    features: [
      'Codzienny unikalny potężny zestaw (Kit)',
      'Otwieranie żelaznych drzwi ręką',
      'Brak limitu czasu na czacie (Bypass chat cooldown)',
      '+2000 kratek zasięgu losowego teleportu (RTP)',
      '+4 miejsca na aukcjach (/ah)',
      '18 Max działek (Claims)',
      'Komendy działki: /c name, /c show',
      'Przełączanie na działce: LeafDecay, MobGriefing'
    ]
  },
  {
    id: 'mvp',
    name: 'MVP',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/50',
    shadowColor: 'hover:shadow-cyan-400/20',
    price: 'Sprawdź /store',
    icon: 'star',
    kitImage: 'https://i.imgur.com/5wLvkKH.png',
    features: [
      'Codzienny unikalny potężny zestaw (Kit)',
      'Wszystkie przywileje rangi VIP',
      'Bypass mute chat oraz RTP cooldown',
      'Skrzynia po śmierci (Angel Chest) - ochrona eq',
      'Teleportacja do skrzyni śmierci',
      'Możliwość czołgania się (Crawling)',
      '+4 miejsca na aukcjach',
      '21 Max działek (Claims)',
      'Komendy działki: /c ban, /c unban, /c sethome',
      'Przełączanie na działce: FireSpread, HostileMobSpawning'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    color: 'text-neon-purple',
    borderColor: 'border-neon-purple/50',
    shadowColor: 'hover:shadow-neon-purple/20',
    price: 'Sprawdź /store',
    icon: 'gem',
    kitImage: 'https://i.imgur.com/AaS5Sk5.png',
    features: [
      'Codzienny unikalny potężny zestaw (Kit)',
      'Wszystkie przywileje rangi MVP',
      'Limit 2 sethome (według rozpiski rangi)',
      '3 Max Prace (Jobs)',
      '50 Mebli (Furniture)',
      'Brak opóźnienia RTP',
      'Ignorowanie ochrony AC (AngelChest)',
      'Kolorowy czat, tabliczki i kowadło',
      'Auto Totem of Undying',
      'Możliwość Wall Jump (Skok od ściany)',
      '+6 miejsc na aukcjach',
      '25 Max działek (Claims), komenda /c lock',
      'Przełączanie na działce: Fly, PvP, TNT'
    ]
  }
];

export const COMMANDS: Command[] = [
  // VIP Commands (Ze zdjęcia)
  { command: '/besttool', description: 'Automatycznie dobiera najlepsze narzędzie do niszczonego bloku.', category: 'VIP' },
  { command: '/togglepm', description: 'Włącza lub wyłącza otrzymywanie prywatnych wiadomości.', category: 'VIP' },
  { command: '/depth', description: 'Pokazuje twoją aktualną głębokość względem poziomu morza.', category: 'VIP' },
  { command: '/disposal', description: 'Otwiera przenośny śmietnik do usuwania przedmiotów.', category: 'VIP' },
  { command: '/grindstone', description: 'Otwiera przenośny kamień szlifierski.', category: 'VIP' },
  { command: '/loom', description: 'Otwiera przenośne krosno.', category: 'VIP' },
  { command: '/stonecutter', description: 'Otwiera przenośną przecinarkę.', category: 'VIP' },
  { command: '/cartography', description: 'Otwiera przenośny stół kartograficzny.', category: 'VIP' },
  { command: '/workbench', description: 'Otwiera przenośny stół rzemieślniczy (Crafting).', category: 'VIP' },
  { command: '/getpos', description: 'Wyświetla twoje aktualne koordynaty.', category: 'VIP' },
  { command: '/me <tekst>', description: 'Wysyła wiadomość narracyjną na czacie.', category: 'VIP' },
  { command: '/apickup', description: 'AutoPickup - automatyczne podnoszenie wykopanych przedmiotów.', category: 'VIP' },

  // MVP Commands (Ze zdjęcia)
  { command: '/togglechat', description: 'Włącza lub wyłącza widoczność czatu globalnego.', category: 'MVP' },
  { command: '/togglementions', description: 'Włącza lub wyłącza powiadomienia o oznaczeniach.', category: 'MVP' },
  { command: '/hat', description: 'Zakłada trzymany w ręce blok na głowę.', category: 'MVP' },
  { command: '/back', description: 'Teleportuje do ostatniej lokalizacji (np. po śmierci).', category: 'MVP' },
  { command: '/jump', description: 'Teleportuje w miejsce, na które patrzysz (na blok).', category: 'MVP' },
  { command: '/itemlore', description: 'Pozwala edytować opis (lore) trzymanego przedmiotu.', category: 'MVP' },
  { command: '/near', description: 'Wyświetla listę graczy znajdujących się w pobliżu.', category: 'MVP' },
  { command: '/anvil', description: 'Otwiera przenośne kowadło.', category: 'MVP' },
  { command: '/brewing', description: 'Otwiera przenośny statyw alchemiczny.', category: 'MVP' },
  { command: '/furnace', description: 'Otwiera przenośny piec.', category: 'MVP' },
  { command: '/smithingtable', description: 'Otwiera przenośny stół kowalski.', category: 'MVP' },
  { command: '/enderchest', description: 'Otwiera przenośną skrzynię kresu (Enderchest).', category: 'MVP' },

  // PRO Commands (Ze zdjęcia)
  { command: '/emojis', description: 'Otwiera menu z dostępnymi emotikonami.', category: 'PRO' },
  { command: '/acfetch', description: 'Przywołuje twoją skrzynię śmierci (Angel Chest) do ciebie.', category: 'PRO' },
  { command: '/getpos others', description: 'Sprawdza koordynaty innego gracza.', category: 'PRO' },
  { command: '/invsee <nick>', description: 'Pozwala podejrzeć ekwipunek innego gracza.', category: 'PRO' },
  { command: '/nick <nazwa>', description: 'Umożliwia zmianę twojego nicku na czacie.', category: 'PRO' },
  { command: '/tptoggle', description: 'Blokuje możliwość teleportowania się do ciebie.', category: 'PRO' },
  { command: '/smoker', description: 'Otwiera przenośną wędzarkę.', category: 'PRO' },
  { command: '/enchanttable', description: 'Otwiera przenośny stół do zaklęć.', category: 'PRO' },
  { command: '/blastfurnace', description: 'Otwiera przenośny piec hutniczy.', category: 'PRO' },
  { command: '/lumberjack', description: 'Włącza/wyłącza ścinanie całych drzew (TreeCapitator).', category: 'PRO' },

  // Rangi / Sklep (General)
  { command: '/store', description: 'Otwiera główne menu sklepu i informacji o rangach.', category: 'Rangi' },
  { command: '/itemshop', description: 'Otwiera sklep z przedmiotami.', category: 'Rangi' },

  // Teleportacja
  { command: '/spawn', description: 'Teleportuje gracza na punkt startowy serwera.', category: 'Teleportacja' },
  { command: '/tpa <nick>', description: 'Wysyła prośbę o teleportację do innego gracza.', category: 'Teleportacja' },
  { command: '/tpaccept', description: 'Akceptuje prośbę o teleportację.', category: 'Teleportacja' },
  { command: '/tpdeny', description: 'Odrzuca prośbę o teleportację.', category: 'Teleportacja' },
  { command: '/warp', description: 'Otwiera menu teleportacji (Dungeony, Kasyno, Lokacje).', category: 'Teleportacja' },
  { command: '/warp kasyno', description: 'Szybki teleport do kasyna.', category: 'Teleportacja' },
  { command: '/sethome <nazwa>', description: 'Ustawia dom w miejscu, w którym stoisz.', category: 'Teleportacja' },
  { command: '/home <nazwa>', description: 'Teleportuje do ustawionego wcześniej domu.', category: 'Teleportacja' },
  
  // Ogólne
  { command: '/menu', description: 'Otwiera główne menu ustawień i skrótów.', category: 'Ogólne' },
  { command: '/guide', description: 'Otwiera przewodnik po serwerze dla nowych graczy.', category: 'Ogólne' },
  { command: '/pomoc', description: 'Wyświetla listę najważniejszych informacji.', category: 'Ogólne' },
  { command: '/regulamin', description: 'Wyświetla skrócony regulamin serwera.', category: 'Ogólne' },
  { command: '/msg <nick> <treść>', description: 'Wysyła prywatną wiadomość do gracza.', category: 'Ogólne' },
  { command: '/r <treść>', description: 'Szybka odpowiedź na ostatnią wiadomość prywatną.', category: 'Ogólne' },
  
  // Ekonomia
  { command: '/money', description: 'Sprawdza stan Twojego konta.', category: 'Ekonomia' },
  { command: '/pay <nick> <kwota>', description: 'Przelewa pieniądze innemu graczowi.', category: 'Ekonomia' },
  { command: '/sklep', description: 'Otwiera sklep serwerowy.', category: 'Ekonomia' },
  { command: '/ah', description: 'Otwiera dom aukcyjny graczy (Rynek).', category: 'Ekonomia' },
  
  // Mechaniki
  { command: '/jobs', description: 'Otwiera menu wyboru pracy.', category: 'Inne' },
  { command: '/battlepass', description: 'Otwiera menu przepustki bojowej.', category: 'Inne' },
  { command: '/misje', description: 'Wyświetla listę dostępnych misji.', category: 'Inne' },
];

export const MECHANICS: Mechanic[] = [
  {
    id: 'menu',
    title: 'Menu Główne (/menu)',
    description: 'Centrum sterowania - otwiera ustawienia i skróty do systemów.',
    details: [
      'Komenda: /menu',
      'Szybki dostęp do wszystkich systemów serwera.',
      'Skróty do warpów, sklepu i prac.',
      'Ustawienia konta i powiadomień.'
    ],
    imagePlaceholder: 'https://i.imgur.com/3rWDHtf.png'
  },
  {
    id: 'guide',
    title: 'Przewodnik (/guide)',
    description: 'Interaktywne kompendium wiedzy o serwerze.',
    details: [
      'Komenda: /guide',
      'Odbiór zestawów startowych (kits).',
      'Informacje o dropie i rangach.',
      'Pomoc dla początkujących graczy.'
    ],
    imagePlaceholder: 'https://i.imgur.com/G0TgwXh.png'
  },
  {
    id: 'kits',
    title: 'Zestawy Przedmiotów (/kit)',
    description: 'Kity dla rang i nie tylko! Odbieraj darmowe pakiety startowe i codzienne.',
    details: [
      'Komenda: /kit otwiera menu zestawów.',
      'Każda ranga Premium posiada swój unikalny, potężny zestaw dzienny.',
      'Dostępne pakiety startowe dla nowych graczy.',
      'Zestawy zawierają niezbędny ekwipunek i surowce.'
    ],
    imagePlaceholder: 'https://i.imgur.com/CsxGkPZ.png'
  },
  {
    id: 'custom-items',
    title: 'Mnóstwo Custom Itemów',
    description: 'Unikalne przedmioty z potężnymi mocami, których nie znajdziesz w zwykłym Minecrafcie.',
    details: [
      'Przykład: Miecz Zeusa - legendarna broń władająca mocą piorunów.',
      'Specjalne zbroje dające unikalne efekty.',
      'Magiczne talizmany i narzędzia.',
      'Do zdobycia z eventów, skrzyń i dungeonów.'
    ],
    imagePlaceholder: 'https://i.imgur.com/qBPZmHO.png'
  },
  {
    id: 'auctions',
    title: 'Rynek Graczy (/ah)',
    description: 'Zaawansowany system aukcji pozwalający na bezpieczny handel między graczami.',
    details: [
      'Komenda: /ah (otwiera rynek)',
      'Możliwość licytacji oraz opcji "Kup Teraz".',
      'Przeglądaj przedmioty według kategorii.',
      'Odbieranie przedmiotów i pieniędzy z zakończonych aukcji.'
    ],
    imagePlaceholder: 'https://i.imgur.com/cD3OTS4.png'
  },
  {
    id: 'furniture',
    title: 'Meble (Furniture)',
    description: 'Upięknij swoją bazę setkami unikalnych mebli dostępnych na serwerze.',
    details: [
      'Setki modeli mebli: krzesła, stoły, lampy, elektronika.',
      'Działają bez modów (Resource Pack serwerowy).',
      'Idealne do dekoracji wnętrz i ogrodów.',
      'Dostępne dla wszystkich graczy.'
    ],
    imagePlaceholder: 'https://i.imgur.com/cnBlTLc.png'
  },
  {
    id: 'backpacks',
    title: 'System Plecaków',
    description: 'Zwiększ swoje możliwości magazynowania dzięki przenośnym plecakom.',
    details: [
      'Dodatkowe miejsce w ekwipunku.',
      'Różne poziomy plecaków o różnej pojemności.',
      'Nie trać czasu na powroty do bazy.',
      'Niezbędne podczas długich wypraw i kopania.'
    ],
    imagePlaceholder: 'https://i.imgur.com/IfY1Rmz.png'
  },
  {
    id: 'battlepass',
    title: 'Battlepass',
    description: 'Sezonowa przepustka z nagrodami za aktywność i wykonywanie zadań.',
    details: [
      'Zdobywaj punkty za bycie online i wykonywanie zadań.',
      'Odblokuj unikalne skiny, przedmioty i klucze do skrzyń.',
      'Wersja darmowa oraz Premium (dla posiadaczy przepustki premium na sklep.argoncraft.pl).',
      'Setki poziomów do odblokowania w każdym sezonie.'
    ],
    imagePlaceholder: 'https://i.imgur.com/3cf8GPm.png'
  },
  {
    id: 'jobs',
    title: 'System Prac (Jobs)',
    description: 'Rozbudowany system ekonomii oparty na zawodach.',
    details: [
      'Komenda: /jobs - wybierz swoje powołanie.',
      'Dostępne zawody: Górnik, Drwal, Farmer, Łowca i inne.',
      'Awansuj na wyższe poziomy pracy, aby zarabiać więcej.',
      'Otrzymuj punkty pracy i wymieniaj je na bonusy.'
    ],
    imagePlaceholder: 'https://i.imgur.com/I0NKRtB.png'
  },
  {
    id: 'crates',
    title: 'System Skrzyń (Crates)',
    description: 'Otwieraj magiczne skrzynie, aby zdobyć cenne nagrody i ekwipunek.',
    details: [
      'Dostępne rodzaje: Daily, Balanced, Diversity, Epic.',
      'Klucze można zdobyć w grze lub na sklep.argoncraft.pl',
      'Każda skrzynia zawiera losowe, ale cenne nagrody.',
      'Znajdziesz je na spawnie serwera.'
    ],
    imagePlaceholder: 'https://i.imgur.com/0imiOda.png'
  },
  {
    id: 'npc',
    title: 'Interaktywne NPC',
    description: 'Świat żyje! Z każdym napotkanym NPC możesz porozmawiać.',
    details: [
      'Kliknij prawym przyciskiem myszy na NPC, aby rozpocząć dialog.',
      'Mieszkańcy spawna chętnie podzielą się plotkami i wskazówkami.',
      'Odkrywaj historię świata poprzez rozmowy.',
      'Niektórzy NPC mogą mieć dla Ciebie ukryte informacje.'
    ],
    imagePlaceholder: 'https://i.imgur.com/cUcZqJb.png'
  },
  {
    id: 'quiz',
    title: 'Chat Quiz',
    description: 'Sprawdź swoją wiedzę i refleks w automatycznych konkursach na czacie.',
    details: [
      'Co jakiś czas na czacie pojawia się losowe pytanie.',
      'Wygrywa osoba, która jako pierwsza poprawnie odpowie na czacie.',
      'Nagroda: 1000$ oraz 1 Klucz do Epickiej Skrzyni.',
      'Wymagana jest idealna pisownia odpowiedzi.'
    ],
    imagePlaceholder: ''
  },
  {
    id: 'missions',
    title: 'System Misji (Wkrótce...)',
    description: 'Zadania fabularne i codzienne wyzwania są w trakcie przygotowywania.',
    details: [
      'System w trakcie budowy.',
      'Spodziewaj się codziennych wyzwań.',
      'Epicka linia fabularna odkrywająca tajemnice serwera.',
      'Więcej informacji wkrótce!'
    ],
    imagePlaceholder: ''
  },
  {
    id: 'casino',
    title: 'Kasyno',
    description: 'Spróbuj swojego szczęścia w serwerowym kasynie.',
    details: [
      'Dostęp przez menu teleportacji: /warp kasyno',
      'Ruletka: Obstawiaj kolory lub liczby.',
      'Sloty: Maszyny typu jednoręki bandyta.',
      'Jackpot: Pula nagród, którą może zgarnąć jeden szczęśliwiec.'
    ],
    imagePlaceholder: 'https://i.imgur.com/0dI3hBA.png'
  }
];

export const DUNGEONS: Dungeon[] = [
  {
    name: "Dungeon Łatwy",
    difficulty: "Łatwy",
    color: "text-green-400",
    requirement: "Klucz Łatwy",
    description: "Idealny na start. Spotkasz tutaj Zombie w zbrojach i inne podstawowe potwory.",
    rewards: ["Gotówka (Kasa)"]
  },
  {
    name: "Dungeon Średni",
    difficulty: "Średni",
    color: "text-yellow-400",
    requirement: "Klucz Średni",
    description: "Wymagające starcie. Spotkasz tutaj Zombie, Topielce, Pillagerów oraz inne niebezpieczne stwory.",
    rewards: ["Duża Gotówka"]
  },
  {
    name: "Dungeon Trudny",
    difficulty: "Trudny",
    color: "text-red-500",
    requirement: "Klucz Trudny",
    description: "Piekielne wyzwanie. Czekają tu na ciebie Pigliny, Ghasty, Blaze'y oraz Endermany.",
    rewards: ["Ogromna Kasa"]
  }
];
