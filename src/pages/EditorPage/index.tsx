import useEditor from '@hooks/useEditor';

const EditPage = () => {
    const { quillRef } = useEditor();

    return (
        <div style={{ width: 500, height: 300 }}>
            <div ref={quillRef} />
        </div>
    );
};

export default EditPage;
