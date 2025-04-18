import { VeltComments, VeltCommentsSidebar } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
import './velt.css';
import { useEffect } from 'react';
// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.

export const VeltCollaboration = () => {
  return (
    <>
      <VeltInitializeUser />
      <VeltCommentsSidebar pageMode={true} shadowDom={false} />
      <VeltInitializeDocument />
      <VeltCustomization />
    </>
  );
};
