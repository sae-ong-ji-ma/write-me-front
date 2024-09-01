import { useState } from 'react';
import { getBase64, getLocalFiles } from 'utils/file';
import { generateId } from 'utils/object';

export interface ISelectedImage {
    id: string;
    imageFile: File;
    base64: string;
    selected: boolean;
}

interface IUseSelectImageProps {
    maxLength: number;
}

export const useSelectImage = ({ maxLength }: IUseSelectImageProps) => {
    const [images, setImages] = useState<ISelectedImage[]>([]);
    const selectedCount = images.filter((image) => image.selected).length;

    const addImage = async () => {
        const files = await getLocalFiles();

        const newImages: ISelectedImage[] = await Promise.all(
            files.map(async (file) => {
                const id = generateId();
                const base64 = await getBase64(file);

                return { id, imageFile: file, base64, selected: false };
            }),
        );

        newImages.forEach((image, index) => {
            image.selected = index < maxLength - images.length;
        });

        setImages(images.concat(newImages));
    };

    const selectImage = (id: string) => {
        setImages(
            images.map((image) => {
                if (image.id === id) {
                    if (image.selected) {
                        return { ...image, selected: false };
                    } else {
                        if (selectedCount < maxLength) {
                            return { ...image, selected: true };
                        }
                    }
                }
                return image;
            }),
        );
    };

    return {
        state: { images, selectedCount },
        actions: { addImage, selectImage },
    };
};
