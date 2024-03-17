import { Injectable } from "@angular/core";
import { NostrUser } from "@domain/nostr-user";
import { ApiService } from "@shared/api-service/api.service";
import { Event } from 'nostr-tools';

@Injectable()
export class ProfileApi {

  constructor(
    private apiService: ApiService
  ) { }

  loadProfiles(npubs: string[]): Promise<Event[]> {
    const NostrEventKindMetadata = 0;
    return this.apiService.get([
      {
        kinds: [
          NostrEventKindMetadata
        ],
        authors: npubs.map(npub => (new NostrUser(npub)).publicKeyHex)
      }
    ])
  }
}
