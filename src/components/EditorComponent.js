

import { useEditor, EditorContent } from '@tiptap/react';

import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';



const extenstions = [Document, Paragraph, Text, Bold, Heading.configure({levels: [1, 2, 3]})];

export default function EditorComponent() {

        //const saveTimeout = useRef(null);
        //const [saving, setSaving] = useState(false);


        const editor = useEditor({

                extensions: extenstions,

                content: "<p>Start writing ...</p>",

                editorProps: {
                        attributes: {
                                class: 'outline-none h-full'
                        }
                }

                /* Uncomment when saving is added
                onUpdate: async ({ editor }) => {
                        const content = editor.getHTML();
                        if (saveTimeout.current) clearTimeout(saveTimeout.current);
                        saveTimeout.current = setTimeout(() => {
                                updateNote(noteId, {content: content});
                                setSaving(false);
                        }, 2000)
                        setSaving(true);
                },
                */
        }/*, [noteId] to update when noteId changes*/)

        /*
        Editor has no styling needs to be added
        */


        return (

                <div className="h-full w-full flex flex-col">
                        
                        <div className="h-12 flex flex-row">

                                <div className=''>

                                        

                                </div>

                        </div>

                        <div className="flex-1 w-full">

                                <EditorContent editor={editor} className='h-full p-6' />

                        </div>

                </div>

        )

}