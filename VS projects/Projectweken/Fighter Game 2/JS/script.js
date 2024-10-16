// KARAKTERS = [Kero, Lira, Drax, Meester Sumi, Zin, Orla, Fenn]  // Lijst van beschikbare karakters
// GESELECTEERDE_KARAKTER1 = null  // Speler 1's karakter
// GESELECTEERDE_KARAKTER2 = null  // Speler 2's karakter
// HP_SPELER1 = 100%  // Speler 1 HP
// HP_SPELER2 = 100%  // Speler 2 HP
// POSITIE_SPELER1 = (x1, y1)  // Speler 1 positie
// POSITIE_SPELER2 = (x2, y2)  // Speler 2 positie
// TIJD_SPEL = 0  // Tijdsmeting tijdens het gevecht
// Kero = {
//     naam: "Kero",
//     special: "Charged Slash",
//     special_functie: functie_voor_charged_slash(),
//     aanvalkracht: 15,
//     snelheid: 10,
//     verdedigingskracht: 5,
//     bewegings_snelheid: 8
// }

// Lira = {
//     naam: "Lira",
//     special: "Spirit Dash",
//     special_functie: functie_voor_spirit_dash(),
//     aanvalkracht: 10,
//     snelheid: 15,
//     verdedigingskracht: 3,
//     bewegings_snelheid: 12
// }

// Drax = {
//     naam: "Drax",
//     special: "Mega Impact",
//     special_functie: functie_voor_mega_impact(),
//     aanvalkracht: 30,
//     snelheid: 5,
//     verdedigingskracht: 12,
//     bewegings_snelheid: 5
// }

// Meester_Sumi = {
//     naam: "Meester Sumi",
//     special: "Spirit Bomb",
//     special_functie: functie_voor_spirit_bomb(),
//     aanvalkracht: 20,
//     snelheid: 8,
//     verdedigingskracht: 10,
//     bewegings_snelheid: 7
// }

// Zin = {
//     naam: "Zin",
//     special: "Paralyze Point",
//     special_functie: functie_voor_paralyze_point(),
//     aanvalkracht: 8,
//     snelheid: 12,
//     verdedigingskracht: 4,
//     bewegings_snelheid: 10
// }

// Orla = {
//     naam: "Orla",
//     special: "Absolute Shield",
//     special_functie: functie_voor_absolute_shield(),
//     aanvalkracht: 5,
//     snelheid: 9,
//     verdedigingskracht: 15,
//     bewegings_snelheid: 6
// }

// Fenn = {
//     naam: "Fenn",
//     special: "Confusion Counter",
//     special_functie: functie_voor_confusion_counter(),
//     aanvalkracht: 12,
//     snelheid: 11,
//     verdedigingskracht: 7,
//     bewegings_snelheid: 9
// }
// FUNCTIE toets_input_speler(speler):
//     als speler toets X indrukt:
//         ROEP functie_aanval(speler) AAN
//     als speler toets B indrukt:
//         ROEP functie_blok(speler) AAN
//     als speler toets Y indrukt:
//         ROEP functie_springen(speler) AAN
//     als speler toets A indrukt:
//         ROEP functie_duiken(speler) AAN
//     als speler toets RB+D-PAD left/rechts indrukt:
//         ROEP functie_rennen(speler) AAN
//     als speler toets LB+A indrukt:
//         ROEP functie_special_aanval(speler) AAN
// EIND FUNCTIE
// FUNCTIE functie_aanval(speler):
//     ALS speler binnen bereik is van tegenstander:
//         VERMINDER HP_tegenstander met aanvalkracht van speler
//         ALS HP_tegenstander <= 0:
//             SPEL IS AFGELOPEN, speler wint
//     ANDERS:
//         MIST aanval
// EIND FUNCTIE

// FUNCTIE functie_blok(speler):
//     ALS speler blokt terwijl tegenstander aanvalt:
//         VERMINDER schade door 50% (afhankelijk van verdedigingskracht van speler)
//     ANDERS:
//         NEEM volledige schade
// EIND FUNCTIE

// FUNCTIE functie_special_aanval(speler):
//     ROEP speler.special_functie AAN  // Unieke special aanval voor elk karakter
// EIND FUNCTIE
// FUNCTIE functie_voor_charged_slash():
//     DOE 25% extra schade voor Kero's volgende aanval
// EIND FUNCTIE

// FUNCTIE functie_voor_spirit_dash():
//     MAAK Lira immune voor 3 seconden en laat haar door voorwerpen dashen
// EIND FUNCTIE

// FUNCTIE functie_voor_mega_impact():
//     VERMINDER HP_tegenstander met 30% en immobiliseer Drax voor 3 seconden
// EIND FUNCTIE

// FUNCTIE functie_voor_spirit_bomb():
//     DOE massieve schade aan tegenstander met 40% HP verlies
// EIND FUNCTIE

// FUNCTIE functie_voor_paralyze_point():
//     VERLAM tegenstander voor 2 seconden
// EIND FUNCTIE

// FUNCTIE functie_voor_absolute_shield():
//     ACTIVEER ondoordringbaar schild voor 1 seconde, blokkeer alle inkomende schade
// EIND FUNCTIE

// FUNCTIE functie_voor_confusion_counter():
//     COUNTER aanval van tegenstander en DOE 15% schade terug
// EIND FUNCTIE
// FUNCTIE controleer_botsing():
//     ALS POSITIE_SPELER1 overlapt POSITIE_SPELER2:
//         ACTIVITEER botsing_event (zoals aanvallen of blokken)
//     ALS speler buiten arena grenzen gaat:
//         VERMINDER HP met 10% of beëindig spel als "out of bounds"
// EIND FUNCTIE
// FUNCTIE hoofdspel_loop():
//     WHILE GESELECTEERDE_KARAKTER1.HP > 0 EN GESELECTEERDE_KARAKTER2.HP > 0:
//         ROEP toets_input_speler(GESELECTEERDE_KARAKTER1) AAN
//         ROEP toets_input_speler(GESELECTEERDE_KARAKTER2) AAN
//         ROEP controleer_botsing AAN
//         UPDATE spel_tijd()
//     ALS GESELECTEERDE_KARAKTER1.HP <= 0:
//         SPELER 2 WINT
//     ALS GESELECTEERDE_KARAKTER2.HP <= 0:
//         SPELER 1 WINT
// EIND FUNCTIE
// FUNCTIE controleer_win_verlies():
//     ALS HP_SPELER1 <= 0:
//         ROEP "SPELER 2 WINT" AAN
//     ALS HP_SPELER2 <= 0:
//         ROEP "SPELER 1 WINT" AAN
// EIND FUNCTIE