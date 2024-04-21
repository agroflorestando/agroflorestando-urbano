import { Injectable } from '@angular/core';
import { IProfile } from '../../domain/profile.interface';
import { ProfileConverter } from './profile.converter';
import { ProfileCache } from './profile.cache';
import { ProfileApi } from './profile.api';
import { Event } from 'nostr-tools';
import { DataLoadType } from '@domain/data-load.type';

@Injectable()
export class ProfileProxy {

  constructor(
    private profileApi: ProfileApi,
    private profileCache: ProfileCache,
    private profileConverter: ProfileConverter
  ) { }

  get(npubs: string): IProfile;
  get(npubs: string[]): IProfile[];
  get(npubs: string[] | string): IProfile | IProfile[];
  get(npubs: string[] | string): IProfile | IProfile[] {
    return this.profileCache.get(npubs);
  }

  cache(profiles: IProfile[]): void;
  cache(profiles: Event[]): void;
  cache(profiles: IProfile[] | Event[]): void;
  cache(profiles: IProfile[] | Event[]): void {
    this.profileCache.cache(profiles);
  }

  async load(npubs: string): Promise<IProfile>;
  async load(npubs: string[]): Promise<IProfile[]>;
  async load(npubs: string[] | string): Promise<IProfile | IProfile[]> {
    if (typeof npubs === 'string') {
      const indexedProfile = ProfileCache.profiles[npubs];
      if (!indexedProfile || indexedProfile.load === DataLoadType.LAZY_LOADED) {
        return this.loadProfile(npubs);
      }

      return Promise.resolve(indexedProfile);
    } else {
      return this.loadProfiles(npubs);
    }
  }

  loadFromPubKey(pubkey: string): Promise<IProfile> {
    return this.loadProfile(this.profileConverter.castPubkeyToNostrPublic(pubkey));
  }

  async loadProfiles(...npubss: string[][]): Promise<IProfile[]> {
    const npubs = [...new Set(npubss.flat(1))];

    const notLoaded = npubs.filter(npub => !this.profileCache.isEagerLoaded(npub))

    return this.forceProfileReload(notLoaded);
  }

  async loadProfile(npub: string): Promise<IProfile> {
    return this.loadProfiles([npub])
      .then(npubs => Promise.resolve(npubs[0]));
  }
  
  private async forceProfileReload(npubs: string[]): Promise<Array<IProfile>> {
    const events = await this.profileApi.loadProfiles(npubs);
    this.profileCache.cache(events);
    return Promise.resolve(npubs.map(npub => this.profileCache.get(npub)));
  }
}
