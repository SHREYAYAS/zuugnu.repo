import { CareerCategoryContent } from '@/components/CareerCategoryContent';
import { careerCategoryIds } from '@/data/careerCategories';

export const dynamicParams = false;

export function generateStaticParams() {
  return careerCategoryIds.map((id) => ({
    id,
  }));
}

export default async function CareerCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CareerCategoryContent categoryId={id} />;
}