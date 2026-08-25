import type { ProjectData } from '../types'

export const projects: ProjectData[] = [
  {
    id: 'mineguard',
    index: '01',
    status: 'Prototype',
    name: 'MineGuard AI',
    tagline: 'AI-based Rockfall Prediction System',
    problem:
      'Mining sites need a way to keep watch over hazard conditions that can change quickly and put safety at risk.',
    objective:
      'Build a mining safety prototype to monitor simulated sensor data and identify potential rockfall hazards.',
    approach:
      'Model incoming sensor readings and surface them through a dashboard designed for fast, at-a-glance hazard awareness.',
    implementation:
      'Simulated sensor data feeds an interactive dashboard that tracks hazard status and raises alerts as conditions change.',
    technologies: [],
    features: [
      'Monitors simulated sensor data to identify potential rockfall hazards',
      'Interactive dashboard with real-time-style alerts',
      'Hazard status indicators for at-a-glance monitoring',
    ],
    outcome:
      'A working prototype that demonstrates how live monitoring and clear status indicators can support mining safety decisions.',
    learned:
      'Placeholder — add reflections on this project once ready.',
    github: 'https://github.com/AayushUpadhyay1210/MineGuard',
  },
  {
    id: 'campuscart',
    index: '02',
    status: 'Deployed',
    name: 'CampusCart',
    tagline: 'Student Marketplace',
    problem:
      'Students on campus need a simple, dedicated way to buy and sell items among themselves.',
    objective:
      'Build a responsive web application for buying and selling products within a university campus.',
    approach:
      'Build a full front-to-back user flow — sign in, browse listings, manage a cart, and view a profile — using core web technologies.',
    implementation:
      'Developed authentication, product listings, a shopping cart, and profile pages using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'User authentication',
      'Product listings',
      'Shopping cart',
      'Profile pages',
      'Responsive layout for use across devices',
    ],
    outcome: 'A deployed, responsive marketplace application live for campus use.',
    learned:
      'Placeholder — add reflections on this project once ready.',
    github: 'https://github.com/AayushUpadhyay1210/CampusCart',
    live: 'https://campus-cart-zeta.vercel.app/',
  },
]
