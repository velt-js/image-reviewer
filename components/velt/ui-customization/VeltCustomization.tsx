import { useVeltClient, useVeltEventCallback, VeltButtonWireframe, VeltCommentDialogWireframe, VeltData, VeltIf, VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltCommentBubbleWf from './VeltCommentBubbleWf';
import VeltNotificationToolWF from './VeltNotificationToolWf';
import VeltCommentDialogWf from './VeltCommentDialogWf';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

const VeltCustomization = () => {  
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentDialogWf />
    </VeltWireframe>
  );
};

export default VeltCustomization; 