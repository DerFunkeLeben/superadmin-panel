import { Voc } from '../navbar/constants';

export type BreadCrumb = { name: string; url?: string };

export type BreadCrumbs = Record<keyof typeof Voc, BreadCrumb[]>;
