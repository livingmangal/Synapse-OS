/**
 * Clean re-export bridge for modularized ABHA Health Profiles.
 * All profiles are organized into dedicated small modules under ./mockHealthProfiles/
 */

export * from './mockHealthProfiles/types';
export * from './mockHealthProfiles/index';
export { MOCK_HEALTH_PROFILES as default } from './mockHealthProfiles/index';
