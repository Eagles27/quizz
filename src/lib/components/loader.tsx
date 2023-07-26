const Loader: React.FC = () => {
  const keyframesStyle = `
    @keyframes ct7 {
      100% {background-position: right -25% top 0}
    }
  `;
  return (
    <div
      className="custom-loader"
      style={{
        width: "120px",
        height: "20px",
        WebkitMask: "linear-gradient(90deg,#FFF 70%,#0000 0) left/20% 100%",
        background: `
          linear-gradient(#FFF 0 0) left -25% top 0 /20% 100% no-repeat
          #E4E4ED
        `,
        animation: "ct7 3s infinite steps(6)",
      }}
    >
      <style>{keyframesStyle}</style>
    </div>
  );
};

export default Loader;
