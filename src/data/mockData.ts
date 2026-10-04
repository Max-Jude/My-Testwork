import { ServiceItem, PricingTier, StepItem, BenefitItem, TestimonialItem, FAQItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    tagline: 'Everyday casual wear, sorted and folded',
    description: 'Everyday casual clothes, t-shirts, jeans, and towels washed with premium mild detergents, gently tumble-dried, and neatly folded.',
    details: [
      'Color separation and fabric temperature matching',
      'Hypoallergenic, fabric-safe eco detergents',
      'Crisp precision folding or hanger packing',
      'Ready to pack straight into your wardrobe'
    ],
    turnaround: '24 – 48 Hours',
    startingPrice: '₦2,000',
    priceUnit: 'per kg',
    recommendedFor: 'Busy professionals, students & families',
    badge: 'Most Popular',
    iconName: 'Shirt',
  },
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    tagline: 'Care for suits, blazers, and delicates',
    description: 'Specialized chemical solvent cleaning for tailored suits, silks, native attires (agbada, lace), and delicate evening wear that cannot take water washing.',
    details: [
      'Pre-spotting and individualized stain treatment',
      'Gentle solvent care preserving fabric integrity',
      'Hand inspection of buttons, linings, and seams',
      'Complimentary dust cover & sturdy hangers'
    ],
    turnaround: '48 – 72 Hours',
    startingPrice: '₦2,000',
    priceUnit: 'per item',
    recommendedFor: 'Office wear, traditional ceremonies & suits',
    iconName: 'Sparkles',
  },
  {
    id: 'steam-ironing',
    name: 'Steam Ironing & Pressing',
    tagline: 'Wrinkle-free perfection ready for the boardroom',
    description: 'Professional commercial steam pressing that restores sharp creases and crisp collars without damaging sensitive threads or leaving shiny marks.',
    details: [
      'Temperature-calibrated industrial steam pressing',
      'Sharp collar and cuff alignment',
      'Delicate fabric care for wool and silk blends',
      'Packed on hangers or packaged flat'
    ],
    turnaround: '24 Hours',
    startingPrice: '₦1,200',
    priceUnit: 'per item',
    recommendedFor: 'Dress shirts, native trousers & formal wear',
    iconName: 'Flame',
  },
  {
    id: 'bedding-duvets',
    name: 'Bedding & Duvets',
    tagline: 'Deep allergen-free cleaning for heavy linens',
    description: 'High-capacity industrial washing and sanitization for bulky duvets, comforters, mattress toppers, and heavy bedroom blankets.',
    details: [
      'High-capacity machines designed for heavy textiles',
      'Deep dust mite and allergen elimination',
      'Fluffing and moisture-free down treatment',
      'Airtight breathable storage packaging'
    ],
    turnaround: '48 – 72 Hours',
    startingPrice: '₦5,000',
    priceUnit: 'per duvet',
    recommendedFor: 'Households, Airbnb hosts & guest rooms',
    iconName: 'BedDouble',
  },
  {
    id: 'express-laundry',
    name: 'Express Laundry',
    tagline: 'Rapid turnaround when time is essential',
    description: 'Priority queue processing for urgent travel schedules, unexpected meetings, or weekend events with same-day or 24-hour return delivery.',
    details: [
      'Immediate dedicated machine assignment',
      'Priority wash, dry, press, and dispatch',
      'Same-day pickup if booked before 10:00 AM',
      'Direct courier dispatch back to your door'
    ],
    turnaround: 'Same-day or 24 Hours',
    startingPrice: '₦3,000',
    priceUnit: 'per kg',
    recommendedFor: 'Travelers, weekend events & urgent needs',
    badge: 'Fast Track',
    iconName: 'Zap',
  },
  {
    id: 'corporate-laundry',
    name: 'Corporate & Bulk',
    tagline: 'Structured solutions for businesses & teams',
    description: 'Custom pickup schedules and negotiated volume rates for hotels, guest lodges, clinic uniforms, security teams, and corporate departments.',
    details: [
      'Tailored bi-weekly or weekly scheduled pickups',
      'Itemized batch manifests and commercial invoicing',
      'Industrial sanitization compliance',
      'Dedicated business account manager'
    ],
    turnaround: 'Custom Schedule',
    startingPrice: 'Custom',
    priceUnit: 'volume quote',
    recommendedFor: 'Hotels, guest houses, clinics & companies',
    iconName: 'Building2',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'regular-wash',
    name: 'Regular Wash',
    rate: '₦1,500',
    numericRate: 1500,
    unit: 'per kg',
    description: 'Basic wash and tumble dry for casual everyday items without hand folding.',
    features: [
      'Machine wash & gentle spin dry',
      'Fabric-safe detergent',
      'Clean bagged return',
      '48-hour standard turnaround'
    ]
  },
  {
    id: 'wash-fold',
    name: 'Wash + Fold',
    rate: '₦2,000',
    numericRate: 2000,
    unit: 'per kg',
    description: 'Complete laundry care: color separation, wash, dry, and crisp precision fold.',
    features: [
      'Color and fabric separation',
      'Eco-friendly laundry detergent & softener',
      'Precision fold, sorted by garment type',
      'Ready to place straight in closets',
      '24–48 hour turnaround'
    ],
    popular: true
  },
  {
    id: 'express',
    name: 'Express Service',
    rate: '₦3,000',
    numericRate: 3000,
    unit: 'per kg',
    description: 'Priority handling with guaranteed 24-hour return delivery to your doorstep.',
    features: [
      'Instant queue jump upon arrival',
      'Dedicated cycle & rapid processing',
      'Wash, fold, and protective packing',
      'Guaranteed 24-hour turnaround',
      'Priority rider dispatch'
    ]
  },
  {
    id: 'duvet-cleaning',
    name: 'Duvet Cleaning',
    rate: '₦5,000+',
    numericRate: 5000,
    unit: 'per duvet',
    description: 'Heavy duty deep cleaning and anti-bacterial refresh for bulky bedding.',
    features: [
      'Large-drum commercial sanitization',
      'Deep stain and odor neutralization',
      'Anti-allergen drying cycle',
      'Heavy-duty breathable packaging'
    ]
  },
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    rate: 'from ₦2,000',
    numericRate: 2000,
    unit: 'per piece',
    description: 'Specialized solvent care for blazers, native attires, suits, and delicate fabrics.',
    features: [
      'Spot stain inspection & pre-treatment',
      'Fabric-safe non-aqueous solvent clean',
      'Steam press with wood-grade hanger',
      'Individual protective garment cover'
    ]
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Book',
    description: 'Schedule your pickup online in under two minutes.',
    detail: 'Select your preferred pickup day, convenient time slot, and tell us your address in Ibadan. We confirm via SMS and WhatsApp.'
  },
  {
    step: '02',
    title: 'We Pick Up',
    description: 'Our friendly courier collects your laundry bag.',
    detail: 'Our trained rider arrives at your doorstep with a branded, water-resistant SwiftWash bag. We tag and weigh your laundry on the spot.'
  },
  {
    step: '03',
    title: 'We Clean',
    description: 'Garments receive specialized, professional care.',
    detail: 'We separate colors, check care labels, pretreat spots, and wash using temperature-appropriate water and gentle detergents.'
  },
  {
    step: '04',
    title: 'We Deliver',
    description: 'Clean, crisp, folded clothes return to you.',
    detail: 'Your laundry is delivered back crisp, fresh-smelling, and organized—ready to wear or unpack straight into your drawers.'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Convenient Pickup & Delivery',
    description: 'Skip the heavy laundry bags and traffic. We come directly to your gate, office, or hostel across Ibadan.',
    iconName: 'Clock'
  },
  {
    title: 'Professional Garment Care',
    description: 'From delicate traditional silks to everyday denim, our experienced wash masters respect every fabric label.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, published per-kg and per-item pricing. No mystery surcharges, water fees, or surprise bills.',
    iconName: 'Receipt'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Morning and evening collection slots designed around the real schedules of working professionals and students.',
    iconName: 'Calendar'
  },
  {
    title: 'Quality-Focused Service',
    description: 'Every order undergoes inspection before dispatch: clean seams, intact buttons, and crisp folds guaranteed.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Friendly Customer Support',
    description: 'Prompt communication via WhatsApp and direct call whenever you have questions or special garment requests.',
    iconName: 'Headphones'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Damilola A.',
    role: 'Software Engineer & Remote Worker',
    location: 'Bodija, Ibadan',
    quote: 'As a remote developer with back-to-back sprint deadlines, spending Saturday washing jeans and bedsheets was exhausting. SwiftWash picks up right at my estate gate on Thursday evening and delivers everything folded on Saturday morning. The consistency is unmatched.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Aisha M.',
    role: 'Senior Registrar & Parent',
    location: 'UCH / Agodi GRA',
    quote: 'Between hospital call shifts and caring for two toddlers, laundry was our biggest household bottleneck. SwiftWash handles our family wash and bedding with incredible care. The clothes smell fresh and natural without overpowering perfume.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Tunde O.',
    role: 'Postgraduate Researcher',
    location: 'University of Ibadan Campus',
    quote: 'Hostel water supply can be unpredictable. Using SwiftWash for my weekly wash and fold has saved me hours of manual washing. Their pricing is reasonable for students and they never mix up my items.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Folake B.',
    role: 'Managing Director',
    location: 'Oluyole Estate, Ibadan',
    quote: 'I trust them with my expensive traditional lace attires and work suits. Their dry cleaning and steam pressing are crisp, and the riders are always polite and prompt. Exactly what Ibadan needed.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the pickup and delivery service work?',
    answer: 'Simply complete the pickup booking form on our website with your preferred date, time slot, and address in Ibadan. A SwiftWash courier arrives with a reusable collection bag, tags your laundry, and provides an immediate electronic receipt. Once cleaned, we bring it back during your selected delivery window.'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to clean and return my laundry?',
    answer: 'Standard Wash & Fold is typically returned within 24 to 48 hours. Dry cleaning and heavy duvet sanitization take 48 to 72 hours to allow complete gentle treatment. If you are in a hurry, our Express Service offers same-day or guaranteed 24-hour turnaround.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer express or same-day service in Ibadan?',
    answer: 'Yes! If you book an Express pickup before 10:00 AM on weekdays, your garments are fast-tracked through our dedicated express line and delivered within 24 hours. Express rates apply.'
  },
  {
    id: 'faq-4',
    question: 'How do I pay for my laundry order?',
    answer: 'For transparency, we weigh your clothes or inspect special items upon collection. You receive an exact invoice via SMS/WhatsApp with payment options: instant bank transfer, USSD, or POS on delivery. In this frontend demo version, no real financial transactions take place.'
  },
  {
    id: 'faq-5',
    question: 'What neighborhoods and areas in Ibadan do you cover?',
    answer: 'We currently cover major residential and commercial hubs across Ibadan including Bodija, UI / Samonda, Agodi GRA, Jericho, Iyaganku, Oluyole Estate, Ring Road, Challenge, Akobo, and Alalubosa Estate. We are continuously expanding to new estates.'
  },
  {
    id: 'faq-6',
    question: 'What happens if an item is damaged or misplaced?',
    answer: 'We take garment safety seriously. Every piece goes through barcode tag logging and high-resolution intake video inspection. In the rare event of an issue, our Garment Guarantee policy covers repair or reimbursement based on verified garment value.'
  },
  {
    id: 'faq-7',
    question: 'Can I reschedule or cancel a scheduled pickup?',
    answer: 'Yes, pickups can be rescheduled or cancelled at any time up to one hour before your selected time slot without any penalty fee. Simply reach out via our WhatsApp helpline.'
  },
  {
    id: 'faq-8',
    question: 'Do you handle delicate clothing and traditional native attires?',
    answer: 'Absolutely. We specialize in traditional Nigerian attire including Agbada, Aso-Oke, embroidered linen, George wrappers, and delicate lace. These garments are processed with fabric-specific solvent cleaning and hand steam pressing to preserve embroidery and color.'
  }
];

export const SERVICE_AREAS = [
  'Bodija (Old & New)',
  'University of Ibadan (UI) & Samonda',
  'Jericho & Idi-Ishin',
  'Agodi GRA & Secretariat',
  'Oluyole Estate & Ring Road',
  'Challenge & Molete',
  'Akobo & General Gas',
  'Iyaganku GRA & Alalubosa',
  'Eleyele & Dugbe Commercial District'
];
