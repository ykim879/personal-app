import React, { useState } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import { ArticleData } from "./ArticleData";
import DropDown from "../dropdown/DropDown"
import Grid from "../grid/Grid";

const ArticleScreen = () => {
    const [category, setCategory] = useState("ALL");
    return (
        <View style={styles.container}>
            <DropDown/>
            <Grid data= {ArticleData[category]} cols = {1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})

export default ArticleScreen;