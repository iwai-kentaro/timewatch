import { useState, useEffect } from 'react';
import { formatTime } from './utils/utils';

const Time = ({ isActive, reset, onTimeUpdate, onResetComplete }) => {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(null); // タイマー開始時の基準時間を保持

    useEffect(() => {
        let interval;
        if (isActive) {
            // タイマーが動いていない場合のみ開始時間を設定
            if (startTime === null) {
                setStartTime(Date.now() - time); // 経過時間も考慮してスタート時間を設定
            }
            interval = setInterval(() => {
                const currentTime = Date.now() - startTime;
                setTime(currentTime); // 経過時間をミリ秒単位で計算
                onTimeUpdate(currentTime); // 親コンポーネントに現在の時間を通知
            }, 10); // 10ミリ秒ごとに更新
        } else {
            setStartTime(null); // タイマーが停止されたらスタート時間をリセット
        }
        return () => clearInterval(interval);
    }, [isActive, startTime, time, onTimeUpdate]);

    useEffect(() => {
        if (reset) {
            setTime(0);
            onTimeUpdate(0); // リセット時に親コンポーネントにも通知
            onResetComplete();
        }
    }, [reset, onTimeUpdate, onResetComplete]);



    return (
        <div className='timeBox'>
            <h3 className='time'>
                {formatTime(time)}
            </h3>
        </div>
    );
};

export default Time;
