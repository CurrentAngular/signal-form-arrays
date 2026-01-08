import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { initialData } from './user-profile.model';
import { IUserProfile } from './user-profile.interface';
import { Field, form, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { userProfileSchema } from './user-profile.schema';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sfa-user-profile',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    Field,
    MatIconModule,
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
        socialLinks: [...currentModel.socialLinks, ''],
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

  onCancel(): void {
    //
  }
}
