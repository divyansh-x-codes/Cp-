interface TitlePillProps {
  title: string;
}

const TitlePill = ({ title }: TitlePillProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div
        className="px-10 py-3 rounded-full bg-primary text-primary-foreground font-heading text-xl md:text-2xl font-semibold tracking-wide border-2 border-secondary shadow-lg"
        style={{
          boxShadow: "0 8px 32px hsla(0, 53%, 23%, 0.25), 0 2px 8px hsla(43, 50%, 54%, 0.15)",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default TitlePill;
