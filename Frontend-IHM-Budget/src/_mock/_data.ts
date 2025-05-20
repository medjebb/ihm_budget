import { ReferenceType } from 'src/model/reference';

export const _myAccount = {
  displayName: 'Ahmed Amine Mahamani',
  email: 'ahmedamine.mahamani@ext.com',
  photoURL: '/assets/images/avatar/avatar-25.webp',
};

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg',
  },
  {
    value: 'es',
    label: 'Spanish',
    icon: '/assets/icons/flags/ic-flag-es.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/flags/ic-flag-fr.svg',
  },
];

export const mockFormReferenceDataList: ReferenceType[] = [
  {
    year: 2025,
    costCenter: 'CC101',
    department: 'Finance',
    activity: 'Budgeting',
    subActivity: 'Forecasting',
    catPlan: 'PlanX',
    client: 'Globex Inc',
    budgetType: 'OpEx',
    businessLine: 'Corporate Services',
    syntheticMapping: 'SYN001',
    billingKey: 'BK1001',
    businessResponsible: 'Alice Johnson',
    comexMember: 'Michael Scott',
    active: true,
  },
  {
    year: 2024,
    costCenter: 'CC202',
    department: 'IT',
    activity: 'Infrastructure',
    subActivity: 'Networking',
    catPlan: 'PlanY',
    client: 'Initech',
    budgetType: 'CapEx',
    businessLine: 'Tech Support',
    syntheticMapping: 'SYN002',
    billingKey: 'BK1002',
    businessResponsible: 'Bob Smith',
    comexMember: 'Pam Beesly',
    active: false,
  },
  {
    year: 2026,
    costCenter: 'CC303',
    department: 'R&D',
    activity: 'Innovation',
    subActivity: 'AI Research',
    catPlan: 'PlanZ',
    client: 'Stark Industries',
    budgetType: 'OpEx',
    businessLine: 'Advanced Tech',
    syntheticMapping: 'SYN003',
    billingKey: 'BK1003',
    businessResponsible: 'Tony Stark',
    comexMember: 'Bruce Banner',
    active: true,
  },
  {
    year: 2023,
    costCenter: 'CC404',
    department: 'HR',
    activity: 'Recruitment',
    subActivity: 'Campus Hiring',
    catPlan: 'PlanA',
    client: 'Wayne Enterprises',
    budgetType: 'OpEx',
    businessLine: 'Talent Acquisition',
    syntheticMapping: 'SYN004',
    billingKey: 'BK1004',
    businessResponsible: 'Diana Prince',
    comexMember: 'Clark Kent',
    active: true,
  },
  {
    year: 2022,
    costCenter: 'CC505',
    department: 'Sales',
    activity: 'Client Engagement',
    subActivity: 'Key Accounts',
    catPlan: 'PlanB',
    client: 'Umbrella Corp',
    budgetType: 'CapEx',
    businessLine: 'Enterprise Sales',
    syntheticMapping: 'SYN005',
    billingKey: 'BK1005',
    businessResponsible: 'Peter Parker',
    comexMember: 'Mary Jane',
    active: false,
  },
];
export const _dialogFormReferenceFieldsMockData = {
  year: 2024,
  costCenter: [
    { id: 'CC001', label: 'Marketing Department' },
    { id: 'CC002', label: 'IT Services' },
    { id: 'CC003', label: 'Human Resources' },
    { id: 'CC004', label: 'Finance' },
  ],
  department: [
    { id: 'DEP01', label: 'Digital Marketing' },
    { id: 'DEP02', label: 'Brand Management' },
    { id: 'DEP03', label: 'Customer Support' },
    { id: 'DEP04', label: 'Development' },
  ],
  activity: [
    { id: 'ACT01', label: 'Campaign Management' },
    { id: 'ACT02', label: 'Content Creation' },
    { id: 'ACT03', label: 'Market Analysis' },
    { id: 'ACT04', label: 'SEO Optimization' },
  ],

  subActivity: [
    { id: 'SACT01', label: 'Email Marketing' },
    { id: 'SACT02', label: 'Social Media Management' },
    { id: 'SACT03', label: 'PPC Advertising' },
    { id: 'SACT04', label: 'Content Strategy' },
  ],

  catPlan: 'MKTG-2024-Q1',

  client: [
    { id: 'CL001', label: 'Acme Corporation' },
    { id: 'CL002', label: 'Global Enterprises' },
    { id: 'CL003', label: 'TechSolutions Inc.' },
    { id: 'CL004', label: 'Innovative Systems' },
  ],

  budgetType: 'Operational',

  businessLine: [
    { id: 'BL001', label: 'Consumer Products' },
    { id: 'BL002', label: 'B2B Solutions' },
    { id: 'BL003', label: 'Government Services' },
    { id: 'BL004', label: 'Retail Solutions' },
  ],

  syntheticMapping: [
    { id: 'SM001', label: 'Product Category A' },
    { id: 'SM002', label: 'Product Category B' },
    { id: 'SM003', label: 'Service Line X' },
    { id: 'SM004', label: 'Special Projects' },
  ],
  billingKey: [
    { id: 'BK001', label: 'Monthly' },
    { id: 'BK002', label: 'Bi-monthly' },
    { id: 'BK003', label: 'Quarterly' },
    { id: 'BK004', label: 'Annual' },
  ],

  businessResponsible: 'Sarah Johnson',
  comexMember: 'Michael Rodriguez',
  active: true,
};
