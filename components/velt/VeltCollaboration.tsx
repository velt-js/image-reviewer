import { useVeltClient, useVeltEventCallback, VeltComments } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
import './velt.css';
import { useEffect } from 'react';

// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.
export const VeltCollaboration = () => {
  const { client } = useVeltClient();
  const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
 
  // [VELT] Listen for Velt button clicks and set the UI state
  useEffect(() => {
    if (veltButtonClickEventData && client) {
      console.log('veltButtonClickEventData', veltButtonClickEventData);
      if (veltButtonClickEventData.buttonContext.clickedButtonId === 'expand-comment') {
        client.setUiState({
          expandedComment: veltButtonClickEventData.commentAnnotation?.annotationId,
        });
      }
    }
  }, [veltButtonClickEventData, client]);

  return (
    <>
      <VeltInitializeUser />
      <VeltInitializeDocument />
      <VeltCustomization />
      <VeltComments textMode={false} />
    </>
  );
};
