import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { computed, compute } from 'zustand-computed-state';
import { getBase64, getLocalFiles } from 'utils/file';
import { generateId } from 'utils/object';
import { MAX_LENGTH } from '../consts';

export interface ISelectedImage {
    id: string;
    imageFile: File;
    base64: string;
    selected: boolean;
}

interface IState {
    images: ISelectedImage[];
}

interface IDerivedState {
    selectedCount: number;
}

interface IStore extends IState, IDerivedState {
    selectImage: (id: string) => void;
    addImage: () => void;
}

const initialState: IState = {
    images: [],
};

const useSelectedImageStore = create<IStore>()(
    devtools(
        computed((set, get) => ({
            ...initialState,
            selectImage: (id: string) => {
                set(({ images }) => ({
                    images: images.map((image) => {
                        if (image.id === id) {
                            if (image.selected) {
                                return { ...image, selected: false };
                            } else {
                                if (images.filter((image) => image.selected).length < MAX_LENGTH) {
                                    return { ...image, selected: true };
                                }
                            }
                        }
                        return image;
                    }),
                }));
            },
            addImage: async () => {
                const files = await getLocalFiles();

                const newImages: ISelectedImage[] = await Promise.all(
                    files.map(async (file) => {
                        const id = generateId();
                        const base64 = await getBase64(file);

                        return { id, imageFile: file, base64, selected: false };
                    }),
                );

                set(({ images }) => {
                    newImages.forEach((image, index) => {
                        image.selected = index < MAX_LENGTH - images.length;
                    });

                    return { images: images.concat(newImages) };
                });
            },
            ...compute(get, (state) => ({
                selectedCount: state.images.filter((image) => image.selected).length,
            })),
        })),
    ),
);

export default useSelectedImageStore;
