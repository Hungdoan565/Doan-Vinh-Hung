import type { ComponentType } from 'react'
import {
  ReactIcon,
  NodeJsIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  SupabaseIcon,
  ExpressIcon,
  HTML5Icon,
  CSS3Icon,
  GitIcon,
  JavaIcon,
  PostmanIcon,
} from '@/components/icons'

export type SkillSize = 'large' | 'medium' | 'small'
export type SkillLevel = 'expert' | 'proficient' | 'familiar'

export interface SkillUsage {
  project: string
  role: { en: string; vi: string }
}

export interface Skill {
  name: string
  icon: ComponentType<{ className?: string; size?: number }>
  size: SkillSize
  level: SkillLevel
  description: { en: string; vi: string }
  appliedIn: SkillUsage[]
  concepts: string[]
  docsUrl: string
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: ReactIcon,
    size: 'large',
    level: 'expert',
    description: {
      en: 'Component-based UI library for building interactive interfaces',
      vi: 'Thư viện UI dựa trên component để xây dựng giao diện tương tác',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: '5-role admin dashboard & UI', vi: 'Dashboard 5 vai trò & giao diện' } },
      { project: 'ViLaw', role: { en: 'Streaming chat UI & doc wizard', vi: 'Giao diện chat streaming & soạn thảo' } },
      { project: 'Portfolio', role: { en: "This site you're on", vi: 'Trang web này' } },
    ],
    concepts: ['Hooks', 'Context API', 'Custom hooks', 'Memo', 'Framer Motion'],
    docsUrl: 'https://react.dev',
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    size: 'large',
    level: 'expert',
    description: {
      en: 'Core programming language for web development',
      vi: 'Ngôn ngữ lập trình cốt lõi cho phát triển web',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'Frontend logic & async flows', vi: 'Logic frontend & luồng async' } },
      { project: 'ViLaw', role: { en: 'ReadableStream for AI streaming', vi: 'ReadableStream cho streaming AI' } },
      { project: 'Portfolio', role: { en: 'Animations & interactions', vi: 'Animations & tương tác' } },
    ],
    concepts: ['Closures', 'Async/Await', 'Event loop', 'ES6+', 'Array methods'],
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Node.js',
    icon: NodeJsIcon,
    size: 'large',
    level: 'proficient',
    description: {
      en: 'JavaScript runtime for server-side applications',
      vi: 'Môi trường chạy JavaScript cho ứng dụng server',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'Express backend & bg jobs', vi: 'Backend Express & công việc nền' } },
    ],
    concepts: ['REST API', 'Middleware', 'Background jobs', 'Env config', 'Async I/O'],
    docsUrl: 'https://nodejs.org/docs',
  },
  {
    name: 'TypeScript',
    icon: TypeScriptIcon,
    size: 'medium',
    level: 'proficient',
    description: {
      en: 'Typed superset of JavaScript for safer code',
      vi: 'JavaScript có kiểu dữ liệu để code an toàn hơn',
    },
    appliedIn: [
      { project: 'ViLaw', role: { en: 'Full codebase type safety', vi: 'Type safety toàn codebase' } },
      { project: 'Portfolio', role: { en: 'Strict mode, component types', vi: 'Strict mode, kiểu component' } },
    ],
    concepts: ['Generics', 'Union types', 'Type guards', 'Utility types', 'Interfaces'],
    docsUrl: 'https://www.typescriptlang.org/docs',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    size: 'medium',
    level: 'proficient',
    description: {
      en: 'Utility-first CSS framework for rapid UI development',
      vi: 'CSS framework tiện ích cho phát triển UI nhanh',
    },
    appliedIn: [
      { project: 'ViLaw', role: { en: 'All UI styling & responsive', vi: 'Toàn bộ styling & responsive' } },
      { project: 'Portfolio', role: { en: 'Design tokens with v4 @theme', vi: 'Design tokens với v4 @theme' } },
    ],
    concepts: ['Utility-first', 'Responsive design', 'Dark mode', 'Custom tokens', 'v4 @theme'],
    docsUrl: 'https://tailwindcss.com/docs',
  },
  {
    name: 'Supabase',
    icon: SupabaseIcon,
    size: 'medium',
    level: 'proficient',
    description: {
      en: 'Open-source Firebase alternative with PostgreSQL',
      vi: 'Thay thế Firebase mã nguồn mở với PostgreSQL',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'DB, Auth, RLS & Storage', vi: 'CSDL, Auth, RLS & Storage' } },
    ],
    concepts: ['Row-Level Security', 'Realtime', 'Auth flows', 'Storage buckets', 'Edge functions'],
    docsUrl: 'https://supabase.com/docs',
  },
  {
    name: 'Express',
    icon: ExpressIcon,
    size: 'medium',
    level: 'proficient',
    description: {
      en: 'Minimalist web framework for Node.js backends',
      vi: 'Framework web tối giản cho backend Node.js',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'REST API for 5-role system', vi: 'REST API cho hệ thống 5 vai trò' } },
    ],
    concepts: ['Routing', 'Middleware', 'Error handling', 'JWT auth', 'MVC pattern'],
    docsUrl: 'https://expressjs.com',
  },
  {
    name: 'HTML5',
    icon: HTML5Icon,
    size: 'small',
    level: 'expert',
    description: {
      en: 'Markup language for structuring web content',
      vi: 'Ngôn ngữ đánh dấu để cấu trúc nội dung web',
    },
    appliedIn: [
      { project: 'ViLaw', role: { en: 'Semantic markup & accessibility', vi: 'Đánh dấu ngữ nghĩa & accessibility' } },
      { project: 'Portfolio', role: { en: 'SEO meta, OG tags, structure', vi: 'SEO meta, OG tags, cấu trúc' } },
    ],
    concepts: ['Semantic elements', 'ARIA roles', 'Forms', 'SEO meta tags', 'Canvas basics'],
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    icon: CSS3Icon,
    size: 'small',
    level: 'expert',
    description: {
      en: 'Styling language for designing web interfaces',
      vi: 'Ngôn ngữ styling để thiết kế giao diện web',
    },
    appliedIn: [
      { project: 'Portfolio', role: { en: 'Custom animations & tokens', vi: 'Animations & design tokens' } },
      { project: 'ViLaw', role: { en: 'Responsive layouts', vi: 'Layout responsive' } },
    ],
    concepts: ['Flexbox', 'CSS Grid', 'Custom properties', '@keyframes', 'Pseudo-elements'],
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Git',
    icon: GitIcon,
    size: 'small',
    level: 'proficient',
    description: {
      en: 'Version control system for tracking code changes',
      vi: 'Hệ thống kiểm soát phiên bản theo dõi thay đổi code',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'Solo version control', vi: 'Quản lý phiên bản độc lập' } },
      { project: 'ViLaw', role: { en: 'Team collab (5 members)', vi: 'Cộng tác nhóm (5 thành viên)' } },
    ],
    concepts: ['Branching', 'Rebase vs Merge', 'Commit conventions', 'PR workflow', 'Conflict resolution'],
    docsUrl: 'https://git-scm.com/doc',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    size: 'small',
    level: 'proficient',
    description: {
      en: 'Object-oriented language for enterprise applications',
      vi: 'Ngôn ngữ hướng đối tượng cho ứng dụng doanh nghiệp',
    },
    appliedIn: [
      { project: 'RestaurantPOS', role: { en: 'Full desktop POS system', vi: 'Toàn bộ hệ thống POS desktop' } },
    ],
    concepts: ['OOP', 'Layered architecture', 'Observer pattern', 'JDBC', 'Swing/FlatLaf'],
    docsUrl: 'https://docs.oracle.com/en/java',
  },
  {
    name: 'Postman',
    icon: PostmanIcon,
    size: 'small',
    level: 'proficient',
    description: {
      en: 'API testing and development platform',
      vi: 'Nền tảng test và phát triển API',
    },
    appliedIn: [
      { project: 'Skill Master', role: { en: 'REST API testing & debugging', vi: 'Test & debug REST API' } },
      { project: 'ViLaw', role: { en: 'API contract verification', vi: 'Kiểm tra API contract' } },
    ],
    concepts: ['Collections', 'Environment variables', 'Auth flows', 'Pre-request scripts', 'Test assertions'],
    docsUrl: 'https://learning.postman.com/docs',
  },
]
