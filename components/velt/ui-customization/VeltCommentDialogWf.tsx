import { VeltButtonWireframe, VeltCommentDialogWireframe, VeltIf } from '@veltdev/react';
import { ChevronDown } from 'lucide-react';

const VeltCommentDialogWf = () => {
  return (
    <VeltCommentDialogWireframe>
      <VeltCommentDialogWireframe.Header>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">
            Totality Review
          </div>
          <VeltButtonWireframe id="expand-comment" type="button-toggle" className="cursor-pointer">
            <ChevronDown size={20} className="text-gray-500" />
          </VeltButtonWireframe>
        </div>
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