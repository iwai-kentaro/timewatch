import { useState, useEffect } from 'react';
import Time from './Time'; // Timeコンポーネントのインポート
import Logs from './logs';
import Controls from './controls';
import { formatTimes } from './utils/utils';
export default function App() {
    const [isActive, setIsActive] = useState(false);
    const [reset, setReset] = useState(false);
    const [logs, setLogs] = useState(() => {
        // 初回レンダリング時にローカルストレージからログを読み込む
        const savedLogs = localStorage.getItem('logs');
        return savedLogs ? JSON.parse(savedLogs) : []; 
    });
    const [currentTime, setCurrentTime] = useState(0); // 現在のタイムを保持
    
    const getFormattedDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    
    

    useEffect(() => {
        // logs が変更されるたびにローカルストレージに保存
        if (logs.length === 0) {
            localStorage.removeItem('logs'); // ログが空のときは削除
        } else {
            localStorage.setItem('logs', JSON.stringify(logs)); // ログがあるときは保存
        }
    }, [logs]);


    const handleStartStop = () => {
        setIsActive((prev) => !prev);
    };

    const handleReset = () => {
        setIsActive(false);
        setReset(true);
    };

    const handleResetComplete = () => {
        setReset(false); // リセットが完了したらフラグを戻す
    };

    // ログのリセット
    const handleResetLogs = () => {
        setLogs([]); // logs を空の配列にする
        // ローカルストレージの削除は useEffect で行うため不要
    };



    // 時間をフォーマットしてログに保存
    const handleLog = () => {
        const formattedDate = getFormattedDate(); // 現在の日付を取得
        const formattedTime = formatTimes(currentTime); // ミリ秒をフォーマットして時間に変換
        setLogs((prevLogs) => [{ date: formattedDate, time: formattedTime }, ...prevLogs]); // 日付と時間をオブジェクトで保存
    };



    return (
        <div className='inner'>
            <h1 className="title">ストップウォッチ</h1>
            <Time 
            isActive={isActive} 
            reset={reset} 
            onTimeUpdate={setCurrentTime}
            onResetComplete={handleResetComplete} 
            />
            <Controls 
            isActive={isActive}
            handleStartStop={handleStartStop}
            handleReset={handleReset}
            handleLog={handleLog}
            handleResetLogs={handleResetLogs}
            />
            <Logs logs={logs} />
        </div>
    );
}
