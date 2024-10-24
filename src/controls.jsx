const Controls = ({ isActive, handleStartStop, handleReset, handleLog, handleResetLogs }) => {
  return (
    <div  className="buttonBox">
      <button onClick={handleStartStop} className="button">
        {isActive ? "ストップ" : "スタート"}
      </button>
      <button onClick={handleReset} className="button">リセット</button>
      <button onClick={handleLog} className="button">記録</button>
      <button onClick={handleResetLogs} className="button">削除</button>
    </div>
  );
};

export default Controls;
