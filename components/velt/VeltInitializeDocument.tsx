import { useCommentAnnotations, useSetDocuments, useSetLocation, useVeltClient } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
  
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'payroll-review',
      metadata: {
        documentName: 'Payroll: Jan 1-15, 2022'
      }
    },
  ], []);

  // Initialize the document. Document == payroll instance.
  useEffect(() => {
    if (setDocuments && document) {
      console.log('setting documents', document);
      setDocuments(document);
    }
  }, [setDocuments, document]);

  // useSetLocation({
  //   id: "floorplan",
  //   locationName: "Floor plan"
  // });

  const commentAnnotations = useCommentAnnotations(
    "payroll-review",
    {
        "id": "floorplan",
        "locationName": "Floor plan"
    }
  );
  useEffect(() => {
    if (commentAnnotations) {
      console.log('commentAnnotations', commentAnnotations);
    }
  }, [commentAnnotations]);

  return null;
}
