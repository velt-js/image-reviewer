import { VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentDialogWf from './VeltCommentDialogWf';
import VeltCommentToolWf from './VeltCommentToolWf';
const VeltCustomization = () => {  
  return (
    <VeltWireframe>
      {/* Sidebar button customization */}
      <VeltSidebarButtonWf />
      {/* Comment tool customization */}
      <VeltCommentToolWf />
      {/* Comment dialog customization */}
      <VeltCommentDialogWf />
    </VeltWireframe>
  );
};

export default VeltCustomization; 