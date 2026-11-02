export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Caro?',
    answer:
      'Caro is a platform that helps people discover and participate in collective vehicle ownership opportunities, connect with potential co-owners and manage their vehicle ownership experience.',
  },
  {
    id: 'faq-2',
    question: 'Do I need to buy an entire vehicle?',
    answer:
      'No. Caro is designed to support ownership opportunities where multiple people participate according to agreed ownership interests.',
  },
  {
    id: 'faq-3',
    question: 'Do I legally own part of the vehicle?',
    answer:
      'That depends on the specific ownership structure. Genuine ownership opportunities should identify the legal vehicle-owning entity, your interest and the relevant agreements. Some access arrangements do not confer legal ownership.',
  },
  {
    id: 'faq-4',
    question: 'Can I own interests in multiple vehicles?',
    answer:
      'That is a core part of Caro’s vision. Users can build a portfolio of interests across different vehicles, subject to affordability and the relevant ownership arrangements.',
  },
  {
    id: 'faq-5',
    question: 'How is vehicle usage organised?',
    answer:
      'Usage rights are agreed separately from economic ownership percentages. Groups can establish schedules, booking rules and other arrangements.',
  },
  {
    id: 'faq-6',
    question: 'What costs should I expect?',
    answer:
      'Potential costs include acquisition contributions, financing, insurance, taxes, maintenance, repairs, storage and other shared expenses.',
  },
  {
    id: 'faq-7',
    question: 'Can I sell or transfer my ownership interest?',
    answer:
      'Caro’s vision includes supporting transfers and exits where permitted by the relevant agreements, legal structure and applicable regulations. Availability and conditions will vary.',
  },
  {
    id: 'faq-8',
    question: 'Does Caro provide financing?',
    answer:
      'Caro aims to work with appropriate financing partners and facilitate financing-related opportunities. Do not imply that Caro itself is a lender or that financing approval is guaranteed.',
  },
  {
    id: 'faq-9',
    question: 'Can dealerships join Caro?',
    answer:
      'Yes. Dealerships can express interest in becoming partners and exploring Caro as an additional vehicle sales channel.',
  },
  {
    id: 'faq-10',
    question: 'Is Caro available in my country?',
    answer:
      'Availability depends on market launch, applicable laws and operational partnerships. Invite visitors to register for updates rather than inventing launch locations.',
  },
];
