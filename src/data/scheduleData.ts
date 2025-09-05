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
  { time: "05h00-05h50", lundi: "CHANSONS SLOWS", mardi: "CHANSONS SLOWS", mercredi: "CHANSONS SLOWS", jeudi: "CHANSONS SLOWS", vendredi: "CHANSONS SLOWS", samedi: "CHANSONS SLOWS", dimanche: "CHANSONS GOSPEL" },
  { time: "05h50-05h55", lundi: "CHRONIQUE JE SUIS", mardi: "CHRONIQUE JE SUIS", mercredi: "CHRONIQUE JE SUIS", jeudi: "CHRONIQUE JE SUIS", vendredi: "CHRONIQUE JE SUIS", samedi: "CHRONIQUE JE SUIS", dimanche: "CHANSONS GOSPEL" },
  { time: "05h55-06h00", lundi: "DETENTE", mardi: "DETENTE", mercredi: "DETENTE", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "DETENTE", dimanche: "DETENTE" },
  { time: "06h00-06h30", lundi: "CLINIQUE SHALOOM", mardi: "CLINIQUE SHALOOM", mercredi: "CLINIQUE SHALOOM", jeudi: "CLINIQUE SHALOOM", vendredi: "CLINIQUE SHALOOM", samedi: "CLINIQUE SHALOOM", dimanche: "CLINIQUE SHALOOM" },
  { time: "06h30-07h30", lundi: "PREDICATION (AIME LUVALE)", mardi: "PREDICATION", mercredi: "PREDICATION (AIME LUVALE)", jeudi: "PREDICATION", vendredi: "PREDICATION", samedi: "PREDICATION", dimanche: "CHANSONS GOSPEL" },
  { time: "07h30-08h00", lundi: "RELAIS MATIN RFI", mardi: "RELAIS MATIN RFI", mercredi: "RELAIS MATIN RFI", jeudi: "RELAIS MATIN RFI", vendredi: "RELAIS MATIN RFI", samedi: "DETENTE", dimanche: "CHANSONS GOSPEL" },
  { time: "08h00-08h30", lundi: "LIBRE ANTENNE", mardi: "DETENTE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "08h35-08h45", lundi: "LIBRE ANTENNE", mardi: "LE SAINT DU JOUR", mercredi: "GOMA YA SIKA", jeudi: "LE SAINT DU JOUR", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "08h45-09h10", lundi: "LIBRE ANTENNE", mardi: "LA NATURE NOTRE PRIORITE", mercredi: "GOMA YA SIKA", jeudi: "LA NATURE NOTRE PRIORITE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "09h10-09h13", lundi: "LIBRE ANTENNE", mardi: "SAUTI LA MZEE", mercredi: "GOMA YA SIKA", jeudi: "SAUTI LA MZEE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "09h25-09h27", lundi: "LIBRE ANTENNE", mardi: "LEGENDE AFRICAINE", mercredi: "GOMA YA SIKA", jeudi: "LEGENDE AFRICAINE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "09h30-09h40", lundi: "LIBRE ANTENNE", mardi: "DETENTE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "09h40-10h00", lundi: "LIBRE ANTENNE", mardi: "MAFUGO NA MILIMO", mercredi: "GOMA YA SIKA", jeudi: "MAFUGO NA MILIMO", vendredi: "TA VOIX COMPTE", samedi: "VIBE DU MOMENT", dimanche: "VIBE DU MOMENT" },
  { time: "10h00-10h30", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "SPORT PLANETTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "10h30-10h35", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "10h35-10h45", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "BULT EC-ENV", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "10h45-10h50", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "10h50-10h56", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "BULLETIN INFO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "10h56-11h00", lundi: "LIBRE ANTENNE", mardi: "ARCHIVES DU MONDE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "11h00-11h30", lundi: "AUTOUR DE LA FEMINITE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "A LA UNE NUTRITION", vendredi: "LE RIRE THERAPEUTIQUE", samedi: "KAKO WEEKEND", dimanche: "VIBE DU MOMENT" },
  { time: "11h30-12h00", lundi: "AUTOUR DE LA FEMINITE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "A LA UNE NUTRITION", vendredi: "LE RIRE THERAPEUTIQUE", samedi: "KAKO WEEKEND", dimanche: "DETENTE" },
  { time: "12h00-12h05", lundi: "ATMOSPHERE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "KAKO WEEKEND", dimanche: "DETENTE" },
  { time: "12h05-12h30", lundi: "ATMOSPHERE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSE" },
  { time: "12h30-13h00", lundi: "ATMOSPHERE", mardi: "ONDES POSITIVES", mercredi: "GOMA YA SIKA", jeudi: "HABARI ZA MITAANI LA VOIX DE GOMA", vendredi: "TA VOIX COMPTE", samedi: "HABARI ZA MITAANI LA VOIX DE GOMA", dimanche: "MIROIR DU PASSE" },
  { time: "13h00-13h30", lundi: "CLINIQUE SHALOOM", mardi: "CLINIQUE SHALOOM", mercredi: "CLINIQUE SHALOOM", jeudi: "CLINIQUE SHALOOM", vendredi: "CLINIQUE SHALOOM", samedi: "CLINIQUE SHALOOM", dimanche: "CLINIQUE SHALOOM" },
  { time: "13h35-13h40", lundi: "ATMOSPHERE", mardi: "DETENTE", mercredi: "GOMA YA SIKA", jeudi: "DETENTE", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSE" },
  { time: "13h40-13h50", lundi: "ATMOSPHERE", mardi: "FLASH INFO", mercredi: "GOMA YA SIKA", jeudi: "FLASH INFO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSE" },
  { time: "13h50-14h00", lundi: "ATMOSPHERE", mardi: "BURUDANI ZA NYUMBANI", mercredi: "KAKO GOSPEL", jeudi: "BURUDANI ZA NYUMBANI", vendredi: "LA SCIENCE CHEZ NOUS", samedi: "KAKO WEEKEND", dimanche: "MIROIR DU PASSE" },
  { time: "14h00-15h00", lundi: "ATMOSPHERE", mardi: "HUMANITAIRE S'EXPRIME", mercredi: "BULLETIN ECO+ENVIRO", jeudi: "MA SANTE MENTALE, MA PRIORITE", vendredi: "-", samedi: "-", dimanche: "MIROIR DU PASSE" },
  { time: "15h00-15h15", lundi: "ATMOSPHERE", mardi: "DETENTE", mercredi: "DETENTE", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "KAKO WEEKEND", dimanche: "DETENTE MAINTENANT OU JAMAIS" },
  { time: "15h15-16h15", lundi: "ATMOSPHERE", mardi: "POP CULTURE", mercredi: "ENTREPRENDRE POUR LAVIE", jeudi: "UNIVERS CLASSIC", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MAINTENANT OU JAMAIS" },
  { time: "16h15-16h30", lundi: "ATMOSPHERE", mardi: "POP CULTURE", mercredi: "GOMA YA SIKA", jeudi: "MUSIQUES LOCALES", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MAINTENANT OU JAMAIS DEGO MAKAMBO" },
  { time: "16h30-17h00", lundi: "ATMOSPHERE", mardi: "DETENTE", mercredi: "GOMA YA SIKA", jeudi: "DEGO MAKAMBO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MAINTENANT OU JAMAIS" },
  { time: "17h00-17h05", lundi: "ATMOSPHERE", mardi: "-", mercredi: "GOMA YA SIKA", jeudi: "DEGO MAKAMBO", vendredi: "TA VOIX COMPTE", samedi: "KAKO WEEKEND", dimanche: "MAINTENANT OU JAMAIS" },
  { time: "17h05-17h20", lundi: "PUBLICITE", mardi: "PUBLICITE", mercredi: "PUBLICITE", jeudi: "DEGO MAKAMBO", vendredi: "PUBLICITE", samedi: "PUBLICITE", dimanche: "PUBLICITE" },
  { time: "17h20-17h30", lundi: "COMMUNIQUE", mardi: "COMMUNIQUE", mercredi: "COMMUNIQUE", jeudi: "COMMUNIQUE", vendredi: "COMMUNIQUE", samedi: "COMMUNIQUE", dimanche: "COMMUNIQUE" },
  { time: "17h30-18h00", lundi: "SPORT PLANETE", mardi: "SPORT PLANETE", mercredi: "SPORT PLANETE", jeudi: "SPORT PLANETE", vendredi: "SPORT PLANETE", samedi: "SPORT PLANETE", dimanche: "AU CŒUR DU SPORT" },
  { time: "18h00-18h10", lundi: "DETENTE", mardi: "DETENTE", mercredi: "DETENTE", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "DETENTE", dimanche: "DETENTE" },
  { time: "18h10-18h40", lundi: "RADIO FOOT INTERNATIONALE", mardi: "RADIO FOOT INTERNATIONALE", mercredi: "RADIO FOOT INTERNATIONALE", jeudi: "RADIO FOOT INTERNATIONALE", vendredi: "RADIO FOOT INTERNATIONALE", samedi: "-", dimanche: "-" },
  { time: "18h40-19h00", lundi: "DETENTE", mardi: "DETENTE", mercredi: "DETENTE", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "DETENTE", dimanche: "DETENTE" },
  { time: "19h00-20h00", lundi: "ENTREPRENDRE POUR LA VIE REDIF", mardi: "CONSTELLATION CROISEE", mercredi: "LA SCIENCE CHEZ NOUS REDIF", jeudi: "AUTOUR DE LA FEMINITE REDIF", vendredi: "DEGO MAKAMBO REDIF", samedi: "POP CULTURE REDIF", dimanche: "MAINTENANT OU JAMAIS REDIF" },
  { time: "20h00-21h00", lundi: "HUMANITAIRE S'EXPRIME REDIF", mardi: "ARCHIVES DU MONDE REDIF", mercredi: "CITOYEN DU MONDE REDIF", jeudi: "ENTREPRENDRE POUR LA VIE REDIF", vendredi: "DEGO MAKAMBO REDIF", samedi: "CONTOUR + REDIF", dimanche: "MAINTENANT OU JAMAIS REDIF" },
  { time: "21h00-21h30", lundi: "CLINIQUE SHALOOM", mardi: "CLINIQUE SHALOOM", mercredi: "CLINIQUE SHALOOM", jeudi: "CLINIQUE SHALOOM", vendredi: "CLINIQUE SHALOOM", samedi: "CLINIQUE SHALOOM", dimanche: "CLINIQUE SHALOOM" },
  { time: "21h30-22h30", lundi: "GOMA MUSIC", mardi: "UNIVERS CLASS REDIF", mercredi: "RIRE THERAPEUTIQUE", jeudi: "VIBE DU MOMENT REDIF", vendredi: "GOMA MUSIC", samedi: "GOMA MUSIC", dimanche: "GOMA MUSIC" },
  { time: "22h30-23h30", lundi: "AFIA KWETU", mardi: "MA SANTE MA PRIORITE", mercredi: "RIRE THERAPEUTIQUE", jeudi: "VIBE DU MOMENT REDIF", vendredi: "A LA UNE NUTRITION", samedi: "-", dimanche: "DETENTE" },
  { time: "23h30-00h00", lundi: "DETENTE", mardi: "DETENTE", mercredi: "DETENTE", jeudi: "DETENTE", vendredi: "DETENTE", samedi: "DETENTE", dimanche: "DETENTE" }
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