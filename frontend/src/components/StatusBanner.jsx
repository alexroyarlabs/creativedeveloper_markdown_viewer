const StatusBanner = ({ tone, title, description }) => {
  const toneStyles = {
    info: "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)]",
    error:
      "border-red-200 bg-red-50 text-red-700 shadow-[0_12px_30px_-20px_rgba(239,68,68,0.6)]",
  };
  const descriptionStyles = {
    info: "text-[var(--ink-muted)]",
    error: "text-red-600",
  };

  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-sm shadow-sm ${
        toneStyles[tone] || toneStyles.info
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p className={descriptionStyles[tone] || descriptionStyles.info}>
        {description}
      </p>
    </div>
  );
};

export default StatusBanner;
