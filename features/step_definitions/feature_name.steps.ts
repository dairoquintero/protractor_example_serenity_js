import { Ensure, equals } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import { Actors } from './screenplay';

Before(() => engage(new Actors()));