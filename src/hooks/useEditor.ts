import { useQuill } from 'react-quilljs';

const useEditor = () => {
    const formats = ['header', 'bold', 'italic', 'underline', 'list', 'prediction', 'accepted', 'mention'];
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, false] }],
            ['clean'],
        ],
    };

    const { quill, quillRef } = useQuill({
        formats,
        modules,
        placeholder: 'Start writing something amazing...',
    });

    return {
        quill,
        quillRef,
    };
};

export default useEditor;
