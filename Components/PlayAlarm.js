import PushNotification from 'react-native-push-notification';
const showNotification = (title, message) => {
  console.log('OP');
  PushNotification.localNotification({
    title,
    message,
  });
};

const handleScheduleNotification = (title, message) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleCancel, handleScheduleNotification};
