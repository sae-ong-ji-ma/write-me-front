export const getLocalFiles = async (): Promise<File[]> => {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (e) => {
            const files = (e.target as HTMLInputElement)?.files;

            if (files) {
                const fileList = Array.from(files);
                resolve(fileList);
            } else {
                reject();
            }
        };
        input.click();
    });
};

export const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result as string);
            } else {
                reject();
            }
        };
        reader.readAsDataURL(file);
    });
};
