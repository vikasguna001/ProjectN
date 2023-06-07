import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public readonly DIOR_ENDPOINT: string =
    ' http://localhost:3000/parfum?url=https%3A%2F%2Fwww.idealo.de%2Fpreisvergleich%2FOffersOfProduct%2F6086249_-sauvage-eau-de-parfum-100ml-dior.html';
  // public readonly DIOR_ENDPOINT: string = ' http://localhost:3000/parfum?url=https%3A%2F%2Fwww.idealo.de%2Fpreisvergleich%2FOffersOfProduct%2F5226658_-bleu-de-chanel-eau-de-parfum-chanel.html';
  public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/';
  public static TitleOfSite: string =
    ' Making API calls the Right Way by Monica';
}
