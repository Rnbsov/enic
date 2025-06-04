import {
  FileBox,
  Image,
  LayoutGrid,
  List,
  LucideProps,
  MailQuestion,
  Network,
  Rocket,
  Smile,
  Sparkles,
  StickyNote,
  User,
} from 'lucide-react'
import { CollectionSlug, GlobalSlug } from 'payload'
import { ExoticComponent } from 'react'

export const navIconMap: Partial<
  Record<CollectionSlug | GlobalSlug, ExoticComponent<LucideProps>>
> = {
  categories: List,
  media: Image,
  questions: MailQuestion,
  pages: StickyNote,
  posts: LayoutGrid,
  projects: FileBox,
  results: Rocket,
  users: User,
  news: Sparkles,
  partners: Smile,
  projectRoles: Network
}

export const getNavIcon = (slug: string) =>
  Object.hasOwn(navIconMap, slug) ? navIconMap[slug as CollectionSlug | GlobalSlug] : undefined
