import { Baby, UserCheck, Activity } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Baby Care",
    slug: "baby-care",
    description:
      "Professional and loving care for your little ones with experienced babysitters.",
    icon: Baby,
    color: "bg-blue-100 text-blue-600",
    charge: 500,
    overview:
      "Our Baby Care service provides expert care for your little ones, ensuring they feel loved, entertained, safe, and engaged throughout their day. Our caregivers are trained professionals who understand child development and create a nurturing environment for your baby.",
    features: [
      "Certified and background-checked caregivers",
      "Age-appropriate activities and play",
      "Feeding and diaper changing assistance",
      "Safety-first approach with constant supervision",
      "Flexible scheduling (hourly or daily)",
      "Regular updates to parents",
      "Emergency contact protocol",
      "Sleep routine management",
    ],
    gallery: [
      "Baby playing with caregiver",
      "Safe feeding time",
      "Interactive learning",
      "Outdoor playtime",
    ],
    testimonial: {
      text: "The caregivers treat my child with such love and patience every day. Their support brings our family incredible peace of mind.",
      author: "Ayesha Rahman",
      role: "Mother of 18-month-old",
    },
    faqs: [
      {
        question: "What age groups do you provide care for?",
        answer:
          "We provide care for infants (0-12 months), toddlers (1-3 years), and preschoolers (3-5 years).",
      },
      {
        question: "Are your caregivers certified?",
        answer:
          "Yes, all caregivers are certified with first aid and CPR training.",
      },
      {
        question: "Can I request the same caregiver?",
        answer:
          "Absolutely! We encourage building relationships with your preferred caregiver.",
      },
      {
        question: "What about special needs children?",
        answer:
          "We have specialized caregivers trained for children with special needs.",
      },
    ],
  },
  {
    id: 2,
    title: "Elderly Service",
    slug: "elderly-care",
    description:
      "Compassionate care for elderly family members with dignity and respect.",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
    charge: 600,
    overview:
      "Our Elderly Service provides compassionate, professional care for your aging loved ones. We understand the importance of dignity, respect, and quality of life. Our caregivers assist with daily activities while promoting independence and emotional well-being.",
    features: [
      "Personal care assistance",
      "Medication reminders",
      "Meal preparation and feeding",
      "Companionship and emotional support",
      "Light housekeeping",
      "Transportation to appointments",
      "Mobility assistance",
      "Cognitive stimulation activities",
    ],
    gallery: [
      "Caregiver with elderly",
      "Companionship time",
      "Meal assistance",
      "Walking support",
    ],
    testimonial: {
      text: "The caregivers show so much patience and respect to my father. They make him feel valued and help maintain his dignity.",
      author: "Kamal Hossain",
      role: "Son of 78-year-old client",
    },
    faqs: [
      {
        question: "Do you provide 24/7 care?",
        answer: "Yes, we offer hourly, daily, or live-in care options.",
      },
      {
        question: "Can caregivers help with medical needs?",
        answer:
          "We assist with medication reminders and basic health monitoring.",
      },
      {
        question: "What about dementia care?",
        answer: "We have specialized caregivers trained in dementia care.",
      },
      {
        question: "How do you ensure safety?",
        answer:
          "All caregivers are trained in fall prevention and emergency response.",
      },
    ],
  },
  {
    id: 3,
    title: "Sick People Service",
    slug: "sick-people-care",
    description:
      "Dedicated care for patients recovering at home with medical support.",
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
    charge: 700,
    overview:
      "Our Sick People Service provides professional medical care for patients recovering at home. Whether post-surgery, chronic illness, or post-hospitalization, our trained caregivers ensure comfort, safety, and proper medical support throughout recovery.",
    features: [
      "Post-surgery recovery assistance",
      "Wound care and dressing",
      "Medication administration",
      "Vital signs monitoring",
      "Physical therapy assistance",
      "Chronic disease management",
      "Nutritional support",
      "Medical equipment handling",
    ],
    gallery: [
      "Medical monitoring",
      "Medication care",
      "Therapy support",
      "Recovery comfort",
    ],
    testimonial: {
      text: "After my mother's surgery, the care team was exceptional. They monitored her recovery closely and kept us informed every step.",
      author: "Fatima Begum",
      role: "Daughter of post-surgery patient",
    },
    faqs: [
      {
        question: "Are caregivers medically trained?",
        answer: "Yes, our team includes trained nurses and medical caregivers.",
      },
      {
        question: "Can you handle post-operative care?",
        answer: "Absolutely. We provide comprehensive post-op care.",
      },
      {
        question: "Do you work with doctors?",
        answer:
          "We coordinate with your healthcare providers for continuity of care.",
      },
      {
        question: "What equipment do you provide?",
        answer:
          "We handle basic medical equipment. Specialized equipment should be discussed during booking.",
      },
    ],
  },
];
