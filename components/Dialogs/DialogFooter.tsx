type DialogFooterProps = {
  label: string;
  actionLabel: string;
  actionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const DialogFooter = ({
  label,
  actionLabel,
  actionClick,
}: DialogFooterProps) => {
  return (
    <div className="text-center  text-[black]/60 mt-4 mb-2 text-[12px]">
      {label}{" "}
      <button
        className="text-primary-90 font-semibold cursor-pointer"
        onClick={actionClick}
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default DialogFooter;
