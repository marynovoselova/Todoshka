import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof import('@shared/assets/icons');
}
