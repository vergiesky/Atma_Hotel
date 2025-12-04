export default function ProfileHeader({
  eyebrow = "Akun & Keamanan",
  title = "Profil Saya",
  description,
}) {
  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col gap-1">
      <p className="text-xs uppercase tracking-[0.08em] text-blue-600 font-semibold">
        {eyebrow}
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
      {description ? (
        <p className="text-sm text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}
