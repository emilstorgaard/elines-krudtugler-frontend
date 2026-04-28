export const contact = {
  name: 'Eline Storgaard Andersen',
  address: 'Svinglen 16, 8800 Viborg',
  phone: '+45 12 34 56 78',
  phoneHref: 'tel:+4512345678',
  email: 'eline@storgaardandersen.dk',
  emailHref: 'mailto:eline@storgaardandersen.dk',
  hours: 'Man–fre: 7:00–17:00',
};

export const contactList = [
  { emoji: '👩', text: contact.name },
  { emoji: '📍', text: contact.address },
  { emoji: '📞', text: contact.phone },
  { emoji: '✉️', text: contact.email },
  { emoji: '🕐', text: contact.hours },
];

export const navLinks = [
  { label: 'Om mig', href: '#om-mig' },
  { label: 'Aktiviteter', href: '#aktiviteter' },
  { label: 'Dagsprogram', href: '#dagsprogram' },
  { label: 'Anmeldelser', href: '#anmeldelser' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const scheduleItems = [
  { time: '7:00 – 8:30', activity: 'Ankomst og morgenmad', emoji: '🌅' },
  { time: '8:30 – 9:30', activity: 'Fri leg', emoji: '🧸' },
  { time: '9:30 – 11:00', activity: 'Udetur eller aktiviteter', emoji: '🌳' },
  { time: '11:00 – 11:30', activity: 'Frokost', emoji: '🍽️' },
  { time: '11:30 – 13:30', activity: 'Middagslur', emoji: '😴' },
  { time: '13:30 – 14:00', activity: 'Frugt og vand', emoji: '🍎' },
  { time: '14:00 – 15:30', activity: 'Leg og aktiviteter', emoji: '🎨' },
  { time: '15:30 – 16:00', activity: 'Mellemmåltid', emoji: '🥪' },
  { time: '16:00 – 17:00', activity: 'Fri leg og afhentning', emoji: '👋' }
];

export const testimonials = [
  { name: 'Anne og Peter', child: 'Lucas, 2 år', text: 'Eline er fantastisk! Vores søn trives enormt hos hende. Hun er kærlig, tålmodig og har en fantastisk evne til at skabe trygge rammer. Vi kan varmt anbefale hende!', initials: 'AP', rating: 4.5 },
  { name: 'Sarah', child: 'Emma, 1 år', text: 'Det bedste valg vi har truffet. Emma elsker at komme hos Eline, og vi kan mærke hvor glad og tilfreds hun er. Eline er super dygtig og kommunikationen er altid i top!', initials: 'S', rating: 5 },
  { name: 'Michael og Louise', child: 'Noah, 3 år', text: 'Vi er så taknemmelige for at have fundet Eline. Hun har fulgt vores søn siden han var 8 måneder, og vi kan se hvor meget han har udviklet sig. Hendes engagement er enestående!', initials: 'ML', rating: 5 },
  { name: 'Camilla', child: 'Sofie, 2 år', text: 'Eline er en sand stjerne! Vores datter elsker at være hos hende, og vi kan se hvor tryg og glad hun er. Eline er utrolig omsorgsfuld og skaber en fantastisk atmosfære for børnene.', initials: 'C', rating: 5 },
  { name: 'Thomas og Maria', child: 'Liam, 1 år', text: 'Vi kunne ikke være mere tilfredse med Eline. Vores søn trives så godt hos hende, og vi kan se hvor meget han elsker at være der. Eline er super professionel og har en fantastisk evne til at skabe trygge rammer.', initials: 'TM', rating: 5 },
];

export const activities = [
  { icon: '🎨', title: 'Kreative aktiviteter', description: 'Maling, tegning og håndarbejde stimulerer fantasien' },
  { icon: '🎵', title: 'Musik og bevægelse', description: 'Sang, dans og rytmik hver dag' },
  { icon: '🌳', title: 'Udeliv', description: 'Daglige ture i naturen og på legepladsen' },
  { icon: '📙', title: 'Læsning', description: 'Højtlæsning og billedbøger' },
  { icon: '🍽️', title: 'Sunde måltider', description: 'Hjemmelavet mad med økologiske råvarer' },
  { icon: '👩‍🍼', title: 'Tryg tilknytning', description: 'Nærhed og omsorg i hverdagen' }
];

export const activitySlides = [
  {
    src: 'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGRvb3IlMjBhY3Rpdml0aWVzJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NzY3OTA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Børn leger udenfor',
    caption: 'Daglige udeteventyr'
  },
  {
    src: 'https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Njc5MDUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Børn læser bøger',
    caption: 'Læring og nysgerrighed'
  },
  {
    src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Børn maler',
    caption: 'Kreativ udfoldelse'
  }
];

export const qualifications = [
  'Uddannet pædagogisk assistent',
  'Førstehjælpskursus (børn)',
  'Certificeret børnepasser siden 2012',
  'Børnehaveklasselæreruddannelse'
];