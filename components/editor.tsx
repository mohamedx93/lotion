"use client";

import "@blocknote/core/style.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useEdgeStore } from '@/lib/edgestore'
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
    ? (JSON.parse(initialContent) as PartialBlock[])
    : undefined,
    onChanges: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlock, null, 2));
    },
  });

  const { resolvedTheme } = useTheme();
  const {edgestore} = useEdgeStore();
  const handleUpload = async (file:File)=>{
    const response = await edgestore.publicFiles.upload({file});
    return response.url;
  }
  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        editable
      />
    </div>
  );
};
