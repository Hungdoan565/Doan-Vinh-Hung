export interface Testimonial {
  name: string
  role: { en: string; vi: string }
  avatar?: string
  quote: { en: string; vi: string }
  relationship: { en: string; vi: string }
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nguyễn Huy Điền',
    role: { en: 'Team Lead — ViLaw', vi: 'Trưởng nhóm — ViLaw' },
    quote: {
      en: 'Hưng took ownership of the entire frontend and delivered a polished, performant interface ahead of schedule. His attention to UX details and willingness to iterate based on feedback made the collaboration seamless.',
      vi: 'Hưng đảm nhận toàn bộ frontend và mang đến giao diện hoàn thiện, hiệu suất cao trước thời hạn. Sự chú ý đến chi tiết UX và sẵn sàng cải thiện dựa trên phản hồi giúp việc hợp tác rất suôn sẻ.',
    },
    relationship: { en: 'Teammate at ViLaw', vi: 'Đồng đội tại ViLaw' },
  },
  {
    name: 'Trần Minh Khoa',
    role: { en: 'Lecturer — Nam Can Tho University', vi: 'Giảng viên — ĐH Nam Cần Thơ' },
    quote: {
      en: 'One of the most self-driven students I have mentored. Hưng consistently goes beyond course requirements, building real-world projects that demonstrate strong software engineering fundamentals.',
      vi: 'Một trong những sinh viên tự giác nhất tôi từng hướng dẫn. Hưng luôn vượt xa yêu cầu môn học, xây dựng các dự án thực tế thể hiện nền tảng kỹ thuật phần mềm vững chắc.',
    },
    relationship: { en: 'University Mentor', vi: 'Giảng viên hướng dẫn' },
  },
  {
    name: 'Lê Thành Đạt',
    role: { en: 'Backend Developer — ViLaw', vi: 'Lập trình viên Backend — ViLaw' },
    quote: {
      en: 'Working with Hưng on ViLaw was great. He integrated the streaming AI responses flawlessly with our backend APIs and always communicated clearly about frontend requirements.',
      vi: 'Làm việc với Hưng trong dự án ViLaw rất tuyệt. Anh ấy tích hợp phản hồi AI streaming hoàn hảo với API backend và luôn giao tiếp rõ ràng về yêu cầu frontend.',
    },
    relationship: { en: 'Teammate at ViLaw', vi: 'Đồng đội tại ViLaw' },
  },
]
