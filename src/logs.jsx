const Logs = ({ logs }) => {
  return (
    <>
      <h3 className="logTitle">記録</h3>
      <ul className="logList">
        {logs.map((log, index) => (
          <li className="logItem" key={index}>{log.date} - {log.time}</li>
        ))}
      </ul>
    </>
  );
};

export default Logs;
