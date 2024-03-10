import { Injectable } from '@angular/core';
import { NostrUser } from '@domain/nostr-user';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';
import { IProfile } from '@domain/profile.interface';
import { nip19 } from 'nostr-tools';
import { hexToBytes } from '@noble/ciphers/utils';
const nip49 = require('nostr-tools/nip49');

@Injectable({
  providedIn: 'root'
})
export class ProfileEncrypt {

  encryptAccount(profile: IProfile, pin?: string): IUnauthenticatedUser | null {
    const nostrSecret = profile.user.nostrSecret;
    const displayName = profile.display_name || profile.name;
    const picture = profile.picture || '/assets/default-profile.jpg';

    if (!nostrSecret || !displayName) {
      return null;
    }

    const ncryptsec = nip49.encrypt(
      hexToBytes(nip19.decode(nostrSecret).data.toString()), pin
    );

    return {
      picture,
      displayName,
      npub: profile.user.nostrPublic,
      nip05: profile.nip05,
      nip05valid: profile.nip05valid,
      ncryptsec
    };
  }

  decryptAccount(account: IUnauthenticatedUser, pin: string): NostrUser {
    const nostrSecret = nip19.nsecEncode(
      nip49.decrypt(account.ncryptsec, pin)
    );

    return new NostrUser(nostrSecret);
  }
}
