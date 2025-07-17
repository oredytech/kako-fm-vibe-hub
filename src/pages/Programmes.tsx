import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Radio, Play, Star, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Programmes = () => {
  // Real programming schedule data
  const scheduleData = [
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
      lundi: "SAUTI LA MZEE",
      mardi: "SAUTI LA MZEE",
      mercredi: "SAUTI LA MZEE",
      jeudi: "SAUTI LA MZEE",
      vendredi: "SAUTI LA MZEE",
      samedi: "SAUTI LA MZEE",
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
      time: "09h30-09h40",
      lundi: "DETENTE",
      mardi: "DETENTE",
      mercredi: "DETENTE",
      jeudi: "DETENTE",
      vendredi: "DETENTE",
      samedi: "DETENTE",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "09h40-10h00",
      lundi: "TUJADILI BIASHARA",
      mardi: "MAFUGO NA MILIMO",
      mercredi: "ECHO DU QUARTIER",
      jeudi: "MAFUGO NA MILIMO",
      vendredi: "TUJADILI BIASHARA",
      samedi: "",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h00-10h30",
      lundi: "SPORT PLANETE",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "SPORT PLANETTE",
      jeudi: "SPORT PLANETTE",
      vendredi: "SPORT PLANETTE",
      samedi: "SPORT PLANETTE",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h30-10h35",
      lundi: "DETENTE",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "DETENTE",
      jeudi: "DETENTE",
      vendredi: "DETENTE",
      samedi: "DETENTE",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h35-10h45",
      lundi: "BULT EC-ENV",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "BULT EC-ENV",
      jeudi: "BULT EC-ENV",
      vendredi: "BULT EC-ENV",
      samedi: "BULT EC-ENV",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h45-10h50",
      lundi: "DETENTE",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "DETENTE",
      jeudi: "DETENTE",
      vendredi: "DETENTE",
      samedi: "DETENTE",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h50-10h56",
      lundi: "BULLETIN INFO",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "BULLETIN INFO",
      jeudi: "BULLETIN INFO",
      vendredi: "BULLETIN INFO",
      samedi: "BULLETIN INFO",
      dimanche: "MESSE MOBILE"
    },
    {
      time: "10h56-11h00",
      lundi: "DETENTE",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "DETENTE",
      jeudi: "DETENTE",
      vendredi: "DETENTE",
      samedi: "DETENTE",
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
      mardi: "",
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
      lundi: "JOURNAL PARL EN SWAHILI",
      mardi: "JOURNAL PARL EN SWAHILI",
      mercredi: "JOURNAL PARL EN SWAHILI",
      jeudi: "JOURNAL PARL EN SWAHILI",
      vendredi: "JOURNAL PARL EN SWAHILI",
      samedi: "JOURNAL PARL EN SWAHILI",
      dimanche: "MIROIR DU PASSE"
    },
    {
      time: "12h30-13h00",
      lundi: "JOURNAL PARL EN FRANCAIS",
      mardi: "JOURNAL PARL EN FRANCAIS",
      mercredi: "JOURNAL PARL EN FRANCAIS",
      jeudi: "JOURNAL PARL EN FRANCAIS",
      vendredi: "JOURNAL PARL EN FRANCAIS",
      samedi: "JOURNAL PARL EN FRANCAIS",
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
      jeudi: "BULLETIN ECO+ENVIRO",
      vendredi: "BULLETIN ECO+ENVIRO",
      samedi: "",
      dimanche: ""
    },
    {
      time: "15h00-15h15",
      lundi: "DETENTE",
      mardi: "DETENTE",
      mercredi: "DETENTE",
      jeudi: "DETENTE",
      vendredi: "DETENTE",
      samedi: "KAKO WEEKEND",
      dimanche: "VIBE DU SOIR"
    },
    {
      time: "15h15-16h15",
      lundi: "CONSTELLATION",
      mardi: "POP CULTURE",
      mercredi: "ENTREPRENDRE POUR LA VIE",
      jeudi: "UNIVERS CLASSIC",
      vendredi: "TRIBUNE ECO",
      samedi: "KAKO WEEKEND",
      dimanche: "VIBE DU SOIR"
    },
    {
      time: "16h15-16h30",
      lundi: "MELODIES URBAINES",
      mardi: "POP CULTURE",
      mercredi: "CONTOUR + MUSIQUES LOCALES",
      jeudi: "AFIA KWETU",
      vendredi: "",
      samedi: "KAKO WEEKEND",
      dimanche: "VIBE DU SOIR"
    },
    {
      time: "16h30-17h00",
      lundi: "MELODIES URBAINES",
      mardi: "DETENTE",
      mercredi: "CONTOUR + DEGO MAKAMBO",
      jeudi: "AFIA KWETU",
      vendredi: "",
      samedi: "KAKO WEEKEND",
      dimanche: "VIBE DU SOIR"
    },
    {
      time: "17h00-17h05",
      lundi: "MELODIES URBAINES",
      mardi: "DETENTE",
      mercredi: "DEGO MAKAMBO",
      jeudi: "DETENTE",
      vendredi: "",
      samedi: "KAKO WEEKEND",
      dimanche: "VIBE DU SOIR"
    },
    {
      time: "17h05-17h20",
      lundi: "PUBLICITE",
      mardi: "PUBLICITE",
      mercredi: "PUBLICITE",
      jeudi: "DEGO MAKAMBO",
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
      dimanche: ""
    },
    {
      time: "19h00-20h00",
      lundi: "HUMANITAIRE S'EXPRIME",
      mardi: "UNIVERS CLASSIC REDIF",
      mercredi: "CITOYEN DU MONDE REDIF",
      jeudi: "DEGO MAKAMBO REDIF",
      vendredi: "",
      samedi: "CONTOUR + REDIF",
      dimanche: ""
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
      mercredi: "RIRE THÉRAPEUTIQUE",
      jeudi: "VIBE DU MOMENT REDIF",
      vendredi: "GOMA MUSIC",
      samedi: "GOMA MUSIC",
      dimanche: "GOMA MUSIC"
    },
    {
      time: "20h30-21h30",
      lundi: "AFIA KWETU",
      mardi: "ARCHIVES DU MONDE",
      mercredi: "RIRE THÉRAPEUTIQUE",
      jeudi: "VIBE DU MOMENT REDIF",
      vendredi: "",
      samedi: "",
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

  const days = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"];
  const dayKeys = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

  const getCurrentShow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const currentDayIndex = (now.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0

    for (const slot of scheduleData) {
      const [startTime, endTime] = slot.time.split('-');
      const [startHour, startMinute] = startTime.replace('h', ':').split(':').map(Number);
      const [endHour, endMinute] = endTime.replace('h', ':').split(':').map(Number);
      
      const startTimeInMinutes = startHour * 60 + startMinute;
      const endTimeInMinutes = endHour * 60 + endMinute;

      if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
        const currentDayKey = dayKeys[currentDayIndex];
        const currentProgram = slot[currentDayKey];
        if (currentProgram && currentProgram.trim() !== "") {
          return {
            program: currentProgram,
            time: slot.time,
            day: days[currentDayIndex]
          };
        }
      }
    }
    return null;
  };

  const currentShow = getCurrentShow();

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Grille de Programmation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre programmation quotidienne de 05h00 à 22h00
          </p>
        </div>

        {/* Current Show */}
        {currentShow && (
          <Card className="mb-8 gradient-kako">
            <CardContent className="p-8 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <Radio className="h-8 w-8 mr-3 animate-pulse" />
                <h2 className="text-2xl font-bold">🔴 À l'antenne maintenant</h2>
              </div>
              <h3 className="text-3xl font-bold mb-2">{currentShow.program}</h3>
              <p className="text-lg opacity-90 mb-2">{currentShow.day}</p>
              <p className="opacity-80 mb-4">{currentShow.time}</p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Écouter en direct
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Programming Schedule Table */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Grille Hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">HEURE</th>
                      {days.map(day => (
                        <th key={day} className="border border-border p-3 text-center font-semibold min-w-[120px]">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((slot, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-3 font-medium bg-muted/30">
                          {slot.time}
                        </td>
                        {dayKeys.map(dayKey => (
                          <td key={dayKey} className="border border-border p-3 text-center text-sm">
                            {slot[dayKey] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="gradient-kako-soft">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Informations de Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                <h4 className="font-semibold mb-2">Adresse</h4>
                <p className="text-sm text-muted-foreground">
                  Ville de Goma, Commune de Karisimbi, Blvd SAKE
                  <br />
                  (Référence ENTREPÔT AKIFAR/Afia Bora)
                </p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                <h4 className="font-semibold mb-2">Contacts</h4>
                <p className="text-sm text-muted-foreground">
                  +243 996 886 079
                  <br />
                  +243 980 265 601
                </p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-sm text-muted-foreground">
                  kakofmtv@gmail.com
                  <br />
                  contact@kakofm.net
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                <h4 className="font-semibold mb-2">Site Web</h4>
                <p className="text-sm text-muted-foreground">
                  <a 
                    href="https://www.kakofm.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-kako-blue hover:text-kako-yellow transition-colors"
                  >
                    www.kakofm.net
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Programmes;