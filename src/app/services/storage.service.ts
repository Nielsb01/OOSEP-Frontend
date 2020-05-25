import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly userIdKey = 'user_id';

  public setUserId(userId: number) {
    localStorage.setItem(this.userIdKey, userId.toString());
  }

  public getUserId(): number {
    let userId = localStorage.getItem(this.userIdKey);

    if (isNaN(Number(userId))) {
      return -1;
    }

    return Number(localStorage.getItem(this.userIdKey));
  }
}
