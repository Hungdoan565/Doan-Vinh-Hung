export interface Experience {
  title: { en: string; vi: string }
  company: { en: string; vi: string }
  type: { en: string; vi: string }
  period: { en: string; vi: string }
  description: { en: string; vi: string }
  tech: string[]
  highlights: { en: string; vi: string }[]
}

export const experiences: Experience[] = [
  {
    title: {
      en: 'Full-Stack Developer',
      vi: 'Lập trình viên Full-Stack',
    },
    company: {
      en: 'Skill Master',
      vi: 'Skill Master',
    },
    type: {
      en: 'Solo Project',
      vi: 'Dự án cá nhân',
    },
    period: {
      en: 'Jul 2025 - Sep 2025',
      vi: 'Tháng 7/2025 - Tháng 9/2025',
    },
    description: {
      en: 'Built a complete education center management system supporting 5 distinct roles with AI-powered chatbot and background job processing.',
      vi: 'Xây dựng hệ thống quản lý trung tâm giáo dục hoàn chỉnh hỗ trợ 5 vai trò với chatbot AI và xử lý công việc nền.',
    },
    tech: ['React', 'Express', 'Supabase', 'Groq AI'],
    highlights: [
      {
        en: 'Built 5-role management system (Super Admin, Manager, Teacher, Student, Parent)',
        vi: 'Xây dựng hệ thống quản lý 5 vai trò (Super Admin, Quản lý, Giáo viên, Học sinh, Phụ huynh)',
      },
      {
        en: 'Integrated AI chatbot handling 80% of FAQs without human intervention',
        vi: 'Tích hợp chatbot AI xử lý 80% câu hỏi thường gặp mà không cần con người',
      },
      {
        en: 'Implemented background job processing with pg-boss for async tasks',
        vi: 'Triển khai xử lý công việc nền với pg-boss cho các tác vụ bất đồng bộ',
      },
    ],
  },
  {
    title: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend',
    },
    company: {
      en: 'ViLaw',
      vi: 'ViLaw',
    },
    type: {
      en: 'Team Project',
      vi: 'Dự án nhóm',
    },
    period: {
      en: 'Jan 2026 - Mar 2026',
      vi: 'Tháng 1/2026 - Tháng 3/2026',
    },
    description: {
      en: 'Led frontend development for an AI-powered legal platform with chatbot, document drafting, and contract analysis features.',
      vi: 'Dẫn dắt phát triển frontend cho nền tảng pháp lý AI với chatbot, soạn thảo văn bản và phân tích hợp đồng.',
    },
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      {
        en: 'Led entire frontend architecture using Next.js 15 App Router',
        vi: 'Kiến trúc toàn bộ frontend sử dụng Next.js 15 App Router',
      },
      {
        en: 'Implemented streaming AI chat interface with ReadableStream',
        vi: 'Triển khai giao diện chat AI streaming với ReadableStream',
      },
      {
        en: 'Built document drafting wizard reducing creation time from hours to minutes',
        vi: 'Xây dựng trình hướng dẫn soạn thảo văn bản giảm thời gian từ hàng giờ xuống vài phút',
      },
    ],
  },
  {
    title: {
      en: 'Desktop App Developer',
      vi: 'Lập trình viên ứng dụng Desktop',
    },
    company: {
      en: 'RestaurantPOS',
      vi: 'RestaurantPOS',
    },
    type: {
      en: 'Academic Project',
      vi: 'Dự án học thuật',
    },
    period: {
      en: 'Dec 2025 - Feb 2026',
      vi: 'Tháng 12/2025 - Tháng 2/2026',
    },
    description: {
      en: 'Developed a full-featured point-of-sale desktop application with real-time kitchen display and comprehensive reporting.',
      vi: 'Phát triển ứng dụng POS desktop đầy đủ tính năng với màn hình bếp thời gian thực và báo cáo toàn diện.',
    },
    tech: ['Java 17', 'Swing', 'MySQL', 'JasperReports'],
    highlights: [
      {
        en: 'Designed 4-role POS system (Admin, Cashier, Waiter, Chef)',
        vi: 'Thiết kế hệ thống POS 4 vai trò (Admin, Thu ngân, Phục vụ, Bếp trưởng)',
      },
      {
        en: 'Built real-time Kitchen Display System eliminating verbal order communication',
        vi: 'Xây dựng Màn hình Bếp thời gian thực loại bỏ giao tiếp order miệng',
      },
      {
        en: 'Generated PDF reports with JasperReports for daily/weekly sales insights',
        vi: 'Tạo báo cáo PDF với JasperReports cho thông tin doanh thu ngày/tuần',
      },
    ],
  },
]
