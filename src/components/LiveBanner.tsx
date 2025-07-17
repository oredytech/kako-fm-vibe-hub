import React, { useState, useEffect } from 'react';
import { Radio, Clock } from 'lucide-react';

const LiveBanner = () => {
  const [currentProgram, setCurrentProgram] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Programme schedule - this could be moved to a separate file or API
  const programSchedule = {
    // Format: "HH:MM": "Program Name"
    "05:00": "PREDICATION",
    "06:00": "CANTIQUES",
    "06:20": "COMMUNIQUE",
    "06:30": "METEO",
    "06:40": "TAUX DE CHANGE",
    "06:43": "PENSEE DU JOUR",
    "06:46": "LA BONNE EXPRESSION",
    "06:50": "REVEIL EN DOUCEUR",
    "07:10": "PUBLICITE",
    "07:30": "JOURNAL PARLE EN FR",
    "08:00": "JOURNAL PARLE EN SW",
    "08:30": "MUSIQUE CONSCIENTE",
    "08:35": "LE SAINT DU JOUR",
    "08:45": "LA NATURE NOTRE PRIORITE",
    "09:10": "SAUTI LA MZEE",
    "09:25": "LEGENDE AFRICAINE",
    "09:30": "DETENTE",
    "09:40": "TUJADILI BIASHARA",
    "10:00": "SPORT PLANETE",
    "10:30": "DETENTE",
    "10:35": "BULT EC-ENV",
    "10:45": "DETENTE",
    "10:50": "BULLETIN INFO",
    "10:56": "DETENTE",
    "11:00": "AUTOUR DE LA FEMINITE",
    "11:30": "AUTOUR DE LA FEMINITE",
    "11:55": "DETENTE",
    "12:00": "JOURNAL PARL EN SWAHILI",
    "12:30": "JOURNAL PARL EN FRANCAIS",
    "13:00": "MUSIQUE CONSCIENTE",
    "13:05": "PUBLICITE",
    "13:25": "COMMUNIQUE",
    "13:35": "DETENTE",
    "13:40": "FLASH INFO",
    "13:50": "BURUDANI ZA NYUMBANI",
    "14:00": "BULLETIN ECO+ENVIRO",
    "15:00": "DETENTE",
    "15:15": "CONSTELLATION",
    "16:15": "MELODIES URBAINES",
    "16:30": "MELODIES URBAINES",
    "17:00": "MELODIES URBAINES",
    "17:05": "PUBLICITE",
    "17:20": "COMMUNIQUE",
    "17:30": "SPORT PLANETE",
    "18:00": "ENTREPRENDRE POUR LA VIE REDIF",
    "19:00": "HUMANITAIRE S'EXPRIME",
    "20:00": "PUBLICITE",
    "20:15": "GOMA MUSIC",
    "20:30": "AFIA KWETU",
    "21:30": "DETENTE"
  };

  const getCurrentProgram = () => {
    const now = new Date();
    const currentTimeStr = now.toTimeString().substring(0, 5); // HH:MM format
    
    // Find the current program based on time
    let currentProgramName = "DETENTE"; // Default program
    
    const times = Object.keys(programSchedule).sort();
    for (let i = times.length - 1; i >= 0; i--) {
      if (currentTimeStr >= times[i]) {
        currentProgramName = programSchedule[times[i] as keyof typeof programSchedule];
        break;
      }
    }
    
    return currentProgramName;
  };

  useEffect(() => {
    const updateCurrentProgram = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Africa/Lubumbashi' 
      }));
      setCurrentProgram(getCurrentProgram());
    };

    // Update immediately
    updateCurrentProgram();

    // Update every minute
    const interval = setInterval(updateCurrentProgram, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-kako-red to-kako-yellow text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-4 text-sm font-medium">
          <div className="flex items-center space-x-2">
            <Radio className="h-4 w-4 animate-pulse" />
            <span>À L'ANTENNE</span>
          </div>
          <div className="hidden sm:block text-lg font-bold">
            {currentProgram}
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{currentTime}</span>
          </div>
        </div>
        {/* Mobile version - show program name on separate line */}
        <div className="sm:hidden text-center mt-1">
          <div className="text-lg font-bold">
            {currentProgram}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;