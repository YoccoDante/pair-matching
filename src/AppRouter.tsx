import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'wouter';
import LoaderProvider from './components/loaders';
import { BottlesProvider } from './contexts/BottleContext';
import { PermutationsProvider } from './contexts/PermutationsContext';

const BottlesGame = lazy(() => import('./conent/games/bottles/BottleGame'))
const BottlesLevel = lazy(() => import('./conent/games/bottles/BottleLevel'));
const PermutationsLevel = lazy(() => import('./conent/games/permutations/PermutationsLevel'))
const PermutationsGame = lazy(() => import('./conent/games/permutations/PermutationsGame'));
const HomePage = lazy(() => import('./conent/pages/HomePage'));


function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoaderProvider/>}>
        <Route path="/" component={HomePage} />
        <BottlesProvider>
          <Route path="/bottles" component={BottlesGame}/>
          <Route path="/bottles/:level" component={BottlesLevel} />
        </BottlesProvider>
        <PermutationsProvider>
          <Route path="/permutations" component={PermutationsGame} />
          <Route path="/permutations/:level" component={PermutationsLevel} />
        </PermutationsProvider>
      </Suspense>
    </Router>
  );
}

export default AppRouter;