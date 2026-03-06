import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; 

// 1. API GET: Trả về danh sách thể loại cho Frontend
export async function GET() {
  try {
    // Dùng Prisma để lấy toàn bộ data từ bảng 'Category' trong PostgreSQL
    const categories = await prisma.category.findMany(); 
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi lấy dữ liệu" }, { status: 500 });
  }
}

// 2. API POST: Nhận dữ liệu từ Frontend và lưu vào Database
export async function POST(request: Request) {
  try {
    // Đọc cục data mà Frontend gửi lên (chính là biến body trong fetch)
    const body = await request.json();
    
    // Dùng Prisma để tạo 1 dòng mới trong bảng 'Category'
    const newCategory = await prisma.category.create({
      data: { 
        name: body.name 
      }
    });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi thêm dữ liệu" }, { status: 500 });
  }
}