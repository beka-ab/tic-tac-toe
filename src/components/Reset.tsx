import "./reset.css";

interface ResetProps {
  reset: () => void;
}

const Reset: React.FC<ResetProps> = ({ reset }) => {
  return (
    <>
      <div className="reset-container">
        <button onClick={() => reset()} className="reset-btn">
          Reset
        </button>
      </div>
    </>
  );
};

export default Reset;
