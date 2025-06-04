export default function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query || "";
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Search: {query}</h1>
      {/* Контент головної сторінки */}
    </div>
  );
}
