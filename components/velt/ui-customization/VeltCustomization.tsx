import { VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentDialogWf from './VeltCommentDialogWf';

const VeltCustomization = () => {  
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentDialogWf />
    </VeltWireframe>
  );
};

export default VeltCustomization; 