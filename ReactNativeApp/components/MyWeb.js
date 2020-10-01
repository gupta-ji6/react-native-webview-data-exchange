import React, {Fragment, useRef, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const MyWeb = () => {
  const webViewRef = useRef(null);
  const [msg, setMsg] = useState('');

  return (
    <Fragment>
      <WebView
        source={{uri: 'https://rn-app-data-exchange.netlify.app/'}}
        style={{marginBottom: 40}}
        ref={webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        sharedCookiesEnabled={true}
        originWhitelist={['*']}
        scalesPageToFit={true}
        startInLoadingState={true}
        mixedContentMode={'always'}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        allowsBackForwardNavigationGestures={true}
        allowsLinkPreview={false}
        renderLoading={() => <ActivityIndicator color="#E56596" size="large" />}
        onMessage={(event) => {
          const {data} = event.nativeEvent;
          console.log(data);
          setMsg(data);
          const clientResponseCode = `
      window.postMessage(${JSON.stringify(data)}, "*");
      true;
    `;
          if (webViewRef.current) {
            webViewRef.current.injectJavaScript(clientResponseCode);
          }
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
        }}>
        <Text>{msg}</Text>
      </View>
    </Fragment>
  );
};

export {MyWeb};
