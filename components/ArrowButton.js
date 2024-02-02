import PropTypes from "prop-types";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Images from "./../utilities/images";

import { Spacer } from "./Spacer";

export function ArrowButton({
  style,
  textStyle,
  title,
  pending,
  disable,
  ...rest
}) {
  return pending ? (
    <TouchableOpacity
      disabled={disable}
      style={[styles.button, { borderColor: "#212121" }, style]}
      {...rest}
    >
      <ActivityIndicator color={"#275AFF"} />
      <Text
        style={[
          { color: "#626262", fontSize: 16, fontWeight: "700" },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.5}
      underlayColor="#0E86D4"
      style={[styles.button, { borderColor: "#212121" }, style]}
      {...rest}
    >
      <Text
        style={[
          { color: "#626262", fontSize: 16, fontWeight: "700" },
          ,
          textStyle,
        ]}
      >
        {title}
      </Text>
      <Spacer horizontal space={12} />
      <Image
        source={"../images/arrowtopright.svg"}
        style={styles.arrowIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

ArrowButton.propTypes = {
  style: PropTypes.object || PropTypes.array,
  textStyle: PropTypes.object || PropTypes.array,
  title: PropTypes.string.isRequired,
};

ArrowButton.defaultProps = {
  style: null,
  textStyle: null,
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#263682",
    width: "50%",
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
  },
  arrowIcon: {
    height: 20,
    width: 20,
    tintColor: "#58C2E8",
  },
});
