import type { Translations } from './types'

export const vi: Translations = {
  nav: {
    about: 'Giới thiệu',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    contact: 'Liên hệ',
  },
  hero: {
    greeting: 'Xin chào, tôi là',
    name: 'Đoàn Vĩnh Hưng',
    subtitle: 'Tôi biến những vấn đề phức tạp thành phần mềm sạch, hoạt động tốt.',
    badge: 'Đang tìm việc',
    available: 'Đang tìm việc',
    tagline: 'Tôi biến những vấn đề phức tạp thành phần mềm sạch, hoạt động tốt.',
    downloadCv: 'Tải CV',
    scrollDown: 'Cuộn xuống',
    cta: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      cv: 'Tải CV',
    },
  },
  about: {
    heading: 'Về tôi',
    title: 'Về tôi',
    bio: 'Tôi là sinh viên năm 4 ngành Khoa học Máy tính tại Trường Đại học Nam Cần Thơ, đam mê xây dựng phần mềm giải quyết vấn đề thực tế. Tôi yêu thích toàn bộ stack — từ thiết kế cơ sở dữ liệu đến giao diện pixel-perfect. Hiện tại tôi đang tìm kiếm cơ hội phát triển và đóng góp vào các dự án ý nghĩa.',
    location: 'Cần Thơ, Việt Nam',
    year: 'Sinh viên năm 4',
    school: 'Đại học Nam Cần Thơ',
    statProjects: 'Dự án',
    statRoles: 'Công nghệ',
    statYear: 'Năm kinh nghiệm',
    stats: {
      projects: 'Dự án',
      coding: 'Năm lập trình',
      technologies: 'Công nghệ',
    },
  },
  skills: {
    heading: 'Kỹ năng',
    title: 'Kỹ năng',
    levels: {
      expert: 'Thành thạo',
      proficient: 'Giỏi',
      familiar: 'Quen thuộc',
    },
  },
  projects: {
    heading: 'Dự án',
    title: 'Dự án',
    viewCode: 'Xem mã nguồn',
    liveDemo: 'Demo trực tiếp',
    screenshots: 'Ảnh chụp màn hình',
    viewCaseStudy: 'Chi tiết',
    viewCase: 'Chi tiết',
    close: 'Đóng',
    caseStudy: {
      problem: 'Vấn đề',
      whatIBuilt: 'Tôi đã xây dựng',
      keyDecisions: 'Quyết định chính',
      result: 'Kết quả',
    },
    role: 'Vai trò của tôi',
  },
  contact: {
    heading: 'Hãy cùng làm việc',
    title: 'Hãy cùng làm việc',
    subheading: 'Tôi sẵn sàng cho công việc toàn thời gian và dự án freelance. Hãy cùng xây dựng điều gì đó tuyệt vời.',
    subtitle: 'Tôi sẵn sàng cho công việc toàn thời gian và dự án freelance. Hãy cùng xây dựng điều gì đó tuyệt vời.',
  },
  footer: {
    copyright: '© 2026 Đoàn Vĩnh Hưng',
    builtWith: 'Xây dựng với React + Tailwind',
  },
  scrollToTop: 'Lên đầu trang',
  timeline: {
    heading: 'Hành Trình',
    items: [
      {
        date: '2022',
        title: 'Bắt đầu CNTT tại ĐH Nam Cần Thơ',
        description: 'Bắt đầu hành trình Khoa học Máy tính, học nền tảng lập trình, thuật toán và thiết kế phần mềm.',
      },
      {
        date: 'Tháng 7/2025',
        title: 'Skill Master — Solo Full-Stack + AI Chatbot',
        description: 'Xây dựng hệ thống quản lý giáo dục 5 vai trò với React, Express, Supabase và chatbot AI từ Groq.',
      },
      {
        date: 'Tháng 2/2026',
        title: 'RestaurantPOS — Solo Java Desktop POS',
        description: 'Phát triển hệ thống POS đầy đủ tính năng với Java Swing, MySQL, Màn hình Bếp và báo cáo.',
      },
      {
        date: 'Tháng 3/2026',
        title: 'ViLaw — Dự án nhóm, Toàn bộ Frontend',
        description: 'Chịu trách nhiệm toàn bộ frontend của nền tảng pháp lý AI với Next.js 15, TypeScript và chat AI streaming.',
      },
      {
        date: 'Hiện tại',
        title: 'Portfolio + Học AI/RAG',
        description: 'Xây dựng portfolio này và đang tìm hiểu RAG pipeline, AI agents và prompt engineering.',
      },
    ],
  },
  learning: {
    heading: 'Đang Học',
    subtitle: 'Những gì tôi đang khám phá — hướng tới ứng dụng AI.',
    items: [
      {
        title: 'RAG Pipeline',
        description: 'Xây dựng hệ thống tăng cường tìm kiếm với LangChain và ChromaDB cho chatbot AI hiểu tài liệu.',
        tags: ['LangChain', 'ChromaDB', 'Embeddings', 'Vector DB'],
        links: [{ label: 'GitHub Repo', url: 'https://github.com/Hungdoan565' }],
      },
      {
        title: 'AI Agent Frameworks',
        description: 'Học xây dựng AI agents tự động có thể suy luận, lên kế hoạch và dùng công cụ để hoàn thành nhiệm vụ phức tạp.',
        tags: ['LangGraph', 'CrewAI', 'Tool Use', 'Multi-Agent'],
        links: [{ label: 'Thử nghiệm', url: 'https://github.com/Hungdoan565' }],
      },
      {
        title: 'Prompt Engineering',
        description: 'Thành thạo kỹ thuật giao tiếp AI hiệu quả — chain-of-thought, few-shot learning và structured outputs.',
        tags: ['CoT', 'Few-Shot', 'System Prompts', 'Structured Output'],
        links: [{ label: 'Thư viện Prompt', url: 'https://github.com/Hungdoan565' }],
      },
    ],
    quote: 'Thời điểm tốt nhất để học AI là hôm qua. Tốt thứ hai là bây giờ.',
  },
  experience: {
    heading: 'Kinh Nghiệm',
    subtitle: 'Các dự án thực tế nơi tôi áp dụng kỹ năng — từ dự án cá nhân đến làm việc nhóm.',
  },
  testimonials: {
    heading: 'Nhận Xét',
    subtitle: 'Phản hồi từ đồng đội và giảng viên tôi đã làm việc cùng.',
  },
}
