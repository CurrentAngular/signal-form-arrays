import { IUserProfile, ProfileLink } from './user-profile.interface';

export const initialData: IUserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: [],
};

export const initialProfileLink: ProfileLink = {
  url: '',
  platform: '',
  year: '',
};
