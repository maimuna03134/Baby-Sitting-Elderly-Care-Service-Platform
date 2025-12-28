import { Baby, UserCheck, Activity } from "lucide-react";

export const servicesData =
  [
  {
    id: 'baby-care',
    title: "Baby Care",
    slug: "baby-care",
    shortDescription:
      "Professional and loving babysitting service for your child.",
    description:
      "Professional and loving care for your little ones with experienced babysitters.",
    icon: Baby,
    color: "bg-blue-100 text-blue-600",
    charge: 500,
    overview:
        "Our Baby Care service provides expert care for your little ones, ensuring they feel loved, entertained, safe, and engaged throughout their day. Our caregivers are trained professionals who understand child development and create a nurturing environment for your baby.",
     overviewImages: [
       "https://plus.unsplash.com/premium_photo-1682094262987-86ac9b94a500?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
       
      "https://plus.unsplash.com/premium_photo-1666299880508-bffece864e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
    ],
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
      {
        url: "https://plus.unsplash.com/premium_photo-1664910284501-c85eb17a2431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJhYnklMjBwbGF5aW5nJTIwd2l0aCUyMGNhcmVnaXZlcnxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Baby playing with caregiver"
      },
      {
        url: "https://images.unsplash.com/photo-1633306002612-cbb98bb0a65d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U25hY2slMjB0aW1lJTIwam95JTIwZm9yJTIwbGl0dGxlJTIwYmFieXxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Snack time joy"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1676049342406-20d6e89dc79c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
        caption: "Nap time comfort"
      },
      {
        url: "https://media.istockphoto.com/id/979627346/photo/bonding-with-baby-happens-anytime-even-during-a-diaper-change.webp?a=1&b=1&s=612x612&w=0&k=20&c=rA6a141QCeTFjbAbTU4sjJMFvJTOqKiypu6lnuC1_IQ=",
        caption: "Diaper changing with care"
      },
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
    id: 'elderly-care',
    title: "Elderly Service",
    slug: "elderly-care",
    shortDescription:
      "Trusted care and companionship for elderly family members.",
    description:
      "Compassionate care for elderly family members with dignity and respect.",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
    charge: 600,
    overview:
      "Our Elderly Service provides compassionate, professional care for your aging loved ones. We understand the importance of dignity, respect, and quality of life. Our caregivers assist with daily activities while promoting independence and emotional well-being.",
    overviewImages: [
       "https://plus.unsplash.com/premium_photo-1663036892289-f19453cb7915?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxkZXJseSUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
       
      "https://plus.unsplash.com/premium_photo-1663036885930-7cdd25c9c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVsZGVybHklMjBjYXJlfGVufDB8fDB8fHww"
    ],
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
      {
        url: "https://plus.unsplash.com/premium_photo-1681995526481-fe0763f510cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVyc29uYWwlMjBjYXJlJTIwYXNzaXN0YW5jZXxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Caregiver with elderly"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1661490362359-965bc1918a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tcGFuaW9uc2hpcCUyMHRpbWUlMjBlbGRlcmx5JTIwd2l0aCUyMGNhcmVnaXZlcnxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Companionship time"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1663091388485-b2467d5a1397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVhbCUyMGFzc2lzdGFuY2V8ZW58MHx8MHx8fDA%3D",
        caption: "Meal assistance"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681995662527-bd709d035750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFdhbGtpbmclMjBzdXBwb3J0fGVufDB8fDB8fHww",
        caption: "Walking support"
      },
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
    id: 'sick-people-care',
    title: "Sick People Service",
    slug: "sick-people-care",
    shortDescription:
      "Professional home care for sick and recovering patients.",
    description:
      "Dedicated care for patients recovering at home with medical support.",
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
    charge: 700,
    overview:
      "Our Sick People Service provides professional medical care for patients recovering at home. Whether post-surgery, chronic illness, or post-hospitalization, our trained caregivers ensure comfort, safety, and proper medical support throughout recovery.",
    overviewImages: [
       "https://plus.unsplash.com/premium_photo-1661548069498-85f50d380ba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZS1udXJzaW5nJTIwZm9yJTIwc2ljayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
       
      "https://media.istockphoto.com/id/178143218/photo/elderly-woman-with-a-nurse.webp?a=1&b=1&s=612x612&w=0&k=20&c=6jpagkN_6DH3VWfetyF3a2svQ_2VgB8xnCsgaH6Pnq4="
    ],
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
      {
        url: "https://plus.unsplash.com/premium_photo-1664475543007-65926b656a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyZWdpdmVyJTIwd2l0aCUyME1lZGljYWwlMjBtb25pdG9yaW5nJTIwZm9yJTIwc2ljayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Caregiver with Medical monitoring"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1661715025822-adefb4eccfbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVkaWNhdGlvbiUyMGNhcmUlMjBmb3IlMjBzaWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
        caption: "Medication care"
      },
      {
        url: "https://images.unsplash.com/photo-1758273240331-745ccab011a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlcmFweSUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D",
        caption: "Therapy support"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1664476831263-b0dfa1e270a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fFJlY292ZXJ5JTIwY29tZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Recovery comfort"
      },
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
