    // ミリ秒を hh:mm:ss 形式に変換する関数
export const formatTime = (time) => {
        const totalSeconds = Math.floor(time / 1000); // 秒単位に変換
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0'); // ミリ秒を2桁に整形
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };


        // ミリ秒を 00時間00分00秒00 形式に変換する関数
        export const formatTimes = (time) => {
            const totalSeconds = Math.floor(time / 1000); // 秒単位に変換
            const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(totalSeconds % 60).padStart(2, '0');
            const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0'); // 100分の1秒単位で表示
            return `${hours}時間${minutes}分${seconds}秒${milliseconds}`;
        };