declare module 'react-chrono' {
  import { ReactNode } from 'react';

  export interface TimelineItem {
    title: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string;
    media?: {
      type: 'IMAGE' | 'VIDEO';
      source: {
        url: string;
      };
    };
  }

  export interface ChronoProps {
    items: TimelineItem[];
    mode?: 'VERTICAL' | 'HORIZONTAL' | 'VERTICAL_ALTERNATING';
    theme?: {
      primary?: string;
      secondary?: string;
      cardBgColor?: string;
      cardForeColor?: string;
      titleColor?: string;
      titleColorActive?: string;
    };
    hideControls?: boolean;
    disableClickOnCircle?: boolean;
    disableAutoScrollOnClick?: boolean;
    scrollable?: boolean;
    scrollable?: {
      scrollbar?: boolean;
    };
    enableOutline?: boolean;
    enableBreakPoint?: boolean;
    breakPoint?: number;
    cardHeight?: number;
    cardWidth?: number;
    cardLess?: boolean;
    flipLayout?: boolean;
    useReadMore?: boolean;
    readMoreText?: string;
    buttonTexts?: {
      first: string;
      last: string;
      next: string;
      previous: string;
    };
    classNames?: {
      card?: string;
      cardMedia?: string;
      cardSubTitle?: string;
      cardText?: string;
      cardTitle?: string;
      controls?: string;
      title?: string;
    };
    fontSizes?: {
      cardSubtitle?: string;
      cardText?: string;
      cardTitle?: string;
      title?: string;
    };
    lineWidth?: number;
    showAllCardsHorizontal?: boolean;
    slideShow?: boolean;
    slideItemDuration?: number;
    slideShowType?: 'reveal' | 'slide_in' | 'slide_from_sides';
    textOverlay?: boolean;
    timelinePointDimension?: number;
    timelinePointShape?: 'circle' | 'square' | 'diamond';
    titleDateFormat?: string;
    toolbarPosition?: 'top' | 'bottom';
    allowDynamicUpdate?: boolean;
    borderLessCards?: boolean;
    cardPositionHorizontal?: 'TOP' | 'BOTTOM';
    cardPositionVertical?: 'LEFT' | 'RIGHT';
    children?: ReactNode;
  }

  export const Chrono: React.FC<ChronoProps>;
} 