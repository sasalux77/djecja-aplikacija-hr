# Dječja Aplikacija - Matematika i Čitanje

Interaktivna edukacijska aplikacija za djecu uzrasta 6-8 godina za vježbanje matematike i čitanja na hrvatskom jeziku.

## Funkcionalnosti

### Matematika (25 zadataka dnevno)
- **Sabiranje i oduzimanje do 30** (5 zadataka)
- **Zadaci s praznim mjestima** (3 zadatka) - npr. "5 + _ = 12"
- **Zadaci sa zagradama** (3 zadatka) - npr. "(8 + 5) - 3 = ?"
- **Prethodnik i sljedbenik** (3 zadatka)
- **Umanjenik, umanjilac i razlika** (3 zadatka)
- **Prvi pribrojnik, drugi pribrojnik i zbroj** (3 zadatka)
- **Parni i neparni brojevi** (2 zadatka)
- **Rimski brojevi do 30** (3 zadatka)

### Čitanje
- **Priče tematski povezane s matematikom** (80-120 riječi)
- **Pitanja za razumijevanje** s ponuđenim opcijama
- **TTS podrška** za čitanje priča

### Interaktivne funkcionalnosti
- **Virtuelna tastatura** za unos odgovora
- **3 pokušaja po zadatku** s automatskim hintovima
- **TTS hintovi** na hrvatskom jeziku
- **Vizualno praćenje napretka** (progress bar, zvjezdice)
- **Motivacijske poruke** "BRAVO!" za tačne odgovore
- **Mogućnost vraćanja** na prethodne zadatke

### 10 dana različitog sadržaja
Aplikacija automatski odabira sadržaj na temelju trenutnog dana u mjesecu, omogućavajući 10 različitih setova zadataka i priča.

## Tehnička implementacija

### Tehnologije
- **React** s modernim UI komponentama
- **Tailwind CSS** za stiliziranje
- **Shadcn/UI** komponente
- **Lucide React** ikone
- **Web Speech API** za TTS funkcionalnost

### Dizajn
- **Responzivni dizajn** optimiziran za mobilne telefone
- **Vesela paleta boja** (ružičasta, ljubičasta, plava)
- **Dječji interfejs** s velikim dugmićima
- **Jasni fontovi** i čitljivost

## Pokretanje aplikacije

### Razvoj
```bash
# Instalacija ovisnosti
pnpm install

# Pokretanje development servera
pnpm run dev
```

### Produkcija
```bash
# Kreiranje build verzije
pnpm run build

# Pregled build verzije
pnpm run preview
```

## Deployment

Aplikacija je spremna za hosting na:
- **Netlify** (preporučeno)
- **Vercel**
- **GitHub Pages**
- Bilo koji statički hosting servis

### Netlify deployment
1. Kreiraj novi site na Netlify
2. Poveži s Git repozitorijem ili upload `dist` folder
3. Build command: `pnpm run build`
4. Publish directory: `dist`

## Struktura datoteka

```
djecja-aplikacija/
├── src/
│   ├── App.jsx          # Glavna aplikacija
│   ├── content.js       # Sadržaj za 10 dana
│   ├── App.css          # Stilovi
│   └── main.jsx         # Entry point
├── public/              # Statički resursi
├── dist/                # Build verzija
└── README.md            # Ova datoteka
```

## Specifikacije

Aplikacija je kreirana prema detaljnim specifikacijama koje uključuju:
- Točan broj zadataka po kategoriji
- Interaktivne elemente (virtuelna tastatura, TTS)
- Motivacijski sustav (zvjezdice, progress bar)
- Optimizaciju za Android mobilne uređaje
- Lokalizaciju na hrvatski jezik

## Podrška

Aplikacija je testirana i optimizirana za:
- **Android mobilni telefoni** (primarni cilj)
- **Desktop browseri** (Chrome, Firefox, Safari)
- **iOS uređaji** (ograničena TTS podrška)

## Licenca

Ova aplikacija je kreirana za edukacijske svrhe.

