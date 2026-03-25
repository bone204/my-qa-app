export interface LifePhoto {
  id: string;
  url: string;
  captionKey: string;
  category: 'team' | 'office' | 'events' | 'growth';
  rotation: number; // For polaroid effect
  x: number; // For scattered effect (percentage)
  y: number; // For scattered effect (percentage)
}

export const LIFE_PHOTOS: LifePhoto[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    captionKey: 'photo_1',
    category: 'events',
    rotation: -5,
    x: 10,
    y: 15
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    captionKey: 'photo_2',
    category: 'office',
    rotation: 3,
    x: 70,
    y: 10
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    captionKey: 'photo_3',
    category: 'team',
    rotation: -8,
    x: 40,
    y: 60
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    captionKey: 'photo_4',
    category: 'growth',
    rotation: 5,
    x: 80,
    y: 50
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    captionKey: 'photo_5',
    category: 'office',
    rotation: -2,
    x: 20,
    y: 75
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1511632765486-a0179049b221?q=80&w=2070&auto=format&fit=crop',
    captionKey: 'photo_6',
    category: 'events',
    rotation: 10,
    x: 55,
    y: 35
  },
  // Additional Photos
  { id: '7', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', captionKey: 'event_summit', category: 'events', rotation: -2, x: 15, y: 10 },
  { id: '8', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop', captionKey: 'event_gala', category: 'events', rotation: 4, x: 75, y: 25 },
  { id: '9', url: 'https://images.unsplash.com/photo-1540575861501-7ad05823c23d?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_kickoff', category: 'events', rotation: -6, x: 30, y: 40 },
  { id: '10', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop', captionKey: 'event_party', category: 'events', rotation: 8, x: 85, y: 70 },
  { id: '11', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_celebration', category: 'events', rotation: -3, x: 45, y: 85 },
  { id: '12', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', captionKey: 'team_collab', category: 'team', rotation: 5, x: 60, y: 15 },
  { id: '13', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_meeting', category: 'team', rotation: -7, x: 25, y: 65 },
  { id: '14', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_workshop', category: 'team', rotation: 2, x: 50, y: 45 },
  { id: '15', url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2078&auto=format&fit=crop', captionKey: 'team_smiles', category: 'team', rotation: -4, x: 5, y: 55 },
  { id: '16', url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_success', category: 'team', rotation: 6, x: 90, y: 35 },
  { id: '17', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_view', category: 'office', rotation: -9, x: 12, y: 80 },
  { id: '18', url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop', captionKey: 'office_modern', category: 'office', rotation: 3, x: 68, y: 55 },
  { id: '19', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_tech', category: 'office', rotation: -5, x: 38, y: 12 },
  { id: '20', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop', captionKey: 'office_creative', category: 'office', rotation: 1, x: 82, y: 88 },
  { id: '21', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_coding', category: 'office', rotation: -12, x: 2, y: 30 },
  { id: '22', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_learning', category: 'growth', rotation: 7, x: 55, y: 75 },
  { id: '23', url: 'https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_mentoring', category: 'growth', rotation: -6, x: 18, y: 48 },
  { id: '24', url: 'https://images.unsplash.com/photo-1531497865144-0464ef4fb9a3?q=80&w=1974&auto=format&fit=crop', captionKey: 'growth_brainstorm', category: 'growth', rotation: 4, x: 42, y: 28 },
  { id: '25', url: 'https://images.unsplash.com/photo-1552581234-261270cda636?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_presentation', category: 'growth', rotation: -3, x: 72, y: 92 },
  { id: '26', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_award', category: 'growth', rotation: 11, x: 95, y: 5 },
  { id: '27', url: 'https://images.unsplash.com/photo-1523240795612-9a054b09667a?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_coffee', category: 'team', rotation: -5, x: 33, y: 52 },
  { id: '28', url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop', captionKey: 'team_whiteboard', category: 'team', rotation: 8, x: 58, y: 82 },
  { id: '29', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_outing', category: 'team', rotation: -2, x: 10, y: 22 },
  { id: '30', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_hacker', category: 'team', rotation: 14, x: 88, y: 44 },
  { id: '31', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_dinner', category: 'events', rotation: -10, x: 48, y: 62 },
  { id: '32', url: 'https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_food', category: 'events', rotation: 4, x: 22, y: 8 },
  { id: '33', url: 'https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_conference', category: 'events', rotation: -6, x: 65, y: 72 },
  { id: '34', url: 'https://images.unsplash.com/photo-1491438590914-bc09fca9af52?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_hangout', category: 'team', rotation: 3, x: 7, y: 38 },
  { id: '35', url: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop', captionKey: 'office_reception', category: 'office', rotation: -8, x: 35, y: 95 },
  { id: '36', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_manager', category: 'office', rotation: 2, x: 92, y: 60 },
  { id: '37', url: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_career', category: 'growth', rotation: -4, x: 52, y: 32 },
  { id: '38', url: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop', captionKey: 'office_break', category: 'office', rotation: 9, x: 78, y: 5 },
  { id: '39', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', captionKey: 'growth_pair', category: 'growth', rotation: -1, x: 12, y: 58 },
  { id: '40', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_focus', category: 'growth', rotation: -7, x: 45, y: 18 },
  { id: '41', url: 'https://images.unsplash.com/photo-1573161546799-1cc723897cae?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_diversity', category: 'team', rotation: 5, x: 62, y: 38 },
  { id: '42', url: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_workshop', category: 'events', rotation: -3, x: 28, y: 88 },
  { id: '43', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop', captionKey: 'event_meeting', category: 'events', rotation: 12, x: 80, y: 12 },
  { id: '44', url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_vibe', category: 'office', rotation: -5, x: 18, y: 32 },
  { id: '45', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop', captionKey: 'office_dev', category: 'office', rotation: 4, x: 38, y: 72 },
  { id: '46', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop', captionKey: 'team_fun', category: 'team', rotation: -9, x: 70, y: 48 },
  { id: '47', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_mentor', category: 'growth', rotation: 2, x: 5, y: 82 },
  { id: '48', url: 'https://images.unsplash.com/photo-10464ef4fb9a3?q=80&w=1974&auto=format&fit=crop', captionKey: 'growth_together', category: 'growth', rotation: -14, x: 85, y: 32 },
  { id: '49', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop', captionKey: 'event_outdoor', category: 'events', rotation: 6, x: 25, y: 15 },
  { id: '50', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', captionKey: 'growth_training', category: 'growth', rotation: -1, x: 50, y: 5 }
];

