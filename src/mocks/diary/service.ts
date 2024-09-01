import { HttpResponse, delay, type HttpResponseResolver } from 'msw';

interface IDiary {
    id: string;
    content: string;
}

interface IDiaryServiceConfig {
    diaries?: IDiary[];
    delayAmount?: number;
}

class DiaryService {
    private _delayAmount: number;
    private _diaries: IDiary[];

    constructor({ diaries = [], delayAmount = 200 }: IDiaryServiceConfig) {
        this._diaries = diaries;
        this._delayAmount = delayAmount;
    }

    getDiaries: HttpResponseResolver = async () => {
        await delay(this._delayAmount);
        return HttpResponse.json(this._diaries, { status: 200 });
    };

    getDiary: HttpResponseResolver = async ({ params }) => {
        try {
            const { id } = params;

            await delay(this._delayAmount);
            return HttpResponse.json(
                this._diaries.find((diary) => diary.id === id),
                { status: 200 },
            );
        } catch (e) {
            let message = 'Unknown Error';
            if (e instanceof Error) message = e.message;
            return HttpResponse.json({ message }, { status: 400 });
        }
    };

    addDiary: HttpResponseResolver = async ({ request }) => {
        try {
            const { content } = (await request.json()) as { content: string };

            const newDiary = {
                id: String(this._diaries.length + 1),
                content,
                completed: false,
            };
            this._diaries.push(newDiary);

            await delay(this._delayAmount);
            return HttpResponse.json(newDiary, { status: 201 });
        } catch (e) {
            let message = 'Unknown Error';
            if (e instanceof Error) message = e.message;
            return HttpResponse.json({ message }, { status: 400 });
        }
    };

    editDiary: HttpResponseResolver = async ({ request, params }) => {
        try {
            const { id } = params;
            const { content } = (await request.json()) as { content: string };

            const index = this._diaries.findIndex((diary) => diary.id === id);
            this._diaries[index].content = content;

            await delay(this._delayAmount);
            return HttpResponse.json(this._diaries[index], { status: 200 });
        } catch (e) {
            let message = 'Unknown Error';
            if (e instanceof Error) message = e.message;
            return HttpResponse.json({ message }, { status: 400 });
        }
    };

    deleteDiary: HttpResponseResolver = async ({ params }) => {
        try {
            const { id } = params;

            const index = this._diaries.findIndex((diary) => diary.id === id);
            this._diaries.splice(index, 1);

            await delay(this._delayAmount);
            return HttpResponse.json({ status: 200 });
        } catch (e) {
            let message = 'Unknown Error';
            if (e instanceof Error) message = e.message;
            return HttpResponse.json({ message }, { status: 400 });
        }
    };
}

export default DiaryService;
