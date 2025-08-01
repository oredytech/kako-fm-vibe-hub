// Shared schedule data for both Programmes page and LiveBanner
export interface ScheduleSlot {
  time: string;
  lundi: string;
  mardi: string;
  mercredi: string;
  jeudi: string;
  vendredi: string;
  samedi: string;
  dimanche: string;
}

export const scheduleData: ScheduleSlot[] = [
  {
    time: "05h00-06h00",
    lundi: "PREDICATION",
    mardi: "PREDICATION",
    mercredi: "PREDICATION",
    jeudi: "PREDICATION",
    vendredi: "PREDICATION",
    samedi: "PREDICATION",
    dimanche: "PREDICATION"
  },
  {
    time: "06h00-06h20",
    lundi: "CANTIQUES",
    mardi: "CANTIQUES",
    mercredi: "CANTIQUES",
    jeudi: "CANTIQUES",
    vendredi: "CANTIQUES",
    samedi: "CANTIQUES",
    dimanche: "CANTIQUES"
  },
  {
    time: "06h20-06h30",
    lundi: "COMMUNIQUE",
    mardi: "COMMUNIQUE",
    mercredi: "COMMUNIQUE",
    jeudi: "COMMUNIQUE",
    vendredi: "COMMUNIQUE",
    samedi: "COMMUNIQUE",
    dimanche: "COMMUNIQUE"
  },
  {
    time: "06h30-06h40",
    lundi: "METEO",
    mardi: "METEO",
    mercredi: "METEO",
    jeudi: "METEO",
    vendredi: "METEO",
    samedi: "METEO",
    dimanche: "GOSPEL"
  },
  {
    time: "06h40-06h43",
    lundi: "TAUX DE CHANGE",
    mardi: "TAUX DE CHANGE",
    mercredi: "TAUX DE CHANGE",
    jeudi: "TAUX DE CHANGE",
    vendredi: "TAUX DE CHANGE",
    samedi: "TAUX DE CHANGE",
    dimanche: "GOSPEL"
  },
  {
    time: "06h43-06h46",
    lundi: "PENSEE DU JOUR",
    mardi: "PENSEE DU JOUR",
    mercredi: "PENSEE DU JOUR",
    jeudi: "PENSEE DU JOUR",
    vendredi: "PENSEE DU JOUR",
    samedi: "PENSEE DU JOUR",
    dimanche: "GOSPEL"
  },
  {
    time: "06h46-06h50",
    lundi: "LA BONNE EXPRESSION",
    mardi: "LA BONNE EXPRESSION",
    mercredi: "LA BONNE EXPRESSION",
    jeudi: "LA BONNE EXPRESSION",
    vendredi: "LA BONNE EXPRESSION",
    samedi: "LA BONNE EXPRESSION",
    dimanche: "GOSPEL"
  },
  {
    time: "06h50-07h10",
    lundi: "REVEIL EN DOUCEUR",
    mardi: "REVEIL EN DOUCEUR",
    mercredi: "REVEIL EN DOUCEUR",
    jeudi: "REVEIL EN DOUCEUR",
    vendredi: "REVEIL EN DOUCEUR",
    samedi: "REVEIL EN DOUCEUR",
    dimanche: "GOSPEL"
  },
  {
    time: "07h10-07h30",
    lundi: "PUBLICITE",
    mardi: "PUBLICITE",
    mercredi: "PUBLICITE",
    jeudi: "PUBLICITE",
    vendredi: "PUBLICITE",
    samedi: "PUBLICITE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "07h30-08h00",
    lundi: "JOURNAL PARLE EN FR",
    mardi: "JOURNAL PARLE EN FR",
    mercredi: "JOURNAL PARLE EN FR",
    jeudi: "JOURNAL PARLE EN FR",
    vendredi: "JOURNAL PARLE EN FR",
    samedi: "JOURNAL PARLE EN FR",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "08h00-08h30",
    lundi: "JOURNAL PARLE EN SW",
    mardi: "JOURNAL PARLE EN SW",
    mercredi: "JOURNAL PARLE EN SW",
    jeudi: "JOURNAL PARLE EN SW",
    vendredi: "JOURNAL PARLE EN SW",
    samedi: "JOURNAL PARLE EN SW",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "08h30-08h35",
    lundi: "MUSIQUE CONSCIENTE",
    mardi: "MUSIQUE CONSCIENTE",
    mercredi: "MUSIQUE CONSCIENTE",
    jeudi: "MUSIQUE CONSCIENTE",
    vendredi: "MUSIQUE CONSCIENTE",
    samedi: "MUSIQUE CONSCIENTE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "08h35-08h45",
    lundi: "LE SAINT DU JOUR",
    mardi: "LE SAINT DU JOUR",
    mercredi: "LE SAINT DU JOUR",
    jeudi: "LE SAINT DU JOUR",
    vendredi: "LE SAINT DU JOUR",
    samedi: "LE SAINT DU JOUR",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "08h45-09h10",
    lundi: "LA NATURE NOTRE PRIORITE",
    mardi: "LA NATURE NOTRE PRIORITE",
    mercredi: "LA NATURE NOTRE PRIORITE",
    jeudi: "LA NATURE NOTRE PRIORITE",
    vendredi: "LA NATURE NOTRE PRIORITE",
    samedi: "LA NATURE NOTRE PRIORITE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h10-09h13",
    lundi: "SAUTI YA MZEE",
    mardi: "SAUTI YA MZEE",
    mercredi: "SAUTI YA MZEE",
    jeudi: "SAUTI YA MZEE",
    vendredi: "SAUTI YA MZEE",
    samedi: "SAUTI YA MZEE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h13-09h25",
    lundi: "BURUDANI ZA NYUMBANI",
    mardi: "BURUDANI ZA NYUMBANI",
    mercredi: "BURUDANI ZA NYUMBANI",
    jeudi: "BURUDANI ZA NYUMBANI",
    vendredi: "BURUDANI ZA NYUMBANI",
    samedi: "BURUDANI ZA NYUMBANI",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h25-09h27",
    lundi: "LEGENDE AFRICAINE",
    mardi: "LEGENDE AFRICAINE",
    mercredi: "LEGENDE AFRICAINE",
    jeudi: "LEGENDE AFRICAINE",
    vendredi: "LEGENDE AFRICAINE",
    samedi: "LEGENDE AFRICAINE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h27-09h30",
    lundi: "DETENTE",
    mardi: "DETENTE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "DETENTE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h30-09h40",
    lundi: "MUSIQUE CONSCIENTE",
    mardi: "MUSIQUE CONSCIENTE",
    mercredi: "MUSIQUE CONSCIENTE",
    jeudi: "MUSIQUE CONSCIENTE",
    vendredi: "MUSIQUE CONSCIENTE",
    samedi: "MUSIQUE CONSCIENTE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "09h40-10h00",
    lundi: "TUJADILI BIASHARA",
    mardi: "MAFUGO NA MILIMO",
    mercredi: "ECHO DU QUARTIER",
    jeudi: "MAFUGO NA MILIMO",
    vendredi: "TUJADILI BIASHARA",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h00-10h30",
    lundi: "SPORT PLANETE",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "SPORT PLANETE",
    jeudi: "SPORT PLANETE",
    vendredi: "SPORT PLANETE",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h30-10h35",
    lundi: "DETENTE",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h35-10h45",
    lundi: "BULT EC-ENV",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "BULT EC-ENV",
    jeudi: "BULT EC-ENV",
    vendredi: "BULT EC-ENV",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h45-10h50",
    lundi: "DETENTE",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h50-10h56",
    lundi: "BULLETIN INFO",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "BULLETIN INFO",
    jeudi: "BULLETIN INFO",
    vendredi: "BULLETIN INFO",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "10h56-11h00",
    lundi: "DETENTE",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "KAKO WEEKEND",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "11h00-11h30",
    lundi: "AUTOUR DE LA FEMINITE",
    mardi: "MODE VERT",
    mercredi: "LIBRE ANTENNE",
    jeudi: "A LA UNE",
    vendredi: "NUTRITION",
    samedi: "LE RIRE THERAPEUTIQUE",
    dimanche: "MESSE MOBILE"
  },
  {
    time: "11h30-11h55",
    lundi: "AUTOUR DE LA FEMINITE",
    mardi: "MODE VERT",
    mercredi: "LIBRE ANTENNE",
    jeudi: "A LA UNE",
    vendredi: "NUTRITION",
    samedi: "CITOYEN DU MONDE",
    dimanche: "DETENTE"
  },
  {
    time: "11h55-12h00",
    lundi: "DETENTE",
    mardi: "DETENTE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "DETENTE",
    dimanche: "DETENTE"
  },
  {
    time: "12h00-12h30",
    lundi: "JOURNAL PARLE EN SWAHILI",
    mardi: "JOURNAL PARLE EN SWAHILI",
    mercredi: "JOURNAL PARLE EN SWAHILI",
    jeudi: "JOURNAL PARLE EN SWAHILI",
    vendredi: "JOURNAL PARLE EN SWAHILI",
    samedi: "JOURNAL PARLE EN SWAHILI",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "12h30-13h00",
    lundi: "JOURNAL PARLE EN FRANCAIS",
    mardi: "JOURNAL PARLE EN FRANCAIS",
    mercredi: "JOURNAL PARLE EN FRANCAIS",
    jeudi: "JOURNAL PARLE EN FRANCAIS",
    vendredi: "JOURNAL PARLE EN FRANCAIS",
    samedi: "JOURNAL PARLE EN FRANCAIS",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h00-13h05",
    lundi: "MUSIQUE CONSCIENTE",
    mardi: "MUSIQUE CONSCIENTE",
    mercredi: "MUSIQUE CONSCIENTE",
    jeudi: "MUSIQUE CONSCIENTE",
    vendredi: "MUSIQUE CONSCIENTE",
    samedi: "MUSIQUE CONSCIENTE",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h05-13h25",
    lundi: "PUBLICITE",
    mardi: "PUBLICITE",
    mercredi: "PUBLICITE",
    jeudi: "PUBLICITE",
    vendredi: "PUBLICITE",
    samedi: "PUBLICITE",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h25-13h35",
    lundi: "COMMUNIQUE",
    mardi: "COMMUNIQUE",
    mercredi: "COMMUNIQUE",
    jeudi: "COMMUNIQUE",
    vendredi: "COMMUNIQUE",
    samedi: "COMMUNIQUE",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h35-13h40",
    lundi: "DETENTE",
    mardi: "DETENTE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "DETENTE",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h40-13h50",
    lundi: "FLASH INFO",
    mardi: "FLASH INFO",
    mercredi: "FLASH INFO",
    jeudi: "FLASH INFO",
    vendredi: "FLASH INFO",
    samedi: "FLASH INFO",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "13h50-14h00",
    lundi: "BURUDANI ZA NYUMBANI",
    mardi: "BURUDANI ZA NYUMBANI",
    mercredi: "KAKO GOSPEL",
    jeudi: "BURUDANI ZA NYUMBANI",
    vendredi: "LA SCIENCE CHEZ NOUS",
    samedi: "BURUDANI ZA NYUMBANI",
    dimanche: "MIROIR DU PASSE"
  },
  {
    time: "14h00-15h00",
    lundi: "BULLETIN ECO+ENVIRO",
    mardi: "HUMANITAIRE S'EXPRIME",
    mercredi: "BULLETIN ECO+ENVIRO",
    jeudi: "UNIVERS CLASSIQUE",
    vendredi: "BULLETIN ECO+ENVIRO",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "15h00-15h15",
    lundi: "DETENTE",
    mardi: "DETENTE",
    mercredi: "DETENTE",
    jeudi: "2GO MAKAMBO",
    vendredi: "DETENTE",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "15h15-16h15",
    lundi: "CONSTELLATION",
    mardi: "POP CULTURE",
    mercredi: "ENTREPRENDRE POUR LA VIE",
    jeudi: "2GO MAKAMBO",
    vendredi: "TRIBUNE ECO",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "16h15-16h30",
    lundi: "MELODIES URBAINES",
    mardi: "POP CULTURE",
    mercredi: "CONTOUR + MUSIQUES LOCALES",
    jeudi: "2GO MAKAMBO",
    vendredi: "TRIBUNE ECO",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "16h30-17h00",
    lundi: "MELODIES URBAINES",
    mardi: "DETENTE",
    mercredi: "CONTOUR + DEGO MAKAMBO",
    jeudi: "2GO MAKAMBO",
    vendredi: "TRIBUNE ECO",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "17h00-17h05",
    lundi: "MELODIES URBAINES",
    mardi: "DETENTE",
    mercredi: "DEGO MAKAMBO",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "KAKO WEEKEND",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "17h05-17h20",
    lundi: "PUBLICITE",
    mardi: "PUBLICITE",
    mercredi: "PUBLICITE",
    jeudi: "PUBLICITE",
    vendredi: "PUBLICITE",
    samedi: "PUBLICITE",
    dimanche: "PUBLICITE"
  },
  {
    time: "17h20-17h30",
    lundi: "COMMUNIQUE",
    mardi: "COMMUNIQUE",
    mercredi: "COMMUNIQUE",
    jeudi: "COMMUNIQUE",
    vendredi: "COMMUNIQUE",
    samedi: "COMMUNIQUE",
    dimanche: "COMMUNIQUE"
  },
  {
    time: "17h30-18h00",
    lundi: "SPORT PLANETE",
    mardi: "SPORT PLANETE",
    mercredi: "SPORT PLANETE",
    jeudi: "SPORT PLANETE",
    vendredi: "SPORT PLANETE",
    samedi: "SPORT PLANETE",
    dimanche: "AU CŒUR DU SPORT"
  },
  {
    time: "18h00-19h00",
    lundi: "ENTREPRENDRE POUR LA VIE REDIF",
    mardi: "CONSTELLATION CROISEE",
    mercredi: "LA SCIENCE CHEZ NOUS REDIF",
    jeudi: "AUTOUR DE LA FEMINITE REDIF",
    vendredi: "DEGO MAKAMBO REDIF",
    samedi: "POP CULTURE REDIF",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "19h00-20h00",
    lundi: "HUMANITAIRE S'EXPRIME",
    mardi: "UNIVERS CLASSIC REDIF",
    mercredi: "CITOYEN DU MONDE REDIF",
    jeudi: "DEGO MAKAMBO REDIF",
    vendredi: "TRIBUNE ECO REDIF",
    samedi: "CONTOUR + REDIF",
    dimanche: "VIBE DU SOIR"
  },
  {
    time: "20h00-20h15",
    lundi: "PUBLICITE",
    mardi: "PUBLICITE",
    mercredi: "PUBLICITE",
    jeudi: "PUBLICITE",
    vendredi: "PUBLICITE",
    samedi: "PUBLICITE",
    dimanche: "PUBLICITE"
  },
  {
    time: "20h15-20h30",
    lundi: "GOMA MUSIC",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "RIRE THERAPEUTIQUE",
    jeudi: "VIBE DU MOMENT REDIF",
    vendredi: "GOMA MUSIC",
    samedi: "GOMA MUSIC",
    dimanche: "GOMA MUSIC"
  },
  {
    time: "20h30-21h30",
    lundi: "AFIA KWETU",
    mardi: "ARCHIVES DU MONDE",
    mercredi: "RIRE THERAPEUTIQUE",
    jeudi: "VIBE DU MOMENT REDIF",
    vendredi: "AFIA KWETU",
    samedi: "GOMA MUSIC",
    dimanche: "DETENTE"
  },
  {
    time: "21h30-22h00",
    lundi: "DETENTE",
    mardi: "DETENTE",
    mercredi: "DETENTE",
    jeudi: "DETENTE",
    vendredi: "DETENTE",
    samedi: "DETENTE",
    dimanche: "DETENTE"
  }
];

// Helper function to get current program from schedule
export const getCurrentProgram = (): string => {
  const now = new Date();
  const currentTimeStr = now.toTimeString().substring(0, 5); // HH:MM format
  const dayNames = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const currentDay = dayNames[now.getDay()] as keyof ScheduleSlot;
  
  // Convert time slots to comparable format
  const timeSlots = scheduleData.map(slot => {
    const timeRange = slot.time.split('-');
    const startTime = timeRange[0].replace('h', ':');
    return {
      startTime,
      program: slot[currentDay] || "DETENTE"
    };
  });
  
  // Find current program
  let currentProgramName = "DETENTE"; // Default program
  
  for (let i = timeSlots.length - 1; i >= 0; i--) {
    if (currentTimeStr >= timeSlots[i].startTime) {
      currentProgramName = timeSlots[i].program;
      break;
    }
  }
  
  return currentProgramName;
};