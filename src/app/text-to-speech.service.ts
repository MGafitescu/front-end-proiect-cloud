import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private client;
  private ttsUrl = "https://texttospeech.googleapis.com/v1/text:synthesize";

  constructor(private http: HttpClient) {

  }

  async getSpeech(text: string, lang: string): Promise<any> {
    return this.http.post<any>(this.ttsUrl,
      {
        "input": { "text": text },
        "voice": { "languageCode": lang },
        "audioConfig": { "audioEncoding": "MP3" }
      },
      httpOptions).toPromise();
  }
}
