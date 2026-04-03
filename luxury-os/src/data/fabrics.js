export const FABRICS = [
  {
    id: 'zegna',
    nameKey: 'fabrics.zegna_title',
    originKey: 'fabrics.zegna_origin',
    descKey: 'fabrics.zegna_desc',
    weightKey: 'fabrics.zegna_weight',
    micronKey: 'fabrics.zegna_micron',
    color: '#C8B8A2',
    pattern: 'solid',
    tags: ['Super 150s', 'Merino', 'Italian'],
    image: null
  },
  {
    id: 'scabal',
    nameKey: 'fabrics.scabal_title',
    originKey: 'fabrics.scabal_origin',
    descKey: 'fabrics.scabal_desc',
    weightKey: 'fabrics.scabal_weight',
    micronKey: 'fabrics.scabal_micron',
    color: '#2C3E50',
    pattern: 'herringbone',
    tags: ['Super 230s', 'Belgian', 'Collector'],
    image: null
  },
  {
    id: 'holland',
    nameKey: 'fabrics.holland_title',
    originKey: 'fabrics.holland_origin',
    descKey: 'fabrics.holland_desc',
    weightKey: 'fabrics.holland_weight',
    micronKey: 'fabrics.holland_micron',
    color: '#8B7355',
    pattern: 'cashmere',
    tags: ['Cashmere', 'Scottish', 'Royal'],
    image: null
  }
]

export const SUIT_HOTSPOTS = [
  {
    id: 'lapel',
    label: 'Peak Lapel',
    x: 38,
    y: 22,
    fabricId: 'zegna',
    detail: 'Hand-padded peak lapel in Zegna Trofeo Super 150s. Each stitch placed by a single master tailor over 4 hours.'
  },
  {
    id: 'chest',
    label: 'Chest Canvas',
    x: 50,
    y: 35,
    fabricId: 'scabal',
    detail: 'Full floating horsehair canvas chest piece — never fused. Moulds uniquely to your posture over the first 90 days of wear.'
  },
  {
    id: 'sleeve',
    label: 'Working Cuffs',
    x: 22,
    y: 58,
    fabricId: 'holland',
    detail: 'Four genuine working buttonholes, finished by hand. The mark of true bespoke — each one takes 45 minutes.'
  },
  {
    id: 'trouser',
    label: 'Trouser Break',
    x: 55,
    y: 78,
    fabricId: 'zegna',
    detail: 'Single surgical break — a precise 8mm contact with the shoe. Calibrated to your personal stride and stance.'
  }
]
