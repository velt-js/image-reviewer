import { VeltButtonWireframe, VeltCommentDialogWireframe, VeltData, VeltIf } from '@veltdev/react';
import { ChevronDown } from 'lucide-react';

const VeltCommentDialogWf = () => {
  return (
    <VeltCommentDialogWireframe variant="sidebar">
      <VeltCommentDialogWireframe.Header>
        <VeltButtonWireframe id="expand-comment" type="button" className="cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">
              Totality Review
            </div>
            <ChevronDown size={20} className="text-gray-500" />
          </div>
        </VeltButtonWireframe>
      </VeltCommentDialogWireframe.Header>
      <VeltIf condition='{expandedComment} === {commentAnnotation.annotationId}'>
        <div className="flex flex-col gap-4 w-full">
          <VeltCommentDialogWireframe.Body />
          <VeltCommentDialogWireframe.Composer />
        </div>
      </VeltIf>
    </VeltCommentDialogWireframe>
  );
};

export default VeltCommentDialogWf; 