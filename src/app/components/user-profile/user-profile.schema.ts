import {
  applyEach,
  max,
  min,
  pattern,
  required,
  schema,
  SchemaPathTree,
  validate,
} from '@angular/forms/signals';
import { IUserProfile, ProfileLink } from './user-profile.interface';

const MIN_YEAR = 1990;
const MAX_YEAR = new Date().getFullYear();
const MIN_LENGTH_PATTERN = /^\d{4}$/;

export const userProfileSchema = schema<IUserProfile>((rootPath) => {
  required(rootPath.firstName, { message: 'First name is required' });
  applyEach(rootPath.socialLinks, linksSchema);
});

const linksSchema = schema<ProfileLink>((control) => {
  required(control.url, { message: 'If added, the social link is required' });
  urlValidator(control.url);
  required(control.platform, {
    message: 'If added, the social link is required',
    when: ({ valueOf }) => Boolean(valueOf(control.url)),
  });
  min(control.year, MIN_YEAR, {
    message: `Year must be greater than ${MIN_YEAR}`,
  });
  max(control.year, MAX_YEAR, {
    message: `Year must be less than ${MAX_YEAR}`,
  });
  pattern(control.year, MIN_LENGTH_PATTERN, {
    message: `Year must be 4 digits`,
  });
});

function urlValidator(
  field: SchemaPathTree<string>,
  options?: { message?: string },
) {
  validate(field, ({ valueOf }) => {
    try {
      new URL(valueOf(field));
      return null;
    } catch {
      return {
        kind: 'url',
        message: options?.message || 'Please enter a valid URL',
      };
    }
  });
}
