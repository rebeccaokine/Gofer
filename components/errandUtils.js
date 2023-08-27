import { firebase } from '../firebaseConfig';

export const BookErrand = async (errand, navigation) => {
  try {
    const userUid = firebase.auth().currentUser.uid;

    await firebase
      .firestore()
      .collection('users')
      .doc(userUid)
      .collection('upcomingErrands')
      .add({
        errandId: errand.id,
        category: errand.category,
        title: errand.title,
        location: errand.location,
        price: errand.price,
        dateTime: errand.dateTime,
      });

    navigation.navigate('BookingConfirmation');
  } catch (error) {
    console.error('Error booking errand:', error);
  }
};
