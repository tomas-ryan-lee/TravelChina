import { Injectable } from '@angular/core';
import { Guide } from '../interfaces/guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor() { }

  sections: Guide[] = [
    {
      "title": "Coutumes Locales",
      "content": [
        "Saluez les gens en disant 'Nǐ hǎo' (你好).",
        "Il est impoli de pointer quelqu'un du doigt.",
        "Les pourboires ne sont pas courants en Chine."
      ]
    },
    {
      "title": "Phrases de Survie",
      "content": [
        { "phrase": "Bonjour", "translation": "Nǐ hǎo (你好)" },
        { "phrase": "Merci", "translation": "Xièxiè (谢谢)" },
        { "phrase": "Où sont les toilettes ?", "translation": "Cèsuǒ zài nǎlǐ? (厕所在哪里？)" }
      ]
    },
    {
      "title": "Conseils de Sécurité",
      "content": [
        "Évitez de montrer des signes de richesse en public.",
        "Gardez toujours une copie de vos documents importants.",
        "Utilisez uniquement des taxis officiels."
      ]
    }
  ];
}