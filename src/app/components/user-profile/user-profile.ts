import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { initialData, initialProfileLink } from './user-profile.model';
import { IUserProfile } from './user-profile.interface';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { userProfileSchema } from './user-profile.schema';
import { MatIconModule } from '@angular/material/icon';
import { CustomInput } from '../custom-input/custom-input';

@Component({
  selector: 'sfa-user-profile',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormField,
    MatIconModule,
    CustomInput,
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfile {
  readonly model = signal<IUserProfile>(initialData);
  readonly form = form(this.model, userProfileSchema);

  addSocialLink(): void {
    this.model.update((currentModel) => {
      return {
        ...currentModel,
        socialLinks: [...currentModel.socialLinks, { ...initialProfileLink }],
      };
    });
  }

  removeSocialLink(index: number): void {
    this.model.update((currentModel) => {
      return {
        ...currentModel,
        socialLinks: currentModel.socialLinks.filter((_, i) => i !== index),
      };
    });
  }

  onSubmit(): void {
    submit(this.form, async (form) => {
      const values = form().value();
      console.log(values);

      form().reset();
      this.model.set(initialData);
    });
  }

  onFocus(): void {
    // this.form.lastName().focusBoundControl();

    // does not work on a custom element
    this.form.email().focusBoundControl();
  }
}
