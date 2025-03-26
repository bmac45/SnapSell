import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const App = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    if (!hasPermission) requestPermission();
  }, [hasPermission, requestPermission]);

  console.log('Device:', device);

  if (!hasPermission) return <Text style={styles.text}>Requesting permission...</Text>;
  if (!device) return <Text style={styles.text}>No camera device found</Text>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} device={device} isActive={true} />
      <Text style={styles.text}>Camera active</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
  text: { fontSize: 18, color: '#000' },
});

export default App;