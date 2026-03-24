import ReviewsHero from "@/app/reviews/_sections/ReviewsHero";

export const metadata = {
  title: "Phản hồi Khách hàng | QKIT Software",
  description: "Khám phá những trải nghiệm thực tế từ các đối tác đã tin tưởng và hợp tác cùng QKIT Software.",
};

export default function ReviewsPage() {
  return (
    <main className="flex w-full flex-col overflow-hidden min-h-screen">
      <ReviewsHero />
    </main>
  );
}
