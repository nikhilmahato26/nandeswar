/**
 * Curated icon registry.
 *
 * We import only the exact icons we use (no wildcard `import * as Icons`),
 * then expose them through a single `iconMap` keyed by the `iconKey`
 * strings used in src/data/siteContent.js. This keeps tree-shaking clean
 * and the production bundle small.
 */
import {
  Star,
  Sun,
  Moon,
  Sparkles,
  Gem,
  Heart,
  HeartHandshake,
  Hand,
  Hash,
  Users,
  TrendingUp,
  Briefcase,
  Activity,
  Baby,
  GraduationCap,
  Plane,
  Calculator,
  ScrollText,
  BookOpen,
  Compass,
  Flame,
  Wind,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Flower,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Quote,
} from 'lucide-react'

import { FaWhatsapp } from 'react-icons/fa6'

// Mapping used by data-driven components (services, gemstones, etc.)
export const iconMap = {
  star: Star,
  sun: Sun,
  moon: Moon,
  sparkles: Sparkles,
  gem: Gem,
  heart: Heart,
  handHeart: HeartHandshake,
  hand: Hand,
  hash: Hash,
  users: Users,
  trendingUp: TrendingUp,
  briefcase: Briefcase,
  activity: Activity,
  baby: Baby,
  graduation: GraduationCap,
  plane: Plane,
  calculator: Calculator,
  scroll: ScrollText,
  book: BookOpen,
  compass: Compass,
  flame: Flame,
  wind: Wind,
  leaf: Leaf,
  shield: ShieldCheck,
  check: CheckCircle2,
  lotus: Flower,
}

// Helper component: render an icon by its registry key
export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || Star
  return <Cmp {...props} />
}

// Direct re-exports for UI chrome (navbar, footer, buttons, etc.)
export {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Quote,
  FaWhatsapp,
}
