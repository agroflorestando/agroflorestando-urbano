import { Injectable } from '@angular/core';
import { DataLoadType } from '@domain/data-load.type';
import { NostrUser } from '@domain/nostr-user';
import { IProfile } from '@domain/profile.interface';
import { Event, nip19 } from 'nostr-tools';

@Injectable()
export class ProfileConverter {

  castPubkeyToNostrPublic(pubkey: string): string {
    return nip19.npubEncode(pubkey);
  }

  getMetadataFromNostrPublic(npub: string): IProfile {
    return { npub, user: new NostrUser(npub), load: DataLoadType.LAZY_LOADED };
  }

  convertEventToProfile(profile: Event, mergeWith?: IProfile): IProfile {
    let metadata: any;
    try {
      metadata = JSON.parse(profile.content);
    } catch (e) {
      metadata = { about: profile.content };
    }
    
    const npub = nip19.npubEncode(profile.pubkey);
    let newProfile: IProfile;
    if (mergeWith) {
      newProfile = mergeWith;
      newProfile.npub = npub;
      newProfile.user = new NostrUser(npub);
      newProfile.load = DataLoadType.EAGER_LOADED;
      Object.assign(newProfile, metadata);
    } else {
      newProfile = {
        npub: npub,
        user: new NostrUser(npub),
        load: DataLoadType.EAGER_LOADED,
        ...metadata
      }
    }

    return newProfile;
  }
}
