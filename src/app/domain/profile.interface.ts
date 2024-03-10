import { SafeHtml } from '@angular/platform-browser';
import { NostrUser } from '@domain/nostr-user';
import { DataLoadType } from './data-load.type';

export interface IProfile {
  npub: string;
  user: NostrUser;
  name?: string;
  display_name?: string;
  picture?: string;
  htmlAbout?: SafeHtml;
  about?: string;
  banner?: string;
  lud16?: string;
  website?: string;
  nip05?: string;
  created_at?: number;
  nip05valid?: boolean;
  load: DataLoadType;
}
