import type { ProjectData } from '../types'

export const projects: ProjectData[] = [
  {
    id: 'neuralos',
    index: '01',
    name: 'NeuralOS',
    tagline: 'Reinforcement Learning CPU Scheduler',
    problem:
      'Traditional CPU scheduling algorithms rely on fixed policies and may struggle to balance performance, fairness, and changing workloads.',
    objective:
      'Develop a reinforcement learning-based CPU scheduler that learns scheduling decisions through interaction with a simulated environment.',
    approach:
      'Model CPU scheduling as a Markov Decision Process (MDP) and train an action-masked PPO agent using a fairness-aware reward function.',
    implementation:
      'Implemented a 109-dimensional state space and 30-action space using PyTorch and Stable-Baselines3. Built a FastAPI backend and React dashboard.',
    technologies: [
      'Python',
      'PyTorch',
      'Stable-Baselines3',
      'FastAPI',
      'React',
    ],
    features: [
      'Reinforcement learning-based CPU scheduling using PPO',
      'Action masking with a 109-dimensional state space and 30-action space',
      'Fairness-aware reward mechanism',
      'Interactive React dashboard backed by FastAPI',
      'Deterministic simulation and automated testing',
    ],
    outcome:
      'Achieved approximately 25% lower mean cost than the best baseline (20.1 vs 26.8 for SJF) across 70 held-out traces, with 186 tests.',
    learned:
      'Explored reinforcement learning, Markov Decision Processes, PPO, reward design, and evaluation of learned scheduling policies.',
    github:
      'https://github.com/AayushUpadhyay1210/NeuralOS',
  },
  {
    id: 'dpi-engine',
    index: '02',
    name: 'DPI Engine',
    tagline: 'Deep Packet Inspection System',
    problem:
      'Network traffic needs to be inspected and classified to identify applications and enforce rules based on packet-level information.',
    objective:
      'Build a multithreaded Deep Packet Inspection engine capable of classifying network traffic and applying configurable blocking rules.',
    approach:
      'Inspect protocol metadata such as TLS SNI, HTTP Host, and DNS while tracking bidirectional network flows using five-tuple identification.',
    implementation:
      'Developed a C++17 packet-processing engine with hash-partitioned workers and bounded queues for concurrent processing and deterministic output.',
    technologies: [
      'C++17',
      'Multithreading',
      'Computer Networks',
      'CMake',
    ],
    features: [
      'TLS SNI inspection, including split ClientHellos',
      'HTTP Host and DNS-based traffic classification',
      'Bidirectional five-tuple flow tracking',
      'IP/CIDR, domain, and application-based blocking rules',
      'Hash-partitioned workers and bounded queues',
      'Testing with fuzzing and address, undefined-behavior, and thread sanitizers',
    ],
    outcome:
      'Validated the implementation with 42 tests, fuzzing, and ASan, UBSan, and TSan.',
    learned:
      'Gained experience with C++ systems programming, packet parsing, network protocols, concurrency, and software testing.',
    github:
      'https://github.com/AayushUpadhyay1210/DPI-Engine',
  },
  {
    id: 'mineguard',
    index: '03',
    name: 'MineGuard',
    tagline: 'Mining Safety Monitoring',
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
      'A working prototype that demonstrates how monitoring and clear status indicators can support mining safety decisions.',
    learned:
      'Explored dashboard development, sensor-data visualization, and presenting hazard information through an interactive interface.',
    github:
      'https://github.com/AayushUpadhyay1210/MineGuard',
  },
  {
    id: 'campuscart',
    index: '04',
    name: 'CampusCart',
    tagline: 'Student Marketplace',
    problem:
      'Students on campus need a simple, dedicated way to buy and sell items among themselves.',
    objective:
      'Build a responsive web application for buying and selling products within a university campus.',
    approach:
      'Develop a multi-page marketplace interface with product browsing, listings, cart management, and profile pages using core web technologies.',
    implementation:
      'Developed product listings, shopping cart functionality, and profile pages using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Product listings',
      'Shopping cart',
      'Profile pages',
      'Responsive layout for use across devices',
    ],
    outcome:
      'A responsive frontend prototype demonstrating the core user flows of a campus marketplace.',
    learned:
      'Practised frontend development, DOM manipulation, JavaScript, responsive design, and client-side state management.',
    github:
      'https://github.com/AayushUpadhyay1210/CampusCart',
    live:
      'https://campus-cart-zeta.vercel.app/',
  },
]