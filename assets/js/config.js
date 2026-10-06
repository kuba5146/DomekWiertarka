// JEDYNE MIEJSCE konfiguracji pomieszczeń i ścieżek urządzeń.
export const ROOMS = [
  {id:"biurko",label:"Biurko",items:[["biurko/b0","Światło lewe","light"],["biurko/b1","Światło środkowe","light"],["biurko/b2","Światło prawe","light"],["salon/s0","Główne 1/3","light"],["salon/s1","Główne 2/3","light"],["salon/s2","Kinkiety","light"],["biurko/b3","Gniazdka","plug"]]},
  {id:"salon",label:"Salon",items:[["salon/s0","Główne","light"],["salon/s1","Kinkiet lewy","light"],["salon/s2","Kinkiet prawy","light"],["salon/g0","Gniazdko TV","plug"],["salon/g1","Gniazdko kanapa","plug"],["salon/g2","Gniazdko stolik","plug"]]},
  {id:"kuchnia",label:"Kuchnia",items:[["kuchnia/k0","Główne","light"],["kuchnia/k1","Blat lewy","light"],["kuchnia/k2","Blat prawy","light"],["kuchnia/g0","Lodówka","plug"],["kuchnia/g1","Ekspres","plug"],["kuchnia/g2","Zmywarka","plug"]]},
  {id:"sypialnia",label:"Sypialnia",items:[["sypialnia/p0","Łóżko lewe","light"],["sypialnia/p1","Łóżko prawe","light"],["sypialnia/p2","Sufit","light"],["sypialnia/g0","Ładowarka L","plug"],["sypialnia/g1","Ładowarka P","plug"],["sypialnia/g2","Lampka","plug"]]},
  {id:"pracownia",label:"Pracownia",items:[["pracownia/w0","LED listwa 1","light"],["pracownia/w1","LED listwa 2","light"],["pracownia/w2","Lampa stojąca","light"],["pracownia/g0","Drukarka","plug"],["pracownia/g1","Monitor","plug"],["pracownia/g2","Ładowarka","plug"]]}
];

export const DRILL = {
  root: "garaz/wiertarka_stolowa",
  pulseMs: 250,
  scale: { rawMin: 0, rawMax: 1000, outMin: 200, outMax: 2600, unit: "obr./min" },
  paths: {
    start:"garaz/wiertarka_stolowa/commands/start", stop:"garaz/wiertarka_stolowa/commands/stop",
    powerOff:"garaz/wiertarka_stolowa/commands/powerOff", direction:"garaz/wiertarka_stolowa/settings/direction",
    controlMode:"garaz/wiertarka_stolowa/settings/controlMode", autostart:"garaz/wiertarka_stolowa/settings/autostart",
    speedRaw:"garaz/wiertarka_stolowa/settings/speedRaw", online:"garaz/wiertarka_stolowa/status/online",
    running:"garaz/wiertarka_stolowa/status/running", lastSeen:"garaz/wiertarka_stolowa/status/lastSeen"
  },
  defaults: {
    commands:{start:false,stop:false,powerOff:false},
    settings:{direction:"right",controlMode:"remote",autostart:false,speedRaw:0},
    status:{online:false,running:false,lastSeen:0}
  }
};
