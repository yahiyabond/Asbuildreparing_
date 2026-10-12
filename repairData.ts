import { ServiceItem, FAQItem, ReviewItem, WhyChooseItem } from '../types';
import heroImage from '../assets/images/hero_appliance_repair_service_1791711427761.jpg';
import acRepairImage from '../assets/images/service_ac_repair_accurate_1791711443500.jpg';
import fridgeRepairImage from '../assets/images/service_fridge_repair_accurate_1791711458006.jpg';
import washingMachineImage from '../assets/images/service_washing_machine_accurate_1791711468573.jpg';
import microwaveImage from '../assets/images/service_microwave_oven_accurate_1791711479972.jpg';
import waterDispenserImage from '../assets/images/service_water_dispenser_accurate_1791711490986.jpg';

export const BUSINESS_INFO = {
  name: "AS build Repairing",
  tagline: "Professional Home Appliance Repair Services",
  phone: "8688446317",
  formattedPhone: "+91 86884 46317",
  email: "sahilkhanbe50@gmail.com",
  whatsappUrl: "https://wa.me/918688446317?text=Hello%20AS%20build%20Repairing%2C%20I%20need%20appliance%20repair%20service.",
  phoneUrl: "tel:8688446317",
  emailUrl: "mailto:sahilkhanbe50@gmail.com",
  hours: "Monday – Sunday, 9:00 AM – 11:00 PM",
  serviceType: "Doorstep Home Appliance Repair",
  heroImage
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "AC Repair & Service",
    category: "Cooling & Air Treatment",
    image: acRepairImage,
    imageCaption: "Split & Window AC Coil, Gas Pressure & Filter Servicing",
    description: "Expert troubleshooting, coil checking, gas inspection, filter cleaning, and complete maintenance for split and window air conditioners.",
    commonIssues: [
      "Cooling problems",
      "Water leakage",
      "AC not starting",
      "General servicing"
    ],
    iconName: "Wind"
  },
  {
    id: "fridge-repair",
    title: "Refrigerator / Fridge Repair",
    category: "Refrigeration",
    image: fridgeRepairImage,
    imageCaption: "Single & Double-Door Fridge Cooling, Evaporator & Thermostat Check",
    description: "Thorough inspection of cooling coils, defrost systems, compressors, thermostats, and door seals for single, double, and multi-door refrigerators.",
    commonIssues: [
      "Cooling problems",
      "Freezing problems",
      "Water leakage",
      "General servicing"
    ],
    iconName: "Refrigerator"
  },
  {
    id: "washing-machine-repair",
    title: "Washing Machine Repair",
    category: "Laundry Appliances",
    image: washingMachineImage,
    imageCaption: "Front-Load & Top-Load Drum, Drain Pump & Motor Diagnostics",
    description: "Comprehensive diagnostics for front load, top load, and semi-automatic washing machine motors, pumps, drums, and electronics.",
    commonIssues: [
      "Not starting",
      "Not spinning",
      "Water drainage problems",
      "Water filling problems",
      "General servicing"
    ],
    iconName: "Disc"
  },
  {
    id: "microwave-repair",
    title: "Microwave Oven Repair",
    category: "Kitchen Appliances",
    image: microwaveImage,
    imageCaption: "Convection & Solo Microwave Magnetron, Heating & Touch Panel Repair",
    description: "Reliable inspection and repair of magnetrons, high-voltage diodes, touch keypads, turntables, and door interlock switches.",
    commonIssues: [
      "Not heating",
      "Not turning on",
      "Display/button problems",
      "General repair"
    ],
    iconName: "Zap"
  },
  {
    id: "water-dispenser-repair",
    title: "Water Dispenser Repair",
    category: "Water Appliances",
    image: waterDispenserImage,
    imageCaption: "Hot & Cold Bottled Water Dispenser Heating Tank, Cooling & Tap Service",
    description: "Inspection and servicing for hot and cold water dispensers, including cooling thermostats, heating elements, sanitization, and leak fixes.",
    commonIssues: [
      "Cooling problems",
      "Heating problems",
      "Water leakage",
      "Not turning on",
      "General servicing"
    ],
    iconName: "Droplets"
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "professional-service",
    title: "Professional Service",
    description: "Courteous technicians who inspect your appliance methodically and explain the issue clearly.",
    iconName: "Wrench"
  },
  {
    id: "multiple-appliances",
    title: "Multiple Appliance Repairs",
    description: "One reliable contact for your AC, refrigerator, washing machine, microwave, and water dispenser.",
    iconName: "Layers"
  },
  {
    id: "convenient-home-service",
    title: "Convenient Home Service",
    description: "No need to transport heavy appliances. Repairs and diagnostics happen directly at your doorstep.",
    iconName: "Home"
  },
  {
    id: "easy-communication",
    title: "Easy Communication",
    description: "Reach us directly via phone call or WhatsApp without complicated menus or delays.",
    iconName: "PhoneCall"
  },
  {
    id: "customer-focused",
    title: "Customer-Focused Service",
    description: "We prioritize your convenience, honest assessment, and prompt resolution of appliance troubles.",
    iconName: "HeartHandshake"
  }
];

