import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Layout } from './ToDoList';
const source = require('./assets/sounds/test1.mp3');

class AlarmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.sound = null;
    this.state = {
      isLoading: false,
      isPlaybackAllowed: false,
      muted: false,
      shouldPlay: false,
      isPlaying: false,
      volume: 1.0,
      rate: 1.0,
    };
    this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
    // // UNCOMMENT THIS TO TEST maxFileSize:
    // this.recordingSettings.android['maxFileSize'] = 12000;
  }

  componentDidMount() {
    this._loadNewPlaybackInstance(true);
  }

  _loadNewPlaybackInstance = async (playing) => {
    this.setState({
      isLoading: true,
    });
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    const initialStatus = {
      //        Play by default
      shouldPlay: true,
      //        Control the speed
      rate: 1.0,
      //        Correct the pitch
      shouldCorrectPitch: true,
      //        Control the Volume
      volume: 1.0,
      //        mute the Audio
      isMuted: false,
      isLooping: true
    };
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus
    );
    this.sound = sound;

    this.setState({
      isLoading: false,
    });
  }
  _onYesLaterPressed = () => {
    if (this.sound != null) {
      if (!this.state.isPlaying) {
        this.sound.pauseAsync();
        this.setState({ isPlaying: true })
      } else {
        this.sound.playAsync();
        this.setState({ isPlaying: false })
      }
    }
  };

  _onStopPressed = () => {
    if (this.sound != null) {
      this.sound.stopAsync();
    }
  };

  render() {
    return (
      <View style={{ height: Layout.window.height, backgroundColor: '#05C2CB', alignItems: 'center' }}>
        <View style={{
          marginTop: 100, padding: 25, width: Layout.window.width
        }}>
          <Image
            source={require('./assets/alarm_clock.png')}
            style={{ height: 270, width: 350 }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingLeft: 20,
              paddingRight: 5,
              marginBottom: 20
            }}
          >
            <Text>Did you start the .....?</Text>
            <View
              style={{
                flexDirection: 'row',
                width: 115,
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                style={styles.yesNoButton}
                onPress={() => this._onYesLaterPressed()}
              >
                <Text>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.yesNoButton}
                onPress={() => this._onYesLaterPressed()}
              >
                <Text>LATER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: Layout.window.width,
            height: 50,
            backgroundColor: '#FF0000',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => this._onStopPressed()}
        >
          <Text style={{ color: '#fff' }}>STOP ALARM</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

AlarmScreen.navigationOptions = {
  header: null
};

export default AlarmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: Layout.window.height,
    justifyContent: 'space-between'
    // position: 'absolute',
    // top: 0
  },
  yesNoButton: {
    backgroundColor: '#C4C4C4',
    marginLeft: 20,
    width: 55,
    height: 35,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
