import { useNavigate } from 'react-router';
import Button from '@components/Button';
import Header from '@components/Header';
import { TSteps } from '../conts';

interface Diary {
    thumbnail: string;
    title: string;
    date: string;
}

const DiaryCard: React.FC<Diary> = ({ thumbnail, title }) => {
    return (
        <div className="size-full">
            <img alt="" src={thumbnail} className="w-full rounded-[.625rem] object-cover object-center" />
            <p className="mt-[.625rem] text-[1.125rem] font-bold text-gray-800">{title}</p>
            <p className="mt-[.125rem] text-[.75rem] font-medium text-gray-400">4시간 전</p>
        </div>
    );
};

const OtherDiaries = () => {
    return (
        <div className="grid grid-cols-2 gap-[.625rem]">
            {Array.from({ length: 4 }).map((_, index) => (
                <DiaryCard
                    key={index}
                    date="2021.09.01"
                    thumbnail="https://github.com/user-attachments/assets/95b1748d-7368-431b-9456-e31b7e4735b4"
                    title="오늘의 일기, "
                />
            ))}
        </div>
    );
};

interface ICompletePageProps {
    changeStep: (step: TSteps) => void;
}

const CompletePage: React.FC<ICompletePageProps> = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    };

    return (
        <main className="flex size-full flex-col">
            <Header />
            <div className="flex-1 pb-20 pt-10">
                <h1 className="ml-4 mt-4 text-[1.25rem] font-bold text-gray-800">
                    24시간 이내로 완성된 일기를
                    <br />
                    보내드릴게요
                </h1>
                <div className="flex h-[19.6875rem] items-center justify-center">
                    <div className="size-40 rounded-[.25rem] bg-[#D9D9D9]"></div>
                </div>
                <hr className="h-[.625rem] bg-[#EDEDED]" />
                <div className="mx-4 mt-6">
                    <div className="mb-6 flex items-start justify-between">
                        <h1 className="text-[1.25rem] font-bold text-gray-800">
                            기다리는 동안 다른 사람 일기
                            <br />
                            구경할까요?
                        </h1>
                        <div onClick={handleClickBack} className="ml-4 flex h-10 items-center text-[1.5rem]">
                            {'->'}
                        </div>
                    </div>
                    <OtherDiaries />
                </div>
                <Button className="fixed bottom-5 mx-5 h-12 w-[calc(100%-2.5rem)] rounded-[.625rem] font-bold">
                    확인
                </Button>
            </div>
        </main>
    );
};

export default CompletePage;
