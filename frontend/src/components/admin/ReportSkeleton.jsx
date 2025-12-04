// Simple placeholder rows while reports are loading.
export default function ReportSkeleton({ rows = 4 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, idx) => (
        <div
          key={idx}
          className="h-12 w-full rounded-lg bg-slate-100 animate-pulse"
        />
      ))}
    </div>
  );
}
