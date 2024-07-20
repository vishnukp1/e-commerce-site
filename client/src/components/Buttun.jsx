const CustomButton = ({ content, className }) => {
  return (
      <button className={`font-lato font-normal text-[16px] leading-[40px] tracking-[0.03em] text-left py-2 px-4 rounded ${className}`}>
          {content}
      </button>
  );
};

export default CustomButton