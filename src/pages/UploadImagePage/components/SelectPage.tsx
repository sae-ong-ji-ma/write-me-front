import { memo } from 'react';
import { useNavigate } from 'react-router';
import Button from '@components/Button';
import { STEPS, TSteps } from '../conts';
import { ISelectedImage, useSelectImage } from '../hooks/useSelectImage';
import { Grid, GridItem } from './Grid';

const MIN_LENGTH = 3;
const MAX_LENGTH = 10;

interface IArrangePageProps {
    changeStep: (step: TSteps) => void;
}

interface IImageComponentProps {
    image: ISelectedImage;
    order?: number;
    onClick: (id: string) => void;
}

const ImageComponent = ({ image, order, onClick }: IImageComponentProps) => {
    return (
        <div className="relative size-full" onClick={() => onClick(image.id)}>
            <img
                className={`size-full rounded-2xl border-[.15rem] object-cover ${image.selected ? 'border-WRTE-Blue-300' : 'border-transparent'}`}
                src={image.base64}
                alt={image.imageFile.name}
            />
            {order !== undefined ? (
                <div className="absolute right-[.5rem] top-[.5rem] flex size-5 items-center justify-center rounded-full bg-WRTE-Blue-300 text-[.75rem] font-medium text-white">
                    {order}
                </div>
            ) : null}
        </div>
    );
};

const ArrangePage: React.FC<IArrangePageProps> = ({ changeStep }) => {
    const {
        state: { images, selectedCount },
        actions: { addImage, selectImage },
    } = useSelectImage({ maxLength: MAX_LENGTH });

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    };

    return (
        <main className="flex size-full flex-col items-stretch">
            <div onClick={handleClickBack} className="ml-4 flex h-10 items-center text-[1.5rem]">
                {'<-'}
            </div>
            <h1 className="ml-5 mt-[.625rem] text-[1.5rem] font-bold text-gray-800">
                사진을 최소 {MIN_LENGTH}장부터 최대 {MAX_LENGTH}장까지
                <br />
                선택해주세요.
            </h1>
            <h2 className="ml-5 mt-[.25rem] text-[1rem] font-medium text-gray-400">선택한 순서로 일기가 완성돼요</h2>

            <div className="mt-10 flex flex-col items-center gap-[.375rem] px-4">
                <div className="flex h-11 w-full items-center justify-center rounded-[2rem] border-[.0625rem] border-[#D2D2D2] text-[1.1875rem] font-medium text-[#919BA9]">
                    선택한 사진 {selectedCount}/{MAX_LENGTH}
                </div>
                <p className="text-[.75rem] font-medium text-[#777777]">최대 {MAX_LENGTH}개까지 등록할 수 있습니다.</p>
            </div>

            <div className="mt-5 flex-1 overflow-scroll">
                <Grid>
                    <GridItem className="flex items-center justify-center rounded-2xl bg-[#D9D9D9]">
                        <button className="relative size-full" onClick={addImage}>
                            <div className="absolute h-8 w-[.25rem] rounded-[1.25rem] bg-white absolute-center" />
                            <div className="absolute h-[.25rem] w-8 rounded-[1.25rem] bg-white absolute-center" />
                        </button>
                    </GridItem>
                    {images
                        .sort((a, b) => (a.selected === b.selected ? 0 : a.selected ? -1 : 1))
                        .map((image, index) => (
                            <GridItem key={image.id}>
                                <ImageComponent
                                    image={image}
                                    onClick={selectImage}
                                    order={image.selected ? index + 1 : undefined}
                                />
                            </GridItem>
                        ))}
                </Grid>
            </div>

            <Button
                className="fixed bottom-5 mx-5 h-12 w-[calc(100%-2.5rem)] rounded-[.625rem] font-bold"
                onClick={() => changeStep(STEPS.COMPLETE)}
            >
                일기 만들기
            </Button>
        </main>
    );
};

export default memo(ArrangePage);
