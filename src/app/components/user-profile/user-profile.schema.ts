import { required, schema } from '@angular/forms/signals';
import { IUserProfile } from './user-profile.interface';

export const userProfileSchema = schema<IUserProfile>((path) => {
  required(path.firstName, { message: 'This field is required' });
  required(path.lastName, { message: 'This field is required' });
});
