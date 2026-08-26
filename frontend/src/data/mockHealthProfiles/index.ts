import { MockHealthProfile, VisualAnalyticsData } from './types';
import { mausamKarProfile } from './mausamKar';
import { rachitTiwariProfile } from './rachitTiwari';
import { mangalSinghProfile } from './mangalSingh';
import { surabhiProfile } from './surabhi';
import { shaikhWarsiProfile } from './shaikhWarsi';
import { jiyaJaiswalProfile } from './jiyaJaiswal';

export * from './types';
export {
  mausamKarProfile,
  rachitTiwariProfile,
  mangalSinghProfile,
  surabhiProfile,
  shaikhWarsiProfile,
  jiyaJaiswalProfile
};

/**
 * Verified ABHA Team Member Health Profiles
 * Filtered to exclusively maintain verified ABHA citizen records.
 */
export const MOCK_HEALTH_PROFILES: MockHealthProfile[] = [
  mausamKarProfile,
  rachitTiwariProfile,
  mangalSinghProfile,
  surabhiProfile,
  shaikhWarsiProfile,
  jiyaJaiswalProfile
];

export const DEFAULT_HEALTH_PROFILE: MockHealthProfile = mausamKarProfile;

export function getHealthProfileById(profileId: string): MockHealthProfile {
  return MOCK_HEALTH_PROFILES.find(p => p.profileId === profileId) || DEFAULT_HEALTH_PROFILE;
}
