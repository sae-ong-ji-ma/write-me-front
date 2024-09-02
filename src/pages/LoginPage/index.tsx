import KaKaoIcon from '@assets/svg/kakao-icon.svg?react';
import LogoIcon from '@assets/svg/logo-icon.svg?react';

const LoginPage = () => {
    return (
        <main className="flex size-full flex-col items-stretch justify-between bg-white">
            <div className="mt-[11.25rem] flex flex-col items-center">
                <LogoIcon width="11.25rem" height="auto" className="text-WRTE-Black" />
                <p className="mt-[.9375rem] text-[1rem] font-medium text-black">AI가 써주는 근사한 일기</p>
            </div>

            <div className="mb-[3.75rem] px-4">
                <button className="flex h-[3.125rem] w-full items-center justify-center gap-[.1875rem] rounded-[.625rem] bg-yellow-300 text-[.875rem] font-semibold">
                    <KaKaoIcon width="1rem" />
                    카카오로 계속하기
                </button>
                <div className="mt-8 flex justify-center gap-[.75rem]">
                    <p className="text-[.875rem] text-WRTE-Light-Gray-800">이메일로 계속하기</p>
                    <div className="h-[.5rem] w-[.0625rem] bg-WRTE-Light-Gray-200" />
                    <p className="text-[.875rem] text-WRTE-Light-Gray-800">이메일로 회원가입</p>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
