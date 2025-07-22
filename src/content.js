const dailyContent = [
  // Dan 1
  {
    mathTasks: [
      { type: 'basic', question: '15 + 8 = ?', answer: 23, hint: 'Dodaj 8 na 15' },
      { type: 'basic', question: '22 - 7 = ?', answer: 15, hint: 'Oduzmi 7 od 22' },
      { type: 'basic', question: '9 + 14 = ?', answer: 23, hint: 'Dodaj 14 na 9' },
      { type: 'basic', question: '25 - 12 = ?', answer: 13, hint: 'Oduzmi 12 od 25' },
      { type: 'basic', question: '18 + 6 = ?', answer: 24, hint: 'Dodaj 6 na 18' },
      { type: 'blank', question: '5 + _ = 12', answer: 7, hint: 'Koji broj dodaš na 5 da dobiješ 12?' },
      { type: 'blank', question: '20 - _ = 13', answer: 7, hint: 'Koji broj oduzimaš od 20 da dobiješ 13?' },
      { type: 'blank', question: '_ + 9 = 16', answer: 7, hint: 'Koji broj dodaš na 9 da dobiješ 16?' },
      { type: 'brackets', question: '(8 + 5) - 3 = ?', answer: 10, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '15 - (4 + 2) = ?', answer: 9, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(12 - 7) + 8 = ?', answer: 13, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 15?', answer: 14, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 23?', answer: 24, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 30?', answer: 29, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 18 - 5 = 13, koji je umanjenik?', answer: 18, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 25 - 8 = 17, koji je umanjilac?', answer: 8, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 20 - 6 = 14, koja je razlika?', answer: 14, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 12 + 7 = 19, koji je prvi pribrojnik?', answer: 12, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 9 + 15 = 24, koji je drugi pribrojnik?', answer: 15, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 11 + 8 = 19, koji je zbroj?', answer: 19, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 16 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 23 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je V u običnim brojevima?', answer: 5, hint: 'V je rimski broj za 5' },
      { type: 'roman', question: 'Koliko je X u običnim brojevima?', answer: 10, hint: 'X je rimski broj za 10' },
      { type: 'roman', question: 'Koliko je XV u običnim brojevima?', answer: 15, hint: 'X je 10, V je 5, zajedno 15' }
    ],
    readingStory: {
      title: "Avantura na plaži",
      text: `Ana i Marko su otišli na plažu sa svojom mamom. Ana je imala 12 školjki, a Marko 8. Zajedno su gradili dvorac od pijeska. Ana je dodala još 5 školjki na vrh dvorca. "Koliko školjki sada ima Ana?" pitao je Marko. Mama im je objasnila da treba sabrati 12 i 5. Ana je bila presretna kada je saznala da ima 17 školjki! Zatim su svi zajedno uživali u kupanju u moru.`,
      questions: [
        { question: "Koliko školjki je Ana imala na početku?", options: ["10", "12", "15"], correct: 1 },
        { question: "Koliko školjki je Ana dodala na dvorac?", options: ["3", "5", "8"], correct: 1 },
        { question: "Gdje su Ana i Marko gradili dvorac?", options: ["U parku", "Na plaži", "Kod kuće"], correct: 1 }
      ]
    }
  },
  // Dan 2
  {
    mathTasks: [
      { type: 'basic', question: '10 + 5 = ?', answer: 15, hint: 'Dodaj 5 na 10' },
      { type: 'basic', question: '18 - 9 = ?', answer: 9, hint: 'Oduzmi 9 od 18' },
      { type: 'basic', question: '7 + 11 = ?', answer: 18, hint: 'Dodaj 11 na 7' },
      { type: 'basic', question: '20 - 5 = ?', answer: 15, hint: 'Oduzmi 5 od 20' },
      { type: 'basic', question: '13 + 7 = ?', answer: 20, hint: 'Dodaj 7 na 13' },
      { type: 'blank', question: '7 + _ = 15', answer: 8, hint: 'Koji broj dodaš na 7 da dobiješ 15?' },
      { type: 'blank', question: '25 - _ = 10', answer: 15, hint: 'Koji broj oduzimaš od 25 da dobiješ 10?' },
      { type: 'blank', question: '_ + 6 = 14', answer: 8, hint: 'Koji broj dodaš na 6 da dobiješ 14?' },
      { type: 'brackets', question: '(10 + 3) - 2 = ?', answer: 11, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '20 - (7 + 3) = ?', answer: 10, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(15 - 5) + 4 = ?', answer: 14, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 20?', answer: 19, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 11?', answer: 12, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 10?', answer: 9, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 20 - 10 = 10, koji je umanjenik?', answer: 20, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 15 - 7 = 8, koji je umanjilac?', answer: 7, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 10 - 3 = 7, koja je razlika?', answer: 7, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 8 + 4 = 12, koji je prvi pribrojnik?', answer: 8, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 6 + 9 = 15, koji je drugi pribrojnik?', answer: 9, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 10 + 10 = 20, koji je zbroj?', answer: 20, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 13 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 24 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je I u običnim brojevima?', answer: 1, hint: 'I je rimski broj za 1' },
      { type: 'roman', question: 'Koliko je II u običnim brojevima?', answer: 2, hint: 'II je rimski broj za 2' },
      { type: 'roman', question: 'Koliko je IV u običnim brojevima?', answer: 4, hint: 'IV je rimski broj za 4' }
    ],
    readingStory: {
      title: "Izlet u šumu",
      text: `Mali medo Bruno i njegova prijateljica vjeverica Lara odlučili su otići na izlet u šumu. Bruno je ponio 10 medenjaka, a Lara 5 lješnjaka. Dok su šetali, pronašli su 3 gljive. Bruno je podijelio medenjake s Larom. "Koliko medenjaka sada imamo?" upitala je Lara. Bruno je rekao da imaju 10 medenjaka, a Lara je dodala da su pronašli 3 gljive. Bilo im je jako zabavno u šumi.`,
      questions: [
        { question: "Koliko je medenjaka ponio medo Bruno?", options: ["5", "10", "15"], correct: 1 },
        { question: "Što je Lara ponijela na izlet?", options: ["Jabuke", "Lješnjake", "Kruške"], correct: 1 },
        { question: "Koliko su gljiva pronašli u šumi?", options: ["2", "3", "4"], correct: 1 }
      ]
    }
  },
  // Dan 3
  {
    mathTasks: [
      { type: 'basic', question: '12 + 7 = ?', answer: 19, hint: 'Dodaj 7 na 12' },
      { type: 'basic', question: '28 - 10 = ?', answer: 18, hint: 'Oduzmi 10 od 28' },
      { type: 'basic', question: '6 + 15 = ?', answer: 21, hint: 'Dodaj 15 na 6' },
      { type: 'basic', question: '30 - 13 = ?', answer: 17, hint: 'Oduzmi 13 od 30' },
      { type: 'basic', question: '11 + 9 = ?', answer: 20, hint: 'Dodaj 9 na 11' },
      { type: 'blank', question: '8 + _ = 17', answer: 9, hint: 'Koji broj dodaš na 8 da dobiješ 17?' },
      { type: 'blank', question: '22 - _ = 11', answer: 11, hint: 'Koji broj oduzimaš od 22 da dobiješ 11?' },
      { type: 'blank', question: '_ + 7 = 19', answer: 12, hint: 'Koji broj dodaš na 7 da dobiješ 19?' },
      { type: 'brackets', question: '(7 + 7) - 5 = ?', answer: 9, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '25 - (8 + 2) = ?', answer: 15, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(18 - 9) + 6 = ?', answer: 15, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 25?', answer: 24, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 19?', answer: 20, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 1?', answer: 0, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 22 - 7 = 15, koji je umanjenik?', answer: 22, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 19 - 5 = 14, koji je umanjilac?', answer: 5, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 16 - 8 = 8, koja je razlika?', answer: 8, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 15 + 5 = 20, koji je prvi pribrojnik?', answer: 15, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 10 + 12 = 22, koji je drugi pribrojnik?', answer: 12, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 7 + 7 = 14, koji je zbroj?', answer: 14, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 17 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 26 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je VI u običnim brojevima?', answer: 6, hint: 'VI je rimski broj za 6' },
      { type: 'roman', question: 'Koliko je VII u običnim brojevima?', answer: 7, hint: 'VII je rimski broj za 7' },
      { type: 'roman', question: 'Koliko je IX u običnim brojevima?', answer: 9, hint: 'IX je rimski broj za 9' }
    ],
    readingStory: {
      title: "Zagonetka u vrtu",
      text: `Mala Ema je voljela provoditi vrijeme u bakinom vrtu. Jednog jutra, dok je zalijevala cvijeće, primijetila je nešto neobično. Na listu ruže sjedilo je 6 bubamara, a na listu ljiljana 4. Ukupno je bilo 10 bubamara! Ema se pitala koliko će ih biti sutra. Baka joj je rekla da je vrt pun iznenađenja i da uvijek ima nešto novo za otkriti. Ema je bila sretna što je riješila zagonetku.`,
      questions: [
        { question: "Koliko je bubamara bilo na listu ruže?", options: ["4", "6", "8"], correct: 1 },
        { question: "Na kojem je cvijetu bilo 4 bubamare?", options: ["Ruža", "Ljiljan", "Tratinčica"], correct: 1 },
        { question: "Koliko je ukupno bubamara Ema pronašla?", options: ["8", "10", "12"], correct: 1 }
      ]
    }
  },
  // Dan 4
  {
    mathTasks: [
      { type: 'basic', question: '14 + 6 = ?', answer: 20, hint: 'Dodaj 6 na 14' },
      { type: 'basic', question: '21 - 8 = ?', answer: 13, hint: 'Oduzmi 8 od 21' },
      { type: 'basic', question: '8 + 12 = ?', answer: 20, hint: 'Dodaj 12 na 8' },
      { type: 'basic', question: '27 - 15 = ?', answer: 12, hint: 'Oduzmi 15 od 27' },
      { type: 'basic', question: '16 + 5 = ?', answer: 21, hint: 'Dodaj 5 na 16' },
      { type: 'blank', question: '9 + _ = 18', answer: 9, hint: 'Koji broj dodaš na 9 da dobiješ 18?' },
      { type: 'blank', question: '28 - _ = 12', answer: 16, hint: 'Koji broj oduzimaš od 28 da dobiješ 12?' },
      { type: 'blank', question: '_ + 5 = 13', answer: 8, hint: 'Koji broj dodaš na 5 da dobiješ 13?' },
      { type: 'brackets', question: '(9 + 4) - 2 = ?', answer: 11, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '22 - (6 + 4) = ?', answer: 12, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(14 - 7) + 9 = ?', answer: 16, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 11?', answer: 10, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 29?', answer: 30, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 2?', answer: 1, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 24 - 6 = 18, koji je umanjenik?', answer: 24, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 17 - 9 = 8, koji je umanjilac?', answer: 9, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 13 - 4 = 9, koja je razlika?', answer: 9, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 11 + 6 = 17, koji je prvi pribrojnik?', answer: 11, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 8 + 13 = 21, koji je drugi pribrojnik?', answer: 13, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 9 + 9 = 18, koji je zbroj?', answer: 18, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 19 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 22 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je VIII u običnim brojevima?', answer: 8, hint: 'VIII je rimski broj za 8' },
      { type: 'roman', question: 'Koliko je XI u običnim brojevima?', answer: 11, hint: 'XI je rimski broj za 11' },
      { type: 'roman', question: 'Koliko je XII u običnim brojevima?', answer: 12, hint: 'XII je rimski broj za 12' }
    ],
    readingStory: {
      title: "Putovanje na Mjesec",
      text: `Mali astronaut Leo sanjao je o putovanju na Mjesec. Imao je 7 raketa igračaka, a njegov prijatelj robot Roko imao je 3. Zajedno su imali 10 raketa! Odlučili su izgraditi najveću raketu ikada. Trebalo im je 5 sati da sakupe sve dijelove. Leo je bio uzbuđen. Znao je da će jednog dana zaista putovati u svemir.`,
      questions: [
        { question: "Koliko je raketa igračaka imao Leo?", options: ["5", "7", "9"], correct: 1 },
        { question: "Tko je bio Leov prijatelj?", options: ["Pas", "Robot", "Mačka"], correct: 1 },
        { question: "Koliko im je sati trebalo da sakupe dijelove rakete?", options: ["3", "5", "7"], correct: 1 }
      ]
    }
  },
  // Dan 5
  {
    mathTasks: [
      { type: 'basic', question: '17 + 4 = ?', answer: 21, hint: 'Dodaj 4 na 17' },
      { type: 'basic', question: '23 - 11 = ?', answer: 12, hint: 'Oduzmi 11 od 23' },
      { type: 'basic', question: '5 + 18 = ?', answer: 23, hint: 'Dodaj 18 na 5' },
      { type: 'basic', question: '29 - 14 = ?', answer: 15, hint: 'Oduzmi 14 od 29' },
      { type: 'basic', question: '10 + 10 = ?', answer: 20, hint: 'Dodaj 10 na 10' },
      { type: 'blank', question: '6 + _ = 14', answer: 8, hint: 'Koji broj dodaš na 6 da dobiješ 14?' },
      { type: 'blank', question: '26 - _ = 13', answer: 13, hint: 'Koji broj oduzimaš od 26 da dobiješ 13?' },
      { type: 'blank', question: '_ + 8 = 17', answer: 9, hint: 'Koji broj dodaš na 8 da dobiješ 17?' },
      { type: 'brackets', question: '(11 + 6) - 3 = ?', answer: 14, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '28 - (9 + 5) = ?', answer: 14, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(19 - 8) + 7 = ?', answer: 18, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 18?', answer: 17, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 21?', answer: 22, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 3?', answer: 2, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 26 - 9 = 17, koji je umanjenik?', answer: 26, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 14 - 6 = 8, koji je umanjilac?', answer: 6, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 11 - 2 = 9, koja je razlika?', answer: 9, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 13 + 8 = 21, koji je prvi pribrojnik?', answer: 13, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 7 + 14 = 21, koji je drugi pribrojnik?', answer: 14, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 12 + 12 = 24, koji je zbroj?', answer: 24, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 20 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 27 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XIII u običnim brojevima?', answer: 13, hint: 'XIII je rimski broj za 13' },
      { type: 'roman', question: 'Koliko je XIV u običnim brojevima?', answer: 14, hint: 'XIV je rimski broj za 14' },
      { type: 'roman', question: 'Koliko je XVI u običnim brojevima?', answer: 16, hint: 'XVI je rimski broj za 16' }
    ],
    readingStory: {
      title: "Čarobni dvorac",
      text: `Princeza Lila je živjela u čarobnom dvorcu. Imala je 9 malih zmajeva, a njezin brat princ Filip imao je 6. Zajedno su imali 15 zmajeva! Jednog dana, zmajevi su se igrali skrivača. Lila je pronašla 4 zmaja iza velikog hrasta. Filip je pronašao ostale. Bilo je to zabavno popodne u dvorcu.`,
      questions: [
        { question: "Koliko je zmajeva imala princeza Lila?", options: ["6", "9", "12"], correct: 1 },
        { question: "Koliko su zmajeva imali Lila i Filip zajedno?", options: ["10", "15", "20"], correct: 1 },
        { question: "Iza čega je Lila pronašla 4 zmaja?", options: ["Grm", "Stijena", "Hrast"], correct: 2 }
      ]
    }
  },
  // Dan 6
  {
    mathTasks: [
      { type: 'basic', question: '19 + 3 = ?', answer: 22, hint: 'Dodaj 3 na 19' },
      { type: 'basic', question: '24 - 10 = ?', answer: 14, hint: 'Oduzmi 10 od 24' },
      { type: 'basic', question: '4 + 17 = ?', answer: 21, hint: 'Dodaj 17 na 4' },
      { type: 'basic', question: '26 - 11 = ?', answer: 15, hint: 'Oduzmi 11 od 26' },
      { type: 'basic', question: '15 + 5 = ?', answer: 20, hint: 'Dodaj 5 na 15' },
      { type: 'blank', question: '10 + _ = 20', answer: 10, hint: 'Koji broj dodaš na 10 da dobiješ 20?' },
      { type: 'blank', question: '29 - _ = 16', answer: 13, hint: 'Koji broj oduzimaš od 29 da dobiješ 16?' },
      { type: 'blank', question: '_ + 6 = 15', answer: 9, hint: 'Koji broj dodaš na 6 da dobiješ 15?' },
      { type: 'brackets', question: '(13 + 5) - 4 = ?', answer: 14, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '30 - (10 + 8) = ?', answer: 12, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(20 - 7) + 5 = ?', answer: 18, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 21?', answer: 20, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 14?', answer: 15, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 4?', answer: 3, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 28 - 10 = 18, koji je umanjenik?', answer: 28, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 16 - 7 = 9, koji je umanjilac?', answer: 7, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 12 - 5 = 7, koja je razlika?', answer: 7, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 14 + 9 = 23, koji je prvi pribrojnik?', answer: 14, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 5 + 16 = 21, koji je drugi pribrojnik?', answer: 16, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 13 + 13 = 26, koji je zbroj?', answer: 26, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 21 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 28 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XVII u običnim brojevima?', answer: 17, hint: 'XVII je rimski broj za 17' },
      { type: 'roman', question: 'Koliko je XVIII u običnim brojevima?', answer: 18, hint: 'XVIII je rimski broj za 18' },
      { type: 'roman', question: 'Koliko je XIX u običnim brojevima?', answer: 19, hint: 'XIX je rimski broj za 19' }
    ],
    readingStory: {
      title: "Pustolovina u svemiru",
      text: `Mia i Tom su bili mali astronauti. Imali su 11 svemirskih brodova, a njihov prijatelj vanzemaljac Zork imao je 7. Zajedno su imali 18 svemirskih brodova! Odlučili su posjetiti planetu Mars. Putovanje je trajalo 6 dana. Mia je vidjela crvene stijene, a Tom je pronašao neobičan kamen. Bilo je to nezaboravno putovanje.`,
      questions: [
        { question: "Koliko su svemirskih brodova imali Mia i Tom zajedno?", options: ["15", "18", "20"], correct: 1 },
        { question: "Koji planet su posjetili?", options: ["Jupiter", "Mars", "Venera"], correct: 1 },
        { question: "Koliko je dana trajalo putovanje?", options: ["4", "6", "8"], correct: 1 }
      ]
    }
  },
  // Dan 7
  {
    mathTasks: [
      { type: 'basic', question: '13 + 9 = ?', answer: 22, hint: 'Dodaj 9 na 13' },
      { type: 'basic', question: '27 - 13 = ?', answer: 14, hint: 'Oduzmi 13 od 27' },
      { type: 'basic', question: '7 + 16 = ?', answer: 23, hint: 'Dodaj 16 na 7' },
      { type: 'basic', question: '24 - 9 = ?', answer: 15, hint: 'Oduzmi 9 od 24' },
      { type: 'basic', question: '19 + 8 = ?', answer: 27, hint: 'Dodaj 8 na 19' },
      { type: 'blank', question: '11 + _ = 22', answer: 11, hint: 'Koji broj dodaš na 11 da dobiješ 22?' },
      { type: 'blank', question: '27 - _ = 14', answer: 13, hint: 'Koji broj oduzimaš od 27 da dobiješ 14?' },
      { type: 'blank', question: '_ + 9 = 19', answer: 10, hint: 'Koji broj dodaš na 9 da dobiješ 19?' },
      { type: 'brackets', question: '(10 + 10) - 6 = ?', answer: 14, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '29 - (11 + 7) = ?', answer: 11, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(21 - 10) + 8 = ?', answer: 19, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 26?', answer: 25, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 16?', answer: 17, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 5?', answer: 4, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 29 - 12 = 17, koji je umanjenik?', answer: 29, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 18 - 8 = 10, koji je umanjilac?', answer: 8, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 14 - 6 = 8, koja je razlika?', answer: 8, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 16 + 7 = 23, koji je prvi pribrojnik?', answer: 16, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 6 + 15 = 21, koji je drugi pribrojnik?', answer: 15, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 14 + 14 = 28, koji je zbroj?', answer: 28, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 25 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 30 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XX u običnim brojevima?', answer: 20, hint: 'XX je rimski broj za 20' },
      { type: 'roman', question: 'Koliko je XXI u običnim brojevima?', answer: 21, hint: 'XXI je rimski broj za 21' },
      { type: 'roman', question: 'Koliko je XXII u običnim brojevima?', answer: 22, hint: 'XXII je rimski broj za 22' }
    ],
    readingStory: {
      title: "Avantura u džungli",
      text: `Mali istraživač Filip i njegova papiga Koko krenuli su u avanturu u džunglu. Filip je ponio 8 banana, a Koko 4. Zajedno su imali 12 banana! U džungli su vidjeli 5 majmuna kako se ljuljaju na granama. Filip je bio oduševljen. Koko je ponavljala sve što je Filip govorio. Bilo je to uzbudljivo putovanje.`,
      questions: [
        { question: "Koliko je banana ponio Filip?", options: ["6", "8", "10"], correct: 1 },
        { question: "Koliko su majmuna vidjeli u džungli?", options: ["3", "5", "7"], correct: 1 },
        { question: "Tko je bio Filipov pratilac?", options: ["Pas", "Papiga", "Mačka"], correct: 1 }
      ]
    }
  },
  // Dan 8
  {
    mathTasks: [
      { type: 'basic', question: '11 + 11 = ?', answer: 22, hint: 'Dodaj 11 na 11' },
      { type: 'basic', question: '25 - 10 = ?', answer: 15, hint: 'Oduzmi 10 od 25' },
      { type: 'basic', question: '9 + 13 = ?', answer: 22, hint: 'Dodaj 13 na 9' },
      { type: 'basic', question: '28 - 16 = ?', answer: 12, hint: 'Oduzmi 16 od 28' },
      { type: 'basic', question: '17 + 7 = ?', answer: 24, hint: 'Dodaj 7 na 17' },
      { type: 'blank', question: '12 + _ = 20', answer: 8, hint: 'Koji broj dodaš na 12 da dobiješ 20?' },
      { type: 'blank', question: '24 - _ = 11', answer: 13, hint: 'Koji broj oduzimaš od 24 da dobiješ 11?' },
      { type: 'blank', question: '_ + 10 = 25', answer: 15, hint: 'Koji broj dodaš na 10 da dobiješ 25?' },
      { type: 'brackets', question: '(14 + 7) - 5 = ?', answer: 16, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '26 - (12 + 6) = ?', answer: 8, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(22 - 9) + 4 = ?', answer: 17, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 29?', answer: 28, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 18?', answer: 19, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 6?', answer: 5, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 30 - 15 = 15, koji je umanjenik?', answer: 30, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 20 - 11 = 9, koji je umanjilac?', answer: 11, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 15 - 7 = 8, koja je razlika?', answer: 8, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 17 + 8 = 25, koji je prvi pribrojnik?', answer: 17, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 8 + 17 = 25, koji je drugi pribrojnik?', answer: 17, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 15 + 15 = 30, koji je zbroj?', answer: 30, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 29 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 10 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XXIII u običnim brojevima?', answer: 23, hint: 'XXIII je rimski broj za 23' },
      { type: 'roman', question: 'Koliko je XXIV u običnim brojevima?', answer: 24, hint: 'XXIV je rimski broj za 24' },
      { type: 'roman', question: 'Koliko je XXV u običnim brojevima?', answer: 25, hint: 'XXV je rimski broj za 25' }
    ],
    readingStory: {
      title: "Dan na farmi",
      text: `Djevojčica Lana posjetila je farmu. Vidjela je 10 kokoši i 5 pataka. Ukupno je bilo 15 ptica! Lana je pomogla nahraniti 7 ovaca. Zatim je vidjela 2 velika traktora. Farma je bila puna životinja i zanimljivih stvari. Lana je obećala da će opet doći.`,
      questions: [
        { question: "Koliko je kokoši Lana vidjela?", options: ["8", "10", "12"], correct: 1 },
        { question: "Koliko je ovaca Lana pomogla nahraniti?", options: ["5", "7", "9"], correct: 1 },
        { question: "Koliko je traktora bilo na farmi?", options: ["1", "2", "3"], correct: 1 }
      ]
    }
  },
  // Dan 9
  {
    mathTasks: [
      { type: 'basic', question: '10 + 15 = ?', answer: 25, hint: 'Dodaj 15 na 10' },
      { type: 'basic', question: '20 - 8 = ?', answer: 12, hint: 'Oduzmi 8 od 20' },
      { type: 'basic', question: '12 + 10 = ?', answer: 22, hint: 'Dodaj 10 na 12' },
      { type: 'basic', question: '23 - 9 = ?', answer: 14, hint: 'Oduzmi 9 od 23' },
      { type: 'basic', question: '18 + 7 = ?', answer: 25, hint: 'Dodaj 7 na 18' },
      { type: 'blank', question: '13 + _ = 25', answer: 12, hint: 'Koji broj dodaš na 13 da dobiješ 25?' },
      { type: 'blank', question: '28 - _ = 15', answer: 13, hint: 'Koji broj oduzimaš od 28 da dobiješ 15?' },
      { type: 'blank', question: '_ + 7 = 20', answer: 13, hint: 'Koji broj dodaš na 7 da dobiješ 20?' },
      { type: 'brackets', question: '(15 + 8) - 7 = ?', answer: 16, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '27 - (10 + 5) = ?', answer: 12, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(20 - 6) + 9 = ?', answer: 23, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 16?', answer: 15, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 24?', answer: 25, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 7?', answer: 6, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 27 - 13 = 14, koji je umanjenik?', answer: 27, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 21 - 10 = 11, koji je umanjilac?', answer: 10, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 16 - 9 = 7, koja je razlika?', answer: 7, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 18 + 9 = 27, koji je prvi pribrojnik?', answer: 18, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 9 + 18 = 27, koji je drugi pribrojnik?', answer: 18, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 16 + 16 = 32, koji je zbroj?', answer: 32, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 1 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 2 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XXVI u običnim brojevima?', answer: 26, hint: 'XXVI je rimski broj za 26' },
      { type: 'roman', question: 'Koliko je XXVII u običnim brojevima?', answer: 27, hint: 'XXVII je rimski broj za 27' },
      { type: 'roman', question: 'Koliko je XXVIII u običnim brojevima?', answer: 28, hint: 'XXVIII je rimski broj za 28' }
    ],
    readingStory: {
      title: "Avantura u svemiru",
      text: `Dječak Ivan je volio gledati zvijezde. Imao je 13 knjiga o svemiru, a njegova sestra Petra imala je 8. Zajedno su imali 21 knjigu! Jedne večeri, vidjeli su 3 zvijezde padalice. Ivan je poželio da posjeti Mjesec. Petra je poželjela da upozna vanzemaljce. Bilo je to čarobno veče.`,
      questions: [
        { question: "Koliko je knjiga o svemiru imao Ivan?", options: ["10", "13", "15"], correct: 1 },
        { question: "Koliko su zvijezda padalica vidjeli?", options: ["2", "3", "4"], correct: 1 },
        { question: "Što je Petra poželjela?", options: ["Posjetiti Mars", "Upoznati vanzemaljce", "Putovati oko svijeta"], correct: 1 }
      ]
    }
  },
  // Dan 10
  {
    mathTasks: [
      { type: 'basic', question: '16 + 12 = ?', answer: 28, hint: 'Dodaj 12 na 16' },
      { type: 'basic', question: '29 - 17 = ?', answer: 12, hint: 'Oduzmi 17 od 29' },
      { type: 'basic', question: '14 + 13 = ?', answer: 27, hint: 'Dodaj 13 na 14' },
      { type: 'basic', question: '30 - 18 = ?', answer: 12, hint: 'Oduzmi 18 od 30' },
      { type: 'basic', question: '19 + 9 = ?', answer: 28, hint: 'Dodaj 9 na 19' },
      { type: 'blank', question: '14 + _ = 28', answer: 14, hint: 'Koji broj dodaš na 14 da dobiješ 28?' },
      { type: 'blank', question: '25 - _ = 10', answer: 15, hint: 'Koji broj oduzimaš od 25 da dobiješ 10?' },
      { type: 'blank', question: '_ + 8 = 22', answer: 14, hint: 'Koji broj dodaš na 8 da dobiješ 22?' },
      { type: 'brackets', question: '(16 + 9) - 8 = ?', answer: 17, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '28 - (13 + 7) = ?', answer: 8, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'brackets', question: '(23 - 11) + 6 = ?', answer: 18, hint: 'Prvo izračunaj ono u zagradama' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 17?', answer: 16, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'sequence', question: 'Koji broj dolazi poslije broja 26?', answer: 27, hint: 'Sljedbenik je broj koji je za 1 veći' },
      { type: 'sequence', question: 'Koji broj dolazi prije broja 8?', answer: 7, hint: 'Prethodnik je broj koji je za 1 manji' },
      { type: 'subtraction_parts', question: 'U zadatku 28 - 14 = 14, koji je umanjenik?', answer: 28, hint: 'Umanjenik je prvi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 22 - 12 = 10, koji je umanjilac?', answer: 12, hint: 'Umanjilac je drugi broj u oduzimanju' },
      { type: 'subtraction_parts', question: 'U zadatku 17 - 8 = 9, koja je razlika?', answer: 9, hint: 'Razlika je rezultat oduzimanja' },
      { type: 'addition_parts', question: 'U zadatku 19 + 10 = 29, koji je prvi pribrojnik?', answer: 19, hint: 'Prvi pribrojnik je prvi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 10 + 19 = 29, koji je drugi pribrojnik?', answer: 19, hint: 'Drugi pribrojnik je drugi broj u sabiranju' },
      { type: 'addition_parts', question: 'U zadatku 17 + 17 = 34, koji je zbroj?', answer: 34, hint: 'Zbroj je rezultat sabiranja' },
      { type: 'even_odd', question: 'Je li broj 3 paran ili neparan? (1=paran, 0=neparan)', answer: 0, hint: 'Parni brojevi se dijele sa 2 bez ostatka' },
      { type: 'even_odd', question: 'Je li broj 4 paran ili neparan? (1=paran, 0=neparan)', answer: 1, hint: 'Neparni brojevi se ne dijele sa 2 bez ostatka' },
      { type: 'roman', question: 'Koliko je XXIX u običnim brojevima?', answer: 29, hint: 'XXIX je rimski broj za 29' },
      { type: 'roman', question: 'Koliko je XXX u običnim brojevima?', answer: 30, hint: 'XXX je rimski broj za 30' },
      { type: 'roman', question: 'Koliko je XL u običnim brojevima?', answer: 40, hint: 'XL je rimski broj za 40' }
    ],
    readingStory: {
      title: "Putovanje kroz vrijeme",
      text: `Profesorica Iva i njezin asistent, mali robot Bip, otkrili su vremenski stroj. Profesorica je imala 14 izuma, a Bip 6. Zajedno su imali 20 izuma! Odlučili su putovati u prošlost da vide dinosaure. Putovanje je trajalo 2 sata. Vidjeli su 4 velika dinosaura. Bilo je to nevjerojatno iskustvo.`,
      questions: [
        { question: "Koliko je izuma imala profesorica Iva?", options: ["10", "14", "18"], correct: 1 },
        { question: "Tko je bio asistent profesorice Ive?", options: ["Pas", "Robot", "Mačka"], correct: 1 },
        { question: "Koliko su dinosaura vidjeli?", options: ["2", "4", "6"], correct: 1 }
      ]
    }
  }
]

export default dailyContent


