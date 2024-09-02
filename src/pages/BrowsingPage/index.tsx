const PostItem = () => {
    return (
        <div className="flex w-full flex-col overflow-hidden">
            <div className="flex items-center gap-[.375rem]">
                <img src="" className="size-[1.875rem] rounded-full bg-WRTE-Light-Gray-200" />
                <p>닉네임</p>
            </div>

            <div className="mt-[.625rem] flex gap-2.5 overflow-x-scroll scrollbar-hide">
                <div className="size-[18.75rem] shrink-0 rounded-2xl bg-WRTE-Light-Gray-200"></div>
                <div className="size-[18.75rem] shrink-0 rounded-2xl bg-WRTE-Light-Gray-200"></div>
            </div>

            <h2 className="mt-5 text-[1.25rem] font-semibold text-WRTE-Light-Gray-800">
                제목 최대 1줄입니다 제목 최대 1줄입니다
            </h2>
            <p className="mt-[.625rem] line-clamp-3 overflow-hidden text-ellipsis break-words text-base font-medium text-WRTE-Light-Gray-800">
                홈에서 본문 노출 최대 3줄로 120자 이하로 노출됩니다. 홈에서 본문 노출 최대 3줄로 120자 이하로
                노출됩니다. 홈에서 본문 노출 최대 3줄로 120자 이하로 노출됩니다. 홈에서 본문
            </p>

            <p className="mt-[.625rem] text-[.875rem] font-medium text-WRTE-Light-Gray-600">07.07.수</p>
        </div>
    );
};

const PostList = () => {
    return (
        <div className="flex size-full flex-col gap-9">
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
};

const BrowsingPage = () => {
    return (
        <main className="flex size-full flex-col items-center justify-center pb-[6.25rem] pl-4 pt-5">
            <PostList />
        </main>
    );
};

export default BrowsingPage;
