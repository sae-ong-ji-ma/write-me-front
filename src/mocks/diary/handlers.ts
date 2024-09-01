import { http } from 'msw';
import { diaries } from './data';
import DiaryService from './service';

export const todoHandlers = ({ delayAmount }: { delayAmount?: number }) => {
    const service = new DiaryService({ diaries, delayAmount });

    return [
        http.get('/diary', service.getDiaries),
        http.post('/diary', service.addDiary),
        http.get('/diary/:id', service.getDiary),
        http.patch('/diary/:id', service.editDiary),
        http.delete('/diary/:id', service.deleteDiary),
    ];
};
