import { IUserProfile, ProfileLink } from './user-profile.interface';

export const initialData: IUserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: [],
  email: '',
};

export const initialProfileLink: ProfileLink = {
  url: '',
  platform: '',
  year: '',
};
