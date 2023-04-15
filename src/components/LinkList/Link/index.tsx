import React from 'react';
import { LinkProps } from '../../../types/LinkListComponent';

export const LinkComponent: React.FC<LinkProps> = ({ description, url }) => {
  return (
    <div className='grid m-1 px-8 py-4 bg-brand-coal text-brand-biege rounded-lg'>
      <span className='font-bold'>{description}</span>
      <p className='text-brand-yellow'>{url}</p>
    </div>
  );
};
