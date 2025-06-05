export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Search: {query}</h1>
      {/* Контент головної сторінки */}
    </div>
  );
}
