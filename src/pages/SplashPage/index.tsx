import LogoWhite from '@assets/svg/logo-white.svg?react';

const SplashPage = () => {
    return (
        <main className="flex size-full flex-col items-center justify-center bg-WRTE-Light-Gray-900">
            <div className="flex flex-col items-center">
                <LogoWhite width="11.25rem" height="auto" />
                <p className="mt-[.9375rem] text-[1rem] font-medium text-white">AI가 써주는 근사한 일기</p>
            </div>
        </main>
    );
};

export default SplashPage;
