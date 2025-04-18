import { useVeltClient, useVeltEventCallback, VeltButtonWireframe, VeltCommentDialogWireframe, VeltData, VeltIf, VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltCommentBubbleWf from './VeltCommentBubbleWf';
import VeltNotificationToolWF from './VeltNotificationToolWf';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

const VeltCustomization = () => {
  const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
  const { client } = useVeltClient();

  useEffect(() => {
    if (veltButtonClickEventData && client) {
      if (veltButtonClickEventData.buttonContext.clickedButtonId === 'expand-comment') {
        // client.setUiState({
        //   expandedComment: veltButtonClickEventData.commentAnnotation?.annotationId,
        // });
        if (veltButtonClickEventData.buttonContext.selections?.ungrouped['expand-comment']) {
          client.setUiState({
            expandedComment: veltButtonClickEventData.commentAnnotation?.annotationId,
          });
        } else {
          client.setUiState({
            expandedComment: null,
          });
        }
      }
    }
  }, [veltButtonClickEventData, client]);

  
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
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
    </VeltWireframe>
  );
};

export default VeltCustomization; 