export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Ramesh K.",
    appliance: "AC Repair & Service",
    comment: "Technician came within the committed time window. Thoroughly checked the gas pressure and cleaned the filters. Split AC cooling is working perfectly again.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 8,
    replies: [
      {
        id: "rep-1",
        author: "AS build Repairing",
        comment: "Thank you Ramesh! Glad our technician could resolve the AC cooling issue promptly.",
        date: "Sample response"
      }
    ]
  },
  {
    id: "rev-2",
    author: "Priya S.",
    appliance: "Washing Machine Repair",
    comment: "Our front-load washing machine was shaking violently during the spin cycle. The technician re-leveled the drum and replaced the worn suspension damper. Smooth running now!",
    rating: 5,
    date: "Sample review",
    helpfulCount: 12
  },
  {
    id: "rev-3",
    author: "Mohammad A.",
    appliance: "Refrigerator Repair",
    comment: "Double door fridge stopped cooling in the bottom section while freezer was cold. Technician diagnosed a blocked air damper and defrost heater issue. Solved in one visit.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 5
  },
  {
    id: "rev-4",
    author: "Anitha V.",
    appliance: "Microwave Oven Repair",
    comment: "Prompt response on WhatsApp. Technician arrived with diagnostic tools and fixed the heating problem without recommending unnecessary part replacements.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 6
  },
  {
    id: "rev-5",
    author: "Suresh Reddy",
    appliance: "AC Repair & Service",
    comment: "Had severe water dripping from the indoor unit onto our wall. The technician flushed the clogged drainage pipe and cleared the tray. Clean and mess-free service.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 9
  },
  {
    id: "rev-6",
    author: "Rajeshwari P.",
    appliance: "Refrigerator Repair",
    comment: "Very polite and honest technician. Explained why the compressor was cycling constantly and adjusted the thermostat sensor. Great doorstep service.",
    rating: 4,
    date: "Sample review",
    helpfulCount: 4
  },
  {
    id: "rev-7",
    author: "Karthik M.",
    appliance: "Washing Machine Repair",
    comment: "Top load washing machine gave an OE error code and wouldn't drain water. Technician removed a coin blockage from the drain pump assembly. Fast relief!",
    rating: 5,
    date: "Sample review",
    helpfulCount: 7
  },
  {
    id: "rev-8",
    author: "Manish G.",
    appliance: "Water Dispenser Repair",
    comment: "Our office water dispenser stopped dispensing hot water. Heating coil connection was checked and repaired on the same day. Appreciate the punctuality.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 3
  },
  {
    id: "rev-9",
    author: "Deepa Nair",
    appliance: "AC Repair & Service",
    comment: "Booked a checkup after our bedroom AC started making grinding rattling noises. Blower motor fan was realigned quickly. Very satisfied with the quiet cooling now.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 6
  },
  {
    id: "rev-10",
    author: "Vikram Joshi",
    appliance: "Microwave Oven Repair",
    comment: "Turntable motor had ceased rotating properly causing uneven heating. The technician carried the exact compatible roller assembly and fixed it in 20 minutes.",
    rating: 4,
    date: "Sample review",
    helpfulCount: 5
  },
  {
    id: "rev-11",
    author: "Sunita Rao",
    appliance: "Washing Machine Repair",
    comment: "Door latch was stuck and wouldn't release after wash. Technician carefully opened the interlock mechanism without damaging the door frame. Recommended!",
    rating: 5,
    date: "Sample review",
    helpfulCount: 8
  },
  {
    id: "rev-12",
    author: "Preeti Sharma",
    appliance: "Water Dispenser Repair",
    comment: "Water tap valve was constantly dripping causing water wastage. Replaced the tap set and tested cold water cooling thermostat. Working like new.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 4
  },
  {
    id: "rev-13",
    author: "Imran Baig",
    appliance: "Refrigerator Repair",
    comment: "Fridge was clicking every two minutes and not turning on. Relay starter was replaced right in front of us. Honest pricing and direct contact at 8688446317.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 11
  },
  {
    id: "rev-14",
    author: "Sneha Roy",
    appliance: "Microwave Oven Repair",
    comment: "Saw sparks inside the cavity when heating food. Technician inspected and replaced the mica waveguide cover plate and cleaned carbon deposits. Safe to use now.",
    rating: 5,
    date: "Sample review",
    helpfulCount: 7
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What repair services are available?",
    answer: "We provide repair, troubleshooting, and general servicing for major residential appliances including Air Conditioners, Refrigerators, Washing Machines, Microwave Ovens, and Water Dispensers."
  },
  {
    question: "Which appliances are covered?",
    answer: "Our services cover split and window ACs, single and double-door refrigerators, front-load and top-load washing machines, countertop and convection microwave ovens, and hot/cold water dispensers."
  },
  {
    question: "How do I contact AS build Repairing for service?",
    answer: "You can reach us immediately by calling 8688446317, sending a message on WhatsApp to 8688446317, or emailing us at sahilkhanbe50@gmail.com. We answer directly to assist you."
  },
  {
    question: "What is your service availability?",
    answer: "We attend to service requests throughout the week from morning to evening. Simply give us a call or send a WhatsApp message with your convenient time and location."
  },
  {
    question: "How should I describe my appliance problem when calling?",
    answer: "When calling 8688446317, mention the appliance type (e.g. AC or Washing Machine), brand name if known, and what happens (e.g. not cooling, water leaking, not starting, or error codes). This helps our technician prepare the right diagnostic tools."
  }
];
