import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import './style.css';

interface TextEditorProps {
  width?: string;
  height?: string;
  value: string;
  onChange?: (content: string) => void;
  readOnly?: boolean;
  isImageUploadEnabled?: boolean;
}

const defaultToolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'blockquote', 'link'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ align: [] }, { color: [] }, { background: [] }],
  ['clean'],
];

export default function TextEditor({
  width = '100%',
  height = '100%',
  value,
  onChange,
  readOnly = false,
  isImageUploadEnabled = false,
}: TextEditorProps) {
  const handleChange = (content: string) => {
    if (onChange) {
      onChange(content);
    }
  };

  const toolbarOptions = isImageUploadEnabled ? [...defaultToolbarOptions, ['image']] : defaultToolbarOptions;

  return (
    <ReactQuill
      style={{ width, height }}
      modules={{ toolbar: toolbarOptions }}
      theme={readOnly ? 'bubble' : 'snow'}
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
}
