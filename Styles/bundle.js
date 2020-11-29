import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const mainPurple = '#839AFF';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const textSize = 90;

export const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opening_page: {
    flex: 1,
    margin: 0,
    padding: 0,
  },

  opening_page_selections: {
    width: 210,
    height: 40,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: mainPurple,
    borderRadius: 100,
  },
  opening_page_selections_text: {
    fontSize: 21,
    color: mainPurple,
    textAlign: 'center',
  },

  question_mark: {
    height: 40,
    width: 40,
    backgroundColor: 'black',
    marginLeft: 52,
    marginTop: 40,
    backgroundColor: mainPurple,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  question_mark_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    position: 'absolute',
    left: 14,
  },
  question_mark_text_hide: {
    color: 'white',
    textAlign: 'center',
    width: 300,
    fontSize: 18,
    position: 'absolute',
    left: 10,
  },

  navigationContainer: {
    width: windowWidth,
    height: 65,
    position: 'absolute',
    bottom: 0,
  },

  navigationAlarms: {
    position: 'absolute',
    backgroundColor: mainPurple,
    left: 0,
    width: (windowWidth - 150) / 2,
    height: 65,
    bottom: 0,
    borderTopRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navigationSettings: {
    position: 'absolute',
    right: 0,
    backgroundColor: mainPurple,
    width: (windowWidth - 150) / 2,
    height: 65,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
  },

  floatingActionButton: {
    position: 'absolute',
    borderRadius: 100,
    left: windowWidth / 2,
    transform: [{translateX: -30}],
    width: 60,
    height: 60,
  },
  floatingActionButton_icon: {
    fontSize: 40,
    color: 'white',
    marginTop: -5,
  },
  navigationItem: {
    width: 60,
    height: 60,
  },

  alarmsPageContainer: {
    flex: 1,
    marginBottom: 90,
  },

  upcomingAlarmsContainer: {
    width: windowWidth,
    height: 70,
    paddingHorizontal: 65,
  },

  horizontalSeperater: {
    width: windowWidth,
    backgroundColor: mainPurple,
    height: 4,
    position: 'absolute',
    bottom: 0,
  },
  upcomingAlarmsText: {
    marginTop: 5,
    opacity: 0.5,
    fontSize: 12,
    fontFamily: 'MavenPro-Regular',
  },
  upcomingAlarmsClock: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 15,
    fontFamily: 'NotoSansSC-Bold',
  },
  listAlarmsContainer: {
    flex: 1,
    marginTop: 20,
    width: windowWidth,
    paddingHorizontal: 25,
  },
  alarmContainer: {
    width: windowWidth - 50,
    height: 70,

    marginTop: 40,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  alarmClock: {
    color: mainPurple,
    fontSize: 25,
    fontFamily: 'NotoSansSC-Thin',
  },
  setHour: {
    width: 100,
    height: textSize,
    overflow: 'hidden',
  },
  setHour_text: {
    width: 100,
    height: textSize,
    fontSize: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'NotoSans-Regular',
  },
});
