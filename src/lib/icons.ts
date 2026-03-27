import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;

export function getIcon(name: string, fallback: LucideIcon = LucideIcons.FileText): LucideIcon {
  return iconMap[name] ?? fallback;
}
