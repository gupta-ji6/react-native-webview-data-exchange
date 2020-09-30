import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://rn-app-data-exchange.netlify.app/'}}
        // style={{marginTop: 20}}
        ref={(webView) => (this.webView = webView)}
        onMessage={(event) => {
          const {data} = event.nativeEvent;
          const clientResponseCode = `
      window.postMessage(${JSON.stringify(data)}, "*");
      true;
    `;
          if (this.webView) {
            this.webView.injectJavaScript(clientResponseCode);
          }
        }}
      />
    );
  }
}
