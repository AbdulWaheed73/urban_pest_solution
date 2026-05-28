import {
  AnimatedTestimonials,
  type Testimonial as AnimatedTestimonial,
} from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

// Initial-based avatars (no real photos available) — coloured with the brand royal-blue
const avatarFor = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=2E3692&color=ffffff&bold=true&size=128`;

const mapped: AnimatedTestimonial[] = testimonials.map((t, i) => ({
  id: i + 1,
  name: t.name,
  role: t.role,
  company: t.company,
  content: t.quote,
  rating: 5,
  avatar: avatarFor(t.name),
}));

export function TestimonialsSection() {
  return (
    <AnimatedTestimonials
      badgeText="What our clients say"
      title="Trusted voices, real results"
      subtitle="Leading organizations across Pakistan share how Urban Pest Solution protects their operations."
      testimonials={mapped}
      autoRotateInterval={7000}
    />
  );
}
