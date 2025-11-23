// Mock data for WorkSpace application

export interface Product {
  id: string;
  title: string;
  status: 'draft' | 'review' | 'approved' | 'published';
  description?: string;
  channel?: 'social' | 'signage' | 'website';
  createdAt?: string;
}

export interface LibraryItem {
  id: string;
  label: string;
  type?: string;
  description?: string;
}

export interface Message {
  id: string;
  author: string;
  body: string;
  timestamp?: string;
}

// Products To Build (drafts)
export const productsToBuild: Product[] = [
  { 
    id: 'p1', 
    title: 'Holiday Event Flyer', 
    status: 'draft',
    description: 'Annual holiday celebration event announcement',
    createdAt: '2024-01-15'
  },
  { 
    id: 'p2', 
    title: 'Training Announcement', 
    status: 'draft',
    description: 'Q1 safety training schedule',
    createdAt: '2024-01-16'
  },
  { 
    id: 'p3', 
    title: 'Company Newsletter', 
    status: 'review',
    description: 'Monthly company updates and news',
    createdAt: '2024-01-17'
  },
];

// Published Products grouped by channel
export const publishedProducts = {
  social: [
    { 
      id: 's1', 
      title: 'Veterans Day Post', 
      channel: 'social' as const,
      status: 'published' as const,
      description: 'Honoring our veterans',
      createdAt: '2024-01-10'
    },
    { 
      id: 's2', 
      title: 'Team Spotlight', 
      channel: 'social' as const,
      status: 'published' as const,
      description: 'Employee recognition post',
      createdAt: '2024-01-12'
    },
  ],
  signage: [
    { 
      id: 'sg1', 
      title: 'Safety Reminder Loop', 
      channel: 'signage' as const,
      status: 'published' as const,
      description: 'Digital signage safety reminders',
      createdAt: '2024-01-08'
    },
    { 
      id: 'sg2', 
      title: 'Welcome Message', 
      channel: 'signage' as const,
      status: 'published' as const,
      description: 'Lobby welcome display',
      createdAt: '2024-01-05'
    },
  ],
  website: [
    { 
      id: 'w1', 
      title: 'Leadership Spotlight', 
      channel: 'website' as const,
      status: 'published' as const,
      description: 'Executive team feature',
      createdAt: '2024-01-14'
    },
    { 
      id: 'w2', 
      title: 'Company Values Page', 
      channel: 'website' as const,
      status: 'published' as const,
      description: 'Core values and mission',
      createdAt: '2024-01-11'
    },
  ],
};

// Company Source Library
export const companySourceLibrary: LibraryItem[] = [
  { 
    id: 'c1', 
    label: 'Branding Package',
    type: 'assets',
    description: 'Logo files, color palettes, and brand guidelines'
  },
  { 
    id: 'c2', 
    label: 'Approved Boilerplates',
    type: 'templates',
    description: 'Pre-approved text templates for common communications'
  },
  { 
    id: 'c3', 
    label: 'Event Templates',
    type: 'templates',
    description: 'Event announcement and invitation templates'
  },
  { 
    id: 'c4', 
    label: 'Leadership Statements',
    type: 'content',
    description: 'Official statements from leadership team'
  },
  { 
    id: 'c5', 
    label: 'Photo Library',
    type: 'assets',
    description: 'Approved company photos and imagery'
  },
];

// Messages
export const messages: Message[] = [
  { 
    id: 'm1', 
    author: 'Alex', 
    body: 'Reminder: Need the Q4 safety flyer by end of week.',
    timestamp: '2024-01-15T10:30:00'
  },
  { 
    id: 'm2', 
    author: 'Jordan', 
    body: 'Uploaded the draft for review. Please check the messaging section.',
    timestamp: '2024-01-15T14:20:00'
  },
  { 
    id: 'm3', 
    author: 'Sam', 
    body: 'The holiday flyer looks great! Ready for approval.',
    timestamp: '2024-01-16T09:15:00'
  },
  { 
    id: 'm4', 
    author: 'Alex', 
    body: 'Thanks everyone for the quick turnaround on the training announcement.',
    timestamp: '2024-01-16T16:45:00'
  },
];

