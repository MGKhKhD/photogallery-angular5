import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { GalleryImage} from '../models/galleyimage.model';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {

  private uid: string;

  constructor(private afAuth: AngularFireAuth,
  private db: AngularFireDatabase) {
    // authState is observable and we can subscribe to
        this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
        // if authentication proceeds the user id of
        // image is equal to the user id of firebase
      }
    });
  }

  getImages() {
    return this.db.list('uploads').valueChanges();
  }

  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then(snapshot => snapshot.val());
  }

}
