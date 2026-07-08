import type { Coach, PositionGroup } from "@/lib/types";

/**
 * Transcribed 1:1 from the original site's EQUIPES.html.
 * `photo: null` means the original had no image or a broken image link
 * (e.g. rb1.jpg / wr2.jpg both 404 on the live site) — rendered as PlayerPlaceholder.
 */
export const seniorRoster: PositionGroup[] = [
  {
    position: "Quarterbacks",
    players: [{ name: "David Victor", heightCm: "1m81", weightKg: "70 kg", photo: "/images/roster/10.jpg" }],
  },
  {
    position: "Running Backs",
    players: [
      { name: "Monfort Matthieu", heightCm: "1m80", weightKg: "90 kg", photo: "/images/roster/47.jpg" },
      { name: "Mindas Bora", heightCm: "1m80", weightKg: "80 kg", photo: "/images/roster/7.jpg" },
      { name: "Almada Pereira Bradley", photo: "/images/roster/20.jpg" },
      { name: "Charles Henri", heightCm: "1m75", weightKg: "76 kg", photo: null },
    ],
  },
  {
    position: "Receveurs",
    players: [
      { name: "Kouadri Djoubair", heightCm: "1m74", weightKg: "86 kg", photo: "/images/roster/1.jpg" },
      { name: "Belloni Marco", heightCm: "1m73", weightKg: "71 kg", photo: "/images/roster/3.jpg" },
      { name: "De Forcade Basile", photo: "/images/roster/9.jpg" },
      { name: "Msefer Alwin", heightCm: "1m75", weightKg: "73 kg", photo: "/images/roster/11.jpg" },
      { name: "Pierre Guillaume", heightCm: "1m87", weightKg: "85 kg", photo: "/images/roster/23.jpg" },
      { name: "Tallandie Clément", heightCm: "1m84", weightKg: "70 kg", photo: "/images/roster/25.jpg" },
      { name: "Sougoumar Vivek", heightCm: "1m85", weightKg: "85 kg", photo: "/images/roster/80.jpg" },
      { name: "Doro Pablo", heightCm: "1m87", weightKg: "72 kg", photo: "/images/roster/83.jpg" },
      { name: "Desius John", heightCm: "1m81", weightKg: "80 kg", photo: null },
    ],
  },
  {
    position: "Tight End",
    players: [
      { name: "Achech Iyad", heightCm: "1m85", weightKg: "85 kg", photo: "/images/roster/21.jpg" },
      { name: "Chemla Victor", heightCm: "1m76", weightKg: "85 kg", photo: "/images/roster/84.jpg" },
    ],
  },
  {
    position: "Oline",
    players: [
      { name: "Admeziem Wassim", photo: "/images/roster/56.jpg" },
      { name: "Balde Boubacar", heightCm: "1m74", weightKg: "96 kg", photo: "/images/roster/57.jpg" },
      { name: "Baudelot Ilhan", heightCm: "1m78", weightKg: "140 kg", photo: "/images/roster/67.jpg" },
      { name: "Cain Sébastien", heightCm: "1m80", weightKg: "88 kg", photo: "/images/roster/52.jpg" },
      { name: "Haudry Benjamin", heightCm: "1m90", weightKg: "127 kg", photo: "/images/roster/63.jpg" },
      { name: "Marteau Vincent", heightCm: "1m83", weightKg: "103 kg", photo: "/images/roster/50.jpg" },
      { name: "Mouysset Thibault", heightCm: "1m80", weightKg: "125 kg", photo: "/images/roster/77.jpg" },
      { name: "Noel Stéphane", heightCm: "1m74", weightKg: "96 kg", photo: "/images/roster/40.jpg" },
    ],
  },
  {
    position: "Dline",
    players: [
      { name: "Admeziem Jessim", heightCm: "1m83", weightKg: "83 kg", photo: "/images/roster/33.jpg" },
      { name: "Lesueur Anthony", heightCm: "1m83", weightKg: "92 kg", photo: "/images/roster/82.jpg" },
      { name: "Brun Julien", heightCm: "1m75", weightKg: "90 kg", photo: "/images/roster/12.jpg" },
      { name: "Ghezouli Mohamed", photo: "/images/roster/79.jpg" },
    ],
  },
  {
    position: "Linebacker",
    players: [
      { name: "Bennegadi Jazil", heightCm: "1m68", weightKg: "70 kg", photo: "/images/roster/4.jpg" },
      { name: "De Boyer Luc", heightCm: "1m85", weightKg: "100 kg", photo: "/images/roster/46.jpg" },
      { name: "Shu Mickael", heightCm: "1m80", weightKg: "83 kg", photo: "/images/roster/41.jpg" },
      { name: "Zaïti Bilal", heightCm: "1m89", weightKg: "115 kg", photo: "/images/roster/59.jpg" },
    ],
  },
  {
    position: "DB",
    players: [
      { name: "Razafindrazaka Antony", heightCm: "1m73", weightKg: "77 kg", photo: null },
      { name: "Houndonougbo Xavier", heightCm: "1m80", weightKg: "72 kg", photo: "/images/roster/29.jpg" },
      { name: "Liang Louis", heightCm: "1m82", weightKg: "82 kg", photo: "/images/roster/27.jpg" },
      { name: "Mercier Gabin", heightCm: "1m88", weightKg: "89 kg", photo: "/images/roster/13.jpg" },
      { name: "Moissaing Ugo", heightCm: "1m82", weightKg: "82 kg", photo: "/images/roster/37.jpg" },
      { name: "Cisse Sadibou", heightCm: "1m86", weightKg: "76 kg", photo: "/images/roster/81.jpg" },
      { name: "Saunois Arthur", heightCm: "1m73", weightKg: "65 kg", photo: null },
      { name: "Vacherot Nicolas", heightCm: "1m90", weightKg: "90 kg", photo: "/images/roster/22.jpg" },
      { name: "Nicy Michal Mathieu", heightCm: "1m88", weightKg: "85 kg", photo: null },
    ],
  },
];

export const u18Roster: PositionGroup[] = [
  {
    position: "Quarterbacks",
    players: [{ name: "Lecamp Clément", heightCm: "1m73", weightKg: "65 kg", photo: "/images/roster-u18/clement1.jpg" }],
  },
  {
    position: "Running Backs",
    players: [{ name: "Coulange Melvin", heightCm: "1m75", weightKg: "60 kg", photo: null }],
  },
  {
    position: "Receveurs",
    players: [{ name: "Lee Sung-Min", heightCm: "1m73", weightKg: "65 kg", photo: "/images/roster-u18/lee1.jpg" }],
  },
];

export const coachingStaff: Coach[] = [
  { name: "Nelson Joel", role: "Head Coach / Coach défense", photo: "/images/coachs/nelson.jpg" },
  { name: "Thiriez Duncan", role: "Coach offense", photo: "/images/coachs/duncan.jpg" },
];
