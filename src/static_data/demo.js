import demo1 from '../assets/events/demo1.png';
import demo1_1 from '../assets/events/demo1_1.png';
import demo1_2 from '../assets/events/demo1_2.png';
import demo1_3 from '../assets/events/demo1_3.png';
import demo2 from '../assets/events/demo2.png';
import demo2_1 from '../assets/events/demo2_1.png';
import demo2_2 from '../assets/events/demo2_2.png';
import demo2_3 from '../assets/events/demo2_3.png';
import demo2_4 from '../assets/events/demo2_4.png';
import demo2_5 from '../assets/events/demo2_5.png';
import demo3 from '../assets/events/demo3.png';
import demo3_1 from '../assets/events/demo3._1.png';
import demo3_2 from '../assets/events/demo3_2.png';
import demo3_3 from '../assets/events/demo3_3.png';
import demo3_4 from '../assets/events/demo3_4.png';
import demo3_5 from '../assets/events/demo3_5.png';
import demo3_6 from '../assets/events/demo3_5.png';
import demo4cover from '../assets/events/demo4cover.png';
import demo4_1 from '../assets/events/demo4_1.png';
import demo4 from '../assets/events/demo4.png';
import demo5cover from '../assets/events/demo5cover.png';
import demo5 from '../assets/events/demo5.png';
import demo5_1 from '../assets/events/demo5_1.png';
import demo5_2 from '../assets/events/demo5_2.png';
import demo5_3 from '../assets/events/demo5_3.png';

export const events = [
  {
    title: 'Demo RoboticsFest - Titans',
    description:
      'Pe 15 februarie 2020 am participat la ulltimul demo înainte de competiția regională de la Timișoara. Evenimentul a fost organizat de echipa TITANS (Colegiul Național “Gheorghe Lazăr” București) la Universitatea Plitehnica București. A fost o reîntâlnire așteptată cu membrii comunității FIRST. Am petrecut multe momente plăcute alături de celelalte echipe participante la competiţie și am colaborat foarte bine cu echipele cu care am fost în alianţe în timpul celor șase meciuri de calificare jucate.',
    images: [demo3, demo3_1, demo3_2, demo3_3, demo3_4, demo3_5, demo3_6],
    //image to show in events page
    cover: demo3,
    location: 'Universitatea Politehnică București ',
    date: '15 Feb 2020',
    key: 'demo_titans'
  },

  {
    title: 'Demo Gear Maniacs',
    description:
      'Pe 24 ianuarie 2020, de ziua Micii Uniri, am fost prezenţi la Sibiu, la “Sala Transilvania” la demo organizat de echipa Gear Maniacs. Al doilea demo din acest sezon competiţional ne-a dat motive să devenim şi mai încrezători în forţele noastre. S-a văzut o evoluţie clară faţă de primul demo şi în ceea ce priveşte funcţionarea robotului dar şi în ceea ce priveşte modul în care driverii noştri s-au descurcat pe teren. A fost a atmosferă foarte frumoasă. Am petrecut multe momente plăcute alături de celelalte echipe participante la competiţie. Am colaborat foarte bine cu echipele cu care am fost în alianţe în timpul celor cinci meciuri de calificare jucate.',
    images: [demo2, demo2_1, demo2_2, demo2_3, demo2_4, demo2_5],
    //image to show in events page
    cover: demo2,
    location: 'Sala Transilvania, Sibiu',
    date: '24 Ian 2020',
    key: 'demo_sibiu'
  },

  {
    title: 'Demo Bionic Royals',
    description:
      'În  week-end-ul 14-15 decembrie 2019 am participat la primul demo din acest sezon, demo organizat de prietenii noştri de la echipa Bionic Royals – RO042 (Colegiul Naţional „Mircea cel Bătrân” Râmnicu Vâlcea). A fost o experienţă interesantă având în vedere că echipa noastră e una complet nouă şi a fost primul nostru contact cu ceea ce înseamnă competiţia „First Tech Challenge”. Am intrat în atmosfera competiţiei FTC, am trecut prin inspecţia tehnică a robotului, am văzut cum se desfăşoară meciurile, cum se stabilesc strategiile de joc în alinaţe, ne-am făcut prieteni noi. Am testat comportarea robotului pe terenul de joc în condiţii de concurs, am testat îndemânarea driverilor, am văzut care sunt plusurile şi minusurile echipei.',
    images: [demo1, demo1_1, demo1_2, demo1_3],
    //image to show in events page
    cover: demo1,
    location: 'Colegiul Național "Mircea cel Bătrân", Râmnicu Vâlcea',
    date: '14 - 15 Dec 2019',
    key: 'demo_bionic_royals_2019'
  },

  {
    title: 'Demo Colegiul Naţional “Mircea cel Bătrân” ',
    description:
      'În  week-end-ul 24-25 noiembrie 2018 am participat la primul demo organizat de prietenii noştri de la echipa Bionic Royals – RO042 (Colegiul Naţional “Alexandru Lahovari” Râmnicu Vâlcea). A fost o experienţă interesantă. Am intrat în atmosfera competiţiei FTC, am văzut cum se desfăşoară meciurile, ne-am făcut prieteni noi. Am demonstrat că şi echipele noi se pot descurca foarte bine (într-un timp scurt, fără cunoştinţe iniţiale dar cu foarte multă muncă şi imaginaţie). ',
    images: [demo4, demo4_1, demo4cover],
    //image to show in events page
    cover: demo4cover,
    location: 'Colegiul Național "Mircea cel Bătrân", Râmnicu Vâlcea',
    date: '24-25 Noi 2018 ',
    key: 'demo_bionic_royals_2018'
  },

  {
    title: 'Demo oficial București Şcoala Americană  ',
    description:
      'În data de 3 februarie 2019 am participat la primul DEMO oficial din cadrul competiției FIRST Tech Challenge, organizat la Școala Americană din București. Alături de noi s-a aflat şi domnul Ionuţ Florea de la CertSign – sponsorul nostru principal. Participarea noastră la meciuri reprezintă cel mai bun feedback în vederea pregătirii pentru etapa regională din Timișoara de la finalul lunii. Rezultatul obţinut ne motivează să lucrăm și mai mult pentru ceea ce urmează.',
    images: [demo5, demo5_1, demo5cover, demo5_3, demo5_2],
    //image to show in events page
    cover: demo5cover,
    location: 'Școala Americană, București',
    date: '3 Feb 2019 ',
    key: 'demo_oficial_2019'
  }
];
