import React from 'react';
import { LinkProps } from '../../../types/LinkListComponent';

export const LinkComponent: React.FC<LinkProps> = ({ description, url }) => {
  return (
    <div key={url}>
      <div>
        <span>{description}</span>
        <span>{url}</span>
      </div>
    </div>
  );
};
