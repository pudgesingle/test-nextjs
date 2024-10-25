const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className="bg-gray-200 rounded-full h-3">
      <div
        className={`bg-[#A8AD00] h-3 rounded-full ${
          percent === 0
            ? "w-0"
            : percent === 10
            ? "w-[10%]"
            : percent === 40
            ? "w-[40%]"
            : "w-[80%]"
        }`}
      />
    </div>
  );
};

export default ProgressBar;
