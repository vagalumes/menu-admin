import {Component, OnInit} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {ImageCropperComponent} from "./image-cropper/image-cropper.component";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    MatIcon
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AvatarComponent
    }
  ]
})
export class AvatarComponent implements ControlValueAccessor {
  file: string = '';
  disabled: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  writeValue(_file: string): void {
    this.file = _file;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange = (fileUrl: string) => {
  };

  onTouched = () => {
  };

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openAvatarEditor(_file).subscribe(
        (result) => {
          if (result) {
            this.file = result;
            this.onChange(this.file);
          }
        }
      )
    }
  }

  openAvatarEditor(image: string): Observable<any> {
    const dialogRef = this.dialog.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }

  resetInput() {
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }
}
