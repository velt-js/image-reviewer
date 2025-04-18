import { useSetDocuments } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the image review page is loaded.
export default function VeltInitializeDocument() {
  
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'image-review',
      metadata: {
        documentName: 'Image Review'
      }
    },
  ], []);

  // Initialize the document. Document == image.
  useEffect(() => {
    if (setDocuments && document) {
      console.log('setting documents', document);
      setDocuments(document);
    }
  }, [setDocuments, document]);

  return null;
}
