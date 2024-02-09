import React from "react";
import { View, StyleSheet,Dimensions, Text } from "react-native";
import Pdf from "react-native-pdf";

const PdfReader = () => {
  const pdfResource = {
    uri: "http://62.72.30.198:5025/uploads/book/1694837644176-book-summary.pdf",
    cache: true,
  };
  return (
    <View style={styles.container}>
    <Text>Electronic</Text>
      <Pdf
        trustAllCerts={false}
        source={pdfResource}
        style={styles.pdf}
        onLoadComplete={(numOfPage, filePath) => {
          console.log("num of pages", numOfPage);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    pdf:{
        flex:1,
        width:Dimensions.get("window").width,
       height:Dimensions.get("window").height,

    }
});

export default PdfReader;
