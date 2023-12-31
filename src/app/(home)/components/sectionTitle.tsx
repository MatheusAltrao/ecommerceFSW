interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="mb-5 font-semibold uppercase">{title}</h2>;
};

export default SectionTitle;
