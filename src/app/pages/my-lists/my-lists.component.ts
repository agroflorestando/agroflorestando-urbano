import { Component } from '@angular/core';

@Component({
  selector: 'agro-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss'
})
export class MyListsComponent {
  lists: Array<{
    icon: string;
    title: string;
    author: string;
    description: string;
    public: boolean;
    notifications?: number;
  }> = [
    {
      icon: '⭐',
      title: 'Favoritas',
      author: 'you',
      description: 'minhas plantas favoritas',
      public: false
    },

    {
      icon: '🏡',
      title: 'Plantas pessoais',
      author: 'you',
      description: 'plantas aqui de casa',
      public: false
    },

    {
      icon: '🍎',
      title: 'Frutíferas perto de casa',
      author: 'maquinhos',
      description: 'plantas aqui de casa',
      public: true,
      notifications: 5
    },

    {
      icon: '🌺',
      title: 'Flores da primavera',
      author: 'joaozinho',
      description: 'flores da região que irão abrir na primavera',
      public: true,
      notifications: 15
    },

    {
      icon: '🌻',
      title: 'Flores de verão',
      author: 'ananias',
      description: 'flores que abrem no verão',
      public: true,
      notifications: 1
    },

    {
      icon: '🐝',
      title: 'Escolhidas para adubar',
      author: 'you',
      description: 'plantas que escolhi para depositar o abudo que produzo',
      public: false
    },

    {
      icon: '🌳',
      title: 'Árvores cultivadas por pedrinho',
      author: 'you',
      description: 'árvores cultivadas por pedrinho',
      public: true,
      notifications: 3
    }
  ];
}
