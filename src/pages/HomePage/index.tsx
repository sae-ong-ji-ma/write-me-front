import CameraIcon from '@assets/svg/camera-icon.svg?react';

const HomePage = () => {
    return (
        <main className="flex size-full flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <CameraIcon width="8.9375rem" />
                <p className="mt-5 text-[1.5rem] font-bold text-gray-800">
                    사진만 올리면
                    <br />
                    오늘 일기 완성!
                </p>
                <p className="mt-[.625rem] text-[1rem] text-gray-400">일기 신청까지 딱 10초 걸려요</p>
            </div>
        </main>
    );
};

export default HomePage;
