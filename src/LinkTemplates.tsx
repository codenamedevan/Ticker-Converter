import React from 'react';
import { LinkTemplate } from './types';

const WhalesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l2.6 5.7a10.4 10.4 0 01-1.7 1.7L5 13m11.2-4.5A10.5 10.5 0 005.5 18.8M18.5 5.5a10.5 10.5 0 01-13 13" />
    </svg>
);

const XIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
    </svg>
);

const PerplexityIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TradingViewIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const FinvizIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002-2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const StockTwitsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
);

const YahooFinanceIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const LINK_TEMPLATES: LinkTemplate[] = [
  {
    name: 'Unusual Whales - Ticker Overview',
    url: 'https://unusualwhales.com/stock/TICKER',
    icon: <WhalesIcon className="w-5 h-5 text-cyan-400" />,
  },
  {
    name: 'Unusual Whales - Interval Flow',
    url: 'https://unusualwhales.com/interval-flow?interval=10&limit=50&ticker_symbol=TICKER&min_ask_perc=0.7&min_premium=100000',
    icon: <WhalesIcon className="w-5 h-5 text-cyan-400" />,
  },
  {
    name: 'X - Ticker Search',
    url: 'https://x.com/search?q=%24TICKER&src=typed_query',
    icon: <XIcon className="w-5 h-5 text-white" />,
  },
  {
    name: 'Perplexity Finance',
    url: 'https://www.perplexity.ai/finance/TICKER',
    icon: <PerplexityIcon className="w-5 h-5 text-emerald-400" />,
  },
  {
    name: 'Yahoo Finance',
    url: 'https://finance.yahoo.com/quote/TICKER',
    icon: <YahooFinanceIcon className="w-5 h-5 text-purple-400" />,
  },
  {
    name: 'TradingView - Chart',
    url: 'https://www.tradingview.com/chart/?symbol=TICKER',
    icon: <TradingViewIcon className="w-5 h-5 text-blue-400" />,
  },
  {
    name: 'Finviz - Overview',
    url: 'https://finviz.com/quote.ashx?t=TICKER',
    icon: <FinvizIcon className="w-5 h-5 text-orange-400" />,
  },
  {
    name: 'StockTwits - Ticker Stream',
    url: 'https://stocktwits.com/symbol/TICKER',
    icon: <StockTwitsIcon className="w-5 h-5 text-sky-400" />,
  },
];
