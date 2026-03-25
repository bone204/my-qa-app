export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishDate: string;
  image: string;
  viewCount: number;
  category: string;
  readingTime: string;
  tags: string[];
}

export type BlogCategory = 'Technology' | 'Design' | 'Business' | 'Tutorial';

export const BLOG_POSTS: BlogPost[] = [
  {
    "id": "1",
    "title": "Tương lai của Trí tuệ nhân tạo trong phát triển Phần mềm 2026",
    "description": "Khám phá cách AI đang thay đổi cách chúng ta viết code, kiểm thử và vận hành các hệ thống phần mềm phức tạp.",
    "content": "Nội dung chi tiết bài viết về AI...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-03-24",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1250,
    "category": "Technology",
    "readingTime": "5 phút",
    "tags": [
      "AI",
      "Tech Trends",
      "Development"
    ]
  },
  {
    "id": "2",
    "title": "10 Xu hướng thiết kế UI/UX bứt phá trong năm tới",
    "description": "Từ thiết kế không gian cho đến giao diện giọng nói, hãy cùng điểm qua những xu hướng sẽ định hình trải nghiệm người dùng.",
    "content": "Nội dung chi tiết bài viết về Design...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-03-22",
    "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    "viewCount": 840,
    "category": "Design",
    "readingTime": "8 phút",
    "tags": [
      "UI/UX",
      "Design",
      "Trends"
    ]
  },
  {
    "id": "3",
    "title": "Làm thế nào để xây dựng đội ngũ kỹ thuật hiệu suất cao từ xa",
    "description": "Những bài học xương máu trong việc quản lý và duy trì văn hóa làm việc của các nhóm kỹ sư phân tán khắp toàn cầu.",
    "content": "Nội dung chi tiết bài viết về Business...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-20",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2100,
    "category": "Business",
    "readingTime": "12 phút",
    "tags": [
      "Management",
      "Remote Work",
      "Culture"
    ]
  },
  {
    "id": "4",
    "title": "Tại sao Next.js vẫn là lựa chọn hàng đầu cho các dự án Enterprise?",
    "description": "Phân tích sức mạnh mãnh mẽ của Next.js App Router, Server Components và khả năng mở rộng không giới hạn.",
    "content": "Nội dung chi tiết bài viết về Next.js...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-03-18",
    "image": "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop",
    "viewCount": 3400,
    "category": "Technology",
    "readingTime": "10 phút",
    "tags": [
      "Next.js",
      "React",
      "Frontend"
    ]
  },
  {
    "id": "5",
    "title": "Clean Code: Viết mã vì con người, không chỉ vì máy tính",
    "description": "Nghệ thuật viết mã sạch và tại sao nó quan trọng hơn việc chạy đúng trong sự phát triển lâu dài của dự án.",
    "content": "Nội dung chi tiết bài viết về Clean Code...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-03-15",
    "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    "viewCount": 1560,
    "category": "Tutorial",
    "readingTime": "15 phút",
    "tags": [
      "Clean Code",
      "Coding Standard",
      "Development"
    ]
  },
  {
    "id": "6",
    "title": "Tối ưu hóa chi phí vận hành Cloud cho các Startup",
    "description": "Chiến lược quản lý chi phí AWS/Azure hiệu quả mà không làm ảnh hưởng đến hiệu suất và khả năng mở rộng.",
    "content": "Nội dung chi tiết bài viết về Cloud...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-03-12",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 920,
    "category": "Business",
    "readingTime": "7 phút",
    "tags": [
      "Cloud",
      "AWS",
      "Cost Optimization"
    ]
  },
  {
    "id": "7",
    "title": "Git Best Practices cho Team - Part 7",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Git Best Practices cho Team số 7...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-03-04",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 4521,
    "category": "Design",
    "readingTime": "7 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "8",
    "title": "Cloud Native: Định nghĩa và thực thi - Part 8",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Cloud Native: Định nghĩa và thực thi số 8...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-07",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 2012,
    "category": "Business",
    "readingTime": "4 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "9",
    "title": "Phát triển ứng dụng Mobile với Flutter - Part 9",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Phát triển ứng dụng Mobile với Flutter số 9...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-02-27",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4787,
    "category": "Tutorial",
    "readingTime": "6 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "10",
    "title": "Sử dụng Tailwind CSS hiệu quả - Part 10",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sử dụng Tailwind CSS hiệu quả số 10...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-05",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4727,
    "category": "Design",
    "readingTime": "3 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "11",
    "title": "Phát triển ứng dụng Mobile với Flutter - Part 11",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Phát triển ứng dụng Mobile với Flutter số 11...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-06",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 1893,
    "category": "Business",
    "readingTime": "16 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "12",
    "title": "Tìm hiểu về kiến trúc Microservices - Part 12",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Tìm hiểu về kiến trúc Microservices số 12...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-01-26",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1306,
    "category": "Technology",
    "readingTime": "6 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "13",
    "title": "Cách tối ưu hóa hiệu năng ứng dụng Next.js - Part 13",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Cách tối ưu hóa hiệu năng ứng dụng Next.js số 13...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-03-03",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 3922,
    "category": "Technology",
    "readingTime": "6 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "14",
    "title": "API Design: RESTful vs GraphQL - Part 14",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 14...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-21",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 1722,
    "category": "Design",
    "readingTime": "3 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "15",
    "title": "Giao diện tối giản: Xu hướng không bao giờ lỗi thời - Part 15",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Giao diện tối giản: Xu hướng không bao giờ lỗi thời số 15...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-03-02",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 3189,
    "category": "Business",
    "readingTime": "13 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "16",
    "title": "Kỹ thuật Refactoring mã nguồn - Part 16",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Kỹ thuật Refactoring mã nguồn số 16...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-01-05",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2786,
    "category": "Technology",
    "readingTime": "3 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "17",
    "title": "Quản lý dự án Agile cho các nhóm nhỏ - Part 17",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Quản lý dự án Agile cho các nhóm nhỏ số 17...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-02-02",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 2314,
    "category": "Business",
    "readingTime": "7 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "18",
    "title": "Tối ưu hình ảnh cho Web - Part 18",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Tối ưu hình ảnh cho Web số 18...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-05",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 890,
    "category": "Business",
    "readingTime": "3 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "19",
    "title": "Cách tối ưu hóa hiệu năng ứng dụng Next.js - Part 19",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Cách tối ưu hóa hiệu năng ứng dụng Next.js số 19...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-02-04",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 1250,
    "category": "Design",
    "readingTime": "7 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "20",
    "title": "Quản lý dự án Agile cho các nhóm nhỏ - Part 20",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Quản lý dự án Agile cho các nhóm nhỏ số 20...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-02-18",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 3447,
    "category": "Tutorial",
    "readingTime": "3 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "21",
    "title": "Sử dụng Docker trong phát triển - Part 21",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sử dụng Docker trong phát triển số 21...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-01-10",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 3671,
    "category": "Design",
    "readingTime": "11 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "22",
    "title": "Tương lai của Web3 và AI - Part 22",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Tương lai của Web3 và AI số 22...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-18",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4957,
    "category": "Business",
    "readingTime": "13 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "23",
    "title": "Git Best Practices cho Team - Part 23",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Git Best Practices cho Team số 23...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-01-22",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 4843,
    "category": "Tutorial",
    "readingTime": "16 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "24",
    "title": "Phát triển ứng dụng Mobile với Flutter - Part 24",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Phát triển ứng dụng Mobile với Flutter số 24...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-16",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1600,
    "category": "Technology",
    "readingTime": "13 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "25",
    "title": "Xây dựng Documentation chất lượng - Part 25",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Xây dựng Documentation chất lượng số 25...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-02-10",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4133,
    "category": "Tutorial",
    "readingTime": "8 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "26",
    "title": "Văn hóa Engineering tại các Startup - Part 26",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Văn hóa Engineering tại các Startup số 26...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2252,
    "category": "Technology",
    "readingTime": "15 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "27",
    "title": "API Design: RESTful vs GraphQL - Part 27",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 27...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-03-28",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 4674,
    "category": "Tutorial",
    "readingTime": "9 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "28",
    "title": "Thiết kế Responsive: Không chỉ là Mobile - Part 28",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Thiết kế Responsive: Không chỉ là Mobile số 28...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-01-26",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 5059,
    "category": "Tutorial",
    "readingTime": "9 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "29",
    "title": "Sử dụng Docker trong phát triển - Part 29",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sử dụng Docker trong phát triển số 29...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-03-03",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 101,
    "category": "Tutorial",
    "readingTime": "15 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "30",
    "title": "Xây dựng Documentation chất lượng - Part 30",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Xây dựng Documentation chất lượng số 30...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-02-26",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2637,
    "category": "Tutorial",
    "readingTime": "10 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "31",
    "title": "Lộ trình học Web Development năm 2026 - Part 31",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Lộ trình học Web Development năm 2026 số 31...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-07",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1943,
    "category": "Business",
    "readingTime": "6 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "32",
    "title": "Phát triển ứng dụng Mobile với Flutter - Part 32",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Phát triển ứng dụng Mobile với Flutter số 32...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 3077,
    "category": "Tutorial",
    "readingTime": "6 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "33",
    "title": "Quản lý dự án Agile cho các nhóm nhỏ - Part 33",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Quản lý dự án Agile cho các nhóm nhỏ số 33...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-02-12",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 3742,
    "category": "Technology",
    "readingTime": "12 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "34",
    "title": "Văn hóa Engineering tại các Startup - Part 34",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Văn hóa Engineering tại các Startup số 34...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-02-02",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 256,
    "category": "Technology",
    "readingTime": "14 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "35",
    "title": "API Design: RESTful vs GraphQL - Part 35",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 35...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-09",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 1419,
    "category": "Tutorial",
    "readingTime": "17 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "36",
    "title": "API Design: RESTful vs GraphQL - Part 36",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 36...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-01-24",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2759,
    "category": "Business",
    "readingTime": "11 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "37",
    "title": "Startup và những sai lầm thường gặp - Part 37",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Startup và những sai lầm thường gặp số 37...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-02-12",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2538,
    "category": "Design",
    "readingTime": "11 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "38",
    "title": "Văn hóa Engineering tại các Startup - Part 38",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Văn hóa Engineering tại các Startup số 38...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-02-12",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 2117,
    "category": "Design",
    "readingTime": "17 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "39",
    "title": "Viết Unit Test hiệu quả với Jest - Part 39",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Viết Unit Test hiệu quả với Jest số 39...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-01-25",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 615,
    "category": "Design",
    "readingTime": "8 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "40",
    "title": "Giao diện tối giản: Xu hướng không bao giờ lỗi thời - Part 40",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Giao diện tối giản: Xu hướng không bao giờ lỗi thời số 40...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-03-13",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 2416,
    "category": "Design",
    "readingTime": "16 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "41",
    "title": "Quản lý State trong React - Part 41",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Quản lý State trong React số 41...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-12",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4444,
    "category": "Technology",
    "readingTime": "16 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "42",
    "title": "Giao diện tối giản: Xu hướng không bao giờ lỗi thời - Part 42",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Giao diện tối giản: Xu hướng không bao giờ lỗi thời số 42...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-03-04",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1824,
    "category": "Business",
    "readingTime": "16 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "43",
    "title": "Serverless Computing là gì? - Part 43",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Serverless Computing là gì? số 43...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-01-17",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 3704,
    "category": "Technology",
    "readingTime": "3 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "44",
    "title": "Viết Unit Test hiệu quả với Jest - Part 44",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Viết Unit Test hiệu quả với Jest số 44...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-01-02",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4512,
    "category": "Tutorial",
    "readingTime": "5 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "45",
    "title": "API Design: RESTful vs GraphQL - Part 45",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 45...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-28",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 2649,
    "category": "Tutorial",
    "readingTime": "5 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "46",
    "title": "API Design: RESTful vs GraphQL - Part 46",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết API Design: RESTful vs GraphQL số 46...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-02-17",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4474,
    "category": "Business",
    "readingTime": "4 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "47",
    "title": "Sức mạnh của TypeScript trong dự án lớn - Part 47",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sức mạnh của TypeScript trong dự án lớn số 47...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-03-22",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1762,
    "category": "Business",
    "readingTime": "16 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "48",
    "title": "Kỹ năng phỏng vấn Lập trình viên - Part 48",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Kỹ năng phỏng vấn Lập trình viên số 48...",
    "authorName": "Đức Huy",
    "authorRole": "Project Manager @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=3",
    "publishDate": "2026-01-20",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 745,
    "category": "Design",
    "readingTime": "7 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "49",
    "title": "Bảo mật ứng dụng Node.js của bạn - Part 49",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Bảo mật ứng dụng Node.js của bạn số 49...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-03-27",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 4472,
    "category": "Technology",
    "readingTime": "4 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "50",
    "title": "Kỹ thuật Refactoring mã nguồn - Part 50",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Kỹ thuật Refactoring mã nguồn số 50...",
    "authorName": "Thanh Hà",
    "authorRole": "Software Architect @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=5",
    "publishDate": "2026-02-10",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 1208,
    "category": "Tutorial",
    "readingTime": "9 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "51",
    "title": "Cách tối ưu hóa hiệu năng ứng dụng Next.js - Part 51",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Cách tối ưu hóa hiệu năng ứng dụng Next.js số 51...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-01-06",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1785,
    "category": "Business",
    "readingTime": "8 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "52",
    "title": "Sử dụng Tailwind CSS hiệu quả - Part 52",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sử dụng Tailwind CSS hiệu quả số 52...",
    "authorName": "Hoàng Long",
    "authorRole": "Senior Developer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=4",
    "publishDate": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 1825,
    "category": "Technology",
    "readingTime": "14 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "53",
    "title": "Sử dụng Tailwind CSS hiệu quả - Part 53",
    "description": "Khám phá các khía cạnh chuyên sâu về business và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Sử dụng Tailwind CSS hiệu quả số 53...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-02-20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 223,
    "category": "Business",
    "readingTime": "6 phút",
    "tags": [
      "Business",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "54",
    "title": "Xây dựng Documentation chất lượng - Part 54",
    "description": "Khám phá các khía cạnh chuyên sâu về tutorial và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Xây dựng Documentation chất lượng số 54...",
    "authorName": "Minh Anh",
    "authorRole": "Lead Designer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=2",
    "publishDate": "2026-03-03",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "viewCount": 4596,
    "category": "Tutorial",
    "readingTime": "14 phút",
    "tags": [
      "Tutorial",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "55",
    "title": "Serverless Computing là gì? - Part 55",
    "description": "Khám phá các khía cạnh chuyên sâu về design và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Serverless Computing là gì? số 55...",
    "authorName": "Quý Khánh",
    "authorRole": "CTO @ QKIT Software",
    "authorAvatar": "https://i.pravatar.cc/150?u=1",
    "publishDate": "2026-02-16",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    "viewCount": 141,
    "category": "Design",
    "readingTime": "6 phút",
    "tags": [
      "Design",
      "Expansion",
      "2026"
    ]
  },
  {
    "id": "56",
    "title": "Tối ưu hóa SEO cho ứng dụng React - Part 56",
    "description": "Khám phá các khía cạnh chuyên sâu về technology và tầm ảnh hưởng của nó trong tương lai công nghiệp phần mềm năm 2026.",
    "content": "Nội dung chi tiết cho bài viết Tối ưu hóa SEO cho ứng dụng React số 56...",
    "authorName": "Quốc Bảo",
    "authorRole": "DevOps Engineer @ QKIT",
    "authorAvatar": "https://i.pravatar.cc/150?u=6",
    "publishDate": "2026-01-03",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "viewCount": 1325,
    "category": "Technology",
    "readingTime": "12 phút",
    "tags": [
      "Technology",
      "Expansion",
      "2026"
    ]
  }
];
