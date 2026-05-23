export interface CaseStudy {
  problem: string | { en: string; vi: string }
  whatIBuilt: string | { en: string; vi: string }
  keyDecisions: string | { en: string; vi: string }
  result: string | { en: string; vi: string }
}

export interface Project {
  slug: string
  title: string
  tagline: string | { en: string; vi: string }
  tech: string[]
  githubUrl: string
  liveUrl?: string
  image: string
  role: string | { en: string; vi: string }
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'skill-master',
    title: 'Skill Master',
    tagline: {
      en: 'Multi-role education center management system with AI chatbot and background job processing.',
      vi: 'Hệ thống quản lý trung tâm giáo dục đa vai trò với chatbot AI và xử lý công việc nền.',
    },
    tech: ['React', 'Express', 'Supabase', 'Node.js', 'Groq AI', 'pg-boss'],
    githubUrl: 'https://github.com/Hungdoan565/Skill_Master',
    liveUrl: undefined,
    image: '/projects/skill-master.png',
    role: {
      en: 'Solo Developer — Full Stack',
      vi: 'Lập trình viên độc lập — Full Stack',
    },
    caseStudy: {
      problem: {
        en: 'Education centers in Vietnam manage students, teachers, parents, and schedules across paper records or disconnected spreadsheets. Center managers waste hours on scheduling, attendance, and certification tracking. There was no affordable all-in-one solution for small-to-medium centers with 50-500 students.',
        vi: 'Các trung tâm giáo dục tại Việt Nam quản lý học sinh, giáo viên, phụ huynh và lịch học bằng giấy tờ hoặc bảng tính rời rạc. Quản lý tốn nhiều giờ cho việc lập lịch, điểm danh và theo dõi chứng chỉ. Không có giải pháp tích hợp nào với chi phí phù hợp cho các trung tâm quy mô vừa và nhỏ từ 50-500 học sinh.',
      },
      whatIBuilt: {
        en: 'A monorepo SPA (React + Express + Supabase) supporting 5 distinct roles: Super Admin, Center Manager, Teacher, Student, and Parent. Key features: AI chatbot (Molly, powered by Groq) for FAQ and scheduling queries, certificate generation/verification, async background job processing via pg-boss, and a real-time dashboard for center performance metrics. Added real-time notifications for schedule changes, automated certificate generation with QR code verification, and a parent portal for tracking student progress.',
        vi: 'Một SPA dạng monorepo (React + Express + Supabase) hỗ trợ 5 vai trò: Super Admin, Quản lý Trung tâm, Giáo viên, Học sinh và Phụ huynh. Tính năng chính: chatbot AI (Molly, dùng Groq) cho các câu hỏi thường gặp, tạo và xác minh chứng chỉ, xử lý công việc nền qua pg-boss và dashboard thời gian thực. Bổ sung thông báo thời gian thực khi thay đổi lịch học, tự động tạo chứng chỉ với mã QR để xác minh, và cổng thông tin phụ huynh để theo dõi tiến độ học tập.'
      },
      keyDecisions: {
        en: 'Chose Supabase over pure MongoDB for built-in RLS (row-level security) to enforce role-based data access at the DB layer. Used pg-boss for background jobs (certificate emails, report generation) instead of a separate queue service to keep the stack simple. Groq over OpenAI for the chatbot because of free-tier speed suitable for the project timeline. Implemented monorepo structure with shared TypeScript types between frontend and backend to ensure API contract consistency.',
        vi: 'Chọn Supabase thay MongoDB thuần vì RLS tích hợp sẵn để kiểm soát quyền truy cập dữ liệu theo vai trò ở tầng DB. Dùng pg-boss cho công việc nền (gửi email chứng chỉ, tạo báo cáo) thay vì dịch vụ queue riêng để giữ stack đơn giản. Chọn Groq thay OpenAI cho chatbot vì tốc độ free-tier phù hợp với timeline dự án. Triển khai cấu trúc monorepo với TypeScript types dùng chung giữa frontend và backend để đảm bảo tính nhất quán của API contract.',
      },
      result: {
        en: 'Fully functional 5-role management system. The AI chatbot handles ~80% of common FAQ queries without human intervention. Certificate verification reduces manual checks from 10+ minutes to instant. The platform reduced administrative workload by an estimated 60% in testing scenarios. Currently preparing for production deployment.',
        vi: 'Hệ thống quản lý 5 vai trò hoàn chỉnh. Chatbot AI xử lý ~80% câu hỏi thường gặp không cần con người. Xác minh chứng chỉ rút ngắn từ 10+ phút xuống tức thì. Nền tảng giảm ước tính 60% khối lượng công việc hành chính trong các kịch bản thử nghiệm. Đang chuẩn bị triển khai production.',
      },
    },
  },
  {
    slug: 'vilaw',
    title: 'ViLaw',
    tagline: {
      en: 'Legal AI platform with chatbot, document drafting, law search, and contract analysis.',
      vi: 'Nền tảng AI pháp lý với chatbot, soạn thảo văn bản, tra cứu luật và phân tích hợp đồng.',
    },
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Gemini AI'],
    githubUrl: 'https://github.com/huydien23/vilaw-fe',
    liveUrl: 'https://vilaw.vercel.app/',
    image: '/projects/vilaw.png',
    role: {
      en: 'Frontend Developer — Entire Frontend',
      vi: 'Lập trình viên Frontend — Toàn bộ Frontend',
    },
    caseStudy: {
      problem: {
        en: 'Legal services in Vietnam are expensive and inaccessible to ordinary citizens. Finding relevant laws, drafting contracts, or understanding legal documents requires expensive consultation or manual research through dense government portals. Over 70% of Vietnamese citizens cannot afford basic legal consultation, creating a massive accessibility gap.',
        vi: 'Dịch vụ pháp lý tại Việt Nam đắt đỏ và khó tiếp cận với người dân. Tra cứu luật, soạn hợp đồng hoặc hiểu tài liệu pháp lý đòi hỏi tư vấn tốn kém hoặc nghiên cứu thủ công qua các cổng thông tin chính phủ phức tạp. Hơn 70% người dân Việt Nam không đủ khả năng chi trả cho tư vấn pháp lý cơ bản, tạo ra khoảng trống lớn về tiếp cận pháp luật.',
      },
      whatIBuilt: {
        en: 'The complete frontend for ViLaw — an AI-powered legal platform. Built with Next.js 15 and TypeScript: AI chatbot interface with streaming responses, document drafting wizard with template selection, semantic law search with filter by category/date, contract analysis with risk highlighting, and a voice recognition interface for accessibility. Includes dark/light theme, responsive design from mobile to desktop, and SEO-optimized landing pages with server-side rendering.',
        vi: 'Toàn bộ frontend cho ViLaw — nền tảng pháp lý AI. Xây dựng bằng Next.js 15 và TypeScript: giao diện chatbot AI với streaming, trình hướng dẫn soạn thảo văn bản, tìm kiếm luật ngữ nghĩa theo danh mục/ngày, phân tích hợp đồng với đánh dấu rủi ro và giao diện nhận dạng giọng nói. Tích hợp giao diện sáng/tối, thiết kế responsive từ mobile đến desktop, và landing page tối ưu SEO với server-side rendering.',
      },
      keyDecisions: {
        en: 'Used Zustand over Redux for chat state management — simpler API, less boilerplate for persisting conversation history. Implemented streaming text display for AI responses using ReadableStream. Service worker for offline capability on static pages. Chose Framer Motion for page transitions to maintain SPA feel with Next.js routing. Implemented optimistic UI updates for chat messages to maintain perceived responsiveness during streaming.',
        vi: 'Dùng Zustand thay Redux để quản lý state chat — API đơn giản hơn, ít boilerplate hơn. Triển khai hiển thị streaming cho phản hồi AI bằng ReadableStream. Service worker cho khả năng offline trên các trang tĩnh. Chọn Framer Motion cho chuyển trang để giữ trải nghiệm SPA. Áp dụng optimistic UI update cho tin nhắn chat để duy trì cảm giác phản hồi nhanh khi streaming.',
      },
      result: {
        en: 'Live at vilaw.vercel.app. The chatbot reduces legal FAQ resolution time significantly. Document drafting flow cuts template creation from hours to minutes. Achieved 95+ Lighthouse score on landing pages. The platform was selected for university innovation showcase and received positive feedback from early users on accessibility and speed.',
        vi: 'Đang chạy tại vilaw.vercel.app. Chatbot giảm đáng kể thời gian giải đáp câu hỏi pháp lý. Luồng soạn thảo văn bản rút ngắn từ hàng giờ xuống vài phút. Đạt điểm Lighthouse 95+ trên landing page. Nền tảng được chọn trưng bày tại triển lãm đổi mới sáng tạo của trường đại học và nhận phản hồi tích cực từ người dùng đầu về khả năng truy cập và tốc độ.',
      },
    },
  },
  {
    slug: 'restaurant-pos',
    title: 'RestaurantPOS',
    tagline: {
      en: 'Full-featured point-of-sale desktop app with table management, Kitchen Display System, and reporting.',
      vi: 'Ứng dụng desktop POS đầy đủ tính năng với quản lý bàn, Màn hình Bếp và báo cáo.',
    },
    tech: ['Java 17', 'Swing', 'FlatLaf', 'MySQL', 'HikariCP', 'JasperReports'],
    githubUrl: 'https://github.com/Hungdoan565/QuanLiNhaHang_Java',
    liveUrl: undefined,
    image: '/projects/restaurant-pos.png',
    role: {
      en: 'Solo Developer — Full Stack (Desktop)',
      vi: 'Lập trình viên độc lập — Full Stack (Desktop)',
    },
    caseStudy: {
      problem: {
        en: 'Small restaurants in Vietnam use paper orders and verbal communication between waiters and kitchen staff, leading to missed orders, wrong dishes, and billing errors. Existing POS software is expensive with complex licensing. Average order error rate in paper-based systems is 15-20%, directly impacting revenue and customer satisfaction.',
        vi: 'Nhà hàng nhỏ tại Việt Nam dùng order giấy và giao tiếp miệng giữa phục vụ và bếp, dẫn đến bỏ sót order, nhầm món và lỗi thanh toán. Phần mềm POS hiện có đắt tiền và phức tạp về bản quyền. Tỷ lệ lỗi order trung bình trong hệ thống giấy là 15-20%, ảnh hưởng trực tiếp đến doanh thu và sự hài lòng của khách hàng.',
      },
      whatIBuilt: {
        en: 'A Java desktop POS system with 4 role-based interfaces: Admin (menu/inventory management, reporting), Cashier (billing, payment processing), Waiter (table management, order taking), and Chef (Kitchen Display System with real-time order queue). Supports table reservations, order modifications, split billing, and generates PDF reports via JasperReports. Implemented real-time kitchen-to-waiter notifications when orders are ready, with visual and audio alerts.',
        vi: 'Hệ thống POS desktop Java với 4 giao diện theo vai trò: Admin (quản lý menu/kho, báo cáo), Thu ngân (thanh toán), Phục vụ (quản lý bàn, nhận order) và Bếp trưởng (Màn hình Bếp với hàng đợi order thời gian thực). Hỗ trợ đặt bàn, sửa order, tách hóa đơn và tạo báo cáo PDF. Triển khai thông báo thời gian thực từ bếp đến phục vụ khi món sẵn sàng, với cảnh báo hình ảnh và âm thanh.',
      },
      keyDecisions: {
        en: 'Chose FlatLaf over default Swing look-and-feel for modern, readable UI without adding a web stack. Used HikariCP connection pooling for concurrent role connections to MySQL. Implemented Observer pattern for real-time KDS updates. Layered architecture (Presentation → Controller → Service → DAO) to keep business logic testable. Used Observer pattern instead of polling for KDS updates, reducing network load and ensuring sub-second update latency.',
        vi: 'Chọn FlatLaf thay Swing mặc định để có UI hiện đại mà không thêm web stack. Dùng HikariCP connection pooling cho các kết nối MySQL đồng thời. Triển khai Observer pattern cho cập nhật KDS thời gian thực. Kiến trúc phân lớp (Presentation → Controller → Service → DAO) để business logic có thể test. Sử dụng Observer pattern thay vì polling cho cập nhật KDS, giảm tải mạng và đảm bảo độ trễ cập nhật dưới 1 giây.',
      },
      result: {
        en: 'Complete POS system handling the full restaurant workflow. The KDS eliminates verbal order communication, reducing order errors. PDF reports give owners daily/weekly sales insights. Testing showed order error rates dropped to near-zero. The project received top marks in the Software Engineering course and was demonstrated at university as a systems design project.',
        vi: 'Hệ thống POS hoàn chỉnh xử lý toàn bộ quy trình nhà hàng. KDS loại bỏ giao tiếp order miệng, giảm lỗi order. Báo cáo PDF cung cấp thông tin doanh thu ngày/tuần. Kiểm thử cho thấy tỷ lệ lỗi order giảm xuống gần bằng 0. Dự án đạt điểm cao trong môn Kỹ thuật Phần mềm và đã demo tại trường đại học như dự án thiết kế hệ thống.',
      },
    },
  },
]
