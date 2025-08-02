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
  { time: "05h00-06h00", lundi: "CHANSONS SLOWS", mardi: "CHANSONS SLOWS", mercredi: "CHANSONS SLOWS", jeudi: "CHANSONS SLOWS", vendredi: "CHANSONS SLOWS", samedi: "CHANSONS SLOWS", dimanche: "CHANSONS GOSPEL" },
  { time: "06h00-06h15", lundi: "CHRONIQUE JE SUIS", mardi: "CHRONIQUE JE SUIS", mercredi: "CHRONIQUE JE SUIS", jeudi: "CHRONIQUE JE SUIS", vendredi: "CHRONIQUE JE SUIS", samedi: "CHRONIQUE JE SUIS", dimanche: "CHANSONS GOSPEL" },
  { time: "06h15-06h40", lundi: "DÉTENTE", mardi: "DÉTENTE", mercredi: "DÉTENTE", jeudi: "DÉTENTE", vendredi: "DÉTENTE", samedi: "DÉTENTE", dimanche: "CHANSONS GOSPEL" },
  { time: "06h40-07h00", lundi: "RÉVEIL EN DOUCEUR", mardi: "RÉVEIL EN DOUCEUR", mercredi: "RÉVEIL EN DOUCEUR", jeudi: "RÉVEIL EN DOUCEUR", vendredi: "RÉVEIL EN DOUCEUR", samedi: "RÉVEIL EN DOUCEUR", dimanche: "CHANSONS GOSPEL" },
  { time: "07h00-08h00", lundi: "PRÉDICATION (AIME LUVALE)", mardi: "PRÉDICATION", mercredi: "PRÉDICATION (AIME LUVALE)", jeudi: "PRÉDICATION", vendredi: "PRÉDICATION", samedi: "PRÉDICATION", dimanche: "-" },
  { time: "08h00-08h30", lundi: "DÉTENTE", mardi: "DÉTENTE", mercredi: "DÉTENTE", jeudi: "DÉTENTE", vendredi: "DÉTENTE", samedi: "DÉTENTE", dimanche: "MESSE MOBILE" },
  { time: "08h35-08h45", lundi: "ATMOSPHÈRE", mardi: "LE SAINT DU JOUR", mercredi: "GOMA YA SIKA", jeudi: "LE SAINT DU JOUR", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "08h45-09h10", lundi: "ATMOSPHÈRE", mardi: "LA NATURE NOTRE PRIORITÉ", mercredi: "GOMA YA SIKA", jeudi: "LA NATURE NOTRE PRIORITÉ", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "09h10-09h13", lundi: "ATMOSPHÈRE", mardi: "SAUTI LA MZEE", mercredi: "GOMA YA SIKA", jeudi: "SAUTI LA MZEE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "09h25-09h27", lundi: "ATMOSPHÈRE", mardi: "LÉGENDE AFRICAINE", mercredi: "GOMA YA SIKA", jeudi: "LÉGENDE AFRICAINE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "09h30-09h40", lundi: "ATMOSPHÈRE", mardi: "DÉTENTE", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "09h40-10h00", lundi: "ATMOSPHÈRE", mardi: "MAFUGO NA MILIMO", mercredi: "GOMA YA SIKA", jeudi: "MAFUGO NA MILIMO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h00-10h30", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "SPORT PLANÈTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h30-10h35", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h35-10h45", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "BULL EC-ENV", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h45-10h50", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h50-10h56", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "BULLETIN INFO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "10h56-11h00", lundi: "ATMOSPHÈRE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MESSE MOBILE" },
  { time: "11h00-11h30", lundi: "AUTOUR DE LA FÉMINITÉ", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "À LA UNE", vendredi: "NUTRITION", samedi: "LE RIRE THÉRAPEUTIQUE", dimanche: "KAKO WEEKEND" },
  { time: "11h30-11h55", lundi: "AUTOUR DE LA FÉMINITÉ", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "À LA UNE", vendredi: "NUTRITION", samedi: "LE RIRE THÉRAPEUTIQUE", dimanche: "KAKO WEEKEND" },
  { time: "11h55-12h00", lundi: "ATMOSPHÈRE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "DÉTENTE", samedi: "KAKO WEEKEND", dimanche: "DÉTENTE" },
  { time: "12h00-12h30", lundi: "ATMOSPHÈRE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "JOURNAL PARL EN SWAHILI", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "12h30-13h00", lundi: "ATMOSPHÈRE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "JOURNAL PARL EN FRANÇAIS", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h00-13h05", lundi: "ATMOSPHÈRE", mardi: "MUSIQUE CONSCIENTE", mercredi: "GOMA YA SIKA", jeudi: "MUSIQUE CONSCIENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h05-13h25", lundi: "ATMOSPHÈRE", mardi: "PUBLICITÉ", mercredi: "GOMA YA SIKA", jeudi: "PUBLICITÉ", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h25-13h35", lundi: "ATMOSPHÈRE", mardi: "COMMUNIQUÉ", mercredi: "GOMA YA SIKA", jeudi: "COMMUNIQUÉ", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h35-13h40", lundi: "ATMOSPHÈRE", mardi: "DÉTENTE", mercredi: "GOMA YA SIKA", jeudi: "DÉTENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h40-13h50", lundi: "ATMOSPHÈRE", mardi: "FLASH INFO", mercredi: "GOMA YA SIKA", jeudi: "FLASH INFO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "13h50-14h00", lundi: "ATMOSPHÈRE", mardi: "BURUDANI ZA NYUMBANI", mercredi: "KAKO GOSPEL", jeudi: "BURUDANI ZA NYUMBANI", vendredi: "LA SCIENCE CHEZ NOUS", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSÉ" },
  { time: "14h00-15h00", lundi: "ATMOSPHÈRE", mardi: "HUMANITAIRE S'EXPRIME", mercredi: "BULLETIN ECO+ENVIRO", jeudi: "-", vendredi: "-", samedi: "KAKO WEEKEND", dimanche: "BULLETIN ECO+ENVIRO" },
  { time: "15h00-15h15", lundi: "ATMOSPHÈRE", mardi: "DÉTENTE", mercredi: "LIBRE ANTENNE", jeudi: "DÉTENTE", vendredi: "DÉTENTE", samedi: "KAKO WEEKEND", dimanche: "DÉTENTE VIBE DU MOMENT" },
  { time: "15h15-16h15", lundi: "ATMOSPHÈRE", mardi: "POP CULTURE", mercredi: "LIBRE ANTENNE", jeudi: "UNIVERS CLASSIC", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "16h15-16h30", lundi: "ATMOSPHÈRE", mardi: "POP CULTURE", mercredi: "CONTOUR + MUSIQUES LOCALES", jeudi: "-", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT DEGO MAKAMBO" },
  { time: "16h30-17h00", lundi: "ATMOSPHÈRE", mardi: "DÉTENTE", mercredi: "LIBRE ANTENNE", jeudi: "DEGO MAKAMBO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "17h00-17h05", lundi: "ATMOSPHÈRE", mardi: "-", mercredi: "LIBRE ANTENNE", jeudi: "DEGO MAKAMBO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "17h05-17h20", lundi: "PUBLICITÉ", mardi: "PUBLICITÉ", mercredi: "PUBLICITÉ", jeudi: "DEGO MAKAMBO", vendredi: "PUBLICITÉ", samedi: "PUBLICITÉ", dimanche: "PUBLICITÉ" },
  { time: "17h20-17h30", lundi: "COMMUNIQUÉ", mardi: "COMMUNIQUÉ", mercredi: "COMMUNIQUÉ", jeudi: "COMMUNIQUÉ", vendredi: "COMMUNIQUÉ", samedi: "COMMUNIQUÉ", dimanche: "COMMUNIQUÉ" },
  { time: "17h30-18h00", lundi: "SPORT PLANÈTE", mardi: "SPORT PLANÈTE", mercredi: "SPORT PLANÈTE", jeudi: "SPORT PLANÈTE", vendredi: "SPORT PLANÈTE", samedi: "SPORT PLANÈTE", dimanche: "AU CŒUR DU SPORT" },
  { time: "18h00-19h00", lundi: "ENTREPRENDRE POUR LA VIE REDIF", mardi: "CONSTELLATION CROISÉE", mercredi: "LA SCIENCE CHEZ NOUS REDIF", jeudi: "AUTOUR DE LA FÉMINITÉ REDIF", vendredi: "DEGO MAKAMBO REDIF", samedi: "POP CULTURE REDIF", dimanche: "-" },
  { time: "19h00-20h00", lundi: "HUMANITAIRE S'EXPRIME", mardi: "UNIVERS CLASSIC REDIF", mercredi: "CITOYEN DU MONDE REDIF", jeudi: "-", vendredi: "DEGO MAKAMBO REDIF", samedi: "CONTOUR + REDIF", dimanche: "-" },
  { time: "20h00-20h15", lundi: "PUBLICITÉ", mardi: "PUBLICITÉ", mercredi: "PUBLICITÉ", jeudi: "PUBLICITÉ", vendredi: "PUBLICITÉ", samedi: "PUBLICITÉ", dimanche: "PUBLICITÉ" },
  { time: "20h15-20h30", lundi: "GOMA MUSIC", mardi: "ARCHIVES DU MONDE", mercredi: "RIRE THÉRAPEUTIQUE", jeudi: "VIBE DU MOMENT REDIF", vendredi: "GOMA MUSIC", samedi: "GOMA MUSIC", dimanche: "GOMA MUSIC" },
  { time: "20h30-21h30", lundi: "AFIA KWETU", mardi: "ARCHIVES DU MONDE", mercredi: "RIRE THÉRAPEUTIQUE", jeudi: "VIBE DU MOMENT REDIF", vendredi: "-", samedi: "-", dimanche: "DÉTENTE" },
  { time: "21h30-22h00", lundi: "DÉTENTE", mardi: "DÉTENTE", mercredi: "DÉTENTE", jeudi: "DÉTENTE", vendredi: "DÉTENTE", samedi: "DÉTENTE", dimanche: "DÉTENTE" }
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