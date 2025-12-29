const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? "bg-[var(--ink)] text-[var(--page-bg)] shadow-lg shadow-black/30"
          : "bg-[var(--surface-alt)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      type="button"
    >
      {label}
    </button>
  );
};

export default TabButton;
