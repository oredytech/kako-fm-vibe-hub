import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Radio, Play, Star, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { scheduleData, getCurrentProgram } from '@/data/scheduleData';

const Programmes = () => {
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
        const currentDayKey = dayKeys[currentDayIndex] as keyof typeof slot;
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
                            {slot[dayKey as keyof typeof slot] || "-"}
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
                  +243 979 130 601
                </p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-sm text-muted-foreground">
                  direction@kakofm.net
                  <br />
                  kakofmtv@gmail.com
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