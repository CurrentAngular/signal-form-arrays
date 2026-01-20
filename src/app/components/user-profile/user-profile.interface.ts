export interface ProfileLink {
  readonly url: string;
  readonly platform: string;
  readonly year: string;
}

export interface IUserProfile {
  readonly firstName: string;
  readonly lastName: string;
  readonly socialLinks: ProfileLink[];
}
