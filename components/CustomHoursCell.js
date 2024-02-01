import { StyleSheet, Text, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  hourContainer: {
    alignItems: "center",
    marginTop: -5,
    backgroundColor: "#fff",
    height: "100%",
    overflow: "hidden",
  },

  timeText: {
    // fontFamily: Fonts.SemiBold,
    fontSize: 6,
    color: "#263682",
  },
  ampmText: {
    // fontFamily: Fonts.Regular,
    fontSize: 5,
    color: "#263682",
  },
});

const CustomHoursCell = (formattedHours) => {
  const [hours, ampm] = formattedHours.split(" ");
  return (
    <View style={styles.hourContainer}>
      <Text style={styles.timeText}>
        {hours + `${hours !== "" ? (ampm ? ".00" : "") : ""}`}
      </Text>
      <Text style={styles.ampmText}>{ampm}</Text>
    </View>
  );
};

export default CustomHoursCell;