import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';

export type ContentHeaderBreadcrumbsProps = { name: string; url?: string };

export interface ContentHeaderButtonConfig extends ButtonProps {
  textForButton?: string;
  link?: string;
  loading?: boolean;
}

export type ContentHeaderProps = {
  title: string;
  breadcrumbs?: ContentHeaderBreadcrumbsProps[];
  buttonsConfig?: ContentHeaderButtonConfig[];
  titleBadge?: ReactNode;
  right?: ReactNode;
};

export type BreadcrumbsProps = {
  breadcrumbs: ContentHeaderBreadcrumbsProps[];
  title: string;
};

export type ButtonsProps = {
  buttonsConfig: ContentHeaderButtonConfig[];
};
