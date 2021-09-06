import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    public clear(): void {
        sessionStorage.clear();
    }
    public store(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

   public load(key: string): string {
        return sessionStorage.getItem(key);
    }
}
