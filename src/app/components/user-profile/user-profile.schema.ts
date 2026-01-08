import {
  applyEach,
  required,
  schema,
  SchemaPathTree,
  validate,
} from '@angular/forms/signals';
import { IUserProfile } from './user-profile.interface';

export const userProfileSchema = schema<IUserProfile>((rootPath) => {
  applyEach(rootPath.socialLinks, linksSchema);
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

const linksSchema = schema<string>((control) => {
  required(control, { message: 'If added, the social link is required' });
  urlValidator(control);
});
