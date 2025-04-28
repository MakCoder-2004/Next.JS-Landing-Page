const FeatureCard = (props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const { title, description, children, className } = props;
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 ">
      <div className={`aspect-video ${className}`}>{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
