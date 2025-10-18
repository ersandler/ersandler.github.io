/**
 * Project Data
 * Contains all project information for the portfolio
 */

import { analyzingXgContent } from './projects/analyzing-xg';
import { simulatingLsgContent } from './projects/simulating-lsg';

export const projects = [
  {
    id: 'simulating-lsg',
    title: 'Simulating the Evolution of Meaning',
    shortDescription: 'Using neural networks to explore the Lewis signalling game as a model of the minimal conditions for the evolution of meaning.',
    image: '/images/ml.png',
    featured: true,
    tags: ['Machine Learning', 'Philosophy', 'Neural Networks', 'Game Theory'],
    github: null,
    demo: null,
    content: simulatingLsgContent
  },
  {
    id: 'nba-elo-ratings',
    title: 'NBA Elo Ratings',
    shortDescription: 'Implementing an Elo algorithm to determine the relative strengths of teams and players over time.',
    image: '/images/celtics.jpg',
    featured: false,
    tags: ['Python', 'Sports Analytics'],
    github: null,
    demo: null,
    longDescription: `
      An implementation of the Elo rating system applied to NBA basketball to track
      the relative strengths of teams and players throughout seasons.
    `
  },
  {
    id: 'ml-with-high-variance',
    title: 'Machine Learning with High Variance',
    shortDescription: 'Researching machine learning methods in cases with high variance in results, using Fantasy Premier League as a case study.',
    image: '/images/auba-laca.jpg',
    featured: false,
    tags: ['Machine Learning', 'Sports Analytics', 'Soccer'],
    github: null,
    demo: null,
    longDescription: `
      Research into machine learning approaches for high-variance prediction problems,
      using Fantasy Premier League data as a practical case study.
    `
  },
  {
    id: 'analyzing-xg',
    title: 'Analyzing xG',
    shortDescription: "A (slightly outdated) technical analysis of the efficacy and shortcomings of soccer's expected goals (xG) metric.",
    image: '/images/xg.png',
    featured: false,
    tags: ['Sports Analytics', 'Statistics', 'Soccer'],
    github: 'https://github.com/ersandler/analyzing-xg',
    demo: null,
    content: analyzingXgContent
  },
  {
    id: 'epidemic-intelligence',
    title: 'epidemic-intelligence',
    shortDescription: 'A BigQuery-driven Python package for processing and visualizing large scale spatio-temporal simulation data.',
    image: '/images/ei',
    featured: false,
    tags: ['Python', 'Data Visualization', 'BigQuery', 'Epidemiology'],
    github: null,
    demo: null,
    longDescription: `
      A comprehensive Python package designed for processing and visualizing large-scale
      spatio-temporal simulation data using BigQuery as the backend.
    `
  },
  {
    id: 'website',
    title: 'elijahsandler.com',
    shortDescription: 'A custom React/JS portfolio to practice my JavaScript and showcase my work.',
    image: '/images/website',
    featured: false,
    tags: ['Front End'],
    github: null,
    demo: null,
    longDescription: null
  }
];
