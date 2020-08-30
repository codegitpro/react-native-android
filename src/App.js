

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { FormButton, PlusIcon } from "./components";

// import logo from "./assets/img/logo.svg";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.app}>
            <View style={styles.header}>
              {/* <Image
                accessibilityLabel="React logo"
                // source={logo}
                resizeMode="contain"
                style={styles.logo}
              /> */}
              <Text style={styles.title}>Welcome to MYLO</Text>
            </View>

            <FormButton
              title="Instant Fault Report"
              size="sm"
              backgroundColor="#FFFFFF"
              color="#585A5C"
              icon={<PlusIcon />}
              // onPress={this.handleReport}
            />
            <FormButton
              title="Login"
              size="sm"
              backgroundColor="#F7B124"
              color="white"
              // onPress={this.handleLogin}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    margin: "auto",
    width: 124,
    height: 42,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Arial Hebrew Scholar",
    fontSize: 30,
    marginTop: 100,
    marginBottom: 80,
    marginVertical: 20,
    textAlign: "center",
    color: "#737171",
  },
  text: {
    lineHeight: 20,
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default App;
